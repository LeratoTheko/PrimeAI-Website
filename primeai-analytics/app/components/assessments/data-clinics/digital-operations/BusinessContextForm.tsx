// components/assessments/data-clinics/digital-operations/BusinessContextForm.tsx
"use client";

import { useState, Dispatch, SetStateAction } from "react";

export interface BusinessContextData {
  devices: string[];
  deviceCount: string;
  internetType: string;
  internetSpeedMbps: string;
  internetReliability: string;
  automationTools: string[];
  automatedProcesses: string;
  integratedSystems: string[];
  productAnalysisMethods: string[];
  dashboardsAvailable: boolean;
}

interface Props {
  formData: BusinessContextData;
  setFormData: Dispatch<SetStateAction<BusinessContextData>>;
}

export default function BusinessContextForm({ formData, setFormData }: Props) {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleOption = (field: keyof BusinessContextData, option: string) => {
    setFormData(prev => {
      const arr = prev[field] as string[];
      return {
        ...prev,
        [field]: arr.includes(option)
          ? arr.filter(o => o !== option)
          : [...arr, option],
      };
    });
  };

  const devicesOptions = ["Desktop", "Laptop", "Tablet", "Mobile", "POS Terminal"];
  const automationToolsOptions = ["Zapier", "UiPath", "Power Automate", "Integromat", "Custom Scripts"];
  const integratedSystemsOptions = ["ERP", "CRM", "Accounting Software", "Inventory System", "HR System"];
  const productAnalysisOptions = ["Sales Analysis", "Customer Feedback", "Inventory Analysis", "Market Research", "Performance Dashboards"];

  return (
    <main className="relative font-[Poppins] bg-gradient-to-tr from-white via-[#23bec8]/20 to-white">
      {/* Background blobs */}
      <div className="absolute inset-0 bg-white/5 backdrop-blur-sm pointer-events-none z-0"></div>
      <div className="absolute top-0 left-1/3 w-72 h-72 rounded-full bg-[#23bec8]/20 -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-[#23bec8]/10 pointer-events-none"></div>

      {/* Glass container */}
      <div
        className="w-full max-w-5xl relative z-10 rounded-2xl p-8 md:p-12 
                   bg-white/30 backdrop-blur-lg border border-white/40 
                   shadow-[0_8px_32px_0_rgba(35,190,200,0.2)] transition-all space-y-8"
      >
        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-[#23bec8] mb-10 drop-shadow-sm tracking-wide">
          Business Context
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Devices */}
          <div className="relative">
            <label className="block font-medium text-black mb-2">Devices Used</label>
            <div
              onClick={() =>
                setOpenDropdown(openDropdown === "devices" ? null : "devices")
              }
              className={`border border-white/40 rounded-lg w-full p-2.5 bg-white/50 text-black cursor-pointer select-none transition-all focus-within:ring-2 focus-within:ring-[#23bec8] ${
                formData.devices.length === 0 ? "text-gray-400" : ""
              }`}
            >
              {formData.devices.length > 0
                ? formData.devices.join(", ")
                : "Select devices"}
            </div>

            {openDropdown === "devices" && (
              <div className="absolute z-10 mt-1 w-full bg-white border border-[#23bec8]/40 rounded-lg shadow-lg p-3 max-h-60 overflow-y-auto text-black">
                {devicesOptions.map(option => (
                  <label
                    key={option}
                    className="flex items-center gap-2 text-black mb-2 cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      checked={formData.devices.includes(option)}
                      onChange={() => toggleOption("devices", option)}
                      className="h-4 w-4 text-[#23bec8] border-gray-300 rounded focus:ring-[#23bec8]"
                    />
                    {option}
                  </label>
                ))}
              </div>
            )}
          </div>

          {/* Device count */}
          <div>
            <label className="block font-medium text-black mb-2">Number of Devices</label>
            <input
              type="number"
              value={formData.deviceCount}
              onChange={e => setFormData(prev => ({ ...prev, deviceCount: e.target.value }))}
              className="border border-white/40 rounded-lg w-full p-2.5 bg-white/50 text-black focus:ring-2 focus:ring-[#23bec8] focus:outline-none transition-all"
            />
          </div>

          {/* Internet Type */}
          <div>
            <label className="block font-medium text-black mb-2">Internet Type</label>
            <select
              value={formData.internetType}
              onChange={e => setFormData(prev => ({ ...prev, internetType: e.target.value }))}
              className="border border-white/40 rounded-lg w-full p-2.5 bg-white/50 text-black focus:ring-2 focus:ring-[#23bec8] focus:outline-none transition-all"
            >
              <option value="">Select</option>
              <option value="Fiber">Fiber</option>
              <option value="DSL">DSL</option>
              <option value="4G">4G</option>
              <option value="5G">5G</option>
              <option value="Satellite">Satellite</option>
            </select>
          </div>

          {/* Internet Speed */}
          <div>
            <label className="block font-medium text-black mb-2">Internet Speed (Mbps)</label>
            <input
              type="number"
              value={formData.internetSpeedMbps}
              onChange={e => setFormData(prev => ({ ...prev, internetSpeedMbps: e.target.value }))}
              className="border border-white/40 rounded-lg w-full p-2.5 bg-white/50 text-black focus:ring-2 focus:ring-[#23bec8] focus:outline-none transition-all"
            />
          </div>

          {/* Internet Reliability */}
          <div>
            <label className="block font-medium text-black mb-2">Internet Reliability</label>
            <select
              value={formData.internetReliability}
              onChange={e => setFormData(prev => ({ ...prev, internetReliability: e.target.value }))}
              className="border border-white/40 rounded-lg w-full p-2.5 bg-white/50 text-black focus:ring-2 focus:ring-[#23bec8] focus:outline-none transition-all"
            >
              <option value="">Select</option>
              <option value="High">High</option>
              <option value="Medium">Medium</option>
              <option value="Low">Low</option>
            </select>
          </div>

          {/* Automation Tools */}
          <div className="relative">
            <label className="block font-medium text-black mb-2">Automation Tools</label>
            <div
              onClick={() =>
                setOpenDropdown(openDropdown === "automationTools" ? null : "automationTools")
              }
              className={`border border-white/40 rounded-lg w-full p-2.5 bg-white/50 text-black cursor-pointer select-none transition-all focus-within:ring-2 focus-within:ring-[#23bec8] ${
                formData.automationTools.length === 0 ? "text-gray-400" : ""
              }`}
            >
              {formData.automationTools.length > 0
                ? formData.automationTools.join(", ")
                : "Select automation tools"}
            </div>

            {openDropdown === "automationTools" && (
              <div className="absolute z-10 mt-1 w-full bg-white border border-[#23bec8]/40 rounded-lg shadow-lg p-3 max-h-60 overflow-y-auto text-black">
                {automationToolsOptions.map(option => (
                  <label
                    key={option}
                    className="flex items-center gap-2 text-black mb-2 cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      checked={formData.automationTools.includes(option)}
                      onChange={() => toggleOption("automationTools", option)}
                      className="h-4 w-4 text-[#23bec8] border-gray-300 rounded focus:ring-[#23bec8]"
                    />
                    {option}
                  </label>
                ))}
              </div>
            )}
          </div>

          {/* Number of Automated Processes */}
          <div>
            <label className="block font-medium text-black mb-2">Number of Automated Processes</label>
            <input
              type="number"
              value={formData.automatedProcesses}
              onChange={e => setFormData(prev => ({ ...prev, automatedProcesses: e.target.value }))}
              className="border border-white/40 rounded-lg w-full p-2.5 bg-white/50 text-black focus:ring-2 focus:ring-[#23bec8] focus:outline-none transition-all"
            />
          </div>

          {/* Integrated Systems */}
          <div className="relative">
            <label className="block font-medium text-black mb-2">Integrated Systems</label>
            <div
              onClick={() =>
                setOpenDropdown(openDropdown === "integratedSystems" ? null : "integratedSystems")
              }
              className={`border border-white/40 rounded-lg w-full p-2.5 bg-white/50 text-black cursor-pointer select-none transition-all focus-within:ring-2 focus-within:ring-[#23bec8] ${
                formData.integratedSystems.length === 0 ? "text-gray-400" : ""
              }`}
            >
              {formData.integratedSystems.length > 0
                ? formData.integratedSystems.join(", ")
                : "Select integrated systems"}
            </div>

            {openDropdown === "integratedSystems" && (
              <div className="absolute z-10 mt-1 w-full bg-white border border-[#23bec8]/40 rounded-lg shadow-lg p-3 max-h-60 overflow-y-auto text-black">
                {integratedSystemsOptions.map(option => (
                  <label
                    key={option}
                    className="flex items-center gap-2 text-black mb-2 cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      checked={formData.integratedSystems.includes(option)}
                      onChange={() => toggleOption("integratedSystems", option)}
                      className="h-4 w-4 text-[#23bec8] border-gray-300 rounded focus:ring-[#23bec8]"
                    />
                    {option}
                  </label>
                ))}
              </div>
            )}
          </div>

          {/* Product Analysis Methods */}
          <div className="relative md:col-span-2">
            <label className="block font-medium text-black mb-2">Product Analysis Methods</label>
            <div
              onClick={() =>
                setOpenDropdown(openDropdown === "productAnalysisMethods" ? null : "productAnalysisMethods")
              }
              className={`border border-white/40 rounded-lg w-full p-2.5 bg-white/50 text-black cursor-pointer select-none transition-all focus-within:ring-2 focus-within:ring-[#23bec8] ${
                formData.productAnalysisMethods.length === 0 ? "text-gray-400" : ""
              }`}
            >
              {formData.productAnalysisMethods.length > 0
                ? formData.productAnalysisMethods.join(", ")
                : "Select product analysis methods"}
            </div>

            {openDropdown === "productAnalysisMethods" && (
              <div className="absolute z-10 mt-1 w-full bg-white border border-[#23bec8]/40 rounded-lg shadow-lg p-3 max-h-60 overflow-y-auto text-black">
                {productAnalysisOptions.map(option => (
                  <label
                    key={option}
                    className="flex items-center gap-2 text-black mb-2 cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      checked={formData.productAnalysisMethods.includes(option)}
                      onChange={() => toggleOption("productAnalysisMethods", option)}
                      className="h-4 w-4 text-[#23bec8] border-gray-300 rounded focus:ring-[#23bec8]"
                    />
                    {option}
                  </label>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Dashboards */}
        <div className="flex items-center mt-8 space-x-2">
          <input
            type="checkbox"
            checked={formData.dashboardsAvailable}
            onChange={e => setFormData(prev => ({ ...prev, dashboardsAvailable: e.target.checked }))}
            id="dashboardsAvailable"
            className="h-4 w-4 text-[#23bec8] border-gray-300 rounded focus:ring-[#23bec8]"
          />
          <label htmlFor="dashboardsAvailable" className="font-medium text-black">
            Dashboards Available
          </label>
        </div>
      </div>
    </main>
  );
}
