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
    const envStatus = apiKey ? 'present' : 'missing';

    console.log(`Environment Variable Check - RESEND_API_KEY: ${envStatus}`);

    // DEBUG: Always return envStatus for now as requested
    return NextResponse.json({ 
      success: true, 
      message: 'Debug: API check complete',
      envStatus,
      debugInfo: {
        firstName,
        lastName,
        email,
        subject,
        messageLength: message.length
      }
    });
  } catch (error: any) {
    console.error('Unhandled API error:', error);
    return NextResponse.json({ 
      success: false, 
      error: 'An unexpected error occurred'
    }, { status: 500 });
  }
}
