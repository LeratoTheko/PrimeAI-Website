"use client";

import { useState, useEffect, useRef } from "react";
import { useSearchParams, useRouter } from "next/navigation";

export default function BusinessProfileForm() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(true);
  const [customerDropdownOpen, setCustomerDropdownOpen] = useState(false);

  const searchParams = useSearchParams();
  const emailQuery = searchParams.get("email")?.trim().toLowerCase();

  const dropdownRef = useRef<HTMLDivElement>(null);

  const [formData, setFormData] = useState({
    business_name: "",
    registration_number: "",
    owner_name: "",
    owner_gender: "",
    owner_age_group: "",
    contact_number: "",
    email: "",
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

  // ✅ Auto-fill verified email from OTP verification
  useEffect(() => {
    const verifiedEmail = localStorage.getItem("smeEmail") || emailQuery || "";
    setFormData((prev) => ({ ...prev, email: verifiedEmail }));
    setLoading(false);
  }, [emailQuery]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setCustomerDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // ✅ Fixed TypeScript-safe input handler
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
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

  const validateStep1 = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.business_name) newErrors.business_name = "Business Name is required.";
    if (!formData.owner_name) newErrors.owner_name = "Owner Name is required.";
    if (!formData.contact_number) newErrors.contact_number = "Contact Number is required.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateStep2 = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.industry || formData.industry === "------")
      newErrors.industry = "Industry is required.";
    if (
      !formData.sub_industry ||
      formData.sub_industry === "Select Industry First"
    )
      newErrors.sub_industry = "Sub-industry is required.";
    if (
      !formData.nature_of_business ||
      formData.nature_of_business === "------"
    )
      newErrors.nature_of_business = "Nature of business is required.";
    if (!formData.customer_types.length)
      newErrors.customer_types = "Customer type is required.";
    if (!formData.business_size || formData.business_size === "------")
      newErrors.business_size = "Business size is required.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const nextStep = () => {
    if (!validateStep1()) return;
    setStep(2);
  };
  const prevStep = () => setStep(1);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
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

        router.push('/assessment/data-clinics-assessment');
      } else {
        setErrors({
          submit: result.error || "Something went wrong. Please try again.",
        });
      }
    } catch (error) {
      console.error(error);
      setErrors({ submit: "An unexpected error occurred. Please try again." });
    }
  };

  const resetForm = () => {
    setFormData({
      business_name: "",
      registration_number: "",
      owner_name: "",
      owner_gender: "",
      owner_age_group: "",
      contact_number: "",
      email: formData.email, // ✅ Keep verified email after reset
      location: "",
      industry: "",
      sub_industry: "",
      nature_of_business: "",
      customer_types: [],
      business_size: "",
      number_of_employees: "",
      estimated_monthly_revenue: "",
      estimated_monthly_expenses: "",
      premises_type: "",
    });
    setStep(1);
    setSuccess(false);
    setErrors({});
  };

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
    Wholesale: ["Consumer Goods", "Industrial Goods", "Agricultural Inputs", "Machinery", "Other"],
    Construction: ["Building Contractors", "Electrical", "Plumbing", "Architecture", "Civil Engineering", "Other"],
    "Information Technology": ["Software Development", "IT Support", "Networking", "Web Development", "Cybersecurity", "Other"],
    "Financial Services": ["Banking", "Insurance", "Microfinance", "FinTech", "Accounting", "Other"],
    Education: ["Primary/Secondary", "Tertiary", "Vocational Training", "Tutoring", "E-Learning", "Other"],
    Healthcare: ["Clinic", "Pharmacy", "Medical Supplies", "Health Consultancy", "Wellness & Fitness", "Other"],
    Hospitality: ["Restaurant", "Lodging/Hotel", "Tourism", "Catering", "Event Planning", "Other"],
    "Transport and Logistics": ["Freight Transport", "Taxi/Commuter Services", "Courier & Delivery", "Warehousing", "Other"],
    "Real Estate": ["Property Development", "Property Management", "Rental Services", "Land Surveying", "Other"],
    "Creative and Media": ["Graphic Design", "Film & Photography", "Music & Audio", "Advertising", "Publishing", "Other"],
    Other: ["Other"],
  };

  const subIndustryOptions =
    subIndustryMap[formData.industry] || ["Select Industry First"];
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

  if (loading)
    return (
      <div className="flex h-screen items-center justify-center">
        <p className="animate-pulse text-gray-600">Loading SME details...</p>
      </div>
    );

  return (
    <div
      className="min-h-screen mt-18 flex items-center justify-center p-6"
      style={{ background: buttonGradient }}
    >
      <div className="bg-white w-full max-w-5xl shadow-xl rounded">
        {/* Header */}
        <div className="w-full bg-black flex flex-col items-center py-4 rounded-t">
          <img src="/logo.png" alt="Logo" className="h-16 mb-2" />
          <h1 className="text-white text-3xl font-bold">SME Business Profiling</h1>
        </div>

        <div className="p-6">
          {success ? (
            <div className="text-center py-8 space-y-4">
              <div className="bg-green-100 text-green-600 p-4 rounded-full inline-block">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-xl font-semibold text-green-700">Profile Submitted Successfully!</h2>
              <button onClick={resetForm} className="px-6 py-2 w-44 rounded text-white bg-green-600 hover:bg-green-700">
                Create Another Profile
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Step 1 */}
              {step === 1 && (
                <div className="space-y-4">
                  <h2 className="text-xl font-semibold text-[#23bec8]">Step 1: Business Identity</h2>
                  <div className="grid grid-cols-2 gap-4 text-black">
                    {["business_name","registration_number","owner_name","owner_gender","owner_age_group","contact_number","email","location"].map(field => {
                      const labelMap: Record<string,string> = {
                        business_name:"Business Name *",
                        registration_number:"Registration Number",
                        owner_name:"Owner Name *",
                        owner_gender:"Owner Gender",
                        owner_age_group:"Owner Age Group",
                        contact_number:"Contact Number *",
                        email:"Email (Verified)",
                        location:"Location"
                      };
                      const typeMap: Record<string,string> = {
                        email:"email", contact_number:"text", business_name:"text",
                        registration_number:"text", owner_name:"text", owner_gender:"select",
                        owner_age_group:"select", location:"text"
                      };
                      const optionsMap: Record<string,string[]> = {
                        owner_gender:["-----","Male","Female","Other"],
                        owner_age_group:["------","18–25","26–35","36–45","46–60","60+"]
                      };
                      return (
                        <div key={field}>
                          <label className="block mb-1 font-semibold">{labelMap[field]}</label>
                          {typeMap[field] === "select" ? (
                            <select
                              name={field}
                              value={formData[field as keyof typeof formData]}
                              onChange={handleChange}
                              className="w-full border border-[#23bec8] p-2 rounded focus:ring-2 focus:ring-[#23bec8]"
                            >
                              {optionsMap[field].map(opt => <option key={opt} value={opt}>{opt}</option>)}
                            </select>
                          ) : (
                            <input
                              name={field}
                              type={typeMap[field]}
                              value={formData[field as keyof typeof formData]}
                              onChange={handleChange}
                              disabled={field === "email"}
                              className={`w-full border border-[#23bec8] p-2 rounded focus:ring-2 focus:ring-[#23bec8] ${
                                field === "email" ? "bg-gray-100 text-gray-700 cursor-not-allowed" : ""
                              }`}
                            />
                          )}
                          {errors[field] && <p className="text-red-500 text-sm mt-1">{errors[field]}</p>}
                        </div>
                      )
                    })}
                  </div>
                  <div className="flex justify-between mt-4">
                    <button type="button" style={{ background: buttonGradient }} className="px-6 py-2 w-44 rounded text-black" onClick={resetForm}>Reset</button>
                    <button type="button" style={{ background: buttonGradient }} className="px-6 py-2 w-44 rounded text-black" onClick={nextStep}>Next</button>
                  </div>
                </div>
              )}

              {/* Step 2 */}
              {step === 2 && (
                <div className="space-y-4">
                  <h2 className="text-xl font-semibold text-[#23bec8]">Step 2: Business Details</h2>
                  <div className="grid grid-cols-2 gap-4">
                    {/* Industry */}
                    <div>
                      <label className="block mb-1 font-semibold text-black">Industry *</label>
                      <select name="industry" value={formData.industry} onChange={handleChange} className="w-full border border-[#23bec8] p-2 rounded focus:ring-2 focus:ring-[#23bec8] text-black">
                        {industryOptions.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                      </select>
                      {errors.industry && <p className="text-red-500 text-sm mt-1">{errors.industry}</p>}
                    </div>

                    {/* Sub-Industry */}
                    <div>
                      <label className="block mb-1 font-semibold">Sub-Industry *</label>
                      <select name="sub_industry" value={formData.sub_industry} onChange={handleChange} className="w-full border border-[#23bec8] p-2 rounded focus:ring-2 focus:ring-[#23bec8] text-black">
                        {subIndustryOptions.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                      </select>
                      {errors.sub_industry && <p className="text-red-500 text-sm mt-1">{errors.sub_industry}</p>}
                    </div>

                    {/* Nature of Business */}
                    <div>
                      <label className="block mb-1 font-semibold text-black">Nature of Business *</label>
                      <select name="nature_of_business" value={formData.nature_of_business} onChange={handleChange} className="w-full border border-[#23bec8] p-2 rounded focus:ring-2 focus:ring-[#23bec8] text-black">
                        {natureOfBusinessOptions.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                      </select>
                      {errors.nature_of_business && <p className="text-red-500 text-sm mt-1">{errors.nature_of_business}</p>}
                    </div>

                   {/* Customer Types */}
                    <div ref={dropdownRef} className="relative">
                      <label className="block mb-1 font-semibold text-black">Customer Types *</label>

                      {/* Dropdown box (styled like select with arrow) */}
                      <div
                        className={`w-full border border-[#23bec8] p-2 rounded cursor-pointer bg-white relative flex justify-between items-center focus-within:ring-2 focus-within:ring-[#23bec8] text-black ${
                          customerDropdownOpen ? "ring-2 ring-[#23bec8]" : ""
                        }`}
                        onClick={() => setCustomerDropdownOpen(!customerDropdownOpen)}
                      >
                        <span className="text-black">
                          {formData.customer_types.length
                            ? formData.customer_types.join(", ")
                            : "Select Customer Types"}
                        </span>

                        
                        {/* Arrow icon like select */}
                      <svg
                        className={`w-3.5 h-3.5 text-black transition-transform duration-200 absolute right-0.5 top-1/2 -translate-y-1/2 text-black ${
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

                      {/* Dropdown options */}
                      {customerDropdownOpen && (
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



                    {/* Business Size */}
                    <div>
                      <label className="block mb-1 font-semibold text-black">Business Size *</label>
                      <select name="business_size" value={formData.business_size} onChange={handleChange} className="w-full border border-[#23bec8] p-2 rounded focus:ring-2 focus:ring-[#23bec8] text-black">
                        {businessSizeOptions.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                      </select>
                      {errors.business_size && <p className="text-red-500 text-sm mt-1">{errors.business_size}</p>}
                    </div>

                    {/* Employees / Revenue / Expenses */}
                    <div>
                      <label className="block mb-1 font-semibold text-black">Number of Employees</label>
                      <input type="number" name="number_of_employees" value={formData.number_of_employees} onChange={handleChange} className="w-full border border-[#23bec8] p-2 rounded focus:ring-2 focus:ring-[#23bec8] text-black" />
                    </div>

                    <div>
                      <label className="block mb-1 font-semibold text-black">Estimated Monthly Revenue</label>
                      <input type="number" name="estimated_monthly_revenue" value={formData.estimated_monthly_revenue} onChange={handleChange} className="w-full border border-[#23bec8] p-2 rounded focus:ring-2 focus:ring-[#23bec8] text-black" />
                    </div>

                    <div>
                      <label className="block mb-1 font-semibold text-black">Estimated Monthly Expenses</label>
                      <input type="number" name="estimated_monthly_expenses" value={formData.estimated_monthly_expenses} onChange={handleChange} className="w-full border border-[#23bec8] p-2 rounded focus:ring-2 focus:ring-[#23bec8] text-black" />
                    </div>

                    {/* Premises */}
                    <div>
                      <label className="block mb-1 font-semibold text-black">Premises Type</label>
                      <select name="premises_type" value={formData.premises_type} onChange={handleChange} className="w-full border border-[#23bec8] p-2 rounded focus:ring-2 focus:ring-[#23bec8] text-black">
                        {premisesOptions.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                      </select>
                    </div>
                  </div>

                  {/* Buttons */}
                  <div className="flex justify-between mt-4">
                    <button type="button" onClick={prevStep} className="px-6 py-2 w-44 rounded text-black" style={{ background: buttonGradient }}>
                      Back
                    </button>
                    <button type="submit" className="px-6 py-2 w-44 rounded text-black" style={{ background: buttonGradient }}>
                      Submit
                    </button>
                  </div>

                  {errors.submit && <p className="text-red-600 text-center mt-2">{errors.submit}</p>}
                </div>
                
              )}
              
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
