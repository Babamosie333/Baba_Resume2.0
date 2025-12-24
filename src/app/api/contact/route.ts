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

    if (!apiKey) {
      return NextResponse.json(
        { 
          success: false, 
          error: 'RESEND_API_KEY is missing from environment. Please add it to your project dashboard environment variables.',
        },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);

    // Attempt to send email and log full response
    console.log('Sending email via Resend...');
    const resendResponse = await resend.emails.send({
      from: 'onboarding@resend.dev', // Fallback for unverified domains
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

    console.log('Full Resend Response:', JSON.stringify(resendResponse, null, 2));

    if (resendResponse.error) {
      // Return success: false with the specific Resend error message
      return NextResponse.json({
        success: false,
        error: `Resend Error: ${resendResponse.error.message}`,
        resendError: resendResponse.error
      }, { status: 400 });
    }

    if (resendResponse.data?.id) {
      return NextResponse.json({
        success: true,
        messageId: resendResponse.data.id
      });
    }

    return NextResponse.json({
      success: false,
      error: 'Resend returned an empty response without an ID or error.',
      resendResponse
    }, { status: 500 });

  } catch (error: any) {
    console.error('API Catch Error:', error);
    return NextResponse.json({ 
      success: false, 
      error: error.message || 'An unexpected error occurred in the API route.'
    }, { status: 500 });
  }
}
