"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { X } from "lucide-react";

export default function StickyCTA() {
  const [visible, setVisible] = useState(false);
  const [closed, setClosed] = useState(false);

  // Handle initial appearance after 15 seconds
  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 15000);
    return () => clearTimeout(timer);
  }, []);

  // Handle reappearance after 40 seconds if closed
  useEffect(() => {
    let reopenTimer: NodeJS.Timeout | undefined;
    if (closed) {
      reopenTimer = setTimeout(() => {
        setClosed(false);
        setVisible(true);
      }, 40000); // 40 seconds after close
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
      <div className="relative bg-white shadow-2xl rounded-l-2xl p-6 w-80 max-w-[90vw] border-l-4 border-[#23bec8]">
        {/* Close button */}
        <button
          onClick={() => {
            setClosed(true);
            setVisible(true);
          }}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 transition-colors"
          aria-label="Close"
        >
          <X size={20} />
        </button>

        <p className="font-semibold text-gray-900 mb-4 text-center md:text-left">
          Ready to accelerate your business growth story?
        </p>

        <div className="flex justify-center md:justify-start">
          <Link
            href="/services/tsoelopele-one/sme/sign-up"
            className="px-5 py-2 rounded-md bg-[#23bec8] text-white font-semibold shadow-md hover:bg-[#1aa3ad] transition-colors"
          >
            Data Clinics Assessment
          </Link>
        </div>
      </div>
    </div>
  );
}
