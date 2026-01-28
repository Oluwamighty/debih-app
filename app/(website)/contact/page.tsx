'use client';

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Reveal } from "@/components/reveal";
import { Loader2, CheckCircle, AlertCircle } from "lucide-react";

export default function ContactPage() {
    const [isLoading, setIsLoading] = useState(false);
    const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setIsLoading(true);
        setStatus("idle");

        const formData = new FormData(e.currentTarget);
        const data = {
            name: formData.get("name"),
            email: formData.get("email"),
            subject: formData.get("subject"),
            message: formData.get("message"),
        };

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                setStatus("success");
                (e.target as HTMLFormElement).reset();
            } else {
                setStatus("error");
            }
        } catch {
            setStatus("error");
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <div className="container mx-auto px-6 py-12">
            <div className="max-w-2xl mx-auto">
                <Reveal>
                    <h1 className="font-display text-4xl text-deep-navy mb-6 text-center">Contact Us</h1>
                </Reveal>
                <Reveal delay={0.1}>
                    <p className="text-center text-steel-grey/80 mb-10">
                        Have a question or need a quote? Reach out to our team.
                    </p>
                </Reveal>

                <Reveal delay={0.2} width="100%">
                    <Card>
                        <CardHeader>
                            <CardTitle>Send us a message</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium">Name</label>
                                        <Input name="name" placeholder="Your name" required disabled={isLoading} />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium">Email</label>
                                        <Input name="email" type="email" placeholder="john@example.com" required disabled={isLoading} />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium">Subject</label>
                                    <Input name="subject" placeholder="Inquiry about..." required disabled={isLoading} />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium">Message</label>
                                    <textarea
                                        name="message"
                                        className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 border-steel-grey/20 focus-visible:border-electric-gold focus-visible:ring-electric-gold"
                                        placeholder="How can we help?"
                                        required
                                        disabled={isLoading}
                                    />
                                </div>

                                {status === "success" && (
                                    <div className="p-3 bg-green-50 text-green-700 rounded-md flex items-center gap-2 text-sm">
                                        <CheckCircle className="w-4 h-4" />
                                        Message sent successfully! We will get back to you soon.
                                    </div>
                                )}

                                {status === "error" && (
                                    <div className="p-3 bg-red-50 text-red-700 rounded-md flex items-center gap-2 text-sm">
                                        <AlertCircle className="w-4 h-4" />
                                        Something went wrong. Please try again later.
                                    </div>
                                )}

                                <Button type="submit" className="w-full bg-deep-navy text-industrial-light hover:bg-deep-navy/90" disabled={isLoading}>
                                    {isLoading ? (
                                        <>
                                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                            Sending...
                                        </>
                                    ) : (
                                        "Send Message"
                                    )}
                                </Button>
                            </form>
                        </CardContent>
                    </Card>
                </Reveal>
            </div>
        </div>
    );
}
