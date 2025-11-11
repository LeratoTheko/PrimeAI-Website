import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export const runtime = "nodejs";

// GET — Fetch only verified email
export async function GET(req: NextRequest) {
  try {
    const email = req.nextUrl.searchParams.get("email");
    if (!email)
      return NextResponse.json({ error: "Email is required" }, { status: 400 });

    const user = await prisma.sme.findUnique({
      where: { email },
      select: { email: true },
    });

    if (!user)
      return NextResponse.json({ error: "No SME found with this email" }, { status: 404 });

    return NextResponse.json({ success: true, sme: { email: user.email } });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
  }
}


export async function POST(req: NextRequest) {
  try {
    const data = await req.json();

    if (!data.business_name || !data.owner_name || !data.contact_number) {
      return NextResponse.json({ error: "Required fields missing" }, { status: 400 });
    }

    // Either connect to an existing SME or create a new one
    const result = await prisma.smeProfile.create({
      data: {
        business_name: data.business_name,
        registration_number: data.registration_number || null,
        owner_name: data.owner_name,
        owner_gender: data.owner_gender || null,
        owner_age_group: data.owner_age_group || null,
        contact_number: data.contact_number,
        email: data.email || null,
        location: data.location || null,
        industry: data.industry || null,
        sub_industry: data.sub_industry || null,
        nature_of_business: data.nature_of_business || null,
        customer_types: data.customer_types ? data.customer_types.join(", ") : null,
        business_size: data.business_size || null,
        number_of_employees: data.number_of_employees || null,
        estimated_monthly_revenue: data.estimated_monthly_revenue || null,
        estimated_monthly_expenses: data.estimated_monthly_expenses || null,
        premises_type: data.premises_type || null,

        // Relation to SME
        sme: {
          connectOrCreate: {
            where: { email: data.email || "" }, // unique field to check
            create: {
              name: data.business_name,
              phone: data.contact_number,
              email: data.email || "",
              agreed_terms: true,
            },
          },
        },
      },
    });

    return NextResponse.json({
      message: "SME profile created successfully!",
      data: result,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Something went wrong!" }, { status: 500 });
  }
}
