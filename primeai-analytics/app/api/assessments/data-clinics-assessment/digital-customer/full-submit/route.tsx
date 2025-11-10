import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const { overallNotes, acquisitionChannel, customerRetention } = data;

    // ✅ Create the assessment with both Acquisition and Retention
    const assessment = await prisma.digitalCustomerAssessment.create({
      data: {
        overallNotes,
        acquisitionChannels: {
          create: {
            ...acquisitionChannel,
          },
        },
        retentionAssesssment: { // <-- use the exact field name from the schema
          create: {
            ...customerRetention,
          },
        },
      },
      include: {
        acquisitionChannels: true,
        retentionAssesssment: true,
      },
    });


    return NextResponse.json(assessment, { status: 201 });
  } catch (error) {
    console.error("Error creating full assessment:", error);
    return NextResponse.json({ error: "Failed to create full assessment" }, { status: 500 });
  }
}
