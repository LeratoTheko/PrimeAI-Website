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
        setMessage({ type: "success", text: "Verification successful!" });
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
        setMessage({ type: "success", text: "A new OTP has been sent to your email." });
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
    <main className="relative min-h-screen bg-gradient-to-tr from-white via-[#23bec8] to-white flex items-center justify-center font-[Poppins] px-4 py-16">

      {/* Subtle glassmorphism overlay */}
      <div className="absolute inset-0 bg-white/5 backdrop-blur-sm pointer-events-none z-0"></div>

      {/* Background circles */}
      <div className="absolute top-0 left-1/3 w-72 h-72 rounded-full bg-[#23bec8]/20 -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-[#23bec8]/10 pointer-events-none"></div>

      {/* Glassmorphic card */}
      <div className="w-full max-w-md relative z-10 rounded-2xl p-8
                      bg-white/20 backdrop-blur-lg border border-white/30 
                      shadow-[0_8px_32px_0_rgba(35,190,200,0.2)] transition-all text-center">

        <h2 className="text-2xl md:text-3xl font-semibold text-black mb-4">
          Verify Your Email
        </h2>
        <p className="text-black/90 mb-6">
          We've sent a 6-digit code to{" "}
          <span className="font-medium text-[#ffffff]">{email}</span>
        </p>

        {message && (
          <div
            className={`mb-4 p-3 rounded-md ${
              message.type === "success"
                ? "bg-green-100/70 text-green-900"
                : "bg-red-100/70 text-red-900"
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
            className="w-full text-center text-lg tracking-widest px-4 py-3 border border-white/40 rounded-md 
                       bg-white/40 text-black focus:bg-white/60 focus:ring-2 focus:ring-[#23bec8] outline-none placeholder-black/50 transition-all"
            required
          />

          <div className="flex justify-end">
            <button
              type="submit"
              disabled={loading}
              className={`px-6 py-2 rounded-md font-semibold shadow-lg transition-all 
                         ${loading
                           ? "bg-white/30 text-black/50 cursor-not-allowed"
                           : "bg-gradient-to-tr from-[#23bec8]/80 to-white/80 text-black hover:from-[#23bec8] hover:to-[#23bec8] hover:text-white"
                         }`}
            >
              {loading ? "Verifying..." : "Verify Account"}
            </button>
          </div>
        </form>

        <p className="text-sm text-black/90 mt-6">
          Didn’t get the code?{" "}
          <button
            onClick={handleResend}
            disabled={resendLoading}
            className={`font-medium ${
              resendLoading
                ? "text-black/50 cursor-not-allowed"
                : "text-[#ffffff] hover:underline"
            }`}
          >
            {resendLoading ? "Resending..." : "Resend OTP"}
          </button>
        </p>
      </div>
    </main>
  );
}
