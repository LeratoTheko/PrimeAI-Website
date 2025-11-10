"use client";
import Link from "next/link";
import { FiCheckCircle } from "react-icons/fi";

export default function DataClinicsPage() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-white to-[#e8f9fb] text-gray-800">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#23bec8] to-[#65d4db] opacity-10"></div>
        <div className="max-w-6xl mx-auto px-6 py-24 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-extrabold text-[#23bec8] mb-6 leading-tight">
            Tsoelopele One <br />
            <span className="text-gray-800">Data Clinics Assessment</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            A structured <span className="font-semibold text-[#23bec8]">business intelligence check-up</span> that helps you
            understand how your business uses data — from recordkeeping to
            decision-making.
          </p>
        </div>
      </div>

      {/* What It Is */}
      <div className="max-w-5xl mx-auto px-6 py-20 text-center md:text-left">
        <h2 className="text-3xl font-bold text-[#23bec8] mb-4">What It Is</h2>
        <p className="text-gray-700 leading-relaxed text-lg">
          The <strong>Data Clinics Assessment</strong> is your business’s
          <span className="text-[#23bec8] font-semibold"> digital health check</span>. 
          It helps you see how well you collect, organize, and use data to make
          confident decisions and prepare for growth, funding, and digital transformation.
        </p>
      </div>

      {/* Why It Exists */}
      <div className="bg-[#23bec810] py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#23bec8] mb-6">Why It Exists</h2>
          <p className="text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
            Most SMEs rely on memory, receipts, or scattered notes. 
            <span className="font-semibold text-[#23bec8]"> Data Clinics</span> help
            you bring structure and intelligence to your business information so you can:
          </p>
          <ul className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 text-left max-w-5xl mx-auto">
            {[
              "Capture and organize your data",
              "Clean and prepare it for insights",
              "Use it daily for decisions",
              "Get ready for growth and funding opportunities",
            ].map((point) => (
                <li
                    key={point}
                    className="flex items-center gap-3 p-4 bg-white border border-[#23bec8]/40 rounded-lg shadow-sm hover:shadow-md transition"
                >
                <div className="flex-shrink-0">
                    <FiCheckCircle className="text-[#23bec8] text-xl" />
                </div>
                <span className="text-gray-700 text-sm md:text-base leading-snug">
                    {point}
                </span>
                </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Five Pillars Section */}
      <div className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-[#23bec8] mb-10 text-center">
          The Five Pillars of the Assessment
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 text-center">
          {[
            { title: "Data", desc: "How do you capture and store business information?" },
            { title: "Information", desc: "How do you organize and make sense of your data?" },
            { title: "Knowledge", desc: "Do you understand what your data says about performance?" },
            { title: "Insight", desc: "Do you act on trends and key numbers to improve?" },
            { title: "Wisdom", desc: "Do you use insights to guide long-term growth?" },
          ].map((item, index) => (
            <div
              key={index}
              className="p-6 bg-white border border-[#23bec8]/40 rounded-xl shadow-sm hover:shadow-lg hover:scale-[1.02] transition"
            >
              <h3 className="text-[#23bec8] font-semibold text-xl mb-2">
                {item.title}
              </h3>
              <p className="text-gray-700 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Benefits */}
      <div className="bg-[#23bec810] py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-[#23bec8] mb-10 text-center">
            Benefits of the Data Clinics Assessment
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Business Clarity", desc: "Understand your finances, customers, and product performance." },
              { title: "Decision Confidence", desc: "Make choices based on facts, not guesswork." },
              { title: "Credit Readiness", desc: "Get credit-ready with structured, reliable data." },
              { title: "Operational Efficiency", desc: "Save time and reduce confusion through proper organization." },
              { title: "Growth Potential", desc: "Spot profitable products and expansion opportunities." },
              { title: "Digital Readiness", desc: "Prepare for AI, dashboards, and automation." },
            ].map((benefit, index) => (
              <div
                key={index}
                className="p-6 bg-white border border-[#23bec8]/40 rounded-xl shadow-sm hover:shadow-lg transition"
              >
                <h3 className="text-[#23bec8] font-semibold text-lg mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-700 text-sm">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* What Else They Learn */}
      <div className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-[#23bec8] mb-10 text-center">
          What Else You’ll Learn
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            "Understanding Business Data",
            "Recordkeeping Discipline",
            "From Records to Insights",
            "Digital Tools for Data Capture",
            "Data Cleaning & Accuracy",
            "Dashboard Literacy",
            "Data & Credit Readiness",
            "Data & Growth Strategy",
            "AI Readiness",
          ].map((topic, index) => (
            <div
              key={index}
              className="p-5 bg-white border border-[#23bec8]/30 rounded-lg shadow-sm hover:shadow-md hover:bg-[#f9ffff] transition"
            >
              <h3 className="text-[#23bec8] font-medium">{topic}</h3>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-[#23bec8] text-white py-24 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
          Take Control of Your Business Story
        </h2>
        <p className="max-w-2xl mx-auto text-lg mb-8 opacity-90">
          Discover how your daily numbers — sales, expenses, and customer patterns — 
          can guide smarter, faster growth.
        </p>
        <Link
          href="/services/tsoelopele-one/sme/sign-up"
          className="inline-block px-8 py-3 rounded-md bg-white text-[#23bec8] font-semibold shadow-md hover:bg-gray-100 transition"
        >
          Get Assessed Now
        </Link>
      </div>
    </section>
  );
}
