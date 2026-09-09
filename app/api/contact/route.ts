import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  try {
    const { name, email, message } = await request.json();

    // Validate input
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // Validate environment variables
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASSWORD) {
      console.error("Email credentials not configured");
      return NextResponse.json(
        { error: "Email service not configured. Please contact the administrator." },
        { status: 500 }
      );
    }

    // Create transporter with explicit Gmail SMTP settings
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    // Verify SMTP connection before attempting to send
    await transporter.verify();

    // Email options
    const mailOptions = {
      from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO || process.env.EMAIL_USER,
      subject: `Portfolio Contact: Message from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; max-width: 600px;">
          <h2 style="color: #4F46E5;">New Contact Form Submission</h2>
          <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 10px 0;"><strong>Name:</strong> ${name}</p>
            <p style="margin: 10px 0;"><strong>Email:</strong> ${email}</p>
            <p style="margin: 10px 0;"><strong>Message:</strong></p>
            <p style="margin: 10px 0; padding: 15px; background-color: white; border-radius: 4px;">${message}</p>
          </div>
          <p style="color: #6b7280; font-size: 12px;">This email was sent from your portfolio contact form.</p>
        </div>
      `,
      replyTo: email,
    };

    // Send email
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent successfully:", info.messageId);

    return NextResponse.json(
      { message: "Email sent successfully", messageId: info.messageId },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    const errorMessage = error instanceof Error ? error.message : "Unknown error";
    const errorCode = (error as NodeJS.ErrnoException).code;

    // Give a specific hint for the most common failure so it's easy to diagnose.
    const isAuthError =
      errorCode === "EAUTH" ||
      (errorMessage.includes("535") || errorMessage.includes("Username and Password"));

    const userMessage = isAuthError
      ? "Email authentication failed. Please check the Gmail App Password in your environment config."
      : "Failed to send email. Please try again or contact directly via email.";

    console.error("Error details:", errorMessage);

    return NextResponse.json(
      {
        error: userMessage,
        details: process.env.NODE_ENV === "development" ? errorMessage : undefined,
      },
      { status: 500 }
    );
  }
}
