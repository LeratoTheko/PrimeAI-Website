"use client";

import { FormEvent, useEffect, useState } from "react";
import {useRouter } from "next/navigation";

export default function PartnerPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  const options = [
    "Referral",
    "Social Media",
    "Search Engine",
    "Advertisement",
    "Event",
    "Other",
  ];

  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<string[]>([]);

  const toggleOption = (option: string) => {
    setSelected((prev) =>
      prev.includes(option)
        ? prev.filter((o) => o !== option)
        : [...prev, option]
    );
  };

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Redirect only after successful submission
  useEffect(() => {
    if (isSubmitted) {
      const timer = setTimeout(() => {
        router.push("/");
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [isSubmitted, router]);


  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true); // <-- start submitting state

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());


    try {
      const res = await fetch("/api/lets-work-together", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setIsSubmitted(true);
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (err) {
      console.error(err);
      alert("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false); // <-- stop submitting state
    }
  };


  if (isSubmitted) {
    return (
      <main className="min-h-screen flex flex-col items-center justify-center py-16 px-6 bg-gradient-to-br from-white via-[#e0f8fa] to-[#23bec8]/10">
        <div
          className="max-w-3xl w-full p-10 md:p-14 rounded-2xl shadow-2xl border border-[#23bec8]/30 text-center transition-all duration-700"
          style={{
            background:
              "linear-gradient(135deg, rgba(255,255,255,0.96), rgba(35,190,200,0.25), rgba(255,255,255,0.95))",
            backdropFilter: "blur(14px)",
          }}
        >
          <div className="flex flex-col items-center space-y-6">
            <div className="bg-[#23bec8]/10 border border-[#23bec8]/40 rounded-full p-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-16 w-16 text-[#23bec8]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-[#23bec8] tracking-wide">
              Submission Successful
            </h1>
            <p className="text-gray-700 text-lg max-w-xl leading-relaxed">
              Thank you for reaching out! Your project estimate has been received.
              Our team will review your details and get in touch with you shortly.
            </p>
            <p className="text-gray-500 text-sm mt-2 italic">
              Redirecting you to the homepage in 5 seconds...
            </p>
            <button
              onClick={() => router.push("/")}
              className="mt-6 px-6 py-3 rounded-lg font-semibold text-black bg-gradient-to-br from-white to-[#23bec8] border border-[#23bec8]/40 shadow-md hover:bg-[#23bec8] hover:text-white hover:shadow-lg transition-all duration-300"
            >
              Go Home Now
            </button>
          </div>
        </div>
      </main>
    );
  }

  // Form Display (default state)
  return (
    <main className="min-h-screen flex flex-col items-center justify-center py-16 px-6 bg-gradient-to-br from-white via-[#e0f8fa] to-[#23bec8]/10">
      <div
        className={`max-w-5xl w-full p-10 md:p-14 rounded-2xl shadow-2xl border border-[#23bec8]/30 transition-all duration-700 hover:shadow-[#23bec8]/40 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
        }`}
        style={{
          background:
            "linear-gradient(135deg, rgba(255,255,255,0.96), rgba(35,190,200,0.25), rgba(255,255,255,0.95))",
          backdropFilter: "blur(14px)",
        }}
      >
        <h1 className="text-3xl md:text-4xl font-extrabold text-center text-[#23bec8] mb-10 tracking-wide">
          Let’s Work Together
        </h1>
        <p className="text-center text-gray-700 mb-8 max-w-2xl mx-auto leading-relaxed">
          Share a few details about your project, and we’ll get in touch with a
          tailored estimate that fits your goals and vision.
        </p>

        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <label className="block font-semibold text-gray-800 mb-1">
                Full Name
              </label>
              <input
                name="fullName"
                type="text"
                placeholder="e.g., Mr. Tlhatsinyane Rapi"
                className="border border-[#23bec8]/40 rounded-lg w-full p-3 placeholder-gray-400 focus:ring-2 focus:ring-[#23bec8] focus:outline-none transition-all text-black"
                required
              />
            </div>

            <div>
              <label className="block font-semibold text-gray-800 mb-1">
                Email
              </label>
              <input
                name="email"
                type="email"
                placeholder="e.g., inquiries@example.com"
                className="border border-[#23bec8]/40 rounded-lg w-full p-3 placeholder-gray-400 focus:ring-2 focus:ring-[#23bec8] focus:outline-none transition-all text-black"
                required
              />
            </div>

            <div>
              <label className="block font-semibold text-gray-800 mb-1">
                Company Name
              </label>
              <input
                name="companyName"
                type="text"
                placeholder="e.g., PrimeAI Analytics"
                className="border border-[#23bec8]/40 rounded-lg w-full p-3 placeholder-gray-400 focus:ring-2 focus:ring-[#23bec8] focus:outline-none transition-all text-black"
                required
              />
            </div>

            <div>
              <label className="block font-semibold text-gray-800 mb-1">
                Phone Number
              </label>
              <input
                name="phoneNumber"
                type="tel"
                placeholder="e.g., +266 50123456"
                className="border border-[#23bec8]/40 rounded-lg w-full p-3 placeholder-gray-400 focus:ring-2 focus:ring-[#23bec8] focus:outline-none transition-all text-black"
                required
              />
            </div>

            <div className="md:col-span-2 relative">
              <label className="block font-semibold text-black-800 mb-2">
                How did you hear about us?
              </label>
              <div
                className="border border-[#23bec8]/40 rounded-lg p-2 cursor-pointer select-none"
                onClick={() => setOpen(!open)}
              >
                {selected.length > 0 ? selected.join(", ") : "Select options"}
              </div>

              {open && (
                <div className="absolute z-10 mt-1 w-full bg-white border border-[#23bec8]/40 rounded-lg shadow-lg p-3 max-h-60 overflow-y-auto">
                  {options.map((option) => (
                    <label
                      key={option}
                      className="flex items-center gap-2 text-gray-700 mb-2 cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        name="heardFrom"
                        value={option}
                        checked={selected.includes(option)}
                        onChange={() => toggleOption(option)}
                        className="h-4 w-4 text-[#23bec8] border-gray-300 rounded focus:ring-[#23bec8]"
                      />
                      {option}
                    </label>
                  ))}
                </div>
              )}
            </div>



            <div className="md:col-span-2">
              <label className="block font-semibold text-gray-800 mb-1">
                Project Description
              </label>
              <textarea
                name="projectDescription"
                placeholder="Tell us about your project..."
                rows={4}
                className="border border-[#23bec8]/40 rounded-lg w-full p-3 placeholder-gray-400 focus:ring-2 focus:ring-[#23bec8] focus:outline-none transition-all text-black"
                required
              />
            </div>
          </div>

          <label htmlFor="consent" className="text-sm text-gray-700 mb-3">
            Your idea is 100% protected by our Non Disclosure Agreement.
          </label>

          <div className="flex items-start gap-2 mt-3">
            <input
              name="consent"
              type="checkbox"
              id="consent"
              className="mt-1 h-4 w-4 text-[#23bec8] border-gray-300 rounded focus:ring-[#23bec8]"
              required
            />
            <label htmlFor="consent" className="text-sm text-gray-700">
              I consent to the processing of my personal data for marketing purposes.
            </label>
          </div>


          <div className="flex justify-end pt-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className={`px-6 py-3 rounded-lg font-semibold text-black bg-gradient-to-br from-white to-[#23bec8] border border-[#23bec8]/40 shadow-md hover:bg-[#23bec8] hover:text-white hover:shadow-lg transition-all duration-300 ${
                isSubmitting ? "cursor-not-allowed opacity-70" : ""
              }`}
            >
              {isSubmitting ? "Submitting..." : "Let's Work Together"}
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
