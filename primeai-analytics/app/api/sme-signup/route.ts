import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import nodemailer from "nodemailer";


export const runtime = "nodejs";

// Helper: generate a 6-digit OTP
function generateOTP(length = 6) {
  return Math.floor(100000 + Math.random() * 900000)
    .toString()
    .slice(0, length);
}

// Email transporter (SMTP)
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export async function POST(req: NextRequest) {
  try {
    const { name, phone, email, agreed } = await req.json();

    if (!name || !phone || !email) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 });
    }

    const otp = generateOTP();
    const expiry = new Date(Date.now() + 10 * 60 * 1000); // expires in 10 minutes

    // Check if SME already exists
    const existing = await prisma.sme.findUnique({
      where: { email },
    });

    if (existing) {
      // Update existing SME’s OTP and details
      await prisma.sme.update({
        where: { email },
        data: {
          name,
          phone,
          agreed_terms: !!agreed,
          otp_code: otp,
          otp_expires_at: expiry,
          is_verified: false,
        },
      });
    } else {
      // Create a new SME record
      await prisma.sme.create({
        data: {
          name,
          phone,
          email,
          agreed_terms: !!agreed,
          otp_code: otp,
          otp_expires_at: expiry,
          is_verified: false,
        },
      });
    }

    // Send the OTP email
    await transporter.sendMail({
      from: `"PrimeAI Analytics" <${process.env.SMTP_USER}>`,
      to: email,
      subject: "Your OTP Code for Verification",
      text: `Hello ${name},\n\nYour OTP code is: ${otp}\nIt expires in 10 minutes.`,
      html: `<p>Hello <strong>${name}</strong>,</p><p>Your OTP code is: <strong>${otp}</strong></p><p>It expires in 10 minutes.</p>`,
    });

    return NextResponse.json({
      message: "OTP sent to your email.",
      redirect: `/services/tsoelopele-one/sme/otp?email=${encodeURIComponent(email)}`,
    });
  } catch (error) {
    console.error("SME Email Verification Error:", error);
    return NextResponse.json({ error: "Something went wrong!" }, { status: 500 });
  }
}
