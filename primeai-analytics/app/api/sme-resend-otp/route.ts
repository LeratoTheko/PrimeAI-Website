// app/api/resend-otp/route.ts
import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

// Helper to generate OTP
function generateOTP(length = 6) {
  return Math.floor(100000 + Math.random() * 900000).toString().slice(0, length);
}

// Configure your transporter (SMTP)
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT) || 587,
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();

    if (!email) {
      return NextResponse.json({ error: "Email is required." }, { status: 400 });
    }

    const emailNormalized = email.trim().toLowerCase();

    // Check if SME exists
    const sme = await prisma.sme.findUnique({
      where: { email: emailNormalized },
    });

    if (!sme) {
      return NextResponse.json({ error: "SME not found. Please sign up first." }, { status: 404 });
    }

    // Generate new OTP
    const otp = generateOTP();
    const expiry = new Date(Date.now() + 10 * 60 * 1000); // 10 minutes

    // Update SME record with new OTP
    await prisma.sme.update({
      where: { id: sme.id },
      data: { otp_code: otp, otp_expires_at: expiry },
    });

    // Send new OTP via email
    await transporter.sendMail({
      from: `"PrimeAI Analytics" <${process.env.SMTP_USER}>`,
      to: emailNormalized,
      subject: "Your New OTP Code for SME Verification",
      text: `Hello ${sme.name},\n\nYour new OTP code is: ${otp}\nIt expires in 10 minutes.`,
      html: `<p>Hello <strong>${sme.name}</strong>,</p><p>Your new OTP code is: <strong>${otp}</strong></p><p>It expires in 10 minutes.</p>`,
    });

    return NextResponse.json({ message: "New OTP sent successfully!" });
  } catch (error) {
    console.error("Resend OTP Error:", error);
    return NextResponse.json({ error: "Something went wrong!" }, { status: 500 });
  }
}
