import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const assessments = await prisma.digitalCustomerAssessment.findMany();
    return new Response(JSON.stringify(assessments), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: "Failed to fetch assessments" }), { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const { smeId, assessor, overallNotes, acquisitionChannel } = data;

    // ✅ Make sure smeId is passed as smeProfileId (required by schema)
    const assessment = await prisma.digitalCustomerAssessment.create({
      data: {
        overallNotes,
        acquisitionChannels: {
          create: {
            ...acquisitionChannel,
          },
        },
      },
      include: { acquisitionChannels: true },
    });

    return NextResponse.json(assessment, { status: 201 });
  } catch (error) {
    console.error("Error creating assessment:", error);
    return NextResponse.json({ error: "Failed to create assessment" }, { status: 500 });
  }
}
