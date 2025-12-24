import { Resend } from 'resend';
import { NextResponse } from 'next/server';
import { z } from 'zod';

const contactSchema = z.object({
  firstName: z.string().min(1, 'First name is required').max(100),
  lastName: z.string().min(1, 'Last name is required').max(100),
  email: z.string().email('Invalid email address'),
  subject: z.string().min(1, 'Subject is required').max(100),
  message: z.string().min(1, 'Message is required').max(2000),
});

export async function POST(request: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;
    
    const body = await request.json();
    console.log('Contact form body:', body);

    const result = contactSchema.safeParse(body);

    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.issues.forEach((issue) => {
        if (issue.path[0]) {
          fieldErrors[issue.path[0].toString()] = issue.message;
        }
      });

      console.error('Validation errors:', fieldErrors);
      return NextResponse.json(
        { 
          success: false,
          error: 'Validation failed', 
          details: fieldErrors 
        },
        { status: 400 }
      );
    }

    if (!apiKey) {
      console.error('RESEND_API_KEY is missing');
      return NextResponse.json(
        { success: false, error: 'Email service is not configured (missing API key)' },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);
    const { firstName, lastName, email, subject, message } = result.data;


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
      console.error('Resend error:', error);
      return NextResponse.json({ success: false, error: error.message }, { status: 400 });
    }

    return NextResponse.json({ success: true, message: 'Email sent successfully', data });
  } catch (error: any) {
    console.error('API error:', error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
