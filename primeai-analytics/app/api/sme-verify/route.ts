// app/api/sme-verify/route.ts
import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function POST(req: NextRequest) {
  try {
    const { email, otp } = await req.json();

    if (!email || !otp) {
      return NextResponse.json({ error: "Email and OTP are required." }, { status: 400 });
    }

    const emailNormalized = email.trim().toLowerCase();
    const otpInput = otp.trim();

    // Fetch SME by email
    const sme = await prisma.sme.findUnique({
      where: { email: emailNormalized },
    });

    if (!sme) {
      return NextResponse.json({ error: "SME not found." }, { status: 404 });
    }

    // Check if OTP exists — if null, it's expired or already used
    if (!sme.otp_code || !sme.otp_expires_at) {
      return NextResponse.json({ error: "Invalid or expired OTP." }, { status: 400 });
    }

    // Compare OTP
    if (otpInput !== sme.otp_code) {
      return NextResponse.json({ error: "Invalid or expired OTP." }, { status: 400 });
    }

    // Check expiry
    const now = new Date();
    if (sme.otp_expires_at < now) {
      return NextResponse.json({ error: "OTP expired. Please request a new one." }, { status: 400 });
    }

    // OTP is valid — mark SME as verified and clear OTP
    await prisma.sme.update({
      where: { id: sme.id },
      data: { is_verified: true, otp_code: null, otp_expires_at: null },
    });

    return NextResponse.json({ message: "✅ OTP verified successfully!" });
  } catch (err) {
    console.error("OTP Verification Error:", err);
    return NextResponse.json({ error: "Something went wrong!" }, { status: 500 });
  }
}
