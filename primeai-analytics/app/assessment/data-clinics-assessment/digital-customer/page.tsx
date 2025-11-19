// AssessmentPage.tsx
"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import AcquisitionChannelsForm, { DigitalCustomerFormData } from "../../../components/assessments/data-clinics/digital-customer/AcquisitionChannelsForm";
import CustomerRetentionForm, { CustomerRetentionData } from "../../../components/assessments/data-clinics/digital-customer/CustomerRetentionForm";

export default function AssessmentPage() {
  const [step, setStep] = useState(0);
  const router = useRouter();
  // ✅ Centralized Full Assessment State
  const [formData, setFormData] = useState<DigitalCustomerFormData>({
    overallNotes: "",
    acquisitionChannel: {
      channelTypes: [],
      channelCount: "",
      diversityNotes: "",
      digitalToTraditionalRatio: "",
      averageConversionRate: "",
      effectivenessMeasure: "",
      journeyIntegrationLevel: "",
      trackingTools: [],
      hasTrackingSystem: false,
      trackingNotes: "",
      knowsTopPerformingChannel: false,
      contentMarketFitQuality: "",
      paidPercentage: "",
      organicPercentage: "",
      experimentsRunRecently: false,
      hasReferralProgram: false,
      partnershipExamples: "",
    }
  });

  const [retentionData, setRetentionData] = useState<CustomerRetentionData>({
    strategyPlanningScore: 0,
    strategyPlanningNotes: "",
    retentionTrackingScore: 0,
    retentionTrackingNotes: "",

    relationshipSystemsScore: 0,
    relationshipSystemsNotes: "",
    loyaltyRecognitionScore: 0,
    loyaltyRecognitionNotes: "",

    experienceMonitoringScore: 0,
    experienceMonitoringNotes: "",
    trustRecoveryScore: 0,
    trustRecoveryNotes: "",

    customerDataUsageScore: 0,
    customerDataUsageNotes: "",
    valueTrackingScore: 0,
    valueTrackingNotes: "",

    postSaleEngagementScore: 0,
    postSaleEngagementNotes: "",
    outreachFrequencyScore: 0,
    outreachFrequencyNotes: "",

    retentionAdaptationScore: 0,
    retentionAdaptationNotes: "",
    brandCommunityScore: 0,
    brandCommunityNotes: "",
  });

  // 👇 Add forms in order (Acquisition → Retention)
  const forms = [
    <AcquisitionChannelsForm key="acquisition" formData={formData} setFormData={setFormData} />,
    <CustomerRetentionForm key="retention" formData={retentionData} setFormData={setRetentionData} />,
  ];


  const handleNext = () => {
    if (step < forms.length - 1) setStep(step + 1);
  };

  const handlePrev = () => {
    if (step > 0) setStep(step - 1);
  };



  const handleSubmit = async () => {
    const cleanedData = {
      ...formData,
      acquisitionChannel: {
        ...formData.acquisitionChannel,
        channelCount: formData.acquisitionChannel.channelCount
          ? parseInt(formData.acquisitionChannel.channelCount)
          : null,
        digitalToTraditionalRatio: formData.acquisitionChannel.digitalToTraditionalRatio
          ? parseFloat(formData.acquisitionChannel.digitalToTraditionalRatio)
          : null,
        averageConversionRate: formData.acquisitionChannel.averageConversionRate
          ? parseFloat(formData.acquisitionChannel.averageConversionRate)
          : null,
        paidPercentage: formData.acquisitionChannel.paidPercentage
          ? parseFloat(formData.acquisitionChannel.paidPercentage)
          : null,
        organicPercentage: formData.acquisitionChannel.organicPercentage
          ? parseFloat(formData.acquisitionChannel.organicPercentage)
          : null,
      },
      customerRetention: retentionData,
    };

    const res = await fetch("/api/assessments/data-clinics-assessment/digital-customer/full-submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(cleanedData),
    });

    if (res.ok) {
      alert("Full Assessment Submitted Successfully!");

      // -------------------------------
      // Multi-Pillar Flow
      // -------------------------------
      const eligible = JSON.parse(sessionStorage.getItem("eligibleCategories") || "[]");
      
      // find current pillar index
      const currentIndex = eligible.findIndex(
        (e: any) => e.path === "/assessment/data-clinics-assessment/digital-customer"
      );

      // move to next pillar if available
      if (currentIndex >= 0 && currentIndex < eligible.length - 1) {
        router.push(eligible[currentIndex + 1].path);
      } else {
        router.push("/assessment/data-clinics-assessment/complete");
      }

    } else {
      alert("Error submitting assessment.");
    }
  };



  return (
    <div
      className="min-h-screen flex items-center justify-center py-10 px-4 mb-5"
      style={{ background: "linear-gradient(135deg, #ffffff, #23bec8, #ffffff)" }}
    >
      <div className="bg-white/90 shadow-2xl rounded-xl p-8 w-full max-w-2xl border border-[#23bec8]/30">
        <h1 className="text-3xl font-bold text-center mb-6 text-[#23bec8]">
          Digital Customer Assessment
        </h1>

        {forms[step]}

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

          {step === forms.length - 1 ? (
            <button
              onClick={handleSubmit}
              className="px-6 py-2 rounded-md font-semibold transition-all duration-300 bg-gradient-to-br from-white to-[#23bec8] text-black hover:bg-[#23bec8] hover:text-white"
            >
              Submit Assessment
            </button>
          ) : (
            <button
              onClick={handleNext}
              className="px-6 py-2 rounded-md font-semibold transition-all duration-300 bg-gradient-to-br from-white to-[#23bec8] text-black hover:bg-[#23bec8] hover:text-white"
            >
              Next
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
