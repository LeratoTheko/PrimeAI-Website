"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaWhatsapp, FaEnvelope } from "react-icons/fa";

export default function GeneralAssessmentPage() {
  const router = useRouter();
  const [contactOption, setContactOption] = useState<"email" | "whatsapp" | null>(null);

  return (
    <main className="relative min-h-screen bg-gradient-to-tr from-white via-[#23bec8] to-white font-[Poppins] flex items-center justify-center px-4 py-16">
      
      {/* Soft background effects */}
      <div className="absolute inset-0 bg-white/5 backdrop-blur-sm pointer-events-none z-0"></div>
      <div className="absolute top-0 left-1/3 w-72 h-72 rounded-full bg-[#23bec8]/20 -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-[#23bec8]/10 pointer-events-none"></div>

      {/* Main Card */}
      <div className="w-full max-w-3xl relative z-10 rounded-2xl p-10 md:p-14 
                      bg-white/20 backdrop-blur-lg border border-white/30 
                      shadow-[0_8px_32px_0_rgba(35,190,200,0.25)] transition-all">
        
        <h1 className="text-3xl md:text-4xl font-semibold text-black mb-4">
          Contact PrimeAI Experts
        </h1>
        <p className="text-black/90 text-base md:text-lg mb-8 leading-relaxed">
          Your business profile has been saved successfully.  
          Based on your responses, you don’t currently match a specific digital assessment category.  
          However, our experts are available to guide you personally on the next steps.  
          Please choose your preferred contact method below.
        </p>

        <div className="grid sm:grid-cols-2 gap-6 mb-10">
          {/* WhatsApp */}
          <button
            onClick={() => setContactOption("whatsapp")}
            className="flex flex-col items-center justify-center border border-white/50 
                       rounded-xl bg-white/30 hover:bg-[#23bec8]/20 transition-all 
                       p-6 text-center group shadow-md"
          >
            <FaWhatsapp className="text-4xl text-green-600 mb-3 group-hover:scale-110 transition-transform" />
            <h3 className="font-semibold text-lg text-black">Chat via WhatsApp</h3>
            <p className="text-sm text-black/70 mt-2">Instant chat with our support team</p>
          </button>

          {/* Email */}
          <button
            onClick={() => setContactOption("email")}
            className="flex flex-col items-center justify-center border border-white/50 
                       rounded-xl bg-white/30 hover:bg-[#23bec8]/20 transition-all 
                       p-6 text-center group shadow-md"
          >
            <FaEnvelope className="text-4xl text-blue-600 mb-3 group-hover:scale-110 transition-transform" />
            <h3 className="font-semibold text-lg text-black">Send an Email</h3>
            <p className="text-sm text-black/70 mt-2">Reach out to our data consultants</p>
          </button>
        </div>

        {contactOption === "whatsapp" && (
          <div className="text-center mt-6 animate-fadeIn">
            <p className="text-black/80 mb-4">Start a conversation with us on WhatsApp:</p>
            <a
              href="https://wa.me/26657612519?text=Hello%20PrimeAI%20Analytics%2C%20I%20need%20assistance%20with%20my%20business%20assessment."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 text-white font-medium rounded-lg shadow-md hover:bg-green-700 transition-all"
            >
              <FaWhatsapp className="text-xl" /> Chat on WhatsApp
            </a>
          </div>
        )}

        {contactOption === "email" && (
          <div className="text-center mt-6 animate-fadeIn">
            <p className="text-black/80 mb-4">Send us your inquiry via email:</p>
            <a
              href="mailto:info@primeai-analytics.com?subject=SME%20Data%20Clinics%20Assessment%20Assistance"
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-medium rounded-lg shadow-md hover:bg-blue-700 transition-all"
            >
              <FaEnvelope className="text-xl" /> Email PrimeAI
            </a>
          </div>
        )}

        <div className="mt-12 flex justify-center">
          <button
            onClick={() => router.push("/")}
            className="px-6 py-2 rounded-md bg-gradient-to-tr from-[#23bec8]/80 to-white/80 
                       text-black font-semibold shadow-lg hover:from-[#23bec8] hover:to-[#23bec8] 
                       hover:text-white transition-all"
          >
            Return to Home
          </button>
        </div>
      </div>
    </main>
  );
}
