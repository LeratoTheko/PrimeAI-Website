"use client";
import Link from "next/link";
import { FiDatabase, FiBarChart2, FiTrendingUp, FiTarget, FiCheckCircle } from "react-icons/fi";

export default function DataClinicsPage() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-white via-[#23bec8]/10 to-[#ffffff]/10 text-gray-800">
{/* Hero Section */}
<section className="relative overflow-hidden bg-gradient-to-b from-white to-[#23bec8] h-screen flex items-center justify-center">
  {/* Gradient Overlay */}
  <div className="absolute inset-0 bg-gradient-to-b from-[#23bec8]/20 via-transparent to-[#65d4db]/20 animate-gradient-slow"></div>

  {/* Decorative Circles */}
  <div className="absolute -top-20 -left-20 w-64 h-64 md:w-96 md:h-96 bg-[#23bec8]/10 rounded-full blur-3xl"></div>
  <div className="absolute -bottom-20 -right-20 w-64 h-64 md:w-96 md:h-96 bg-[#65d4db]/10 rounded-full blur-3xl"></div>

  {/* Content */}
  <div className="relative z-10 max-w-6xl px-6 text-center">
    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 md:mb-6 leading-snug md:leading-tight">
      <span className="bg-gradient-to-r from-[#23bec8] to-[#65d4db] bg-clip-text text-transparent">
        Tsoelopele One
      </span>
      <br />
      <span className="text-gray-900">Data Clinics Assessment</span>
    </h1>

    <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed mb-8 md:mb-10">
      A structured <span className="font-semibold text-[#23bec8]">business intelligence check-up</span> 
      designed to help you understand how your business uses data — 
      from recordkeeping to decision-making.
    </p>

    <div className="flex justify-center gap-4">
      <button className="px-6 sm:px-8 py-2 sm:py-3 rounded-full bg-[#23bec8] text-white font-semibold shadow-md hover:shadow-lg hover:bg-[#1da9b2] transition-all duration-300">
        Start Assessment
      </button>
    </div>
  </div>
</section>



      {/* What It Is */}
      <section className="max-w-5xl mx-auto px-6 py-20 text-center md:text-left relative z-10">
        <h2 className="text-3xl font-bold text-[#23bec8] mb-4">What It Is</h2>
        <p className="text-gray-700 leading-relaxed text-lg">
          The <strong>Data Clinics Assessment</strong> is your business’s
          <span className="text-[#23bec8] font-semibold"> digital health check</span>. 
          It helps you see how well you collect, organize, and use data to make
          confident decisions and prepare for growth, funding, and digital transformation.
        </p>
      </section>

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
