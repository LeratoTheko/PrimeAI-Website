"use client";
import Link from "next/link";
import { FiDatabase, FiBarChart2, FiTrendingUp, FiTarget, FiCheckCircle } from "react-icons/fi";
import Button from "../../../components/ui/button";

export default function DataClinicsPage() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-white via-[#23bec8]/10 to-[#ffffff]/10 text-gray-800">

      {/* Shared Gradient Wrapper */}
      <div className="relative overflow-hidden bg-gradient-to-b from-white to-[#23bec8]">

        {/* Gradient Overlay */}
        <div
          className="absolute inset-0 bg-gradient-to-b from-[#23bec8]/20 via-transparent to-[#65d4db]/20 animate-gradient-slow pointer-events-none"
          aria-hidden="true"
        ></div>

        {/* Decorative Circles */}
        <div className="absolute -top-20 -left-20 w-64 h-64 md:w-96 md:h-96 bg-[#23bec8]/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute -bottom-20 -right-20 w-64 h-64 md:w-96 md:h-96 bg-[#65d4db]/10 rounded-full blur-3xl pointer-events-none"></div>

        {/* Hero Section */}
        <section
          role="banner"
          aria-label="Tsoelopele One hero"
          className="relative h-screen flex items-center justify-center px-6"
        >
          <div className="relative z-10 max-w-6xl text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 md:mb-6 leading-snug md:leading-tight">
              <span className="text-gray-900">Data Clinics Assessment</span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-black max-w-2xl mx-auto leading-relaxed mb-8 md:mb-10">
              A structured business intelligence check-up designed to help you understand how your business uses data — from recordkeeping to decision-making.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
              <Button
                href="/services/tsoelopele-one/sme/sign-up"
                aria-label="Start the Data Clinics assessment"
                variant="primary"
              >
                Start Assessment Now
              </Button>
            </div>

            <p className="mt-10 text-sm text-black max-w-xl mx-auto opacity-90">
              Quick, practical, and designed for MSMEs — no technical jargon. The assessment highlights where you can get immediate value from data.
            </p>
          </div>
        </section>


        {/* What It Is */}
        <section className="relative z-3 max-w-3xl md:max-w-5xl mx-auto px-5 sm:px-6 py-12 md:py-20">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-black mb-6 text-center md:text-left">
            What It Is
          </h2>

          <div className="text-black leading-relaxed text-base sm:text-lg space-y-4 text-justify">
            <p>
              <strong>Data Clinics Assessment</strong> is a business intelligence (BI) maturity diagnostic by
              PrimeAI Analytics that evaluates how well an MSME captures, manages, and uses data to drive
              decisions, performance, and growth. It does not focus on digital tools for their own sake — it measures
              how those tools enable intelligence, from basic data collection to advanced analytics.
            </p>

            <p>
              The Assessment identifies data gaps across three core areas of an MSME’s digital environment —
              <strong> Customers, Operations, and Workspace</strong>. It evaluates how well the business captures
              and uses data at every interaction point: understanding customers, running internal processes,
              and enabling digital teamwork.
            </p>

            <p>
              Based on the gaps uncovered, the Assessment recommends precise data systems — from dashboards and
              data-capture tools to workflow automation and predictive intelligence. The goal is not to simply
              “digitize” a business, but to elevate it: transforming daily operations into data-driven processes,
              empowering decisions with insight, and enabling sustainable, intelligence-led growth.
            </p>
          </div>
        </section>


      </div>


      {/* Why It Exists */}
      <section className="relative bg-gradient-to-b from-white to-[#23bec8]/10 py-20 px-6 overflow-hidden">
        <div className="max-w-6xl mx-auto text-center mb-12 relative z-10">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 relative inline-block bg-clip-text text-transparent bg-gradient-to-r from-[#000000] via-[#23BEC8] to-[#000000]">
            Why It Exists
            <span className="absolute bottom-0 left-1/2 w-32 h-1 bg-gradient-to-r from-[#ffffff] via-[#23BEC8] to-[#ffffff] rounded-full -translate-x-1/2 translate-y-2 shadow-lg"></span>
          </h2>
          <p className="text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
            Most SMEs rely on memory, receipts, or scattered notes. 
            <span className="font-semibold text-[#23BEC8]"> Data Clinics</span> help
            you bring structure and intelligence to your business information so you can:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto relative z-10">
          {[
            { title: "Capture and Organize Your Data", desc: "Digitize your business records for easy access and better tracking." },
            { title: "Clean and Prepare for Insights", desc: "Transform messy or incomplete data into reliable intelligence." },
            { title: "Use It Daily for Decisions", desc: "Leverage your information to guide smarter, faster business choices." },
            { title: "Get Ready for Growth & Funding", desc: "Build credibility and readiness for investment or partnership opportunities." },
          ].map((card) => (
            <div key={card.title} className="relative rounded-2xl p-8 flex flex-col items-start bg-gradient-to-tr from-[#23BEC8]/20 to-white/40 backdrop-blur-xl border border-white/40 shadow-[0_8px_32px_0_rgba(35,190,200,0.2)] hover:shadow-[0_12px_48px_0_rgba(35,190,200,0.4)] transform hover:-translate-y-3 transition-all duration-500">
              <h3 className="text-lg font-bold text-gray-900 mb-2">{card.title}</h3>
              <p className="text-gray-800 text-sm md:text-base leading-relaxed">{card.desc}</p>
            </div>
          ))}
        </div>

        <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#23bec8]/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-[#65d4db]/10 rounded-full blur-3xl"></div>
      </section>



      {/* Three Pillars Section */}
      <section className="relative bg-gradient-to-b from-white to-[#23bec8]/10 py-20 px-6 overflow-hidden">
        <div className="max-w-6xl mx-auto text-center mb-12 relative z-10">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 relative inline-block bg-clip-text text-transparent bg-gradient-to-r from-[#000000] via-[#23BEC8] to-[#000000]">
            The Three Pillars of the Assessment
            <span className="absolute bottom-0 left-1/2 w-32 h-1 bg-gradient-to-r from-[#ffffff] via-[#23BEC8] to-[#ffffff] rounded-full -translate-x-1/2 translate-y-2 shadow-lg"></span>
          </h2>
          <p className="text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
            These pillars guide the assessment process, helping your business measure and improve its digital maturity across customers, operations, and workforce.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto relative z-10">
          {[
            { title: "Digital Customer", desc: "Evaluate how your business engages and serves customers through digital channels and experiences." },
            { title: "Digital Operations", desc: "Assess the efficiency, automation, and intelligence of your internal business processes." },
            { title: "Digital Workforce", desc: "Understand how your team leverages digital tools, collaboration, and skills to drive business performance." },
          ].map((pillar) => (
            <div key={pillar.title} className="relative rounded-2xl p-8 flex flex-col items-start bg-gradient-to-tr from-[#23BEC8]/20 to-white/40 backdrop-blur-xl border border-white/40 shadow-[0_8px_32px_0_rgba(35,190,200,0.2)] hover:shadow-[0_12px_48px_0_rgba(35,190,200,0.4)] transform hover:-translate-y-3 transition-all duration-500">
              <h3 className="text-lg font-bold text-gray-900 mb-2">{pillar.title}</h3>
              <p className="text-gray-800 text-sm md:text-base leading-relaxed">{pillar.desc}</p>
            </div>
          ))}
        </div>

        <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#23bec8]/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-[#65d4db]/10 rounded-full blur-3xl"></div>
      </section>

      {/* Benefits Section */}
      <section className="relative bg-gradient-to-b from-white to-[#23bec8]/10 py-20 px-6 overflow-hidden">
        <div className="max-w-6xl mx-auto text-center mb-12 relative z-10">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 relative inline-block bg-clip-text text-transparent bg-gradient-to-r from-[#000000] via-[#23BEC8] to-[#000000]">
            Benefits of the Data Clinics Assessment
            <span className="absolute bottom-0 left-1/2 w-32 h-1 bg-gradient-to-r from-[#ffffff] via-[#23BEC8] to-[#ffffff] rounded-full -translate-x-1/2 translate-y-2 shadow-lg"></span>
          </h2>
          <p className="text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
            Unlock tangible advantages for your business by understanding, organizing, and leveraging your data.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto relative z-10">
          {[
            { title: "Business Clarity", desc: "Understand your finances, customers, and product performance." },
            { title: "Decision Confidence", desc: "Make choices based on facts, not guesswork." },
            { title: "Credit Readiness", desc: "Get credit-ready with structured, reliable data." },
            { title: "Operational Efficiency", desc: "Save time and reduce confusion through proper organization." },
            { title: "Growth Potential", desc: "Spot profitable products and expansion opportunities." },
            { title: "Digital Readiness", desc: "Prepare for AI, dashboards, and automation." },
          ].map((benefit) => (
            <div key={benefit.title} className="relative rounded-2xl p-8 flex flex-col items-start bg-gradient-to-tr from-[#23BEC8]/20 to-white/40 backdrop-blur-xl border border-white/40 shadow-[0_8px_32px_0_rgba(35,190,200,0.2)] hover:shadow-[0_12px_48px_0_rgba(35,190,200,0.4)] transform hover:-translate-y-3 transition-all duration-500">
              <h3 className="text-lg font-bold text-gray-900 mb-2">{benefit.title}</h3>
              <p className="text-gray-800 text-sm md:text-base leading-relaxed">{benefit.desc}</p>
            </div>
          ))}
        </div>

        <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#23bec8]/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-[#65d4db]/10 rounded-full blur-3xl"></div>
      </section>

      {/* Call to Action */}
      <div className="bg-[#23bec8] text-white py-24 text-center relative z-10">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
          Take Control of Your Business Story
        </h2>
        <p className="max-w-2xl mx-auto text-lg mb-8 opacity-90">
          Discover how your daily numbers — sales, expenses, and customer patterns — 
          can guide smarter, faster growth.
        </p>
        <Link href="/services/tsoelopele-one/sme/sign-up" className="inline-block px-8 py-3 rounded-md bg-white text-[#23bec8] font-semibold shadow-md hover:bg-gray-100 transition">
          Get Assessed Now
        </Link>
      </div>

    </section>
  );
}
