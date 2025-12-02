import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";


export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    const data = await req.json();

    const {
      fullName,
      email,
      companyName,
      phoneNumber,
      heardFrom,
      projectDescription,
      consent,
    } = data;

    // Basic Validation
    if (!fullName || !email || !companyName || !phoneNumber || !projectDescription) {
      return NextResponse.json(
        { error: "Please fill all required fields." },
        { status: 400 }
      );
    }

    // Create record in Prisma
    const newEstimate = await prisma.projectEstimate.create({
      data: {
        fullName,
        email,
        companyName,
        phoneNumber,
        heardFrom,
        projectDescription,
        consent: Boolean(consent),
      },
    });

    return NextResponse.json(
      { message: "✅ Project estimate submitted successfully!", estimate: newEstimate },
      { status: 201 }
    );
  } catch (error: any) {
    console.error("Error saving project estimate:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred." },
      { status: 500 }
    );
  }
}
