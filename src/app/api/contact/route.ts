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
      const errorDetails = result.error.issues.map(issue => ({
        field: issue.path.join('.'),
        message: issue.message,
        code: issue.code
      }));
      
      console.error('Validation failed details:', JSON.stringify(errorDetails, null, 2));
      
      const fieldErrors: Record<string, string> = {};
      result.error.issues.forEach((issue) => {
        const path = issue.path[0]?.toString() || 'unknown';
        fieldErrors[path] = issue.message;
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
    const envStatus = apiKey ? 'present' : 'missing';

    console.log('API Key Status:', envStatus);

    // TEMPORARY: Return envStatus without sending email for debugging
    return NextResponse.json({ 
      success: true, 
      message: 'Debug: Checking environment status',
      envStatus
    });

    /* Commenting out actual send logic for Step 1
    if (!apiKey) {
      console.error('CRITICAL: RESEND_API_KEY is missing');
      // For testing purposes, if it's missing we log it but return a generic error to user
      return NextResponse.json(
        { success: false, error: 'Failed to send message, please try again later' },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);
    console.log('Attempting to send email via Resend to vikramsingh14052008@gmail.com');

    try {
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
        return NextResponse.json({ success: false, error: 'Failed to send message, please try again later' }, { status: 400 });
      }

      console.log('Email sent successfully:', JSON.stringify(data, null, 2));
      return NextResponse.json({ 
        success: true, 
        message: 'Message sent successfully'
      });
      } catch (sendError: any) {
        console.error('Resend SDK error:', sendError);
        return NextResponse.json({ success: false, error: 'Failed to send message, please try again later' }, { status: 500 });
      }
    */
    } catch (error: any) {

    console.error('Unhandled API error:', error);
    return NextResponse.json({ 
      success: false, 
      error: error.message || 'An unexpected error occurred',
      stack: process.env.NODE_ENV === 'development' ? error.stack : undefined
    }, { status: 500 });
  }
}
