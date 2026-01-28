'use client';

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow
} from "@/components/ui/table";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { DashboardData } from "@/lib/types";
import { Calendar, Users } from "lucide-react";
import { FormattedDate } from "@/components/formatted-date";

export function DataView({ data }: { data: DashboardData }) {
    return (
        <div className="space-y-6">
            {/* Calendar Events Section */}
            <Card>
                <CardHeader>
                    <div className="flex items-center gap-2">
                        <Calendar className="w-5 h-5 text-electric-gold" />
                        <CardTitle>Upcoming Meetings</CardTitle>
                    </div>
                    <CardDescription>Scheduled consultations and site inspections</CardDescription>
                </CardHeader>
                <CardContent>
                    {!data?.events || data.events.length === 0 ? (
                        <div className="text-center py-8 text-muted-foreground">No upcoming events found.</div>
                    ) : (
                        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                            {data.events.map((event, i) => (
                                <div key={i} className="flex flex-col p-4 rounded-lg bg-white border border-l-4 border-l-electric-gold shadow-sm">
                                    <span className="font-medium text-deep-navy">{event.summary}</span>
                                    <div className="text-sm text-steel-grey/80 mt-2 space-y-1">
                                        <p>Start: <FormattedDate date={event.start.dateTime} options={{ dateStyle: 'medium', timeStyle: 'short' }} /></p>
                                        <p>End: <FormattedDate date={event.end.dateTime} options={{ timeStyle: 'short' }} /></p>
                                        {event.location && <p className="truncate">📍 {event.location}</p>}
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </CardContent>
            </Card>

            {/* Google Sheets Queries Section */}
            <Card>
                <CardHeader>
                    <div className="flex items-center gap-2">
                        <Users className="w-5 h-5 text-electric-gold" />
                        <CardTitle>Recent Client Queries</CardTitle>
                    </div>
                    <CardDescription>Latest entries from the inquiry database</CardDescription>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Client Name</TableHead>
                                <TableHead>Email</TableHead>
                                <TableHead>Inquiry</TableHead>
                                <TableHead>Status</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {!data?.queries || data.queries.length === 0 ? (
                                <TableRow>
                                    <TableCell colSpan={4} className="text-center py-8">No queries found.</TableCell>
                                </TableRow>
                            ) : (
                                data.queries.map((row, i) => (
                                    <TableRow key={i}>
                                        <TableCell className="font-medium">{String(row['Name'] || '-')}</TableCell>
                                        <TableCell>{String(row['Email'] || '-')}</TableCell>
                                        <TableCell className="max-w-[300px] truncate" title={String(row['Query'])}>
                                            {String(row['Query'] || '-')}
                                        </TableCell>
                                        <TableCell>
                                            <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${String(row['Appointment Status']).toLowerCase().includes('scheduled')
                                                ? 'bg-success/10 text-success'
                                                : 'bg-steel-grey/10 text-steel-grey'
                                                }`}>
                                                {String(row['Appointment Status'] || 'New')}
                                            </span>
                                        </TableCell>
                                    </TableRow>
                                ))
                            )}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </div>
    );
}
