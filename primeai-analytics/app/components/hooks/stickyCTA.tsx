"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { X } from "lucide-react";

export default function StickyCTA() {
  const [visible, setVisible] = useState(false);
  const [closed, setClosed] = useState(false);

  // Initial appearance after 15 seconds
  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 15000);
    return () => clearTimeout(timer);
  }, []);

  // Reappearance after 40 seconds if closed
  useEffect(() => {
    let reopenTimer: NodeJS.Timeout | undefined;
    if (closed) {
      reopenTimer = setTimeout(() => {
        setClosed(false);
        setVisible(true);
      }, 40000);
    }
    return () => clearTimeout(reopenTimer);
  }, [closed]);

  if (!visible) return null;

  return (
    <div
      className={`fixed top-1/2 right-0 transform -translate-y-1/2 z-50 transition-all duration-700 ease-in-out ${
        closed ? "translate-x-full opacity-0" : "translate-x-0 opacity-100"
      }`}
    >
      <div
        className="relative w-80 max-w-[90vw] p-6 rounded-l-3xl
                   bg-gradient-to-tr from-white/40 via-white/20 to-[#23bec8]/20
                   backdrop-blur-xl border-l-4 border-[#23bec8]
                   shadow-[0_8px_32px_0_rgba(35,190,200,0.35)]
                   hover:shadow-[0_12px_48px_0_rgba(35,190,200,0.5)]
                   transition-all duration-500"
      >
        {/* Close button */}
        <button
          onClick={() => {
            setClosed(true);
            setVisible(true);
          }}
          className="absolute top-2 right-2 text-white-600 hover:text-gray-900 transition-colors"
          aria-label="Close"
        >
          <X size={20} />
        </button>

        {/* Header */}
        <p className="font-semibold text-gray-900 mb-6 text-center md:text-left drop-shadow-sm">
          Ready to accelerate your business growth story?
        </p>

        {/* Buttons Column */}
        <div className="flex flex-col gap-4">
          {/* Data Clinics Assessment */}
          <div className="flex flex-col items-start gap-1">
            <span className="text-sm font-medium text-gray-700">For MSMEs</span>
            <Link
              href="/services/tsoelopele-one/data-clinics-understanding"
              className="px-5 py-2 rounded-md bg-[#23bec8] text-white font-semibold shadow-lg hover:bg-[#1aa3ad] transition-all duration-300 w-full text-center"
            >
              Data Clinics Assessment
            </Link>
          </div>

          {/* DIKIW Assessment */}
          <div className="flex flex-col items-start gap-1">
            <span className="text-sm font-medium text-gray-700">For Corporates</span>
            <Link
              href="#"
              className="px-5 py-2 rounded-md bg-[#00bcd4] text-white font-semibold shadow-lg hover:bg-[#019bbf] transition-all duration-300 w-full text-center"
            >
              DIKIW Assessment
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
