import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export const runtime = "nodejs";

// Utility to normalize string fields
const normalizeString = (value: any) => (typeof value === "string" ? value.trim() : value);

// GET — Handle email verification or full SME profile fetch
export async function GET(req: NextRequest) {
  try {
    const email = req.nextUrl.searchParams.get("email")?.trim().toLowerCase();
    if (!email) 
      return NextResponse.json({ error: "Email is required" }, { status: 400 });

    const type = req.nextUrl.searchParams.get("type"); // 'verify' or 'profile'

    // 1️⃣ Email verification: check existence in SME table
    if (type === "verify") {
      const user = await prisma.sme.findUnique({
        where: { email },
        select: { email: true },
      });

      if (!user)
        return NextResponse.json({ error: "No SME found with this email" }, { status: 404 });

      return NextResponse.json({ success: true, sme: { email: user.email } });
    }

    // 2️⃣ Full profile fetch from smeProfile
    const profile = await prisma.smeProfile.findUnique({ where: { email } });

    if (!profile)
      return NextResponse.json({ error: "No SME profile found for this email" }, { status: 404 });

    // Normalize all string fields before returning
    const normalizedProfile = {
      ...profile,
      business_name: normalizeString(profile.business_name),
      registration_number: normalizeString(profile.registration_number),
      owner_name: normalizeString(profile.owner_name),
      owner_gender: normalizeString(profile.owner_gender),
      owner_age_group: normalizeString(profile.owner_age_group),
      contact_number: normalizeString(profile.contact_number),
      email: normalizeString(profile.email),
      location: normalizeString(profile.location),
      industry: normalizeString(profile.industry),
      sub_industry: normalizeString(profile.sub_industry),
      nature_of_business: normalizeString(profile.nature_of_business),
      customer_types: normalizeString(profile.customer_types),
      business_size: normalizeString(profile.business_size),
      premises_type: normalizeString(profile.premises_type),
    };

    return NextResponse.json({ success: true, profile: normalizedProfile });

  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
  }
}

// POST — Create or update SME profile with normalized strings
export async function POST(req: NextRequest) {
  try {
    const data = await req.json();

    // Required fields check
    if (!data.business_name || !data.owner_name || !data.contact_number || !data.email) {
      return NextResponse.json({ error: "Required fields missing" }, { status: 400 });
    }

    // Normalize strings and lowercase email
    const normalize = (value: any) => (typeof value === "string" ? value.trim() : value);
    const email = normalize(data.email).toLowerCase();

    const profileData = {
      business_name: normalize(data.business_name),
      registration_number: normalize(data.registration_number) || null,
      owner_name: normalize(data.owner_name),
      owner_gender: normalize(data.owner_gender) || null,
      owner_age_group: normalize(data.owner_age_group) || null,
      contact_number: normalize(data.contact_number),
      email,
      location: normalize(data.location) || null,
      industry: normalize(data.industry) || null,
      sub_industry: normalize(data.sub_industry) || null,
      nature_of_business: normalize(data.nature_of_business) || null,
      customer_types: data.customer_types
        ? data.customer_types.map((ct: string) => ct.trim()).join(", ")
        : null,
      business_size: normalize(data.business_size) || null,
      number_of_employees: data.number_of_employees || null,
      estimated_monthly_revenue: data.estimated_monthly_revenue || null,
      estimated_monthly_expenses: data.estimated_monthly_expenses || null,
      premises_type: normalize(data.premises_type) || null,
    };

    // Upsert: create if not exists, update if exists
    const result = await prisma.smeProfile.upsert({
      where: { email },
      update: profileData,
      create: {
        ...profileData,
        // Relation to SME table
        sme: {
          connectOrCreate: {
            where: { email },
            create: {
              name: profileData.business_name,
              phone: profileData.contact_number,
              email,
              agreed_terms: true,
            },
          },
        },
      },
    });

    return NextResponse.json({
      message: "SME profile saved successfully!",
      data: result,
    });

  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Something went wrong!" }, { status: 500 });
  }
}
