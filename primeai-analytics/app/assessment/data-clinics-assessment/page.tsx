"use client";
import { useState } from "react";
import AcquisitionChannelsForm from "../../components/assessments/data-clinics/digital-customer/AcquisitionChannelsForm";
// import RetentionMechanismForm from "../../components/assessments/data-clinics/digital-customer/RetentionMechanismForm";
// import CustomerEngagementForm from "../../components/assessments/data-clinics/digital-customer/CustomerEngagementForm";

export default function AssessmentPage() {
  const [step, setStep] = useState(0);

  // Register your form components in order
  const forms = [
    <AcquisitionChannelsForm key="acquisition" />,
    // <RetentionMechanismForm key="retention" />,
    // <CustomerEngagementForm key="engagement" />,
  ];

  const handleNext = () => {
    if (step < forms.length - 1) setStep(step + 1);
  };

  const handlePrev = () => {
    if (step > 0) setStep(step - 1);
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center py-10 px-4 mb-5"
      style={{
        background: "linear-gradient(135deg, #ffffff, #23bec8, #ffffff)",
      }}
    >
      <div className="bg-white/90 shadow-2xl rounded-xl p-8 w-full max-w-2xl border border-[#23bec8]/30">
        <h1 className="text-3xl font-bold text-center mb-6 text-[#23bec8]">
          Digital Customer Assessment
        </h1>

        
        {forms[step]}

        {/* Render current form 
        <div className="flex justify-between mt-8">
        <button
            onClick={handlePrev}
            disabled={step === 0}
            className={`px-6 py-2 rounded-md font-semibold transition-all duration-300 ${
            step === 0
                ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                : "bg-gradient-to-br from-white to-[#23bec8] text-black hover:bg-black hover:text-white"
            }`}
        >
            Previous
        </button> 

        <button
            onClick={handleNext}
            disabled={step === forms.length - 1}
            className={`px-6 py-2 rounded-md font-semibold transition-all duration-300 ${
            step === forms.length - 1
                ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                : "bg-gradient-to-br from-white to-[#23bec8] text-black hover:bg-[#23bec8] hover:text-white"
            }`}
        >
            Next
        </button>
        </div> */}

      </div>
    </div>
  );
}
