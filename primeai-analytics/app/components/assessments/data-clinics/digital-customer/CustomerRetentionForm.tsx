"use client";
import React from "react";
import { DigitalCustomerFormData } from "./AcquisitionChannelsForm";



export type CustomerRetentionData = {
  // Section 1
  strategyPlanningScore: number;
  strategyPlanningNotes: string;
  retentionTrackingScore: number;
  retentionTrackingNotes: string;

  // Section 2
  relationshipSystemsScore: number;
  relationshipSystemsNotes: string;
  loyaltyRecognitionScore: number;
  loyaltyRecognitionNotes: string;

  // Section 3
  experienceMonitoringScore: number;
  experienceMonitoringNotes: string;
  trustRecoveryScore: number;
  trustRecoveryNotes: string;

  // Section 4
  customerDataUsageScore: number;
  customerDataUsageNotes: string;
  valueTrackingScore: number;
  valueTrackingNotes: string;

  // Section 5
  postSaleEngagementScore: number;
  postSaleEngagementNotes: string;
  outreachFrequencyScore: number;
  outreachFrequencyNotes: string;

  // Section 6
  retentionAdaptationScore: number;
  retentionAdaptationNotes: string;
  brandCommunityScore: number;
  brandCommunityNotes: string;
};

type Props = {
  formData: CustomerRetentionData;
  setFormData: React.Dispatch<React.SetStateAction<CustomerRetentionData>>;
};




export default function CustomerRetentionForm({ formData, setFormData }: Props) {
    const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
    const { name, value, type } = e.target;

    setFormData((prev) => ({
        ...prev,
        [name]: type === "number" ? parseInt(value) || 0 : value,
    }));
    };


  
  return (
    <div
      className="space-y-8 p-8 rounded-xl shadow-2xl border border-[#23bec8]/30"
      style={{
          background:
          "linear-gradient(135deg, rgba(255,255,255,0.95), rgba(35,190,200,0.25), rgba(255,255,255,0.9))",
          backdropFilter: "blur(14px)",
          border: "1px solid rgba(35,190,200,0.3)",
      }}
    >
      <h1 className="text-3xl font-bold text-center text-[#23bec8] mb-6">
        Customer Retention Assessment
      </h1>


      {/* SECTION 1️⃣ */}
      <Section title="Retention Strategy and Philosophy">
        <ScoreField name="strategyPlanningScore" label="How clearly is the retention strategy defined and aligned with business goals?" value={formData.strategyPlanningScore} onChange={handleChange}/>
        <NoteField name="strategyPlanningNotes" value={formData.strategyPlanningNotes} onChange={handleChange}/>

        <ScoreField name="retentionTrackingScore" label="How effectively is retention performance tracked over time?" value={formData.retentionTrackingScore} onChange={handleChange}/>
        <NoteField name="retentionTrackingNotes" value={formData.retentionTrackingNotes} onChange={handleChange}/>
      </Section>

      {/* SECTION 2️⃣ */}
      <Section title="Customer Relationship Programs">
        <ScoreField name="relationshipSystemsScore" label="Does the business use structured relationship management systems (CRM, etc.)?" value={formData.relationshipSystemsScore} onChange={handleChange}/>
        <NoteField name="relationshipSystemsNotes" value={formData.relationshipSystemsNotes} onChange={handleChange}/>

        <ScoreField name="loyaltyRecognitionScore" label="How strong are the loyalty and customer recognition initiatives?" value={formData.loyaltyRecognitionScore} onChange={handleChange}/>
        <NoteField name="loyaltyRecognitionNotes" value={formData.loyaltyRecognitionNotes} onChange={handleChange}/>
      </Section>

      {/* SECTION 3️⃣ */}
      <Section title="Experience Consistency & Quality Control">
        <ScoreField name="experienceMonitoringScore" label="How consistent and measurable is the customer experience quality?" value={formData.experienceMonitoringScore} onChange={handleChange}/>
        <NoteField name="experienceMonitoringNotes" value={formData.experienceMonitoringNotes} onChange={handleChange}/>

        <ScoreField name="trustRecoveryScore" label="How well does the business recover customer trust after service failures?" value={formData.trustRecoveryScore} onChange={handleChange}/>
        <NoteField name="trustRecoveryNotes" value={formData.trustRecoveryNotes} onChange={handleChange}/>
      </Section>

      {/* SECTION 4️⃣ */}
      <Section title="Data and Insight Utilization">
        <ScoreField name="customerDataUsageScore" label="How effectively is customer data used to understand and retain clients?" value={formData.customerDataUsageScore} onChange={handleChange}/>
        <NoteField name="customerDataUsageNotes" value={formData.customerDataUsageNotes} onChange={handleChange}/>

        <ScoreField name="valueTrackingScore" label="How well does the business track customer value and lifetime contributions?" value={formData.valueTrackingScore} onChange={handleChange}/>
        <NoteField name="valueTrackingNotes" value={formData.valueTrackingNotes} onChange={handleChange}/>
      </Section>

      {/* SECTION 5️⃣ */}
      <Section title="Post-Purchase Engagement">
        <ScoreField name="postSaleEngagementScore" label="How strong are the post-sale communication and engagement efforts?" value={formData.postSaleEngagementScore} onChange={handleChange}/>
        <NoteField name="postSaleEngagementNotes" value={formData.postSaleEngagementNotes} onChange={handleChange}/>

        <ScoreField name="outreachFrequencyScore" label="How frequent and relevant are outreach efforts after a sale?" value={formData.outreachFrequencyScore} onChange={handleChange}/>
        <NoteField name="outreachFrequencyNotes" value={formData.outreachFrequencyNotes} onChange={handleChange}/>
      </Section>

      {/* SECTION 6️⃣ */}
      <Section title="Innovation in Retention">
        <ScoreField name="retentionAdaptationScore" label="How adaptable and innovative is the retention approach?" value={formData.retentionAdaptationScore} onChange={handleChange}/>
        <NoteField name="retentionAdaptationNotes" value={formData.retentionAdaptationNotes} onChange={handleChange}/>

        <ScoreField name="brandCommunityScore" label="How effectively does the business build and maintain a brand community?" value={formData.brandCommunityScore} onChange={handleChange}/>
        <NoteField name="brandCommunityNotes" value={formData.brandCommunityNotes} onChange={handleChange}/>
      </Section>
    </div>
  );
}


function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="p-4 rounded-lg border border-[#23bec8]/20 bg-[#f9f9f9]">
      <h2 className="text-xl font-semibold text-[#23bec8] mb-4">{title}</h2>
      <div className="space-y-4">{children}</div>
    </div>
  );
}

function ScoreField({
  name,
  label,
  value,
  onChange,
}: {
  name: string;
  label: string;
  value: number;
  onChange: any;
}) {
  return (
    <div>
      <label className="block font-semibold text-black">{label}</label>
      <input
        type="number"
        name={name}
        value={value}
        min="0"
        max="10"
        onChange={onChange}
        className="w-full p-2 border rounded"
        required
      />
    </div>
  );
}

function NoteField({
  name,
  value,
  onChange,
}: {
  name: string;
  value: string;
  onChange: any;
}) {
  return (
    <div>
      <label className="block text-sm text-gray-700">Notes / Justification</label>
      <textarea
        name={name}
        value={value}
        onChange={onChange}
        className="w-full p-2 border rounded"
      />
    </div>
  );
}