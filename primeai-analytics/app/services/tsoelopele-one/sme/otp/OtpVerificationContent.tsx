"use client";

import { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";

export default function OtpVerificationContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const email = searchParams.get("email")?.trim().toLowerCase() || "";

  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const [resendLoading, setResendLoading] = useState(false);
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);

  useEffect(() => {
    if (!email) {
      setMessage({ type: "error", text: "No email found. Please register first." });
      setTimeout(() => router.push("/services/tsoelopele-one/sme/signup"), 2000);
    }
  }, [email, router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!otp) {
      setMessage({ type: "error", text: "Please enter your OTP." });
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/sme-verify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, otp: otp.trim() }),
      });
      const data = await res.json();

      if (res.ok) {
        setMessage({ type: "success", text: "✅ Verification successful!" });
        localStorage.setItem("smeEmail", email);
        setTimeout(() => router.push("/services/tsoelopele-one/sme/sme-profile"), 1500);
      } else {
        setMessage({ type: "error", text: data.error || "Invalid or expired OTP." });
      }
    } catch (err) {
      console.error("Verification error:", err);
      setMessage({ type: "error", text: "Something went wrong. Please try again." });
    } finally {
      setLoading(false);
    }
  };

  const handleResend = async () => {
    setResendLoading(true);
    try {
      const res = await fetch("/api/sme-resend-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();

      if (res.ok) {
        setMessage({ type: "success", text: "✅ A new OTP has been sent to your email." });
      } else {
        setMessage({ type: "error", text: data.error || "Failed to resend OTP." });
      }
    } catch (err) {
      console.error("Resend OTP error:", err);
      setMessage({ type: "error", text: "Something went wrong. Please try again." });
    } finally {
      setResendLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-tr from-white via-[#23bec8] to-white flex items-center justify-center font-[Poppins] px-4 py-16">
      <div className="w-full max-w-md bg-gradient-to-tr from-white via-[#23bec8]/40 to-white shadow-2xl border border-[#23bec8]/20 rounded-2xl p-8 text-center">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
          Verify Your Email
        </h2>
        <p className="text-gray-700 mb-6">
          We've sent a 6-digit code to{" "}
          <span className="font-medium text-[#23bec8]">{email}</span>
        </p>

        {message && (
          <div
            className={`mb-4 p-3 rounded-md ${
              message.type === "success"
                ? "bg-green-100 text-green-800"
                : "bg-red-100 text-red-800"
            }`}
          >
            {message.text}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            type="text"
            value={otp}
            onChange={(e) => setOtp(e.target.value.replace(/\D/g, ""))}
            maxLength={6}
            placeholder="Enter OTP"
            className="w-full text-center text-lg tracking-widest px-4 py-3 border border-gray-300 rounded-md bg-white text-gray-900 focus:bg-white focus:ring-2 focus:ring-[#23bec8] outline-none"
            required
          />

          <div className="flex justify-end">
            <button
              type="submit"
              disabled={loading}
              className={`px-6 py-2 rounded-md font-semibold shadow-md transition-all ${
                loading
                  ? "bg-gray-300 cursor-not-allowed text-gray-500"
                  : "bg-gradient-to-tr from-[#23bec8] to-white text-gray-900 hover:from-[#23bec8] hover:to-[#23bec8] hover:text-white"
              }`}
            >
              {loading ? "Verifying..." : "Verify Account"}
            </button>
          </div>
        </form>

        <p className="text-sm text-gray-700 mt-6">
          Didn’t get the code?{" "}
          <button
            onClick={handleResend}
            disabled={resendLoading}
            className={`font-medium ${
              resendLoading
                ? "text-gray-500 cursor-not-allowed"
                : "text-[#23bec8] hover:underline"
            }`}
          >
            {resendLoading ? "Resending..." : "Resend OTP"}
          </button>
        </p>
      </div>
    </main>
  );
}
