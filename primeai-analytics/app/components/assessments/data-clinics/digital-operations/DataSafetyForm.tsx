"use client";

import React from "react";

export interface DataSafetyData {
  dataStorage: string;
  dataClassification: string;
  dataRetentionPolicy: string;

  recoveryPlan: string;
  backupFrequency: string;
  recoveryTesting: boolean;

  dataAccessControl: string;
  authenticationMethod: string;
  devicePolicy: string;

  encryption: string;
  endpointSecurity: string;

  staffTrainingSafety: string;
  staffSecurityPolicy: boolean;

  regularAudits: string;
  incidentReporting: string;
  lastSecurityIncident?: string;

  complianceStandards: string;
  dataSharingPolicy: string;
}

interface Props {
  formData: DataSafetyData;
  setFormData: React.Dispatch<React.SetStateAction<DataSafetyData>>;
}

export default function DataSafetyForm({ formData, setFormData }: Props) {
  const updateField = (field: keyof DataSafetyData, value: any) =>
    setFormData((prev) => ({ ...prev, [field]: value }));

  return (
    <div className="space-y-6">

      {/* ---------------- CORE STORAGE ---------------- */}
      <div>
        <label className="font-bold">Where is your business data stored?</label>
        <select
          value={formData.dataStorage}
          onChange={(e) => updateField("dataStorage", e.target.value)}
          className="w-full mt-2 p-2 border rounded-md"
        >
          <option value="">Select</option>
          <option>Local devices only</option>
          <option>Cloud only</option>
          <option>Hybrid (Cloud + Local)</option>
          <option>External Hard Drives</option>
          <option>Physical files</option>
        </select>
      </div>

      <div>
        <label className="font-bold">Do you classify business data?</label>
        <input
          type="text"
          className="w-full mt-2 p-2 border rounded-md"
          placeholder="e.g., Confidential, Public, Financial, Personal"
          value={formData.dataClassification}
          onChange={(e) => updateField("dataClassification", e.target.value)}
        />
      </div>

      <div>
        <label className="font-bold">Data Retention Policy</label>
        <input
          type="text"
          className="w-full mt-2 p-2 border rounded-md"
          placeholder="e.g., delete after 5 years"
          value={formData.dataRetentionPolicy}
          onChange={(e) => updateField("dataRetentionPolicy", e.target.value)}
        />
      </div>

      {/* ---------------- RECOVERY ---------------- */}
      <div>
        <label className="font-bold">Backup Strategy</label>
        <input
          type="text"
          className="w-full mt-2 p-2 border rounded-md"
          placeholder="e.g., Weekly cloud backup"
          value={formData.recoveryPlan}
          onChange={(e) => updateField("recoveryPlan", e.target.value)}
        />
      </div>

      <div>
        <label className="font-bold">Backup Frequency</label>
        <select
          className="w-full mt-2 p-2 border rounded-md"
          value={formData.backupFrequency}
          onChange={(e) => updateField("backupFrequency", e.target.value)}
        >
          <option value="">Select</option>
          <option>Daily</option>
          <option>Weekly</option>
          <option>Monthly</option>
          <option>None</option>
        </select>
      </div>

      <div>
        <label className="font-bold">Do you test recovery?</label>
        <input
          type="checkbox"
          className="ml-2"
          checked={formData.recoveryTesting}
          onChange={(e) => updateField("recoveryTesting", e.target.checked)}
        />
      </div>

      {/* ---------------- ACCESS AUTH ---------------- */}
      <div>
        <label className="font-bold">Access Control Method</label>
        <input
          type="text"
          className="w-full mt-2 p-2 border rounded-md"
          placeholder="e.g., Role-based access"
          value={formData.dataAccessControl}
          onChange={(e) => updateField("dataAccessControl", e.target.value)}
        />
      </div>

      <div>
        <label className="font-bold">Authentication Method</label>
        <select
          className="w-full mt-2 p-2 border rounded-md"
          value={formData.authenticationMethod}
          onChange={(e) => updateField("authenticationMethod", e.target.value)}
        >
          <option value="">Select</option>
          <option>Password only</option>
          <option>Multi-Factor Authentication (MFA)</option>
          <option>Biometric Login</option>
          <option>Shared credentials</option>
        </select>
      </div>

      <div>
        <label className="font-bold">Device Usage Policy</label>
        <select
          className="w-full mt-2 p-2 border rounded-md"
          value={formData.devicePolicy}
          onChange={(e) => updateField("devicePolicy", e.target.value)}
        >
          <option value="">Select</option>
          <option>Company-owned only</option>
          <option>Personal devices allowed (BYOD)</option>
          <option>Mixed with policies</option>
        </select>
      </div>

      {/* ---------------- SECURITY & ENCRYPTION ---------------- */}
      <div>
        <label className="font-bold">Encryption Level</label>
        <select
          className="w-full mt-2 p-2 border rounded-md"
          value={formData.encryption}
          onChange={(e) => updateField("encryption", e.target.value)}
        >
          <option value="">Select</option>
          <option>At-rest encryption</option>
          <option>In-transit encryption</option>
          <option>Both</option>
          <option>None</option>
        </select>
      </div>

      <div>
        <label className="font-bold">Endpoint Security</label>
        <input
          type="text"
          className="w-full mt-2 p-2 border rounded-md"
          placeholder="e.g., Antivirus + Firewall + Monitoring"
          value={formData.endpointSecurity}
          onChange={(e) => updateField("endpointSecurity", e.target.value)}
        />
      </div>

      {/* ---------------- HUMAN TRAINING ---------------- */}
      <div>
        <label className="font-bold">Staff Security Training</label>
        <input
          type="text"
          className="w-full mt-2 p-2 border rounded-md"
          placeholder="e.g., Quarterly phishing training"
          value={formData.staffTrainingSafety}
          onChange={(e) => updateField("staffTrainingSafety", e.target.value)}
        />
      </div>

      <div>
        <label className="font-bold">Do employees sign a security policy?</label>
        <input
          type="checkbox"
          className="ml-2"
          checked={formData.staffSecurityPolicy}
          onChange={(e) => updateField("staffSecurityPolicy", e.target.checked)}
        />
      </div>

      {/* ---------------- MONITORING ---------------- */}
      <div>
        <label className="font-bold">Audit Frequency</label>
        <input
          type="text"
          className="w-full mt-2 p-2 border rounded-md"
          value={formData.regularAudits}
          onChange={(e) => updateField("regularAudits", e.target.value)}
        />
      </div>

      <div>
        <label className="font-bold">Incident Reporting Method</label>
        <input
          type="text"
          className="w-full mt-2 p-2 border rounded-md"
          value={formData.incidentReporting}
          onChange={(e) => updateField("incidentReporting", e.target.value)}
        />
      </div>

      <div>
        <label className="font-bold">Last Security Incident (if any)</label>
        <input
          type="date"
          className="w-full mt-2 p-2 border rounded-md"
          value={formData.lastSecurityIncident ?? ""}
          onChange={(e) => updateField("lastSecurityIncident", e.target.value)}
        />
      </div>

      {/* ---------------- COMPLIANCE ---------------- */}
      <div>
        <label className="font-bold">Compliance Standards</label>
        <input
          type="text"
          className="w-full mt-2 p-2 border rounded-md"
          placeholder="e.g., GDPR, POPIA, ISO 27001"
          value={formData.complianceStandards}
          onChange={(e) => updateField("complianceStandards", e.target.value)}
        />
      </div>

      <div>
        <label className="font-bold">Data Sharing Policy</label>
        <textarea
          className="w-full mt-2 p-2 border rounded-md"
          placeholder="Rules for sharing data with third parties"
          value={formData.dataSharingPolicy}
          onChange={(e) => updateField("dataSharingPolicy", e.target.value)}
        />
      </div>
    </div>
  );
}
