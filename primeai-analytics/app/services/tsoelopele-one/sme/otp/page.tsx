"use client";

import { Suspense } from "react";
import OtpVerificationContent from "./OtpVerificationContent";

export default function OtpVerificationPage() {
  return (
    <Suspense fallback={<div className="text-center py-20 text-gray-700">Loading...</div>}>
      <OtpVerificationContent />
    </Suspense>
  );
}
