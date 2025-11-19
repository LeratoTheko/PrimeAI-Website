// components/assessments/data-clinics/digital-operations/DataRecordingForm.tsx
"use client";

import { Dispatch, SetStateAction } from "react";

export interface DataRecordingData {
  // Core records
  salesRecording: string;
  expensesRecording: string;
  inventoryRecording: string;
  recordBackup: string;
  updateFrequency: string;
  profitReview: string;

  // Data quality
  dataAccuracy: string;
  dataCompleteness: string;
  dataConsistency: string;

  // Tools & automation
  recordingTools: string[];
  automationLevel: string;

  // Accessibility & sharing
  centralizedStorage: boolean;
  accessibility: string;
  sharedAcrossTeams: boolean;

  // Analytics & decision use
  reportsGenerated: string[];
  decisionSupport: string;

  // Governance
  complianceStandards: string[];
  dataRetentionPolicy: string;
}

interface DataRecordingFormProps {
  formData: DataRecordingData;
  setFormData: Dispatch<SetStateAction<DataRecordingData>>;
}

export default function DataRecordingForm({ formData, setFormData }: DataRecordingFormProps) {
  return (
    <main className="relative font-[Poppins] bg-gradient-to-tr from-white via-[#23bec8]/20 to-white">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-white/5 backdrop-blur-sm pointer-events-none z-0"></div>
      <div className="absolute top-0 left-1/3 w-72 h-72 rounded-full bg-[#23bec8]/20 -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-[#23bec8]/10 pointer-events-none"></div>

      {/* Glass container */}
      <div
        className="w-full max-w-5xl relative z-10 rounded-2xl p-8 md:p-12 
                   bg-white/30 backdrop-blur-lg border border-white/40 
                   shadow-[0_8px_32px_0_rgba(35,190,200,0.2)] space-y-10 transition-all"
      >
        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-[#23bec8] mb-10 drop-shadow-sm tracking-wide">
          Data Recording & Governance
        </h2>

        <div className="grid md:grid-cols-2 gap-8 text-black">

          {/* Core Records */}
          <section className="md:col-span-2 space-y-4">
            <h3 className="text-2xl font-semibold text-[#23bec8]">Core Records</h3>
            {[
              { label: "Sales Recording Method", key: "salesRecording" },
              { label: "Expenses Recording Method", key: "expensesRecording" },
              { label: "Inventory Recording Method", key: "inventoryRecording" },
              { label: "Record Backup Strategy", key: "recordBackup" },
              { label: "Update Frequency (e.g., Daily, Weekly)", key: "updateFrequency" },
              { label: "Profit Review Method", key: "profitReview" },
            ].map(({ label, key }) => (
              <input
                key={key}
                type="text"
                placeholder={label}
                value={formData[key as keyof DataRecordingData] as string}
                onChange={(e) => setFormData({ ...formData, [key]: e.target.value })}
                className="border border-white/40 rounded-lg w-full p-2.5 bg-white/50 
                           text-black focus:ring-2 focus:ring-[#23bec8] focus:outline-none"
              />
            ))}
          </section>

          {/* Data Quality */}
          <section className="md:col-span-2 space-y-4">
            <h3 className="text-2xl font-semibold text-[#23bec8]">Data Quality</h3>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { label: "Data Accuracy", key: "dataAccuracy", options: ["High", "Medium", "Low"] },
                { label: "Data Completeness", key: "dataCompleteness", options: ["Complete", "Partial", "Incomplete"] },
                { label: "Data Consistency", key: "dataConsistency", options: ["High", "Medium", "Low"] },
              ].map(({ label, key, options }) => (
                <div key={key}>
                  <label className="block font-medium mb-2">{label}</label>
                  <select
                    value={formData[key as keyof DataRecordingData] as string}
                    onChange={(e) => setFormData({ ...formData, [key]: e.target.value })}
                    className="border border-white/40 rounded-lg w-full p-2.5 bg-white/50 
                               text-black focus:ring-2 focus:ring-[#23bec8] focus:outline-none"
                  >
                    <option value="">Select</option>
                    {options.map(o => <option key={o} value={o}>{o}</option>)}
                  </select>
                </div>
              ))}
            </div>
          </section>

          {/* Tools & Automation */}
          <section className="md:col-span-2 space-y-4">
            <h3 className="text-2xl font-semibold text-[#23bec8]">Tools & Automation</h3>
            <input
              type="text"
              placeholder="Recording Tools (comma separated)"
              value={formData.recordingTools.join(", ")}
              onChange={(e) => setFormData({ ...formData, recordingTools: e.target.value.split(",").map(s => s.trim()) })}
              className="border border-white/40 rounded-lg w-full p-2.5 bg-white/50 
                         text-black focus:ring-2 focus:ring-[#23bec8] focus:outline-none"
            />
            <div>
              <label className="block font-medium mb-2">Automation Level</label>
              <select
                value={formData.automationLevel}
                onChange={(e) => setFormData({ ...formData, automationLevel: e.target.value })}
                className="border border-white/40 rounded-lg w-full p-2.5 bg-white/50 
                           text-black focus:ring-2 focus:ring-[#23bec8] focus:outline-none"
              >
                <option value="">Select</option>
                <option value="Fully Automated">Fully Automated</option>
                <option value="Semi-Automated">Semi-Automated</option>
                <option value="Manual">Manual</option>
              </select>
            </div>
          </section>

          {/* Accessibility & Sharing */}
          <section className="md:col-span-2 space-y-4">
            <h3 className="text-2xl font-semibold text-[#23bec8]">Accessibility & Sharing</h3>
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={formData.centralizedStorage}
                onChange={(e) => setFormData({ ...formData, centralizedStorage: e.target.checked })}
                className="h-4 w-4 text-[#23bec8] border-gray-300 rounded focus:ring-[#23bec8]"
              />
              <span>Centralized Storage</span>
            </label>
            <select
              value={formData.accessibility}
              onChange={(e) => setFormData({ ...formData, accessibility: e.target.value })}
              className="border border-white/40 rounded-lg w-full p-2.5 bg-white/50 
                         text-black focus:ring-2 focus:ring-[#23bec8] focus:outline-none"
            >
              <option value="">Select Accessibility</option>
              <option value="Easy">Easy</option>
              <option value="Moderate">Moderate</option>
              <option value="Difficult">Difficult</option>
            </select>
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={formData.sharedAcrossTeams}
                onChange={(e) => setFormData({ ...formData, sharedAcrossTeams: e.target.checked })}
                className="h-4 w-4 text-[#23bec8] border-gray-300 rounded focus:ring-[#23bec8]"
              />
              <span>Shared Across Teams</span>
            </label>
          </section>

          {/* Analytics & Decision Use */}
          <section className="md:col-span-2 space-y-4">
            <h3 className="text-2xl font-semibold text-[#23bec8]">Analytics & Decision Use</h3>
            <input
              type="text"
              placeholder="Reports Generated (comma separated)"
              value={formData.reportsGenerated.join(", ")}
              onChange={(e) => setFormData({ ...formData, reportsGenerated: e.target.value.split(",").map(s => s.trim()) })}
              className="border border-white/40 rounded-lg w-full p-2.5 bg-white/50 
                         text-black focus:ring-2 focus:ring-[#23bec8] focus:outline-none"
            />
            <select
              value={formData.decisionSupport}
              onChange={(e) => setFormData({ ...formData, decisionSupport: e.target.value })}
              className="border border-white/40 rounded-lg w-full p-2.5 bg-white/50 
                         text-black focus:ring-2 focus:ring-[#23bec8] focus:outline-none"
            >
              <option value="">Select Decision Support</option>
              <option value="High">High</option>
              <option value="Medium">Medium</option>
              <option value="Low">Low</option>
            </select>
          </section>

          {/* Governance */}
          <section className="md:col-span-2 space-y-4">
            <h3 className="text-2xl font-semibold text-[#23bec8]">Governance</h3>
            <input
              type="text"
              placeholder="Compliance Standards (comma separated)"
              value={formData.complianceStandards.join(", ")}
              onChange={(e) => setFormData({ ...formData, complianceStandards: e.target.value.split(",").map(s => s.trim()) })}
              className="border border-white/40 rounded-lg w-full p-2.5 bg-white/50 
                         text-black focus:ring-2 focus:ring-[#23bec8] focus:outline-none"
            />
            <input
              type="text"
              placeholder="Data Retention Policy"
              value={formData.dataRetentionPolicy}
              onChange={(e) => setFormData({ ...formData, dataRetentionPolicy: e.target.value })}
              className="border border-white/40 rounded-lg w-full p-2.5 bg-white/50 
                         text-black focus:ring-2 focus:ring-[#23bec8] focus:outline-none"
            />
          </section>
        </div>
      </div>
    </main>
  );
}
