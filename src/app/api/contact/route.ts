import { NextResponse } from 'next/server';
import { Resend } from 'resend';

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message, website } = body || {};

    // 1. Honeypot Spam Protection
    // If the hidden field 'website' is filled out, reject silently (fake success for bots)
    if (website && typeof website === 'string' && website.trim().length > 0) {
      console.warn('[Contact API] Honeypot triggered by automated bot submission.');
      return NextResponse.json({
        success: true,
        message: 'Message sent successfully',
      });
    }

    // 2. Server-side Input Validation
    if (!name || typeof name !== 'string') {
      return NextResponse.json({ success: false, error: 'Name is required' }, { status: 400 });
    }
    const trimmedName = name.trim();
    if (trimmedName.length < 2 || trimmedName.length > 100) {
      return NextResponse.json({ success: false, error: 'Name must be between 2 and 100 characters' }, { status: 400 });
    }

    if (!email || typeof email !== 'string') {
      return NextResponse.json({ success: false, error: 'Email is required' }, { status: 400 });
    }
    const trimmedEmail = email.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (trimmedEmail.length > 254 || !emailRegex.test(trimmedEmail)) {
      return NextResponse.json({ success: false, error: 'Please enter a valid email address' }, { status: 400 });
    }

    const trimmedSubject = typeof subject === 'string' && subject.trim() ? subject.trim() : 'Portfolio Contact Form Message';
    if (trimmedSubject.length > 150) {
      return NextResponse.json({ success: false, error: 'Subject cannot exceed 150 characters' }, { status: 400 });
    }

    if (!message || typeof message !== 'string') {
      return NextResponse.json({ success: false, error: 'Message is required' }, { status: 400 });
    }
    const trimmedMessage = message.trim();
    if (trimmedMessage.length < 10 || trimmedMessage.length > 5000) {
      return NextResponse.json({ success: false, error: 'Message must be between 10 and 5000 characters' }, { status: 400 });
    }

    // 3. Verify Server Configuration
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error('[Contact API Error] Missing RESEND_API_KEY environment variable.');
      return NextResponse.json(
        { success: false, error: 'Server email service is not configured properly.' },
        { status: 500 }
      );
    }

    const destinationEmail = process.env.CONTACT_EMAIL;
    if (!destinationEmail) {
      console.error('[Contact API Error] Missing CONTACT_EMAIL environment variable.');
      return NextResponse.json(
        { success: false, error: 'Server contact email destination is not configured.' },
        { status: 500 }
      );
    }

    // 4. Send Email via Resend
    const resend = new Resend(apiKey);
    const { data, error } = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: [destinationEmail],
      replyTo: trimmedEmail,
      subject: `[Portfolio Contact] ${trimmedSubject}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <style>
              body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; line-height: 1.6; color: #1f2937; background-color: #f9fafb; padding: 20px; }
              .container { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 8px; border: 1px solid #e5e7eb; overflow: hidden; }
              .header { background: #0f172a; color: #ffffff; padding: 24px; }
              .header h2 { margin: 0; font-size: 20px; font-weight: 600; }
              .content { padding: 24px; }
              .field { margin-bottom: 16px; }
              .field-label { font-size: 12px; font-weight: 600; text-transform: uppercase; color: #6b7280; margin-bottom: 4px; }
              .field-value { font-size: 15px; color: #111827; }
              .message-box { background: #f3f4f6; padding: 16px; border-radius: 6px; white-space: pre-wrap; word-break: break-word; font-size: 14px; border-left: 4px solid #3b82f6; }
              .footer { font-size: 12px; color: #9ca3af; padding: 16px 24px; background: #f9fafb; border-top: 1px solid #e5e7eb; text-align: center; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h2>New Contact Form Message</h2>
              </div>
              <div class="content">
                <div class="field">
                  <div class="field-label">Sender Name</div>
                  <div class="field-value"><strong>${escapeHtml(trimmedName)}</strong></div>
                </div>
                <div class="field">
                  <div class="field-label">Sender Email</div>
                  <div class="field-value"><a href="mailto:${escapeHtml(trimmedEmail)}">${escapeHtml(trimmedEmail)}</a></div>
                </div>
                <div class="field">
                  <div class="field-label">Subject</div>
                  <div class="field-value">${escapeHtml(trimmedSubject)}</div>
                </div>
                <div class="field">
                  <div class="field-label">Message</div>
                  <div class="message-box">${escapeHtml(trimmedMessage)}</div>
                </div>
              </div>
              <div class="footer">
                Sent via Sanatan Roy Portfolio Contact Form • ${new Date().toLocaleString()}
              </div>
            </div>
          </body>
        </html>
      `,
      text: `New Contact Form Message\n\nFrom: ${trimmedName} (${trimmedEmail})\nSubject: ${trimmedSubject}\n\nMessage:\n${trimmedMessage}\n`,
    });

    if (error) {
      console.error('[Resend Error]', error);
      return NextResponse.json(
        { success: false, error: error.message || 'Failed to dispatch email' },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: 'Message sent successfully',
      id: data?.id,
    });
  } catch (error) {
    console.error('[Contact API Uncaught Error]', error);
    return NextResponse.json(
      { success: false, error: 'Internal server error occurred while sending message.' },
      { status: 500 }
    );
  }
}
