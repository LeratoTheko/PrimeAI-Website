"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function SmeSignupPage() {
  const router = useRouter();
  const [agreed, setAgreed] = useState(false);
  const [formData, setFormData] = useState({ name: "", phone: "+266", email: "" });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);

  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => setMessage(null), 5000);
      return () => clearTimeout(timer);
    }
  }, [message]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === "phone") {
      let newValue = value.startsWith("+266") ? value : "+266" + value.replace(/^\+266/, "");
      setFormData({ ...formData, [name]: newValue });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!agreed) {
      setMessage({ type: "error", text: "You must agree to the Terms & Conditions." });
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/sme-signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, agreed }),
      });

      const data = await res.json();

      if (res.ok) {
        setMessage({ type: "success", text: data.message || "SME registered successfully!" });
        setTimeout(
          () =>
            router.push(
              `/services/tsoelopele-one/sme/otp?email=${encodeURIComponent(formData.email)}`
            ),
          1500
        );
      } else {
        setMessage({ type: "error", text: data.error || "Submission failed!" });
      }
    } catch (err) {
      console.error("Signup error:", err);
      setMessage({ type: "error", text: "Something went wrong. Please try again." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="relative min-h-screen bg-gradient-to-tr from-white via-[#23bec8] to-white font-[Poppins] flex items-center justify-center px-4 py-16">

      {/* Subtle glassmorphism overlay */}
      <div className="absolute inset-0 bg-white/5 backdrop-blur-sm pointer-events-none z-0"></div>

      {/* Background circles */}
      <div className="absolute top-0 left-1/3 w-72 h-72 rounded-full bg-[#23bec8]/20 -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-[#23bec8]/10 pointer-events-none"></div>

<div
  className="w-full max-w-5xl relative z-10 rounded-2xl p-8 md:p-12 
             bg-white/20 backdrop-blur-lg border border-white/30 
             shadow-[0_8px_32px_0_rgba(35,190,200,0.2)] transition-all"
>
  <h3 className="text-2xl md:text-3xl font-semibold text-black mb-2">
    Register Your SME
  </h3>
  <p className="text-sm text-black/90 mb-8">
    <span className="text-red-600">*</span> All fields are mandatory
  </p>

  {/* Notification message */}
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
    <div className="grid md:grid-cols-3 gap-6">
      {["name", "phone", "email"].map((field, idx) => (
        <div key={idx}>
          <label className="block font-medium text-black mb-1 capitalize">
            {field === "name" ? "Full Name" : field === "phone" ? "Phone Number" : "Email Address"}
          </label>
          <input
            type={field === "email" ? "email" : "text"}
            name={field}
            value={formData[field as keyof typeof formData]}
            onChange={handleChange}
            placeholder={
              field === "name"
                ? "e.g. Mohlabi Theko"
                : field === "phone"
                ? "+266 5761 2519"
                : "you@example.com"
            }
            className="w-full bg-white/40 text-black px-4 py-2 border border-white/40 
                       rounded-md focus:ring-2 focus:ring-[#23bec8] focus:bg-white/60 outline-none
                       placeholder-black/50 transition-all"
            required
            pattern={field === "phone" ? "\\+266\\d{8}" : undefined}
          />
        </div>
      ))}
    </div>

    {/* Terms & Consent */}
    <div className="flex flex-col space-y-2 mt-2 text-black/90">
      <div className="flex items-center space-x-2">
        <input
          id="agreeCheck"
          type="checkbox"
          checked={agreed}
          onChange={() => setAgreed(!agreed)}
          className="w-4 h-4 text-[#23bec8] border-black/30 rounded focus:ring-[#23bec8]"
        />
        <label htmlFor="agreeCheck" className="text-sm">
          I agree to the{" "}
          <a href="/privacy" target="_blank" className="text-[#ffffff] hover:underline">
            Terms & Conditions
          </a>
        </label>
      </div>

      <div className="text-sm mt-2 space-y-1 mt-8">
        <p>
          <span className="font-medium">Have some questions?</span>
        </p>
        <p>
          We help you kickstart you data Data Clinics journey today.
        </p>
        <p>
          Call our experts on <span className="font-medium">+266 5761 2519</span> (Mon–Fri 8 AM - 5:30 PM)
        </p>
      </div>
    </div>

    <div className="flex justify-end">
      <button
        type="submit"
        disabled={!agreed || loading}
        className={`px-6 py-2 rounded-md font-semibold shadow-lg transition-all 
                   ${
                     agreed
                       ? "bg-gradient-to-tr from-[#23bec8]/80 to-white/80 text-black hover:from-[#23bec8] hover:to-[#23bec8] hover:text-white"
                       : "bg-white/30 text-black/50 cursor-not-allowed"
                   }`}
      >
        {loading ? "Submitting..." : "Verify Email"}
      </button>
    </div>
  </form>
</div>


    </main>
  );
}
