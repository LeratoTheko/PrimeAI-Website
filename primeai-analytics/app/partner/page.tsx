"use client";

import { FormEvent, useEffect, useState } from "react";

export default function PartnerPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    alert("Form submitted!");
  };

  return (
    <main
      className="min-h-screen flex flex-col items-center justify-center p-8"
      style={{
        backgroundImage: "linear-gradient(-250deg, #ffffff, #23bec8, #ffffff)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <h1 className="text-4xl font-bold mb-6 text-gray-800 text-center">
        Estimate Your Project
      </h1>

      <form
        onSubmit={handleSubmit}
        className={`w-full max-w-lg p-8 rounded-2xl shadow-lg border border-white/30 space-y-4 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
        }`}
        style={{
          backgroundImage: "linear-gradient(-250deg, #ffffff, #23bec8, #ffffff)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backdropFilter: "blur(12px)",
          boxShadow: "0 8px 20px rgba(0, 0, 0, 0.2)",
          borderRadius: "1rem",
        }}
      >
        {/* Full Name */}
        <div>
          <label className="block font-semibold mb-1 text-gray-800">
            Full Name
          </label>
          <input
            type="text"
            placeholder="e.g., Mr. Tlhatsinyane Rapi"
            className="w-full border-none rounded-md px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-[#23bec8]"
            required
          />
        </div>

        {/* Email */}
        <div>
          <label className="block font-semibold mb-1 text-gray-800">
            Email
          </label>
          <input
            type="email"
            placeholder="e.g., inquiries@example.com"
            className="w-full border-none rounded-md px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-[#23bec8]"
            required
          />
        </div>

        {/* Company Name */}
        <div>
          <label className="block font-semibold mb-1 text-gray-800">
            Company Name
          </label>
          <input
            type="text"
            placeholder="e.g., PrimeAI Analytics"
            className="w-full border-none rounded-md px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-[#23bec8]"
            required
          />
        </div>

        {/* Phone Number */}
        <div>
          <label className="block font-semibold mb-1 text-gray-800">
            Phone Number
          </label>
          <input
            type="tel"
            placeholder="e.g., +266 50123456"
            className="w-full border-none rounded-md px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-[#23bec8]"
            required
          />
        </div>

        {/* How did you hear about us */}
        <div>
          <label className="block font-semibold mb-1 text-gray-800">
            How did you hear about us?
          </label>
          <input
            type="text"
            placeholder="e.g., Referral, Social Media..."
            className="w-full border-none rounded-md px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-[#23bec8]"
          />
        </div>

        {/* Project Description */}
        <div>
          <label className="block font-semibold mb-1 text-gray-800">
            Project Description
          </label>
          <textarea
            placeholder="Tell us about your project..."
            className="w-full border-none rounded-md px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-[#23bec8]"
            rows={4}
            required
          />
        </div>

        {/* Consent */}
        <div className="flex items-center space-x-2">
          <input type="checkbox" id="consent" className="h-4 w-4" required />
          <label htmlFor="consent" className="text-sm text-gray-800">
            I consent to the processing of my personal data for marketing purposes.
          </label>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          style={{
            backgroundImage: "linear-gradient(-250deg, #ffffff, #23bec8, #ffffff)",
            color: "black",
          }}
          className="font-bold py-2 px-6 rounded-none shadow-lg transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl animate-float"
        >
          Estimate Project
        </button>

        {/* Floating animation */}
        <style jsx>{`
          @keyframes float {
            0% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-4px);
            }
            100% {
              transform: translateY(0);
            }
          }
          .animate-float {
            animation: float 3s ease-in-out infinite;
          }
        `}</style>
      </form>
    </main>
  );
}
