import type { VercelRequest, VercelResponse } from '@vercel/node';
import { google } from 'googleapis';
import { Resend } from 'resend';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).send('Method Not Allowed');
  }

  const { name, email, phone, program, message } = req.body;

  const spreadsheetId = process.env.GOOGLE_SHEET_ID;
  const toEmailAddress = process.env.TO_EMAIL_ADDRESS;

  if (!name || !phone || !program || !spreadsheetId || !toEmailAddress) {
    return res.status(400).send('Name, Phone, and Program are required, and server must be configured correctly.');
  }

  try {
    // --- Google Sheets Auth via ENV vars (no credentials.json needed) ---
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
      },
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const sheets = google.sheets({ version: 'v4', auth });

    // 1. Append to Google Sheet
    const timestamp = new Date().toLocaleString();
    const row = [name, email, phone, program, message, timestamp];

    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: 'Sheet1!A:F',
      valueInputOption: 'USER_ENTERED',
      requestBody: { values: [row] },
    });

    // 2. Send Email via Resend
    const resend = new Resend(process.env.RESEND_API_KEY);
    const emailSubject = `New Enquiry from ${name} for ${program}`;
    const emailBody = `
      A new enquiry has been submitted through the website form:<br/><br/>
      <b>Name:</b> ${name}<br/>
      <b>Email:</b> ${email || 'N/A'}<br/>
      <b>Phone:</b> ${phone}<br/>
      <b>Program:</b> ${program}<br/>
      <b>Message:</b> ${message || 'N/A'}<br/>
      <b>Submitted On:</b> ${timestamp}
    `;

    await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: toEmailAddress,
      subject: emailSubject,
      html: emailBody,
    });

    return res.status(200).send('Enquiry submitted successfully and notification sent.');

  } catch (error) {
    console.error('Error processing enquiry:', error);
    if (error instanceof Error) {
      return res.status(500).send(`Failed to process enquiry: ${error.message}`);
    }
    return res.status(500).send('Failed to process enquiry due to an unknown error.');
  }
}
