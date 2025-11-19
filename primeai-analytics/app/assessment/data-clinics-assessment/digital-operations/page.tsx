"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

// Import your standalone forms and types
import BusinessContextForm, { BusinessContextData } from "../../../components/assessments/data-clinics/digital-operations/BusinessContextForm";
import DataRecordingForm, { DataRecordingData } from "../../../components/assessments/data-clinics/digital-operations/DataRecordingForm";
import BusinessIntelligenceForm, { BusinessIntelligenceData } from "../../../components/assessments/data-clinics/digital-operations/BusinessIntelligenceForm";


export default function AssessmentPage() {
    const router = useRouter();
    const [step, setStep] = useState(0);

    // Centralized full assessment state
    const [businessContextData, setBusinessContextData] = useState<BusinessContextData>({
        devices: [],
        deviceCount: "",
        internetType: "",
        internetSpeedMbps: "",
        internetReliability: "",
        automationTools: [],
        automatedProcesses: "",
        integratedSystems: [],
        productAnalysisMethods: [],
        dashboardsAvailable: false,
    });


    const [dataRecordingData, setDataRecordingData] = useState<DataRecordingData>({
        salesRecording: "",
        expensesRecording: "",
        inventoryRecording: "",
        recordBackup: "",
        updateFrequency: "",
        profitReview: "",
        dataAccuracy: "",
        dataCompleteness: "",
        dataConsistency: "",
        recordingTools: [],
        automationLevel: "",
        centralizedStorage: false,
        accessibility: "",
        sharedAcrossTeams: false,
        reportsGenerated: [],
        decisionSupport: "",
        complianceStandards: [],
        dataRetentionPolicy: "",
    });


    const [businessIntelligenceData, setBusinessIntelligenceData] = useState<BusinessIntelligenceData>({
        biTools: [],
        integrationLevel: "",
        dataSources: [],
        historicalDataAvailability: "",
        forecastModelsUsed: [],
        forecastAccuracy: "",
        forecastFrequency: "",
        dashboardUsage: "",
        reportsGenerated: [],
        reportFrequency: "",
        dataVisualization: "",
        insightQuality: "",
        decisionBasedOnBI: "",
        departmentsUsingBI: [],
        decisionSpeed: "",
        biAutomationLevel: "",
        dataGovernanceLevel: "",
        biSkills: [],
        staffBITraining: false,
        biChallenges: [],
    });



    // Forms in order
    const forms = [
        <BusinessContextForm key="businessContext" formData={businessContextData} setFormData={setBusinessContextData} />,
        <DataRecordingForm key="dataRecording" formData={dataRecordingData} setFormData={setDataRecordingData} />,
        <BusinessIntelligenceForm key="businessIntelligence" formData={businessIntelligenceData} setFormData={setBusinessIntelligenceData} />,
    ];


    const handleNext = () => {
        if (step < forms.length - 1) setStep(step + 1);
    };

    const handlePrev = () => {
        if (step > 0) setStep(step - 1);
    };

    const handleSubmit = async () => {
        // Clean numeric fields
        const cleanedBusinessContext = {
            ...businessContextData,
            deviceCount: businessContextData.deviceCount ? parseInt(businessContextData.deviceCount) : null,
            internetSpeedMbps: businessContextData.internetSpeedMbps ? parseFloat(businessContextData.internetSpeedMbps) : null,
            automatedProcesses: businessContextData.automatedProcesses ? parseInt(businessContextData.automatedProcesses) : null,
        };

        // Combine all sections
        const fullAssessment = {
            businessContext: cleanedBusinessContext,
            dataRecording: dataRecordingData,
            businessIntelligence: businessIntelligenceData,
        };


        try {
            const res = await fetch("/api/assessments/data-clinics-assessment/digital-operations/full-submit", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(fullAssessment),
            });

            if (!res.ok) throw new Error("Failed to submit assessment");

            alert("Digital Operations Assessment Submitted Successfully!");

            // Multi-Pillar Flow
            const eligible = JSON.parse(sessionStorage.getItem("eligibleCategories") || "[]");
            const currentIndex = eligible.findIndex((e: any) => e.path === "/assessment/data-clinics-assessment/digital-operations");

            if (currentIndex >= 0 && currentIndex < eligible.length - 1) {
                router.push(eligible[currentIndex + 1].path);
            } else {
                router.push("/assessment/data-clinics-assessment/complete");
            }
        } catch (err) {
            console.error(err);
            alert("Error submitting assessment. Please try again.");
        }
    };

    return (
        <div
            className="min-h-screen flex items-center justify-center py-10 px-4 mb-5 "
            style={{ background: "linear-gradient(135deg, #ffffff, #23bec8, #ffffff)" }}
        >
            <div className="shadow-2xl rounded-xl p-8 w-full max-w-2xl bg-gradient-to-tr from-white via-[#23bec8]/20 to-white">
        
                <h1 className="text-3xl font-bold text-center mb-6 text-[#23bec8]">
                    Digital Operations Assessment
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
