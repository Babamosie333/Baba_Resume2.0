import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: Request) {
  try {
    const resendApiKey = process.env.RESEND_API_KEY;

    if (!resendApiKey) {
      console.error("RESEND_API_KEY is missing from environment variables");
      return NextResponse.json(
        { error: "Email service not configured. Please add RESEND_API_KEY to environment variables." },
        { status: 500 }
      );
    }

    const resend = new Resend(resendApiKey);
    const { firstName, lastName, email, subject, message } = await req.json();

    if (!firstName || !lastName || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const { data, error } = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: ["vikramsingh1405206@gmail.com"],
      replyTo: email,
      subject: `New Contact Form Submission: ${subject}`,
      text: `
Name: ${firstName} ${lastName}
Email: ${email}
Subject: ${subject}

Message:
${message}
      `,
    });

    if (error) {
      console.error("Resend Error:", error);
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    return NextResponse.json({ success: true, data });
  } catch (error: any) {
    console.error("API Error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
