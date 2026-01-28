'use client';

import * as React from 'react';
import { Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { sendChatMessage } from '@/app/actions';
import { Message } from '@/lib/types';

export function ChatWidget() {
    const [messages, setMessages] = React.useState<Message[]>([
        { role: 'assistant', content: 'Hello! I am DEBIH Agent. How can I assist you with your power infrastructure needs today?' }
    ]);
    const [input, setInput] = React.useState('');
    const [isLoading, setIsLoading] = React.useState(false);
    const scrollRef = React.useRef<HTMLDivElement>(null);

    React.useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [messages]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!input.trim() || isLoading) return;

        const userMsg = input.trim();
        setInput('');
        setMessages(prev => [...prev, { role: 'user', content: userMsg }]);
        setIsLoading(true);

        try {
            // Generate a random session ID or manage it in context
            const sessionId = 'session-' + Math.random().toString(36).substr(2, 9);
            const response = await sendChatMessage(userMsg, sessionId);

            setMessages(prev => [...prev, { role: 'assistant', content: response }]);
        } catch {
            setMessages(prev => [...prev, { role: 'assistant', content: "I apologize, but I'm unable to connect at the moment." }]);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <Card className="flex flex-col h-[600px] w-full max-w-md mx-auto shadow-lg border-deep-navy/10">
            <CardHeader className="bg-deep-navy text-industrial-light rounded-t-xl py-4">
                <CardTitle className="flex items-center gap-2 text-industrial-light">
                    <div className="w-3 h-3 rounded-full bg-electric-gold animate-pulse" />
                    DEBIH Agent
                </CardTitle>
            </CardHeader>
            <CardContent className="flex-1 flex flex-col p-4 overflow-hidden bg-white">
                <div
                    ref={scrollRef}
                    className="flex-1 overflow-y-auto space-y-4 pr-1 mb-4"
                >
                    {messages.map((msg, i) => (
                        <div
                            key={i}
                            className={cn(
                                "flex w-full",
                                msg.role === 'user' ? "justify-end" : "justify-start"
                            )}
                        >
                            <div
                                className={cn(
                                    "max-w-[80%] rounded-2xl px-4 py-3 text-sm",
                                    msg.role === 'user'
                                        ? "bg-deep-navy text-industrial-light rounded-br-none"
                                        : "bg-industrial-light text-steel-grey rounded-bl-none border border-gray-100"
                                )}
                            >
                                {msg.content}
                            </div>
                        </div>
                    ))}
                    {isLoading && (
                        <div className="flex justify-start">
                            <div className="bg-industrial-light rounded-2xl px-4 py-3 rounded-bl-none flex gap-1 items-center">
                                <span className="w-2 h-2 bg-steel-grey/40 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                                <span className="w-2 h-2 bg-steel-grey/40 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                                <span className="w-2 h-2 bg-steel-grey/40 rounded-full animate-bounce"></span>
                            </div>
                        </div>
                    )}
                </div>

                <form onSubmit={handleSubmit} className="flex gap-2 pt-2 border-t border-gray-100">
                    <Input
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="Type your message..."
                        className="flex-1"
                        disabled={isLoading}
                    />
                    <Button type="submit" size="icon" disabled={isLoading} className="bg-electric-gold text-deep-navy hover:bg-electric-gold/90">
                        <Send className="h-4 w-4" />
                    </Button>
                </form>
            </CardContent>
        </Card>
    );
}
