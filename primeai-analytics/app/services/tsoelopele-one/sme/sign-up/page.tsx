"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function SmeSignupPage() {
  const router = useRouter();
  const [agreed, setAgreed] = useState(false);
  const [formData, setFormData] = useState({ name: "", phone: "+266", email: "" });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);

  // Auto-hide messages after 5s
  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => setMessage(null), 5000);
      return () => clearTimeout(timer);
    }
  }, [message]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    // Keep +266 prefix for phone
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
    <main className="min-h-screen bg-gradient-to-tr from-white via-[#23bec8] to-white font-[Poppins] flex items-center justify-center px-4 py-16">
      <div className="w-full max-w-5xl bg-gradient-to-tr from-white via-[#23bec8]/40 to-white shadow-2xl rounded-lg p-8 md:p-12 border border-[#23bec8]/20">
        <h3 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-2">Register Your SME</h3>
        <p className="text-sm text-gray-700 mb-8">
          <span className="text-red-600">*</span> All fields are mandatory
        </p>

        {/* Notification message */}
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
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <label className="block font-medium text-gray-900 mb-1">Full Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="e.g. Mohlabi Theko"
                className="w-full bg-white text-gray-900 px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#23bec8] focus:bg-white outline-none"
                required
              />
            </div>

            <div>
              <label className="block font-medium text-gray-900 mb-1">Phone Number</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+266 5761 2519"
                className="w-full bg-white text-gray-900 px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#23bec8] focus:bg-white outline-none"
                required
                pattern="\+266\d{8}"
              />
            </div>

            <div>
              <label className="block font-medium text-gray-900 mb-1">Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className="w-full bg-white text-gray-900 px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#23bec8] focus:bg-white outline-none"
                required
              />
            </div>
          </div>

          {/* Terms & Consent Section */}
          <div className="flex flex-col space-y-2 mt-2">
            <div className="flex items-center space-x-2">
              <input
                id="agreeCheck"
                type="checkbox"
                checked={agreed}
                onChange={() => setAgreed(!agreed)}
                className="w-4 h-4 text-[#23bec8] border-gray-300 rounded focus:ring-[#23bec8]"
              />
              <label htmlFor="agreeCheck" className="text-sm text-gray-800">
                I agree to the{" "}
                <a href="/privacy" target="_blank" className="text-[#23bec8] hover:underline">
                  Terms & Conditions
                </a>
              </label>
            </div>

            {/* Consent & Contact Info Below Terms */}
            <div className="text-sm text-gray-700 mt-2 space-y-1">
              <p> <span className="font-medium">Have some questions? </span></p>
              <p>We help you kickstart your Data Clinics journey today.</p>
              <p>
                Call our experts on <span className="font-medium">+266 5761 2519</span> (Mon–Fri 8 AM - 5:30 PM)
              </p>
            </div>
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              disabled={!agreed || loading}
              className={`px-6 py-2 rounded-md font-semibold shadow-md transition-all ${
                agreed
                  ? "bg-gradient-to-tr from-[#23bec8] to-white text-gray-900 hover:from-[#23bec8] hover:to-[#23bec8] hover:text-white"
                  : "bg-gray-300 text-gray-500 cursor-not-allowed"
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

