import { Resend } from 'resend';
import { NextResponse } from 'next/server';
import { z } from 'zod';

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
    console.log('Incoming contact form request:', JSON.stringify(body, null, 2));

    const result = contactSchema.safeParse(body);

    if (!result.success) {
      const errorDetails = result.error.errors.map(err => ({
        field: err.path.join('.'),
        message: err.message,
        code: err.code
      }));
      
      console.error('Validation failed details:', JSON.stringify(errorDetails, null, 2));
      
      const fieldErrors: Record<string, string> = {};
      result.error.issues.forEach((issue) => {
        if (issue.path[0]) {
          fieldErrors[issue.path[0].toString()] = issue.message;
        }
      });

      return NextResponse.json(
        { 
          success: false, 
          error: 'Validation failed', 
          details: fieldErrors,
          validationErrors: errorDetails 
        },
        { status: 400 }
      );
    }

    const { firstName, lastName, email, subject, message } = result.data;
    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      console.error('CRITICAL: RESEND_API_KEY is not defined in environment variables');
      return NextResponse.json(
        { success: false, error: 'Email service is not configured (missing API key)' },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);
    console.log('Attempting to send email via Resend to vikramsingh14052008@gmail.com');

    const { data, error } = await resend.emails.send({
      from: 'Contact Form <onboarding@resend.dev>',
      to: 'vikramsingh14052008@gmail.com',
      subject: `New Contact Form Submission: ${subject}`,
      replyTo: email,
      html: `
        <h2>New Contact Message</h2>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    });

    if (error) {
      console.error('Resend service error:', JSON.stringify(error, null, 2));
      return NextResponse.json({ success: false, error: error.message }, { status: 400 });
    }

    console.log('Email sent successfully:', JSON.stringify(data, null, 2));
    return NextResponse.json({ success: true, message: 'Message sent successfully', data });
  } catch (error: any) {
    console.error('Unhandled API error:', error);
    return NextResponse.json({ 
      success: false, 
      error: error.message || 'An unexpected error occurred',
      stack: process.env.NODE_ENV === 'development' ? error.stack : undefined
    }, { status: 500 });
  }
}
