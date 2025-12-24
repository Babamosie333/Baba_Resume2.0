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
      console.error('RESEND_API_KEY is missing');
      return NextResponse.json(
        { success: false, error: 'RESEND_API_KEY is missing from environment' },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);

    // Detailed logging and response as requested
    const resendResponse = await resend.emails.send({
      from: 'onboarding@resend.dev', // Default sender for unverified domains
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

    console.log('Resend Response:', JSON.stringify(resendResponse, null, 2));

    if (resendResponse.error) {
      return NextResponse.json({
        success: false,
        error: resendResponse.error.message || 'Failed to send email via Resend',
        details: resendResponse.error
      }, { status: 400 });
    }

    if (resendResponse.data?.id) {
      return NextResponse.json({
        success: true,
        messageId: resendResponse.data.id,
        resendData: resendResponse.data
      });
    }

    return NextResponse.json({
      success: false,
      error: 'Resend returned no error but also no message ID',
      details: resendResponse
    }, { status: 500 });

  } catch (error: any) {
    console.error('Contact API Error:', error);
    return NextResponse.json({ 
      success: false, 
      error: error.message || 'An unexpected error occurred'
    }, { status: 500 });
  }
}
