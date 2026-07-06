import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const { name, email, message } = await request.json();

    // Send email to you
    const ownerEmail = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: "info@builtbyusman.com",
      subject: `New contact from ${name}`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px;">
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <p><strong>Message:</strong></p>
          <p style="white-space: pre-wrap;">${message.replace(/\n/g, "<br>")}</p>
          <hr style="margin: 20px 0; border: none; border-top: 1px solid #eee;">
          <p style="font-size: 12px; color: #666;">Sent from your portfolio contact form</p>
        </div>
      `,
    });

    if (ownerEmail.error) throw new Error("Failed to send owner email");

    // Send confirmation to user
    const userEmail = await resend.emails.send({
      from: "Usman Imran <onboarding@resend.dev>",
      to: email,
      subject: "I received your message",
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px;">
          <h2>Thank you for reaching out, ${name}!</h2>
          <p>I've received your message and will get back to you within 24 hours.</p>
          <p style="margin-top: 30px;">Best regards,<br><strong>Usman Imran</strong></p>
        </div>
      `,
    });

    if (userEmail.error) throw new Error("Failed to send user confirmation");

    return NextResponse.json({
      ok: true,
      message: "Email sent successfully",
    });
  } catch (error) {
    console.error("Email error:", error);
    return NextResponse.json(
      { ok: false, error: "Failed to send email" },
      { status: 500 }
    );
  }
}
