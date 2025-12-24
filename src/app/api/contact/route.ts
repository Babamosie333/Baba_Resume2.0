import { NextResponse } from 'next/server';
import { z } from 'zod';
import { Resend } from 'resend';

const contactSchema = z.object({
  firstName: z.string().min(1, 'First name is required').max(500),
  lastName: z.string().min(1, 'Last name is required').max(500),
  email: z.string().email('Invalid email address'),
  subject: z.string().min(1, 'Subject is required').max(500),
  message: z.string().min(1, 'Message is required').max(10000),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const result = contactSchema.safeParse(body);

    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.issues.forEach((issue) => {
        const path = issue.path[0]?.toString() || 'unknown';
        fieldErrors[path] = issue.message;
      });

      return NextResponse.json(
        { 
          success: false, 
          error: 'Validation failed', 
          details: fieldErrors 
        },
        { status: 400 }
      );
    }

    const { firstName, lastName, email, subject, message } = result.data;
    const apiKey = process.env.RESEND_API_KEY;
    console.log('API Key check:', apiKey ? `Found (starts with ${apiKey.substring(0, 3)}...)` : 'Missing');


    if (!apiKey) {
      return NextResponse.json(
        { 
          success: false, 
          error: 'RESEND_API_KEY is missing from environment. Please ensure you have added it to the project dashboard and that it is available in the current scope (Development/Production).',
        },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);

    console.log('Sending email via Resend...');
    // The user requested full response logging and returning
    const { data, error } = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'vikramsingh14052008@gmail.com',
      subject: `New Contact Form: ${subject}`,
      replyTo: email,
      html: `
        <h2>New Message from Contact Form</h2>
        <p><strong>From:</strong> ${firstName} ${lastName} (${email})</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    });

    console.log('Resend Data:', data);
    console.log('Resend Error:', error);

    if (error) {
      return NextResponse.json({
        success: false,
        error: `Resend Error: ${error.message}`,
        details: error
      }, { status: 400 });
    }

    if (data?.id) {
      return NextResponse.json({
        success: true,
        messageId: data.id
      });
    }

    return NextResponse.json({
      success: false,
      error: 'Resend response missing ID and error.',
      data
    }, { status: 500 });

  } catch (error: any) {
    console.error('API Catch Error:', error);
    return NextResponse.json({ 
      success: false, 
      error: error.message || 'An unexpected error occurred.'
    }, { status: 500 });
  }
}
