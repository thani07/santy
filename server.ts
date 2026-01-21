import express from 'express';
import bodyParser from 'body-parser';
import { google } from 'googleapis';
import { Resend } from 'resend';
import path from 'path';
import fs from 'fs';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = 3001;

app.use(bodyParser.json());

// --- Google Sheets Setup ---
const credentialsPath = path.join(__dirname, 'credentials.json');
let auth: any;
try {
    const credentials = JSON.parse(fs.readFileSync(credentialsPath, 'utf8'));
    auth = new google.auth.GoogleAuth({
        credentials,
        scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });
} catch (error) {
    console.error('Error loading Google Sheets credentials:', error);
    process.exit(1); // Exit if credentials are not found
}

const sheets = google.sheets({ version: 'v4', auth });
const spreadsheetId = process.env.GOOGLE_SHEET_ID;

// --- Resend Setup ---
const resend = new Resend(process.env.RESEND_API_KEY);
const toEmailAddress = process.env.TO_EMAIL_ADDRESS;
const fromEmailAddress = 'onboarding@resend.dev'; // Default Resend "from" address for unverified domains

app.post('/api/enquiry', async (req, res) => {
    const { name, email, phone, program, message } = req.body;

    if (!name || !phone || !program || !spreadsheetId || !toEmailAddress) {
        if(!spreadsheetId) console.error("GOOGLE_SHEET_ID is not set in .env file");
        if(!toEmailAddress) console.error("TO_EMAIL_ADDRESS is not set in .env file");
        return res.status(400).send('Name, Phone, and Program are required, and server must be configured correctly.');
    }

    try {
        // 1. Append to Google Sheet
        const timestamp = new Date().toLocaleString();
        const row = [name, email, phone, program, message, timestamp];

        await sheets.spreadsheets.values.append({
            spreadsheetId,
            range: 'Sheet1!A:F', // Assuming headers are in A1:F1 and data starts from A2
            valueInputOption: 'USER_ENTERED',
            requestBody: {
                values: [row],
            },
        });

        // 2. Send Email Notification via Resend
        const emailSubject = `New Enquiry from ${name} for ${program}`;
        const emailBody = `
            A new enquiry has been submitted through the website form:

            Name: ${name}
            Email: ${email || 'N/A'}
            Phone: ${phone}
            Program: ${program}
            Message: ${message || 'N/A'}
            Submitted On: ${timestamp}
        `;

        await resend.emails.send({
            from: fromEmailAddress,
            to: toEmailAddress,
            subject: emailSubject,
            html: emailBody.replace(/\n/g, '<br />'), // Convert newlines to <br> for HTML email
        });

        console.log('Enquiry successfully processed and notification sent.');
        res.status(200).send('Enquiry submitted successfully and notification sent.');

    } catch (error) {
        console.error('Error processing enquiry:', error);
        if (error instanceof Error) {
            res.status(500).send(`Failed to process enquiry: ${error.message}`);
        } else {
            res.status(500).send('Failed to process enquiry due to an unknown error.');
        }
    }
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
    console.log('Google Sheets integration and Resend email notifications are active.');
});