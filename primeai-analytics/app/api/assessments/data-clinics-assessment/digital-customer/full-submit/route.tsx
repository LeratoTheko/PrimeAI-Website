import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const { smeProfileId, overallNotes, acquisitionChannel, customerRetention } = data;

    if (!smeProfileId) {
      return NextResponse.json({ error: "smeProfileId is required" }, { status: 400 });
    }

    // 1️⃣ Check if SmeProfile exists
    const profile = await prisma.smeProfile.findUnique({
      where: { id: smeProfileId },
    });

    if (!profile) {
      return NextResponse.json({ error: "SME Profile not found" }, { status: 404 });
    }

    // 2️⃣ Check if an assessment already exists
    const existingAssessment = await prisma.digitalCustomerAssessment.findUnique({
      where: { smeProfileId },
      include: {
        acquisition: true,
        retention: true,
      },
    });

    let assessment;

    if (existingAssessment) {
      // ================== UPDATE FLOW ==================
      assessment = await prisma.digitalCustomerAssessment.update({
        where: { id: existingAssessment.id },
        data: {
          overallNotes,
        },
      });

      // Update acquisition if exists, otherwise create
      if (acquisitionChannel) {
        if (existingAssessment.acquisition) {
          await prisma.acquisitionChannelProfile.update({
            where: { id: existingAssessment.acquisition.id },
            data: { ...acquisitionChannel, smeProfileId },
          });
        } else {
          await prisma.acquisitionChannelProfile.create({
            data: {
              ...acquisitionChannel,
              smeProfileId,
              assessmentId: assessment.id,
            },
          });
        }
      }

      // Update retention if exists, otherwise create
      if (customerRetention) {
        if (existingAssessment.retention) {
          await prisma.customerRetentionAssessment.update({
            where: { id: existingAssessment.retention.id },
            data: { ...customerRetention },
          });
        } else {
          await prisma.customerRetentionAssessment.create({
            data: {
              ...customerRetention,
              assessmentId: assessment.id,
            },
          });
        }
      }
    } else {
      // ================== CREATE FLOW ==================
      assessment = await prisma.digitalCustomerAssessment.create({
        data: { smeProfileId, overallNotes },
      });

      if (acquisitionChannel) {
        await prisma.acquisitionChannelProfile.create({
          data: { ...acquisitionChannel, smeProfileId, assessmentId: assessment.id },
        });
      }

      if (customerRetention) {
        await prisma.customerRetentionAssessment.create({
          data: { ...customerRetention, assessmentId: assessment.id },
        });
      }
    }

    // 3️⃣ Fetch full assessment with children to return
    const fullAssessment = await prisma.digitalCustomerAssessment.findUnique({
      where: { id: assessment.id },
      include: { acquisition: true, retention: true },
    });

    return NextResponse.json(fullAssessment, { status: 200 });
  } catch (error) {
    console.error("Error upserting assessment:", error);
    return NextResponse.json({ error: "Failed to upsert assessment" }, { status: 500 });
  }
}
