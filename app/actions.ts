'use server';

const N8N_HOST = process.env.NEXT_PUBLIC_N8N_HOST || 'https://oluwamighty42.app.n8n.cloud';
const CHAT_WEBHOOK_ID = process.env.CHAT_WEBHOOK_ID || 'f93aa771-a860-499c-8a03-1b18357554dd/chat';
const DATA_WEBHOOK_ID = process.env.DATA_WEBHOOK_ID || 'PENDING_CREATION';

export async function sendChatMessage(message: string, sessionId: string) {
    const url = `${N8N_HOST}/webhook/${CHAT_WEBHOOK_ID}`;
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                chatInput: message,
                sessionId,
                action: 'sendMessage'
            }),
        });

        if (!response.ok) {
            throw new Error(`n8n error: ${response.statusText}`);
        }

        const data = await response.json();
        return data.output || data.text || JSON.stringify(data);
    } catch (error) {
        console.error('Failed to send message:', error);
        return "Sorry, I'm having trouble connecting to the agent right now.";
    }
}

export async function fetchDashboardData() {
    // Mock data until the separate Data API workflow is created
    if (DATA_WEBHOOK_ID === 'PENDING_CREATION') {
        return {
            queries: [
                { Name: 'John Doe', Email: 'john@example.com', Query: 'Transformer maintenance inquiry', 'Appointment Status': 'Scheduled' },
                { Name: 'Industrial Co', Email: 'contact@indco.ng', Query: '33kV Line Installation Quote', 'Appointment Status': 'Pending' },
            ],
            events: [
                { summary: 'Site Inspection - Lekki', start: { dateTime: new Date().toISOString(), timeZone: 'Africa/Lagos' }, end: { dateTime: new Date().toISOString(), timeZone: 'Africa/Lagos' } }
            ]
        };
    }

    try {
        const isTestData = process.env.USE_TEST_WEBHOOK_FOR_DATA === 'true';
        const webhookPrefix = isTestData ? 'webhook-test' : 'webhook';
        const response = await fetch(`${N8N_HOST}/${webhookPrefix}/${DATA_WEBHOOK_ID}`);
        if (!response.ok) throw new Error('Failed to fetch data');
        const data = await response.json();

        // Ensure the returned data has the expected structure
        return {
            queries: Array.isArray(data.queries) ? data.queries : [],
            events: Array.isArray(data.events) ? data.events : []
        };
    } catch (error) {
        console.error('Failed to fetch dashboard data:', error);
        return { queries: [], events: [] };
    }
}
