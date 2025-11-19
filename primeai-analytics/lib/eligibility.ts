import { SmeProfile } from "@prisma/client";

/**
 * --------------------------------------------------------------
 * DIGITAL CUSTOMER ELIGIBILITY
 * --------------------------------------------------------------
 * Determines if an SME qualifies for Digital Customer Assessment.
 * Matches real form data values such as:
 * - customer_types: ["Individual", "Business", "Government", "NGO/Non-Profit"]
 * - business_size: "Micro (1–5 employees)", etc.
 * - premises_type: "Home-based", "Rented Office/Shop", etc.
 */
export function isDigitalCustomerEligible(profile: SmeProfile): boolean {
  const customerTypes = Array.isArray(profile.customer_types)
    ? profile.customer_types
    : (profile.customer_types || "").split(",").map((ct) => ct.trim());

  const validCustomerTypes =
    customerTypes.includes("Individual") || customerTypes.includes("Business");

  const validSizes = [
    "Micro (1–5 employees)",
    "Small (6–20 employees)",
    "Medium (21–50 employees)",
  ];

  const validIndustries = [
    "Retail",
    "Agriculture",
    "Hospitality",
    "Financial Services",
    "Information Technology",
    "Creative and Media",
  ];

  const validPremises = [
    "Rented Office/Shop",
    "Home-based",
    "Mobile/Online Only",
    "Shared Space",
  ];

  return (
    validCustomerTypes &&
    validSizes.includes(profile.business_size || "") &&
    validIndustries.includes(profile.industry || "") &&
    validPremises.includes(profile.premises_type || "")
  );
}

/**
 * --------------------------------------------------------------
 * DIGITAL OPERATIONS ELIGIBILITY
 * --------------------------------------------------------------
 */
export function isDigitalOperationsEligible(profile: SmeProfile): boolean {
  const numEmployees = profile.number_of_employees || 0;

  const validSizes = [
    "Small (6–20 employees)",
    "Medium (21–50 employees)",
    "Large (50+ employees)",
  ];

  const validIndustries = [
    "Retail",
    "Agriculture",
    "Education",
    "Healthcare",
    "Financial Services",
    "Construction",
    "Wholesale",
  ];

  const validPremises = ["Rented Office/Shop", "Owned Premises", "Office"];

  return (
    numEmployees > 1 &&
    validSizes.includes(profile.business_size || "") &&
    validIndustries.includes(profile.industry || "") &&
    validPremises.includes(profile.premises_type || "")
  );
}

/**
 * --------------------------------------------------------------
 * DIGITAL WORKSPACE ELIGIBILITY
 * --------------------------------------------------------------
 */
export function isDigitalWorkspaceEligible(profile: SmeProfile): boolean {
  const size = profile.business_size || "";
  const premises = profile.premises_type || "";
  const industry = profile.industry || "";

  if (size === "Medium (21–50 employees)" || size === "Large (50+ employees)")
    return true;

  if (premises === "Mobile/Online Only") return true;

  if (["Information Technology", "Education", "Creative and Media"].includes(industry)) {
    return ["Small (6–20 employees)", "Medium (21–50 employees)"].includes(size);
  }

  return false;
}

/**
 * --------------------------------------------------------------
 * UNIFIED ELIGIBILITY EVALUATOR WITH REDIRECT
 * --------------------------------------------------------------
 */
export function evaluateEligibility(profile: SmeProfile) {
  const digitalCustomer = isDigitalCustomerEligible(profile);
  const digitalOperations = isDigitalOperationsEligible(profile);
  const digitalWorkspace = isDigitalWorkspaceEligible(profile);

  // -------------------------------------------------------------------
  // Build a list of all eligible categories with their base routes
  // -------------------------------------------------------------------
  const eligibleCategories: { name: string; path: string }[] = [];

  if (digitalCustomer) {
    eligibleCategories.push({
      name: "Digital Customer",
      path: "/assessment/data-clinics-assessment/digital-customer",
    });
  }
  if (digitalOperations) {
    eligibleCategories.push({
      name: "Digital Operations",
      path: "/assessment/data-clinics-assessment/digital-operations",
    });
  }
  if (digitalWorkspace) {
    eligibleCategories.push({
      name: "Digital Workspace",
      path: "/assessment/data-clinics-assessment/digital-workspace",
    });
  }

  // -------------------------------------------------------------------
  // If no pillar qualifies, route to general page for manual assistance
  // -------------------------------------------------------------------
  const hasAnyEligibility = eligibleCategories.length > 0;
  const redirectPath = hasAnyEligibility
    ? eligibleCategories[0].path // Start with the first eligible pillar
    : "/assessment/data-clinics-assessment/general";

  // -------------------------------------------------------------------
  // Return structured eligibility metadata for flow management
  // -------------------------------------------------------------------
  return {
    digitalCustomer,
    digitalOperations,
    digitalWorkspace,
    eligibleCategories, // ordered array for chained flow
    currentCategory: eligibleCategories[0]?.name || null,
    redirectPath,
  };
}
