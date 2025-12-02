import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { evaluateEligibility } from "@/lib/eligibility";

export const runtime = "nodejs";

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();

    if (!data.business_name || !data.owner_name || !data.contact_number) {
      return NextResponse.json({ error: "Required fields missing" }, { status: 400 });
    }

    // Create SME Profile
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
        sme: {
          connectOrCreate: {
            where: { email: data.email || "" },
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

    // Evaluate Eligibility (Unified)
    const eligibility = evaluateEligibility(result);

    // Persist eligibility (optional)
    await prisma.smeProfile.update({
      where: { id: result.id },
      data: {
        digital_customer_eligible: eligibility.digitalCustomer,
        digital_operations_eligible: eligibility.digitalOperations,
        digital_workspace_eligible: eligibility.digitalWorkspace,
      },
    });

    // Return success + redirect path
    return NextResponse.json({
      message: "SME profile created successfully!",
      data: result,
      eligibility,
      redirect: eligibility.redirectPath,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Something went wrong!" }, { status: 500 });
  }
}
