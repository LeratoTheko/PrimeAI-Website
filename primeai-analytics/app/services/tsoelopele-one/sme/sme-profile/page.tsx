"use client";

import { useState, useEffect, useRef, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";

function BusinessProfileFormInner() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(true);
  const [customerDropdownOpen, setCustomerDropdownOpen] = useState(false);

  const searchParams = useSearchParams();
  const emailQuery = searchParams.get("email")?.trim().toLowerCase();

  const dropdownRef = useRef<HTMLDivElement>(null);

  // Detect if user already has a profile
  const [isExistingUser, setIsExistingUser] = useState(false);

  const [formData, setFormData] = useState({
    business_name: "",
    registration_number: "",
    owner_name: "",
    owner_gender: "",
    owner_age_group: "",
    contact_number: "",
    email: emailQuery || "",
    location: "",
    industry: "",
    sub_industry: "",
    nature_of_business: "",
    customer_types: [] as string[],
    business_size: "",
    number_of_employees: "",
    estimated_monthly_revenue: "",
    estimated_monthly_expenses: "",
    premises_type: "",
  });

  const buttonGradient = "linear-gradient(125deg, #ffffff, #23bec8, #ffffff)";

  // ----------------------------------------
  // CONSTANT OPTIONS (unchanged)
  // ----------------------------------------
  const industryOptions = [
    "------",
    "Agriculture",
    "Manufacturing",
    "Retail",
    "Wholesale",
    "Construction",
    "Information Technology",
    "Financial Services",
    "Education",
    "Healthcare",
    "Hospitality",
    "Transport and Logistics",
    "Real Estate",
    "Creative and Media",
    "Other",
  ];

  const subIndustryMap: Record<string, string[]> = {
    Agriculture: ["Crop Farming", "Livestock Farming", "Agro-processing", "Forestry", "Fisheries", "Other"],
    Manufacturing: ["Food & Beverages", "Textiles & Apparel", "Furniture", "Chemicals", "Machinery", "Other"],
    Retail: ["Clothing", "Electronics", "Groceries", "Furniture", "Online Store", "Other"],
    Wholesale: ["Food & Beverages", "Electronics", "Clothing", "Raw Materials", "Other"],
    Construction: ["Residential", "Commercial", "Industrial", "Civil Engineering", "Other"],
    "Information Technology": ["Software Development", "IT Services", "Web & App Development", "Other"],
    "Financial Services": ["Banking", "Insurance", "Accounting", "Other"],
    Education: ["School", "Training Center", "Online Courses", "Other"],
    Healthcare: ["Clinic", "Pharmacy", "Laboratory", "Other"],
    Hospitality: ["Hotel", "Restaurant", "Cafe", "Other"],
    "Transport and Logistics": ["Trucking", "Courier", "Shipping", "Other"],
    "Real Estate": ["Sales", "Rental", "Property Management", "Other"],
    "Creative and Media": ["Advertising", "Design", "Media Production", "Other"],
    Other: ["Other"],
  };

  const subIndustryOptions = subIndustryMap[formData.industry] || ["Select Industry First"];

  const natureOfBusinessOptions = [
    "------",
    "Production",
    "Service Provider",
    "Retailer",
    "Wholesaler",
    "Distributor",
    "Consultant",
    "Freelancer",
    "Other",
  ];

  const customerTypeOptions = ["Individual", "Business", "Government", "NGO/Non-Profit", "Other"];

  const businessSizeOptions = [
    "------",
    "Micro (1–5 employees)",
    "Small (6–20 employees)",
    "Medium (21–50 employees)",
    "Large (50+ employees)",
  ];

  const premisesOptions = [
    "------",
    "Home-based",
    "Rented Office/Shop",
    "Owned Premises",
    "Shared Space",
    "Mobile/Online Only",
  ];

  // ----------------------------------------
  // FETCH PROFILE
  // ----------------------------------------
  useEffect(() => {
    const verifiedEmail = localStorage.getItem("smeEmail") || emailQuery || "";
    setFormData((prev) => ({ ...prev, email: verifiedEmail }));

    if (!verifiedEmail) {
      setLoading(false);
      return;
    }

    (async () => {
      try {
        const res = await fetch(`/api/sme-profile?email=${verifiedEmail}&type=profile`);
        if (res.ok) {
          const result = await res.json();
          if (result.success && result.profile) {
            const profile = result.profile;
            setIsExistingUser(true); // ← KEY LINE

            setFormData({
              business_name: profile.business_name || "",
              registration_number: profile.registration_number || "",
              owner_name: profile.owner_name || "",
              owner_gender: profile.owner_gender || "",
              owner_age_group: profile.owner_age_group || "",
              contact_number: profile.contact_number || "",
              email: profile.email || verifiedEmail,
              location: profile.location || "",
              industry: profile.industry || "",
              sub_industry: profile.sub_industry || "",
              nature_of_business: profile.nature_of_business || "",
              customer_types: profile.customer_types
                ? profile.customer_types.split(", ").map((s: string) => s.trim())
                : [],
              business_size: profile.business_size || "",
              number_of_employees: profile.number_of_employees?.toString() || "",
              estimated_monthly_revenue: profile.estimated_monthly_revenue?.toString() || "",
              estimated_monthly_expenses: profile.estimated_monthly_expenses?.toString() || "",
              premises_type: profile.premises_type || "",
            });
          }
        }
      } catch (error) {
        console.error("Error fetching existing profile:", error);
      } finally {
        setLoading(false);
      }
    })();
  }, [emailQuery]);

  // Close customer dropdown
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setCustomerDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // ----------------------------------------
  // FIELD CHANGE
  // ----------------------------------------
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    if (isExistingUser) return; // ← BLOCK Editing for existing users

    const target = e.target as HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;
    const { name, value } = target;

    if (name === "customer_types" && "checked" in target) {
      const checked = (target as HTMLInputElement).checked;
      let updated = [...formData.customer_types];
      if (checked) updated.push(value);
      else updated = updated.filter((v) => v !== value);
      setFormData({ ...formData, customer_types: updated });
    } else {
      setFormData({ ...formData, [name]: value });
    }

    setErrors({ ...errors, [name]: "" });
  };

  // ----------------------------------------
  // VALIDATION (only for new users)
  // ----------------------------------------
  const validateStep1 = () => {
    if (isExistingUser) return true;

    const newErrors: Record<string, string> = {};
    if (!formData.business_name) newErrors.business_name = "Business Name is required.";
    if (!formData.owner_name) newErrors.owner_name = "Owner Name is required.";
    if (!formData.contact_number) newErrors.contact_number = "Contact Number is required.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateStep2 = () => {
    if (isExistingUser) return true;

    const newErrors: Record<string, string> = {};
    if (!formData.industry || formData.industry === "------") newErrors.industry = "Industry is required.";
    if (!formData.sub_industry || formData.sub_industry === "Select Industry First")
      newErrors.sub_industry = "Sub-industry is required.";
    if (!formData.nature_of_business || formData.nature_of_business === "------")
      newErrors.nature_of_business = "Nature of business is required.";
    if (!formData.customer_types.length) newErrors.customer_types = "Customer type is required.";
    if (!formData.business_size || formData.business_size === "------")
      newErrors.business_size = "Business size is required.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // ----------------------------------------
  // STEP HANDLERS
  // ----------------------------------------
  const nextStep = () => {
    if (!validateStep1()) return;
    setStep(2);
  };

  const prevStep = () => setStep(1);

  // ----------------------------------------
  // SUBMIT (NEW USER ONLY)
  // ----------------------------------------
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isExistingUser) return; // Block submit for existing users

    if (!validateStep2()) return;

    try {
      const payload = {
        ...formData,
        number_of_employees: formData.number_of_employees
          ? Number(formData.number_of_employees)
          : null,
        estimated_monthly_revenue: formData.estimated_monthly_revenue
          ? Number(formData.estimated_monthly_revenue)
          : null,
        estimated_monthly_expenses: formData.estimated_monthly_expenses
          ? Number(formData.estimated_monthly_expenses)
          : null,
      };

      const res = await fetch("/api/sme-profile", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = await res.json();
      if (res.ok && result.data) {
        setSuccess(true);
        setErrors({});
        router.push(`/assessment/data-clinics-assessment?email=${encodeURIComponent(formData.email)}`);
      } else {
        setErrors({ submit: result.error || "Something went wrong. Please try again." });
      }
    } catch (error) {
      console.error(error);
      setErrors({ submit: "An unexpected error occurred. Please try again." });
    }
  };

  // ----------------------------------------
  // LOADING SCREEN
  // ----------------------------------------
  if (loading)
    return (
      <div className="flex h-screen items-center justify-center">
        <p className="animate-pulse text-gray-600">Loading SME details...</p>
      </div>
    );

  // ----------------------------------------
  // UI RENDER
  // ----------------------------------------
  return (
    <div className="min-h-screen mt-18 flex items-center justify-center p-6" style={{ background: buttonGradient }}>
      <div className="bg-white w-full max-w-5xl shadow-xl rounded">
        {/* HEADER */}
        <div className="w-full bg-black flex flex-col items-center py-4 rounded-t">
          <img src="/logo.png" alt="Logo" className="h-16 mb-2" />
          <h1 className="text-white text-3xl font-bold">SME Business Profiling</h1>
        </div>

        <div className="p-6">
          {/* SUCCESS MESSAGE */}
          {success ? (
            <div className="text-center py-8 space-y-4">
              <div className="bg-green-100 text-green-600 p-4 rounded-full inline-block">
                ✔
              </div>
              <h2 className="text-xl font-semibold text-green-700">
                Profile Submitted Successfully!
              </h2>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">

              {/* STEP 1 */}
              {step === 1 && (
                <div className="space-y-4">
                  <h2 className="text-xl font-semibold text-[#23bec8]">
                    Step 1: Business Identity
                  </h2>

                  <div className="grid grid-cols-2 gap-4 text-black">
                    {[
                      "business_name",
                      "registration_number",
                      "owner_name",
                      "owner_gender",
                      "owner_age_group",
                      "contact_number",
                      "email",
                      "location",
                    ].map((field) => {
                      const labelMap: Record<string, string> = {
                        business_name: "Business Name *",
                        registration_number: "Registration Number",
                        owner_name: "Owner Name *",
                        owner_gender: "Owner Gender",
                        owner_age_group: "Owner Age Group",
                        contact_number: "Contact Number *",
                        email: "Email (Verified)",
                        location: "Location",
                      };

                      const typeMap: Record<string, string> = {
                        email: "email",
                        contact_number: "text",
                        business_name: "text",
                        registration_number: "text",
                        owner_name: "text",
                        owner_gender: "select",
                        owner_age_group: "select",
                        location: "text",
                      };

                      const optionsMap: Record<string, string[]> = {
                        owner_gender: ["-----", "Male", "Female", "Other"],
                        owner_age_group: ["------", "18–25", "26–35", "36–45", "46–60", "60+"],
                      };

                      return (
                        <div key={field}>
                          <label className="block mb-1 font-semibold">{labelMap[field]}</label>

                          {typeMap[field] === "select" ? (
                            <select
                              name={field}
                              value={formData[field as keyof typeof formData]}
                              onChange={handleChange}
                              disabled={isExistingUser}
                              className={`w-full border border-[#23bec8] p-2 rounded ${
                                isExistingUser ? "bg-gray-100 cursor-not-allowed" : ""
                              }`}
                            >
                              {optionsMap[field].map((opt) => (
                                <option key={opt} value={opt}>
                                  {opt}
                                </option>
                              ))}
                            </select>
                          ) : (
                            <input
                              name={field}
                              type={typeMap[field]}
                              value={formData[field as keyof typeof formData]}
                              onChange={handleChange}
                              disabled={field === "email" || isExistingUser}
                              className={`w-full border border-[#23bec8] p-2 rounded ${
                                isExistingUser ? "bg-gray-100 cursor-not-allowed" : ""
                              }`}
                            />
                          )}

                          {errors[field] && (
                            <p className="text-red-500 text-sm mt-1">{errors[field]}</p>
                          )}
                        </div>
                      );
                    })}
                  </div>

                  <div className="flex justify-between mt-4">
                    {/* NEW USER → Next  
                        EXISTING USER → Continue */}
                    <button
                      type="button"
                      onClick={isExistingUser ? () => setStep(2) : nextStep}
                      style={{ background: buttonGradient }}
                      className="px-6 py-2 w-44 rounded text-black"
                    >
                      {isExistingUser ? "Continue" : "Next"}
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 2 */}
              {step === 2 && (
                <div className="space-y-4">
                  <h2 className="text-xl font-semibold text-[#23bec8]">
                    Step 2: Business Details
                  </h2>

                  <div className="grid grid-cols-2 gap-4 text-black">
                    {/* INDUSTRY */}
                    <div>
                      <label className="block mb-1 font-semibold">Industry *</label>
                      <select
                        name="industry"
                        value={formData.industry}
                        onChange={handleChange}
                        disabled={isExistingUser}
                        className={`w-full border border-[#23bec8] p-2 rounded ${
                          isExistingUser ? "bg-gray-100 cursor-not-allowed" : ""
                        }`}
                      >
                        {industryOptions.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                      {errors.industry && <p className="text-red-500 text-sm">{errors.industry}</p>}
                    </div>

                    {/* SUB-INDUSTRY */}
                    <div>
                      <label className="block mb-1 font-semibold">Sub-Industry *</label>
                      <select
                        name="sub_industry"
                        value={formData.sub_industry}
                        onChange={handleChange}
                        disabled={isExistingUser}
                        className={`w-full border border-[#23bec8] p-2 rounded ${
                          isExistingUser ? "bg-gray-100 cursor-not-allowed" : ""
                        }`}
                      >
                        {subIndustryOptions.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                      {errors.sub_industry && (
                        <p className="text-red-500 text-sm">{errors.sub_industry}</p>
                      )}
                    </div>

                    {/* NATURE OF BUSINESS */}
                    <div>
                      <label className="block mb-1 font-semibold">Nature of Business *</label>
                      <select
                        name="nature_of_business"
                        value={formData.nature_of_business}
                        onChange={handleChange}
                        disabled={isExistingUser}
                        className={`w-full border border-[#23bec8] p-2 rounded ${
                          isExistingUser ? "bg-gray-100 cursor-not-allowed" : ""
                        }`}
                      >
                        {natureOfBusinessOptions.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                      {errors.nature_of_business && (
                        <p className="text-red-500 text-sm">{errors.nature_of_business}</p>
                      )}
                    </div>

                    {/* CUSTOMER TYPES */}
                    <div className="relative" ref={dropdownRef}>
                      <label className="block mb-1 font-semibold">Customer Types *</label>

                      {/* Fake select */}
                      <div
                        onClick={() => !isExistingUser && setCustomerDropdownOpen(!customerDropdownOpen)}
                        className={`w-full border border-[#23bec8] p-2 rounded cursor-pointer bg-white relative ${
                          isExistingUser ? "bg-gray-100 cursor-not-allowed" : ""
                        }`}
                      >
                        {formData.customer_types.length
                          ? formData.customer_types.join(", ")
                          : "Select Customer Types"}

                        <svg
                          className={`w-3.5 h-3.5 absolute right-2 top-3 ${
                            customerDropdownOpen ? "rotate-180" : ""
                          }`}
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="3"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>

                      {/* DROPDOWN OPTIONS */}
                      {customerDropdownOpen && !isExistingUser && (
                        <div className="absolute z-10 mt-1 w-full border border-[#23bec8] bg-white rounded shadow-lg max-h-60 overflow-y-auto">
                          {customerTypeOptions.map((opt) => (
                            <label
                              key={opt}
                              className="flex items-center px-3 py-2 hover:bg-[#e6f9fa] cursor-pointer"
                            >
                              <input
                                type="checkbox"
                                name="customer_types"
                                value={opt}
                                checked={formData.customer_types.includes(opt)}
                                onChange={handleChange}
                                className="mr-2 accent-[#23bec8]"
                              />
                              {opt}
                            </label>
                          ))}
                        </div>
                      )}

                      {errors.customer_types && (
                        <p className="text-red-500 text-sm mt-1">{errors.customer_types}</p>
                      )}
                    </div>

                    {/* BUSINESS SIZE */}
                    <div>
                      <label className="block mb-1 font-semibold">Business Size *</label>
                      <select
                        name="business_size"
                        value={formData.business_size}
                        onChange={handleChange}
                        disabled={isExistingUser}
                        className={`w-full border border-[#23bec8] p-2 rounded ${
                          isExistingUser ? "bg-gray-100 cursor-not-allowed" : ""
                        }`}
                      >
                        {businessSizeOptions.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                      {errors.business_size && (
                        <p className="text-red-500 text-sm">{errors.business_size}</p>
                      )}
                    </div>

                    {/* EMPLOYEES */}
                    <div>
                      <label className="block mb-1 font-semibold">Number of Employees</label>
                      <input
                        type="number"
                        name="number_of_employees"
                        value={formData.number_of_employees}
                        onChange={handleChange}
                        disabled={isExistingUser}
                        className={`w-full border border-[#23bec8] p-2 rounded ${
                          isExistingUser ? "bg-gray-100 cursor-not-allowed" : ""
                        }`}
                      />
                    </div>

                    {/* REVENUE */}
                    <div>
                      <label className="block mb-1 font-semibold">Estimated Monthly Revenue</label>
                      <input
                        type="number"
                        name="estimated_monthly_revenue"
                        value={formData.estimated_monthly_revenue}
                        onChange={handleChange}
                        disabled={isExistingUser}
                        className={`w-full border border-[#23bec8] p-2 rounded ${
                          isExistingUser ? "bg-gray-100 cursor-not-allowed" : ""
                        }`}
                      />
                    </div>

                    {/* EXPENSES */}
                    <div>
                      <label className="block mb-1 font-semibold">Estimated Monthly Expenses</label>
                      <input
                        type="number"
                        name="estimated_monthly_expenses"
                        value={formData.estimated_monthly_expenses}
                        onChange={handleChange}
                        disabled={isExistingUser}
                        className={`w-full border border-[#23bec8] p-2 rounded ${
                          isExistingUser ? "bg-gray-100 cursor-not-allowed" : ""
                        }`}
                      />
                    </div>

                    {/* PREMISES */}
                    <div>
                      <label className="block mb-1 font-semibold">Premises Type</label>
                      <select
                        name="premises_type"
                        value={formData.premises_type}
                        onChange={handleChange}
                        disabled={isExistingUser}
                        className={`w-full border border-[#23bec8] p-2 rounded ${
                          isExistingUser ? "bg-gray-100 cursor-not-allowed" : ""
                        }`}
                      >
                        {premisesOptions.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* BUTTONS STEP 2 */}
                  <div className="flex justify-between mt-6">
                    {/* PREVIOUS ALWAYS SHOWN */}
                    <button
                      type="button"
                      onClick={prevStep}
                      className="bg-gradient-to-br from-white to-[#23bec8] text-black hover:bg-black hover:text-white"
                    >
                      Previous
                    </button>

                    {/* EXISTING USER → Continue  
                        NEW USER → Submit */}
                    {isExistingUser ? (
                      <button
                        type="button"
                        onClick={() =>
                          router.push(
                            `/assessment/data-clinics-assessment?email=${encodeURIComponent(
                              formData.email
                            )}`
                          )
                        }
                        style={{ background: buttonGradient }}
                        className="px-6 py-2 w-44 rounded text-black"
                      >
                        Continue →
                      </button>
                    ) : (
                      <button
                        type="submit"
                        style={{ background: buttonGradient }}
                        className="px-6 py-2 w-44 rounded text-black"
                      >
                        Submit
                      </button>
                    )}
                  </div>
                </div>
              )}
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

export default BusinessProfileFormInner;
