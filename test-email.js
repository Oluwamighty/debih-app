const nodemailer = require('nodemailer');
const fs = require('fs');

const GMAIL_USER = "oluwamighty42@gmail.com";
const GMAIL_PASS = "ljenfbfsreymhxt";

const logFile = 'debug_email.log';
function log(msg) {
    console.log(msg);
    fs.appendFileSync(logFile, msg + '\n');
}

async function test() {
    log('Starting test...');
    log('GMAIL_USER: ' + GMAIL_USER);
    log('GMAIL_PASS: ' + (GMAIL_PASS ? 'FOUND (length ' + GMAIL_PASS.length + ')' : 'MISSING'));

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: GMAIL_USER,
            pass: GMAIL_PASS,
        },
    });

    try {
        log('Verifying connection (10s timeout)...');
        const verifyPromise = transporter.verify();
        const timeoutPromise = new Promise((_, reject) => setTimeout(() => reject(new Error('Verification Timeout')), 10000));

        await Promise.race([verifyPromise, timeoutPromise]);
        log('SUCCESS: Connection verified');
    } catch (error) {
        log('FAILED: ' + error.message);
        if (error.code) log('Code: ' + error.code);
        if (error.command) log('Command: ' + error.command);
    }
}

test();
