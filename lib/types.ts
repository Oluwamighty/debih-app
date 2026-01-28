export type Message = {
    role: 'user' | 'assistant';
    content: string;
};

export type GoogleSheetRow = {
    [key: string]: string | number | boolean;
};

export type CalendarEvent = {
    summary: string;
    start: { dateTime: string; timeZone: string };
    end: { dateTime: string; timeZone: string };
    location?: string;
};

export type DashboardData = {
    queries: GoogleSheetRow[];
    events: CalendarEvent[];
};
