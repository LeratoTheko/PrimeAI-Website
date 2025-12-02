import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

export async function GET() {
  try {
    const smes = await prisma.smeProfile.findMany({
      select: { id: true, business_name: true, owner_name: true},
    });
    return NextResponse.json(smes);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed to fetch SMEs" }, { status: 500 });
  }
}
