import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
    try {
        const { name, email, subject, message } = await request.json();

        if (!name || !email || !message) {
            return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
        }

        console.log('API contact request received');
        const user = process.env.GMAIL_USER;
        const pass = process.env.GMAIL_PASS;

        console.log('Env check:', {
            userLength: user?.length,
            passLength: pass?.length,
            userStartsWithQuote: user?.startsWith('"'),
            passStartsWithQuote: pass?.startsWith('"')
        });

        if (!user || !pass) {
            console.error('Missing GMAIL_USER or GMAIL_PASS environment variables', {
                user: !!user,
                pass: !!pass
            });
            return NextResponse.json({ error: 'Server configuration error: Missing email credentials' }, { status: 500 });
        }
        console.log('Credentials present, creating transporter...');

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.GMAIL_USER,
                pass: process.env.GMAIL_PASS, // App Password
            },
        });

        // Verify connection config
        try {
            console.log('Verifying nodemailer connection...');
            await transporter.verify();
            console.log('Nodemailer connection verified');
        } catch (verifyError) {
            console.error('Nodemailer verification failed:', verifyError);
            return NextResponse.json({ error: 'Email service connection failed. Check server logs.' }, { status: 500 });
        }

        const mailOptions = {
            from: process.env.GMAIL_USER,
            to: 'debihsolutions@gmail.com', // Receive emails here
            subject: `New Contact Form Submission: ${subject || 'General Inquiry'}`,
            text: `
        Name: ${name}
        Email: ${email}
        Subject: ${subject}
        
        Message:
        ${message}
      `,
            html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <br/>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
        };

        await transporter.sendMail(mailOptions);

        return NextResponse.json({ success: true, message: 'Email sent successfully' }, { status: 200 });
    } catch (error: any) {
        console.error('Error sending email:', error);
        return NextResponse.json({ error: error.message || 'Failed to send email' }, { status: 500 });
    }
}
