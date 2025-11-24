"use client";

import { useState, useEffect, useRef } from "react";
import { useSearchParams, useRouter } from "next/navigation";

function BusinessProfileFormInner() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(true);

  const searchParams = useSearchParams();
  const emailQuery = searchParams.get("email")?.trim().toLowerCase();

  const [isExistingUser, setIsExistingUser] = useState(false);
  const [canEdit, setCanEdit] = useState(false);
  const [originalProfile, setOriginalProfile] = useState<any>({});

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

  const dropdownRef = useRef<HTMLDivElement>(null);
  const buttonGradient = "linear-gradient(125deg, #ffffff, #23bec8, #ffffff)";

  // -------------------------------
  // OPTIONS
  // -------------------------------
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

  // -------------------------------
  // FETCH EXISTING PROFILE
  // -------------------------------
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
            const profileData = {
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
            };
            setFormData(profileData);
            setOriginalProfile(profileData);
            setIsExistingUser(true);
          }
        }
      } catch (error) {
        console.error("Error fetching existing profile:", error);
      } finally {
        setLoading(false);
      }
    })();
  }, [emailQuery]);

  // Close dropdown on outside click (optional)
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        // dropdown logic if needed
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // -------------------------------
  // FIELD CHANGE
  // -------------------------------
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    if (isExistingUser && !canEdit) return;

    const { name, value, type } = e.target;

    if (name === "customer_types" && type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      let updated = [...formData.customer_types];
      if (checked) updated.push(value);
      else updated = updated.filter((v) => v !== value);
      setFormData({ ...formData, customer_types: updated });
    } else {
      setFormData({ ...formData, [name]: value });
    }

    setErrors({ ...errors, [name]: "" });
  };

  // -------------------------------
  // VALIDATION
  // -------------------------------
  const validateStep1 = () => {
    if (isExistingUser && !canEdit) return true;
    const newErrors: Record<string, string> = {};
    if (!formData.business_name) newErrors.business_name = "Business Name is required.";
    if (!formData.owner_name) newErrors.owner_name = "Owner Name is required.";
    if (!formData.contact_number) newErrors.contact_number = "Contact Number is required.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateStep2 = () => {
    if (isExistingUser && !canEdit) return true;
    const newErrors: Record<string, string> = {};
    if (!formData.industry || formData.industry === "------") newErrors.industry = "Industry is required.";
    if (!formData.sub_industry || formData.sub_industry === "Select Industry First") newErrors.sub_industry = "Sub-industry is required.";
    if (!formData.nature_of_business || formData.nature_of_business === "------") newErrors.nature_of_business = "Nature of business is required.";
    if (!formData.customer_types.length) newErrors.customer_types = "Customer type is required.";
    if (!formData.business_size || formData.business_size === "------") newErrors.business_size = "Business size is required.";
    if (!formData.premises_type || formData.premises_type === "------") newErrors.premises_type = "Premises type is required.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const nextStep = () => { if (!validateStep1()) return; setStep(2); };
  const prevStep = () => setStep(1);

  // -------------------------------
  // SUBMIT
  // -------------------------------
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isExistingUser && !canEdit) return;
    if (!validateStep2()) return;

    try {
      const payload = {
        ...formData,
        number_of_employees: formData.number_of_employees ? Number(formData.number_of_employees) : null,
        estimated_monthly_revenue: formData.estimated_monthly_revenue ? Number(formData.estimated_monthly_revenue) : null,
        estimated_monthly_expenses: formData.estimated_monthly_expenses ? Number(formData.estimated_monthly_expenses) : null,
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

  if (loading) return (
    <div className="flex h-screen items-center justify-center">
      <p className="animate-pulse text-gray-600">Loading SME details...</p>
    </div>
  );

  // -------------------------------
  // RENDER
  // -------------------------------
  return (
    <div className="min-h-screen mt-18 flex items-center justify-center p-6" style={{ background: buttonGradient }}>
      <div className="bg-white w-full max-w-5xl shadow-xl rounded">
        {/* HEADER */}
        <div className="w-full bg-black flex flex-col items-center py-4 rounded-t">
          <img src="/logo.png" alt="Logo" className="h-16 mb-2" />
          <h1 className="text-white text-3xl font-bold">SME Business Profiling</h1>
        </div>

        <div className="p-6">
          {success ? (
            <div className="text-center py-8 space-y-4">
              <div className="bg-green-100 text-green-600 p-4 rounded-full inline-block">✔</div>
              <h2 className="text-xl font-semibold text-green-700">Profile Submitted Successfully!</h2>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* EDIT BUTTON */}
              {isExistingUser && !canEdit && (
                <button
                  type="button"
                  onClick={() => setCanEdit(true)}
                  className="px-4 py-2 bg-[#23bec8] text-white rounded mb-4"
                >
                  Edit
                </button>
              )}

              {/* STEP 1 */}
              {step === 1 && (
                <div className="space-y-4">
                  <h2 className="text-xl font-semibold text-[#23bec8]">Step 1: Business Identity</h2>
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
                              disabled={field === "email" || (isExistingUser && !canEdit)}
                              className={`w-full border border-[#23bec8] p-2 rounded ${isExistingUser && !canEdit ? "bg-gray-100 cursor-not-allowed" : ""}`}
                            >
                              {optionsMap[field].map((opt) => (
                                <option key={opt} value={opt}>{opt}</option>
                              ))}
                            </select>
                          ) : (
                            <input
                              name={field}
                              type={typeMap[field]}
                              value={formData[field as keyof typeof formData]}
                              onChange={handleChange}
                              disabled={field === "email" || (isExistingUser && !canEdit)}
                              className={`w-full border border-[#23bec8] p-2 rounded ${isExistingUser && !canEdit ? "bg-gray-100 cursor-not-allowed" : ""}`}
                            />
                          )}
                          {errors[field] && <p className="text-red-500 text-sm mt-1">{errors[field]}</p>}
                        </div>
                      );
                    })}
                  </div>

                  <div className="flex justify-end mt-4">
                    <button
                      type="button"
                      onClick={nextStep}
                      style={{ background: buttonGradient }}
                      className="px-6 py-2 w-44 rounded text-black"
                    >
                      Next
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 2 */}
              {step === 2 && (
                <div className="space-y-4">
                  <h2 className="text-xl font-semibold text-[#23bec8]">Step 2: Business Details</h2>
                  <div className="grid grid-cols-2 gap-4 text-black">
                    {/* Industry */}
                    <div>
                      <label className="block mb-1 font-semibold">Industry *</label>
                      <select
                        name="industry"
                        value={formData.industry}
                        onChange={handleChange}
                        disabled={isExistingUser && !canEdit}
                        className={`w-full border border-[#23bec8] p-2 rounded ${isExistingUser && !canEdit ? "bg-gray-100 cursor-not-allowed" : ""}`}
                      >
                        {industryOptions.map((opt) => (
                          <option key={opt} value={opt}>{opt}</option>
                        ))}
                      </select>
                      {errors.industry && <p className="text-red-500 text-sm mt-1">{errors.industry}</p>}
                    </div>

                    {/* Sub-industry */}
                    <div>
                      <label className="block mb-1 font-semibold">Sub-industry *</label>
                      <select
                        name="sub_industry"
                        value={formData.sub_industry}
                        onChange={handleChange}
                        disabled={isExistingUser && !canEdit || !formData.industry || formData.industry === "------"}
                        className={`w-full border border-[#23bec8] p-2 rounded ${isExistingUser && !canEdit ? "bg-gray-100 cursor-not-allowed" : ""}`}
                      >
                        {(subIndustryMap[formData.industry] || ["Select Industry First"]).map((opt) => (
                          <option key={opt} value={opt}>{opt}</option>
                        ))}
                      </select>
                      {errors.sub_industry && <p className="text-red-500 text-sm mt-1">{errors.sub_industry}</p>}
                    </div>

                    {/* Nature of business */}
                    <div>
                      <label className="block mb-1 font-semibold">Nature of Business *</label>
                      <select
                        name="nature_of_business"
                        value={formData.nature_of_business}
                        onChange={handleChange}
                        disabled={isExistingUser && !canEdit}
                        className={`w-full border border-[#23bec8] p-2 rounded ${isExistingUser && !canEdit ? "bg-gray-100 cursor-not-allowed" : ""}`}
                      >
                        {natureOfBusinessOptions.map((opt) => (
                          <option key={opt} value={opt}>{opt}</option>
                        ))}
                      </select>
                      {errors.nature_of_business && <p className="text-red-500 text-sm mt-1">{errors.nature_of_business}</p>}
                    </div>

                    {/* Business Size */}
                    <div>
                      <label className="block mb-1 font-semibold">Business Size *</label>
                      <select
                        name="business_size"
                        value={formData.business_size}
                        onChange={handleChange}
                        disabled={isExistingUser && !canEdit}
                        className={`w-full border border-[#23bec8] p-2 rounded ${isExistingUser && !canEdit ? "bg-gray-100 cursor-not-allowed" : ""}`}
                      >
                        {businessSizeOptions.map((opt) => (
                          <option key={opt} value={opt}>{opt}</option>
                        ))}
                      </select>
                      {errors.business_size && <p className="text-red-500 text-sm mt-1">{errors.business_size}</p>}
                    </div>

                    {/* Customer Types */}
                    <div className="col-span-2">
                      <label className="block mb-1 font-semibold">Customer Types *</label>
                      <div className="flex flex-wrap gap-2">
                        {customerTypeOptions.map((type) => (
                          <label key={type} className="flex items-center gap-1">
                            <input
                              type="checkbox"
                              name="customer_types"
                              value={type}
                              checked={formData.customer_types.includes(type)}
                              onChange={handleChange}
                              disabled={isExistingUser && !canEdit}
                            />
                            {type}
                          </label>
                        ))}
                      </div>
                      {errors.customer_types && <p className="text-red-500 text-sm mt-1">{errors.customer_types}</p>}
                    </div>

                    {/* Number of employees */}
                    <div>
                      <label className="block mb-1 font-semibold">Number of Employees</label>
                      <input
                        name="number_of_employees"
                        type="number"
                        value={formData.number_of_employees}
                        onChange={handleChange}
                        disabled={isExistingUser && !canEdit}
                        className={`w-full border border-[#23bec8] p-2 rounded ${isExistingUser && !canEdit ? "bg-gray-100 cursor-not-allowed" : ""}`}
                      />
                    </div>

                    {/* Estimated monthly revenue */}
                    <div>
                      <label className="block mb-1 font-semibold">Estimated Monthly Revenue</label>
                      <input
                        name="estimated_monthly_revenue"
                        type="number"
                        value={formData.estimated_monthly_revenue}
                        onChange={handleChange}
                        disabled={isExistingUser && !canEdit}
                        className={`w-full border border-[#23bec8] p-2 rounded ${isExistingUser && !canEdit ? "bg-gray-100 cursor-not-allowed" : ""}`}
                      />
                    </div>

                    {/* Estimated monthly expenses */}
                    <div>
                      <label className="block mb-1 font-semibold">Estimated Monthly Expenses</label>
                      <input
                        name="estimated_monthly_expenses"
                        type="number"
                        value={formData.estimated_monthly_expenses}
                        onChange={handleChange}
                        disabled={isExistingUser && !canEdit}
                        className={`w-full border border-[#23bec8] p-2 rounded ${isExistingUser && !canEdit ? "bg-gray-100 cursor-not-allowed" : ""}`}
                      />
                    </div>

                    {/* Premises type */}
                    <div>
                      <label className="block mb-1 font-semibold">Premises Type *</label>
                      <select
                        name="premises_type"
                        value={formData.premises_type}
                        onChange={handleChange}
                        disabled={isExistingUser && !canEdit}
                        className={`w-full border border-[#23bec8] p-2 rounded ${isExistingUser && !canEdit ? "bg-gray-100 cursor-not-allowed" : ""}`}
                      >
                        {premisesOptions.map((opt) => (
                          <option key={opt} value={opt}>{opt}</option>
                        ))}
                      </select>
                      {errors.premises_type && <p className="text-red-500 text-sm mt-1">{errors.premises_type}</p>}
                    </div>
                  </div>

                  {/* Buttons */}
                  <div className="flex justify-between mt-6">
                    <button type="button" onClick={prevStep} className="bg-gray-200 text-gray-500 px-6 py-2 w-44 rounded">Previous</button>

                    {isExistingUser && canEdit ? (
                      <>
                        <button type="submit" style={{ background: buttonGradient }} className="px-6 py-2 w-44 rounded text-black">Save Changes</button>
                        <button type="button" onClick={() => { setFormData(originalProfile); setCanEdit(false); }} className="px-6 py-2 w-44 rounded bg-gray-200 text-black">Cancel</button>
                      </>
                    ) : isExistingUser ? (
                      <button type="button" onClick={() => router.push(`/assessment/data-clinics-assessment?email=${encodeURIComponent(formData.email)}`)} style={{ background: buttonGradient }} className="px-6 py-2 w-44 rounded text-black">Continue →</button>
                    ) : (
                      <button type="submit" style={{ background: buttonGradient }} className="px-6 py-2 w-44 rounded text-black">Submit</button>
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
