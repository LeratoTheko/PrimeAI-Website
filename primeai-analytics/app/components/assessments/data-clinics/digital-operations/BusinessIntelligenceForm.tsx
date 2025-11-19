"use client";

import { Dispatch, SetStateAction } from "react";

export interface BusinessIntelligenceData {
  biTools: string[];
  integrationLevel: string;
  dataSources: string[];

  historicalDataAvailability: string;
  forecastModelsUsed: string[];
  forecastAccuracy: string;
  forecastFrequency: string;

  dashboardUsage: string;
  reportsGenerated: string[];
  reportFrequency: string;
  dataVisualization: string;
  insightQuality: string;

  decisionBasedOnBI: string;
  departmentsUsingBI: string[];
  decisionSpeed: string;
  biAutomationLevel: string;

  dataGovernanceLevel: string;
  biSkills: string[];
  staffBITraining: boolean;
  biChallenges: string[];
}

interface Props {
  formData: BusinessIntelligenceData;
  setFormData: Dispatch<SetStateAction<BusinessIntelligenceData>>;
}

export default function BusinessIntelligenceForm({ formData, setFormData }: Props) {
  return (
    <main className="relative font-[Poppins] bg-gradient-to-tr from-white via-[#23bec8]/20 to-white">
      
      <div className="absolute inset-0 bg-white/5 backdrop-blur-sm pointer-events-none z-0"></div>

      <div
        className="w-full max-w-5xl relative z-10 rounded-2xl p-8 md:p-12 
                   bg-white/30 backdrop-blur-lg border border-white/40 
                   shadow-[0_8px_32px_0_rgba(35,190,200,0.2)] space-y-10 transition-all"
      >
        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-[#23bec8] mb-10">
          Business Intelligence
        </h2>

        <div className="grid md:grid-cols-2 gap-8 text-black">

          {/* BI Tools */}
          <section className="md:col-span-2 space-y-4">
            <h3 className="text-2xl font-semibold text-[#23bec8]">BI Tools & Systems</h3>

            <input
              type="text"
              placeholder="BI Tools (comma separated)"
              value={formData.biTools.join(", ")}
              onChange={(e) => setFormData({ ...formData, biTools: e.target.value.split(",").map(s => s.trim()) })}
              className="border border-white/40 rounded-lg w-full p-2.5 bg-white/50 text-black"
            />

            <select
              value={formData.integrationLevel}
              onChange={(e) => setFormData({ ...formData, integrationLevel: e.target.value })}
              className="border border-white/40 rounded-lg w-full p-2.5 bg-white/50 text-black"
            >
              <option value="">Integration Level</option>
              <option value="High">High</option>
              <option value="Medium">Medium</option>
              <option value="Low">Low</option>
            </select>

            <input
              type="text"
              placeholder="Data Sources (comma separated)"
              value={formData.dataSources.join(", ")}
              onChange={(e) => setFormData({ ...formData, dataSources: e.target.value.split(",").map(s => s.trim()) })}
              className="border border-white/40 rounded-lg w-full p-2.5 bg-white/50 text-black"
            />
          </section>

          {/* Historical & Forecasting */}
          <section className="md:col-span-2 space-y-4">
            <h3 className="text-2xl font-semibold text-[#23bec8]">Historical Data & Forecasting</h3>

            <select
              value={formData.historicalDataAvailability}
              onChange={(e) => setFormData({ ...formData, historicalDataAvailability: e.target.value })}
              className="border border-white/40 rounded-lg w-full p-2.5 bg-white/50 text-black"
            >
              <option value="">Historical Data Availability</option>
              <option value="High">High</option>
              <option value="Medium">Medium</option>
              <option value="Low">Low</option>
            </select>

            <input
              type="text"
              placeholder="Forecast Models Used (comma separated)"
              value={formData.forecastModelsUsed.join(", ")}
              onChange={(e) => setFormData({ ...formData, forecastModelsUsed: e.target.value.split(",").map(s => s.trim()) })}
              className="border border-white/40 rounded-lg w-full p-2.5 bg-white/50 text-black"
            />

            <select
              value={formData.forecastAccuracy}
              onChange={(e) => setFormData({ ...formData, forecastAccuracy: e.target.value })}
              className="border border-white/40 rounded-lg w-full p-2.5 bg-white/50 text-black"
            >
              <option value="">Forecast Accuracy</option>
              <option value="High">High</option>
              <option value="Medium">Medium</option>
              <option value="Low">Low</option>
            </select>

            <select
              value={formData.forecastFrequency}
              onChange={(e) => setFormData({ ...formData, forecastFrequency: e.target.value })}
              className="border border-white/40 rounded-lg w-full p-2.5 bg-white/50 text-black"
            >
              <option value="">Forecast Frequency</option>
              <option value="Daily">Daily</option>
              <option value="Weekly">Weekly</option>
              <option value="Monthly">Monthly</option>
            </select>
          </section>

          {/* Reporting */}
          <section className="md:col-span-2 space-y-4">
            <h3 className="text-2xl font-semibold text-[#23bec8]">Reporting & Insights</h3>

            <select
              value={formData.dashboardUsage}
              onChange={(e) => setFormData({ ...formData, dashboardUsage: e.target.value })}
              className="border border-white/40 rounded-lg w-full p-2.5 bg-white/50 text-black"
            >
              <option value="">Dashboard Usage</option>
              <option value="High">High</option>
              <option value="Medium">Medium</option>
              <option value="Low">Low</option>
            </select>

            <input
              type="text"
              placeholder="Reports Generated (comma separated)"
              value={formData.reportsGenerated.join(", ")}
              onChange={(e) => setFormData({ ...formData, reportsGenerated: e.target.value.split(",").map(s => s.trim()) })}
              className="border border-white/40 rounded-lg w-full p-2.5 bg-white/50 text-black"
            />

            <select
              value={formData.reportFrequency}
              onChange={(e) => setFormData({ ...formData, reportFrequency: e.target.value })}
              className="border border-white/40 rounded-lg w-full p-2.5 bg-white/50 text-black"
            >
              <option value="">Report Frequency</option>
              <option value="Daily">Daily</option>
              <option value="Weekly">Weekly</option>
              <option value="Monthly">Monthly</option>
            </select>

            <select
              value={formData.dataVisualization}
              onChange={(e) => setFormData({ ...formData, dataVisualization: e.target.value })}
              className="border border-white/40 rounded-lg w-full p-2.5 bg-white/50 text-black"
            >
              <option value="">Data Visualization Quality</option>
              <option value="Good">Good</option>
              <option value="Average">Average</option>
              <option value="Poor">Poor</option>
            </select>

            <select
              value={formData.insightQuality}
              onChange={(e) => setFormData({ ...formData, insightQuality: e.target.value })}
              className="border border-white/40 rounded-lg w-full p-2.5 bg-white/50 text-black"
            >
              <option value="">Insight Quality</option>
              <option value="Actionable">Actionable</option>
              <option value="Informative">Informative</option>
              <option value="Basic">Basic</option>
            </select>
          </section>

          {/* Decision Support */}
          <section className="md:col-span-2 space-y-4">
            <h3 className="text-2xl font-semibold text-[#23bec8]">Decision Support</h3>

            <select
              value={formData.decisionBasedOnBI}
              onChange={(e) => setFormData({ ...formData, decisionBasedOnBI: e.target.value })}
              className="border border-white/40 rounded-lg w-full p-2.5 bg-white/50 text-black"
            >
              <option value="">Decision Dependency on BI</option>
              <option value="High">High</option>
              <option value="Medium">Medium</option>
              <option value="Low">Low</option>
            </select>

            <input
              type="text"
              placeholder="Departments Using BI (comma separated)"
              value={formData.departmentsUsingBI.join(", ")}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  departmentsUsingBI: e.target.value.split(",").map(s => s.trim()),
                })
              }
              className="border border-white/40 rounded-lg w-full p-2.5 bg-white/50 text-black"
            />

            <select
              value={formData.decisionSpeed}
              onChange={(e) => setFormData({ ...formData, decisionSpeed: e.target.value })}
              className="border border-white/40 rounded-lg w-full p-2.5 bg-white/50 text-black"
            >
              <option value="">Decision Speed</option>
              <option value="Real-time">Real-time</option>
              <option value="Delayed">Delayed</option>
              <option value="Manual">Manual</option>
            </select>

            <select
              value={formData.biAutomationLevel}
              onChange={(e) => setFormData({ ...formData, biAutomationLevel: e.target.value })}
              className="border border-white/40 rounded-lg w-full p-2.5 bg-white/50 text-black"
            >
              <option value="">BI Automation</option>
              <option value="Automated">Automated</option>
              <option value="Semi-Automated">Semi-Automated</option>
              <option value="Manual">Manual</option>
            </select>
          </section>

          {/* Governance */}
          <section className="md:col-span-2 space-y-4">
            <h3 className="text-2xl font-semibold text-[#23bec8]">Governance & Literacy</h3>

            <select
              value={formData.dataGovernanceLevel}
              onChange={(e) => setFormData({ ...formData, dataGovernanceLevel: e.target.value })}
              className="border border-white/40 rounded-lg w-full p-2.5 bg-white/50 text-black"
            >
              <option value="">Data Governance Strength</option>
              <option value="Strong">Strong</option>
              <option value="Moderate">Moderate</option>
              <option value="Weak">Weak</option>
            </select>

            <input
              type="text"
              placeholder="BI Skills (comma separated)"
              value={formData.biSkills.join(", ")}
              onChange={(e) => setFormData({ ...formData, biSkills: e.target.value.split(",").map(s => s.trim()) })}
              className="border border-white/40 rounded-lg w-full p-2.5 bg-white/50 text-black"
            />

            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={formData.staffBITraining}
                onChange={(e) => setFormData({ ...formData, staffBITraining: e.target.checked })}
                className="h-4 w-4"
              />
              <span>Staff BI Training Provided</span>
            </label>

            <input
              type="text"
              placeholder="BI Challenges (comma separated)"
              value={formData.biChallenges.join(", ")}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  biChallenges: e.target.value.split(",").map(s => s.trim()),
                })
              }
              className="border border-white/40 rounded-lg w-full p-2.5 bg-white/50 text-black"
            />
          </section>
        </div>
      </div>
    </main>
  );
}
