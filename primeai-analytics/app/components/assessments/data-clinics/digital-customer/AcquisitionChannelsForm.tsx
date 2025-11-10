"use client";
import { useState } from "react";
import React from "react";




type AcquisitionChannelForm = {
  channelTypes: string[];
  channelCount: string;
  diversityNotes: string;
  digitalToTraditionalRatio: string;
  averageConversionRate: string;
  effectivenessMeasure: string;
  journeyIntegrationLevel: string;
  trackingTools: string[];
  hasTrackingSystem: boolean;
  trackingNotes: string;
  knowsTopPerformingChannel: boolean;
  contentMarketFitQuality: string;
  paidPercentage: string;
  organicPercentage: string;
  experimentsRunRecently: boolean;
  hasReferralProgram: boolean;
  partnershipExamples: string;
};


export type DigitalCustomerFormData = {
  overallNotes: string;
  acquisitionChannel: AcquisitionChannelForm;
};


type Props = {
    formData: DigitalCustomerFormData;
    setFormData: React.Dispatch<React.SetStateAction<DigitalCustomerFormData>>;
}

export default function AcquisitionChannelsForm({ formData, setFormData }: Props) {
  return (
    <div
    className="max-w-5xl mx-auto rounded-2xl shadow-2xl py-10 px-8 transition-all duration-500 hover:shadow-[#23bec8]/40"
    style={{
        background:
        "linear-gradient(135deg, rgba(255,255,255,0.95), rgba(35,190,200,0.25), rgba(255,255,255,0.9))",
        backdropFilter: "blur(14px)",
        border: "1px solid rgba(35,190,200,0.3)",
    }}
    >
        {/* HEADER */}
        <h2 className="text-3xl font-extrabold text-center text-[#23bec8] mb-6 tracking-wide drop-shadow-sm">
        Customer Acquisition Channel Assessment
        </h2>

        {/* --------------------- */}
        {/* ACQUISITION CHANNELS */}
        {/* --------------------- */}
        <div className="border-t border-[#23bec8]/40 pt-6">
        <h2 className="text-xl font-semibold text-[#000000] mb-3 flex items-center gap-2">
            <span className="w-2 h-2 bg-[#23bec8] rounded-full"></span>
            Customer Acquisition Channels
        </h2>

        <div className="grid grid-cols-2 gap-5">
            {/* Channel Types */}
            <div className="col-span-2">
            <label className="block font-medium text-black">
                Which customer acquistion channels does your business currently use?
            </label>
            <input
                type="text"
                className="border border-[#23bec8]/40 rounded-lg w-full p-2.5 placeholder-gray-400 focus:ring-2 focus:ring-[#23bec8] focus:outline-none transition-all text-black"
                placeholder="e.g. Facebook, WhatsApp, Website"
                onChange={(e) =>
                setFormData({
                    ...formData,
                    acquisitionChannel: {
                    ...formData.acquisitionChannel,
                    channelTypes: e.target.value.split(",").map((x) => x.trim()),
                    },
                })
                }
            />
            </div>

            {/* Channel Count */}
            <div>
            <label className="block font-medium text-black">Approximately how many active channels do you use to reach customers?</label>
            <input
                type="text"
                className="border border-[#23bec8]/40 rounded-lg w-full p-2.5 focus:ring-2 focus:ring-[#23bec8] focus:outline-none transition-all text-black"
                value={formData.acquisitionChannel.channelCount}
                onChange={(e) =>
                setFormData({
                    ...formData,
                    acquisitionChannel: {
                    ...formData.acquisitionChannel,
                    channelCount: e.target.value,
                    },
                })
                }
            />
            </div>

            {/* Diversity Notes */}
            <div>
            <label className="block font-medium text-black">How diverse are your acquisition channels in terms of digital and traditional methods?</label>
            <textarea
                className="border border-[#23bec8]/40 rounded-lg w-full p-2.5 focus:ring-2 focus:ring-[#23bec8] focus:outline-none transition-all text-black"
                value={formData.acquisitionChannel.diversityNotes}
                onChange={(e) =>
                setFormData({
                    ...formData,
                    acquisitionChannel: {
                    ...formData.acquisitionChannel,
                    diversityNotes: e.target.value,
                    },
                })
                }
            />
            </div>

            {/* Ratio */}
            <div>
            <label className="block font-medium text-black">
                What is the estimated ratio between your digital and traditional customer acquisition efforts? (0–1)
            </label>
            <input
                type="number"
                step="0.01"
                className="border border-[#23bec8]/40 rounded-lg w-full p-2.5 focus:ring-2 focus:ring-[#23bec8] focus:outline-none transition-all text-black"
                value={formData.acquisitionChannel.digitalToTraditionalRatio}
                onChange={(e) =>
                setFormData({
                    ...formData,
                    acquisitionChannel: {
                    ...formData.acquisitionChannel,
                    digitalToTraditionalRatio: e.target.value,
                    },
                })
                }
            />
            </div>

            {/* Conversion Rate */}
            <div>
            <label className="block font-medium text-black">
                Average Conversion Rate (%)
            </label>
            <input
                type="text"
                className="border border-[#23bec8]/40 rounded-lg w-full p-2.5 focus:ring-2 focus:ring-[#23bec8] focus:outline-none transition-all text-black"
                value={formData.acquisitionChannel.averageConversionRate}
                onChange={(e) =>
                setFormData({
                    ...formData,
                    acquisitionChannel: {
                    ...formData.acquisitionChannel,
                    averageConversionRate: e.target.value,
                    },
                })
                }
            />
            </div>

            {/* Effectiveness */}
            <div>
            <label className="block font-medium text-black">
                How do you measure the effectiveness of your acquisition channels?
            </label>
            <input
                type="text"
                className="border border-[#23bec8]/40 rounded-lg w-full p-2.5 focus:ring-2 focus:ring-[#23bec8] focus:outline-none transition-all text-black"
                value={formData.acquisitionChannel.effectivenessMeasure}
                onChange={(e) =>
                setFormData({
                    ...formData,
                    acquisitionChannel: {
                    ...formData.acquisitionChannel,
                    effectivenessMeasure: e.target.value,
                    },
                })
                }
            />
            </div>

            {/* Journey Integration */}
            <div>
            <label className="block font-medium text-black">
                Journey Integration Level
            </label>
            <select
                className="border border-[#23bec8]/40 rounded-lg w-full p-2.5 focus:ring-2 focus:ring-[#23bec8] focus:outline-none transition-all text-black"
                value={formData.acquisitionChannel.journeyIntegrationLevel}
                onChange={(e) =>
                setFormData({
                    ...formData,
                    acquisitionChannel: {
                    ...formData.acquisitionChannel,
                    journeyIntegrationLevel: e.target.value,
                    },
                })
                }
            >
                <option value="">Select</option>
                <option value="Basic">Basic</option>
                <option value="Moderate">Moderate</option>
                <option value="Advanced">Advanced</option>
            </select>
            </div>

            {/* Tracking Tools */}
            <div className="col-span-2">
            <label className="block font-medium text-black">
                Which tools or systems do you use to track customer acquisition and engagement?
            </label>
            <input
                type="text"
                className="border border-[#23bec8]/40 rounded-lg w-full p-2.5 placeholder-gray-400 focus:ring-2 focus:ring-[#23bec8] focus:outline-none transition-all text-black"
                onChange={(e) =>
                setFormData({
                    ...formData,
                    acquisitionChannel: {
                    ...formData.acquisitionChannel,
                    trackingTools: e.target.value.split(",").map((x) => x.trim()),
                    },
                })
                }
            />
            </div>

            {/* Has Tracking */}
            <div>
            <label className="block font-medium text-black">
                Has Tracking System?
            </label>
            <input
                type="checkbox"
                checked={formData.acquisitionChannel.hasTrackingSystem}
                onChange={(e) =>
                setFormData({
                    ...formData,
                    acquisitionChannel: {
                    ...formData.acquisitionChannel,
                    hasTrackingSystem: e.target.checked,
                    },
                })
                }
            />
            </div>

            {/* Tracking Notes */}
            <div>
            <label className="block font-medium text-black">Tracking Notes</label>
            <textarea
                className="border border-[#23bec8]/40 rounded-lg w-full p-2.5 focus:ring-2 focus:ring-[#23bec8] focus:outline-none transition-all text-black"
                value={formData.acquisitionChannel.trackingNotes}
                onChange={(e) =>
                setFormData({
                    ...formData,
                    acquisitionChannel: {
                    ...formData.acquisitionChannel,
                    trackingNotes: e.target.value,
                    },
                })
                }
            />
            </div>

            {/* Awareness + Fit */}
            <div>
            <label className="block font-medium text-black">
                Knows Top Performing Channel?
            </label>
            <input
                type="checkbox"
                checked={formData.acquisitionChannel.knowsTopPerformingChannel}
                onChange={(e) =>
                setFormData({
                    ...formData,
                    acquisitionChannel: {
                    ...formData.acquisitionChannel,
                    knowsTopPerformingChannel: e.target.checked,
                    },
                })
                }
            />
            </div>

            <div>
            <label className="block font-medium text-black">
                Content Market Fit Quality
            </label>
            <input
                type="text"
                className="border border-[#23bec8]/40 rounded-lg w-full p-2.5 focus:ring-2 focus:ring-[#23bec8] focus:outline-none transition-all text-black"
                value={formData.acquisitionChannel.contentMarketFitQuality}
                onChange={(e) =>
                setFormData({
                    ...formData,
                    acquisitionChannel: {
                    ...formData.acquisitionChannel,
                    contentMarketFitQuality: e.target.value,
                    },
                })
                }
            />
            </div>

            {/* Paid vs Organic */}
            <div>
            <label className="block font-medium text-black">Paid Percentage</label>
            <input
                type="text"
                className="border border-[#23bec8]/40 rounded-lg w-full p-2.5 focus:ring-2 focus:ring-[#23bec8] focus:outline-none transition-all text-black"
                value={formData.acquisitionChannel.paidPercentage}
                onChange={(e) =>
                setFormData({
                    ...formData,
                    acquisitionChannel: {
                    ...formData.acquisitionChannel,
                    paidPercentage: e.target.value,
                    },
                })
                }
            />
            </div>

            <div>
            <label className="block font-medium text-black">
                Organic Percentage
            </label>
            <input
                type="text"
                className="border border-[#23bec8]/40 rounded-lg w-full p-2.5 focus:ring-2 focus:ring-[#23bec8] focus:outline-none transition-all text-black"
                value={formData.acquisitionChannel.organicPercentage}
                onChange={(e) =>
                setFormData({
                    ...formData,
                    acquisitionChannel: {
                    ...formData.acquisitionChannel,
                    organicPercentage: e.target.value,
                    },
                })
                }
            />
            </div>

            {/* Experimentation */}
            <div>
            <label className="block font-medium text-black">
                Experiments Run Recently?
            </label>
            <input
                type="checkbox"
                checked={formData.acquisitionChannel.experimentsRunRecently}
                onChange={(e) =>
                setFormData({
                    ...formData,
                    acquisitionChannel: {
                    ...formData.acquisitionChannel,
                    experimentsRunRecently: e.target.checked,
                    },
                })
                }
            />
            </div>

            {/* Partnerships */}
            <div>
            <label className="block font-medium text-black">
                Has Referral Program?
            </label>
            <input
                type="checkbox"
                checked={formData.acquisitionChannel.hasReferralProgram}
                onChange={(e) =>
                setFormData({
                    ...formData,
                    acquisitionChannel: {
                    ...formData.acquisitionChannel,
                    hasReferralProgram: e.target.checked,
                    },
                })
                }
            />
            </div>

            <div>
            <label className="block font-medium text-black">
                Partnership Examples
            </label>
            <textarea
                className="border border-[#23bec8]/40 rounded-lg w-full p-2.5 focus:ring-2 focus:ring-[#23bec8] focus:outline-none transition-all text-black"
                value={formData.acquisitionChannel.partnershipExamples}
                onChange={(e) =>
                setFormData({
                    ...formData,
                    acquisitionChannel: {
                    ...formData.acquisitionChannel,
                    partnershipExamples: e.target.value,
                    },
                })
                }
            />
            </div>
        </div>
        </div>
    </div>

  );
}