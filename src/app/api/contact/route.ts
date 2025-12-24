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

    const apiKey = process.env.RESEND_API_KEY;
    const envStatus = apiKey ? 'present' : 'missing';

    return NextResponse.json({ 
      success: true, 
      message: 'Debug: API check complete',
      envStatus
    });
  } catch (error: any) {
    return NextResponse.json({ 
      success: false, 
      error: 'An unexpected error occurred'
    }, { status: 500 });
  }
}
