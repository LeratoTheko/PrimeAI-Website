"use client"; 
import React, { useState, JSX } from "react";
import { 
  FaCogs, 
  FaChartBar,
  FaBrain, 
  FaChess, 
  FaShieldAlt, 
  FaChartLine, 
  FaHeartbeat, 
  FaGraduationCap, 
  FaTractor, 
  FaUniversity, 
  FaShoppingCart, 
  FaDollarSign } from "react-icons/fa";


type PackageType = "starter" | "growth" | "intelligence"; 


export default function BusinessIntelligenceSection() {
  // BI Benefit State
  const [activeBenefit, setActiveBenefit] = useState("protection");

  const [activePackage, setActivePackage] = useState<PackageType>("intelligence");

  const packageDescriptions: Record<PackageType, string> = {
    starter:
      "We help you clean, organize, and visualize your core business metrics — setting the foundation for smart, insight-driven management.",
    growth:
      "Take control of your performance with automated reports, trend analysis, and guided decision-making to support your strategic priorities.",
    intelligence:
      "Leverage advanced analytics to forecast trends, evaluate outcomes, and continuously align business strategy with real-world results.",
  };

  // Explicitly tell TypeScript these IDs are valid PackageType values
  const packages: { id: PackageType; icon: JSX.Element; label: string }[] = [
    { id: "starter", icon: <FaCogs size={30} />, label: "Starter BI" },
    { id: "growth", icon: <FaChartBar size={30} />, label: "Growth BI" },
    { id: "intelligence", icon: <FaBrain size={30} />, label: "Intelligence BI" },
  ];

  const benefits = [
    {
      id: "trends",
      title: "Discover Trends Early",
      description:
        "Use historical data and performance analytics to identify patterns, emerging trends, and operational risks before they impact your business. This proactive insight supports long-term growth and stability.",
    },
    {
      id: "customer",
      title: "Understand Your Customers",
      description:
        "Segment customer data to analyze behavior, preferences, and engagement. This enables more accurate targeting, personalized services, and improved retention across all customer touchpoints.",
    },
    {
      id: "insights",
      title: "Ease Access To Insights",
      description:
        "Leverage data insights to monitor workflows, identify process inefficiencies, and improve operational performance. This results in faster execution, reduced waste, and better resource allocation.",
    },
    {
      id: "decisions",
      title: "Data-Driven Decisions",
      description:
        "Provide your teams with real-time dashboards and data visualizations that support accurate, timely, and fact-based decision-making across departments and leadership levels.",
    },
    {
      id: "competition",
      title: "Gain Competitive Advantage",
      description:
        "Track market indicators, customer sentiment, and competitor performance to quickly adapt strategies and maintain a leadership position in your industry.",
    },
    {
      id: "efficiency",
      title: "Enhance Reporting Efficiency",
      description:
        "Automate the generation of recurring reports, reducing manual workloads and increasing the speed and consistency of performance monitoring and business reviews.",
    },
    {
      id: "protection",
      title: "Data Management And Protection",
      description:
        "Ensure data accuracy, integrity, and compliance by establishing secure reporting environments and governance protocols across all analytics and BI activities.",
    },
  ];


  return (
    <>
      <section
        className="relative py-24 md:py-32 overflow-x-hidden"
        style={{ background: "linear-gradient(to bottom, #ffffff 0%, #23bec8 100%)" }}
      >
        {/* Main Container */}
        <div className="container mx-auto px-6 relative">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
            
            {/* Glass Card Wrapper */}
            <div className="backdrop-blur-xl bg-white/20 border border-white/40 shadow-xl rounded-3xl p-10 md:p-14">
              
              {/* Title */}
              <h1 className="text-3xl md:text-5xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-black to-gray-700">
                Business Intelligence Services
              </h1>

              {/* Subtitle */}
              <p className="text-black/90 md:text-lg mb-10 leading-relaxed text-justify">
                Unlock the power of your business data through insightful dashboards, performance analytics,
                and smart reporting tools to support better, faster decision-making.
              </p>

              {/* Buttons */}
              <div className="flex flex-wrap justify-center gap-6">
                <a
                  href="#"
                  className="px-5 py-2 font-semibold text-white rounded-md shadow-md transition-all duration-300 hover:shadow-[#23bec8]/60 hover:shadow-lg hover:-translate-y-[1px]"
                  style={{
                    background: "linear-gradient(135deg, #23bec8, #47e1dc)",
                  }}
                >
                  Assess Your BI Maturity
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>



      <section
        className="w-full relative py-16 px-4 sm:py-20 sm:px-6 md:px-12 overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #ffffff, #23bec8, #ffffff)",
        }}
      >
        {/* Abstract shapes */}
        <div className="absolute top-[-5rem] left-1/2 w-56 h-56 bg-[#23bec8]/20 rounded-full -translate-x-1/2 pointer-events-none blur-2xl sm:w-72 sm:h-72 sm:top-[-8rem]"></div>
        <div className="absolute bottom-[-8rem] right-[-4rem] w-72 h-72 bg-[#23bec8]/10 rounded-full pointer-events-none blur-3xl sm:w-96 sm:h-96 sm:bottom-[-12rem] sm:right-0"></div>

        <div className="max-w-4xl mx-auto relative z-10 text-center">
          {/* Title */}
          <div className="flex justify-center mb-8 sm:mb-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 relative inline-block">
              What is Business Intelligence?
              <span className="block w-20 sm:w-24 h-1 bg-gray-900 mx-auto mt-2 rounded-full"></span>
            </h2>
          </div>

          {/* Glassmorphic Content Box */}
          <div
            className="p-6 sm:p-10 md:p-12 bg-white/30 backdrop-blur-2xl border border-white/20 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 text-gray-900"
          >
            {/* Paragraphs */}
            <p className="mb-4 text-justify leading-relaxed text-sm sm:text-base">
              <strong>Business Intelligence (BI)</strong> empowers organizations to unlock the full value of their data — transforming scattered records into clear, actionable insights that support better decision-making at every level.
            </p>

            <p className="mb-4 text-justify leading-relaxed text-sm sm:text-base">
              With modern BI tools and structured data workflows, you gain real-time visibility into your operations, customer trends, financial health, and strategic performance. Whether you’re starting with simple metric tracking or moving toward predictive analytics, BI ensures your team is equipped with timely, relevant information to act decisively.
            </p>

            <p className="mb-6 text-justify font-semibold text-sm sm:text-base">
              <strong>At PrimeAI Analytics</strong>, our BI solutions are packaged to support every stage of your data journey:
            </p>

            {/* BI Package Selector */}
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-16 mb-6">
              {packages.map((pkg) => (
                <div
                  key={pkg.id}
                  onClick={() => setActivePackage(pkg.id)}
                  className="flex flex-col items-center cursor-pointer transition-all"
                >
                  <div
                    className={`flex flex-col items-center ${
                      activePackage === pkg.id
                        ? "border-b-4 border-gray-900 pb-3 scale-105"
                        : "pb-2 opacity-70 hover:opacity-100 hover:scale-105"
                    } transition-all duration-300`}
                  >
                    {pkg.icon}
                    <span className="text-gray-900 font-semibold mt-2 text-sm sm:text-base">{pkg.label}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Dynamic Description Glass Panel */}
            <div
              className="mt-4 mb-6 text-justify text-gray-900 font-medium p-4 sm:p-5 rounded-xl shadow-md
                        bg-gradient-to-tr from-white/40 to-[#23bec8]/30 backdrop-blur-xl border border-white/30"
            >
              {packageDescriptions[activePackage]}
            </div>

            {/* Final Paragraph */}
            <p className="text-justify leading-relaxed font-medium text-sm sm:text-base">
              From businesses to NGOs and institutions across Lesotho, we design and deploy secure, scalable BI solutions that turn data into a strategic asset — enabling confident, measurable growth. If you’re a small business or any size without data or data-weak, <a href="/services/tsoelopele-one" className="text-white font-semibold underline">Tsoelopele</a>.
            </p>
          </div>
        </div>
      </section>



        <section
          className="relative py-16 sm:py-20 md:py-28 overflow-x-hidden"
          style={{ background: "linear-gradient(135deg, #ffffff, #23bec8, #ffffff)" }}
        >
          <div className="container mx-auto px-4 relative z-10">

            {/* Section Header */}
            <div className="text-center mb-14">
              <h2
                className="text-3xl md:text-4xl font-extrabold mb-4 relative inline-block
                bg-clip-text text-transparent
                bg-gradient-to-r from-[#000000] via-[#23BEC8] to-[#000000]"
              >
                What We Offer
                <span
                  className="absolute bottom-0 left-1/2 w-32 h-1
                  bg-gradient-to-r from-[#ffffff] via-[#23BEC8] to-[#ffffff]
                  rounded-full -translate-x-1/2 translate-y-3 shadow-lg"
                ></span>
              </h2>

              <h5 className="text-base sm:text-lg text-black font-bold max-w-2xl mx-auto px-2">
                Make Data-Driven Decisions with Precision and Purpose
              </h5>

              <p className="mt-4 text-black text-sm sm:text-base max-w-3xl mx-auto leading-relaxed text-center sm:text-justify">
                At <strong>PrimeAI Analytics</strong>, every insight begins with your goals.
                Our custom business intelligence solutions empower departments to act
                smarter, move faster, and outperform the competition. It’s not just data,
                it’s your edge.
              </p>
            </div>

            {/* BI Services Grid */}
            <div className="grid sm:grid-cols-2 gap-8 md:gap-10 max-w-5xl mx-auto">
              {[
                {
                  icon: <FaChess className="w-6 h-6 text-white" />,
                  title: "Strategic Intelligence",
                  gradient: "from-white/40 to-[#23BEC8]/40",
                  desc: "Where is your business really going? With Strategic Intelligence, you anticipate, position, and lead. We encover whats next before competitores even see it coming.",
                },
                {
                  icon: <FaCogs className="w-6 h-6 text-white" />,
                  title: "Operational Intelligence",
                  gradient: "from-[#23BEC8]/40 to-white/40",
                  desc: "We reveal blind spots and bottlenecks, turning data into daily decisions that save time, reduce waste, and strengthen execution.",
                },
                {
                  icon: <FaShieldAlt className="w-6 h-6 text-white" />,
                  title: "Resilience Intelligence",
                  gradient: "from-white/40 to-[#23BEC8]/40",
                  desc: "We help you bounce forward, not just back. Think antifragility - transforming uncertainity into competitive strength.",
                },
                {
                  icon: <FaChartLine className="w-6 h-6 text-white" />,
                  title: "Financial Intelligence",
                  gradient: "from-[#23BEC8]/40 to-white/40",
                  desc: "Turn financial data into clear strategy and measurable growth. Smart and confident decision-making starts here.",
                },
              ].map((card) => (
                <div
                  key={card.title}
                  className="relative rounded-2xl p-6 sm:p-8 flex flex-col
                  bg-gradient-to-tr from-[#23BEC8]/30 to-white/30
                  backdrop-blur-2xl border border-white/40
                  shadow-[0_4px_18px_rgba(35,190,200,0.18)]
                  hover:shadow-[0_12px_48px_rgba(35,190,200,0.4)]
                  transform hover:-translate-y-3 transition-all duration-500"
                >
                  <div className="mb-4 flex items-center space-x-4">
                    <div
                      className={`w-12 h-12 rounded-full bg-gradient-to-r ${card.gradient}
                      flex items-center justify-center shadow-lg flex-shrink-0`}
                    >
                      {card.icon}
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 leading-snug">
                      {card.title}
                    </h3>
                  </div>

                  <p className="text-gray-900 text-sm md:text-base leading-relaxed mb-6 sm:text-justify text-center sm:text-left">
                    {card.desc}
                  </p>

                  {/* CTA Buttons */}
                  <div className="flex flex-col sm:flex-row sm:justify-between gap-3 w-full mt-auto">
                    <a
                      href="#"
                      className="flex items-center justify-center bg-gradient-to-br from-[#23BEC8] to-[#47E1DC]
                      text-white px-6 py-3 rounded-md shadow font-semibold hover:opacity-90
                      transition-all duration-300 text-sm md:text-base"
                    >
                      Learn More
                    </a>

                    <a
                      href="#"
                      className="flex items-center justify-center px-6 py-3 rounded-md font-semibold
                        text-white bg-gradient-to-br from-[#23BEC8] to-white/70
                        hover:from-white/70 hover:to-[#23BEC8]
                        shadow-lg transition-all duration-300
                        text-sm md:text-base"
                    >
                      Let’s Work Together
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>



        {/* === BI BENEFITS SECTION === */}
        <section
          className="relative py-12 sm:py-16 md:py-24 overflow-x-hidden"
          style={{ background: "linear-gradient(135deg, #ffffff, #23bec8, #ffffff)" }}
        >
          <div className="container mx-auto px-3 sm:px-4 relative z-10">

            {/* Section Header */}
            <div className="text-center mb-10 sm:mb-16">
              <h2
                className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-4 relative inline-block
                bg-clip-text text-transparent
                bg-gradient-to-r from-[#000000] via-[#23BEC8] to-[#000000]"
              >
                Business Intelligence Benefits
                <span
                  className="absolute bottom-0 left-1/2 w-24 sm:w-32 h-1
                  bg-gradient-to-r from-[#ffffff] via-[#23BEC8] to-[#ffffff]
                  rounded-full -translate-x-1/2 translate-y-2 shadow-lg"
                ></span>
              </h2>

              <h5 className="text-sm sm:text-lg text-black font-bold max-w-2xl mx-auto px-2">
                Transform Data Into Daily Insight & Strategic Advantage
              </h5>

              <p className="mb-6 text-black text-justify text-sm sm:text-base max-w-2xl mx-auto px-2">
                Every business collects data. Only a few turn it into edge. Our BI benefits
                empower your team to make faster, sharper and confident decisions across
                all departments — from operations to finance, strategy, and resilience.
              </p>
            </div>

            {/* === Two Column BI Benefits Layout === */}
            <div className="flex flex-wrap rounded-xl overflow-hidden shadow-[0_8px_32px_0_rgba(35,190,200,0.2)] border border-white/40 backdrop-blur-xl">

              {/* Left Side Buttons */}
              <div
                className="
                  w-full md:w-1/3 flex md:flex-col gap-3 overflow-x-auto md:overflow-visible 
                  p-3 sm:p-6 backdrop-blur-xl border-r border-white/30
                  no-scrollbar
                "
                style={{
                  background: "linear-gradient(135deg, rgba(255,255,255,0.45), rgba(35,190,200,0.3))",
                }}
              >
                {benefits.map((benefit) => (
                  <button
                    key={benefit.id}
                    onClick={() => setActiveBenefit(benefit.id)}
                    className={`
                      flex-shrink-0 md:flex-shrink text-left 
                      py-2 sm:py-3 px-3 sm:px-4 font-semibold rounded-lg transition-all duration-400
                      shadow-[0_2px_8px_rgba(0,0,0,0.05)]
                      backdrop-blur-xl border border-white/40 text-sm sm:text-base

                      ${
                        activeBenefit === benefit.id
                          ? "bg-gradient-to-r from-[#23BEC8] to-[#47E1DC] text-white shadow-[0_4px_14px_rgba(35,190,200,0.4)]"
                          : "bg-white/20 text-gray-900 hover:bg-[#23BEC8]/30 hover:text-black"
                      }
                    `}
                  >
                    {benefit.title}
                  </button>
                ))}
              </div>

              {/* Right Side Content */}
              <div
                className="w-full md:w-2/3 flex flex-col justify-center items-center text-center p-4 sm:p-8 bg-cover bg-center relative"
                style={{
                  backgroundImage: "url('/primeAI_bg_1.png')",
                }}
              >
                <div
                  className="
                    relative z-10 shadow-lg max-w-3xl text-justify rounded-lg border border-white/40 backdrop-blur-xl
                    p-4 sm:p-6 md:p-8 mt-6 md:mt-40
                  "
                  style={{
                    background: "linear-gradient(135deg, #ffffff, #23bec8, #ffffff)",
                  }}
                >
                  {benefits.map((benefit) => (
                    <div
                      key={benefit.id}
                      className={`transition-all duration-500 ${
                        activeBenefit === benefit.id ? "block" : "hidden"
                      }
                      bg-white/25 backdrop-blur-lg border border-white/40 shadow-[0_8px_32px_rgba(35,190,200,0.3)]
                      rounded-xl p-4 sm:p-6 md:p-8`}
                      style={{
                        background: "linear-gradient(135deg, rgba(255,255,255,0.35), rgba(35,190,200,0.25))",
                      }}
                    >
                      <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-4 text-gray-900 drop-shadow-sm">
                        {benefit.title}
                      </h3>
                      <p className="text-xs sm:text-sm md:text-base leading-relaxed text-black">
                        {benefit.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </section>


        <section className="py-20 bg-gradient-to-br from-white via-[#23BEC8] to-white">
          <div className="max-w-7xl mx-auto text-center px-6">
            
            {/* Title */}
            <h2
              className="text-3xl md:text-4xl font-extrabold mb-6 inline-block
              bg-clip-text text-transparent
              bg-gradient-to-r from-[#000000] via-[#23BEC8] to-[#000000] relative"
            >
              Industry Intelligence Expertise
              <span
                className="block w-28 h-1 mx-auto mt-3
                bg-gradient-to-r from-[#ffffff] via-[#23BEC8] to-[#ffffff]
                rounded-full shadow-lg"
              ></span>
            </h2>

            <p className="mb-10 text-black max-w-2xl mx-auto">
              We help organizations across sectors harness data to unlock clarity,
              drive action, and lead with confidence.
            </p>

            {/* Glass Cards with Decorated Icons */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
              {[
                { icon: <FaDollarSign className="text-white w-6 h-6" />, label: "Finance" },
                { icon: <FaHeartbeat className="text-white w-6 h-6" />, label: "Healthcare" },
                { icon: <FaGraduationCap className="text-white w-6 h-6" />, label: "Education" },
                { icon: <FaTractor className="text-white w-6 h-6" />, label: "Agriculture" },
                { icon: <FaUniversity className="text-white w-6 h-6" />, label: "Government" },
                { icon: <FaShoppingCart className="text-white w-6 h-6" />, label: "Retail" },
              ].map((ind, i) => (
                <div
                  key={i}
                  className="relative rounded-2xl p-4 flex flex-col items-center justify-center text-center
                            bg-gradient-to-tr from-[#23BEC8]/30 to-white/30
                            backdrop-blur-xl border border-white/30
                            shadow-[0_8px_32px_0_rgba(35,190,200,0.25)]
                            hover:shadow-[0_12px_48px_0_rgba(35,190,200,0.45)]
                            transform hover:-translate-y-3 transition-all duration-500"
                >
                  {/* Decorated Icon */}
                  <div
                    className="w-12 h-12 rounded-full mb-3 flex items-center justify-center
                              bg-gradient-to-r from-white/40 via-white/20 to-[#23BEC8]/40
                              shadow-lg"
                  >
                    {ind.icon}
                  </div>

                  <span className="mt-1 font-semibold text-gray-900">{ind.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
    </>
  )
}