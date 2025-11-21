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

  // ✅ Explicitly tell TypeScript these IDs are valid PackageType values
  const packages: { id: PackageType; icon: JSX.Element; label: string }[] = [
    { id: "starter", icon: <FaCogs size={40} />, label: "Starter BI" },
    { id: "growth", icon: <FaChartBar size={40} />, label: "Growth BI" },
    { id: "intelligence", icon: <FaBrain size={40} />, label: "Intelligence BI" },
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

   <div className="overflow-x-hidden w-full">
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
                href="/services/business-intelligence-dashboards/self-assessment"
                className="px-6 py-3 rounded-xl font-medium backdrop-blur-xl bg-white/30 hover:bg-[#23bec8]/60 hover:text-white text-black shadow-md border border-white/40 transition-all duration-300 hover:scale-105"
              >
                Assess Your BI Maturity
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>


{/* Section: What is BI */}
<section
  className="w-full relative py-20 px-6 md:px-16 overflow-hidden"
  style={{
    background: "linear-gradient(to bottom, #ffffff, #e0f7fa, #23bec8)", 
  }}
>
  {/* Abstract shapes */}
  <div className="absolute top-0 left-1/3 w-72 h-72 bg-[#23bec8]/20 rounded-full -translate-y-2/3 pointer-events-none blur-2xl"></div>
  <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#23bec8]/10 rounded-full pointer-events-none blur-3xl"></div>

  <div className="max-w-6xl mx-auto relative z-10 text-center">

    {/* Title */}
    <div className="flex justify-center mb-10">
      <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 relative inline-block">
        What is Business Intelligence?
        <span className="block w-24 h-1 bg-gray-900 mx-auto mt-2 rounded-full"></span>
      </h2>
    </div>

    {/* Glassmorphic Content Box */}
    <div
      className="p-10 md:p-12 bg-gradient-to-tr from-[#23BEC8]/30 to-white/40
                 backdrop-blur-xl border border-white/30
                 rounded-2xl shadow-[0_8px_32px_0_rgba(35,190,200,0.25)]
                 hover:shadow-[0_12px_48px_0_rgba(35,190,200,0.4)]
                 transition-all duration-500 text-gray-900"
    >
      {/* Paragraphs */}
      <p className="mb-4 text-justify leading-relaxed">
        <strong>Business Intelligence (BI)</strong> empowers organizations to unlock the full value of their data — transforming scattered records into clear, actionable insights that support better decision-making at every level.
      </p>

      <p className="mb-4 text-justify leading-relaxed">
        With modern BI tools and structured data workflows, you gain real-time visibility into your operations, customer trends, financial health, and strategic performance. Whether you’re starting with simple metric tracking or moving toward predictive analytics, BI ensures your team is equipped with timely, relevant information to act decisively.
      </p>

      <p className="mb-6 text-justify font-semibold">
        <strong>At PrimeAI Analytics</strong>, our BI solutions are packaged to support every stage of your data journey:
      </p>

      {/* BI Package Selector */}
      <div className="flex justify-center gap-4 sm:gap-6 md:gap-16 lg:gap-24 xl:gap-32 mb-6">
        {packages.map((pkg) => (
          <div
            key={pkg.id}
            onClick={() => setActivePackage(pkg.id)}
            className="flex flex-col items-center cursor-pointer transition-all"
          >
            <div
              className={`flex flex-col items-center ${
                activePackage === pkg.id
                  ? "border-b-4 border-gray-900 pb-3"
                  : "pb-2 opacity-70 hover:opacity-100"
              }`}
            >
              {pkg.icon}
              <span className="text-gray-900 font-semibold mt-2">{pkg.label}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Dynamic Description Glass Panel */}
      <div
        className="mt-4 mb-6 text-justify text-gray-900 font-medium p-5 rounded-md shadow
                   bg-gradient-to-tr from-white/60 to-[#23bec8]/40 backdrop-blur-lg border border-white/40"
      >
        {packageDescriptions[activePackage]}
      </div>

      {/* Final Paragraph */}
      <p className="text-justify leading-relaxed font-medium">
        From businesses to NGOs and institutions across Lesotho, we design and deploy secure, scalable BI solutions that turn data into a strategic asset — enabling confident, measurable growth. If you’re a small business or any size without data or data-weak, <a href="#" className="text-blue-900 font-semibold underline">Tsoelopele</a>.
      </p>
    </div>
  </div>
</section>



    <section className="bg-gradient-to-br from-white to-[#23bec8] text-black py-20 px-5">
      <div className="container mx-auto">
        {/* What We Offer */}
        <div className="text-center mb-12 px-5">
          <div className="flex justify-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 relative inline-block text-center">
              What We Offer
              <span className="block w-24 h-1 bg-black mx-auto mt-2 rounded-full"></span>
            </h2>
          </div>
          <h5 className="text-lg md:text-xl font-semibold mb-4">Make Data-Driven Decisions with Precision and Purpose</h5>
          <p className="mb-6 text-justify">
            At <strong>PrimeAI Analytics</strong>, every insight begins with your goals. Our custom business intelligence solutions empower every department, from strategy to sales, to act smarter, move faster, and outperform the competition. It's not just data, it's your edge.
          </p>
        </div>

        {/* Intelligence Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-12 px-2 relative">
          {[
            {
              icon: <FaChess size={30} />,
              title: "Strategic Intelligence",
              desc: "Where is your business really going? With our Strategic Intelligence, you anticipate, position, and lead. We help you uncover what’s next before competitors even see it coming."
            },
            {
              icon: <FaCogs size={30} />,
              title: "Operational Intelligence",
              desc: "Our Operational Intelligence uncovers blind spots and bottlenecks, turning your data into daily decisions that save time and boost efficiency."
            },
            {
              icon: <FaShieldAlt size={30} />,
              title: "Resilience Intelligence",
              desc: "With Resilience Intelligence, we help you bounce forward, not just back. Think antifragility, not just risk management."
            },
            {
              icon: <FaChartLine size={30} />,
              title: "Financial Intelligence",
              desc: "We turn your financial data into growth strategy, clarity, and confidence. Smart money decisions start here."
            },
          ].map((card, i) => {
            const isLastInRow = (i + 1) % 2 === 0; // for md:grid-cols-2
            return (
              <div
                key={i}
                className={`relative bg-gradient-to-r ${
                  i % 2 === 0
                    ? "from-white via-[#23bec8] to-white"
                    : "from-[#23bec8] via-white to-[#23bec8]"
                } shadow-lg p-6 flex flex-col justify-between overflow-hidden`}
              >
                <div>
                  <div className="flex items-center mb-3">
                    <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#23bec8]">
                      <div className="text-[#000]">{card.icon}</div>
                    </div>
                    <h4 className="font-bold text-black ml-2">{card.title}</h4>
                  </div>
                  <p className="text-black text-justify">{card.desc}</p>
                </div>

                
                <div className="mt-4 flex justify-end">
                  <a
                    href="#"
                    className="btn shadow text-black px-4 py-2 hover:bg-[#23bec8] hover:text-white transition"
                    style={{
                      background: "linear-gradient(-230deg, #ffffff, #23bec8, #ffffff)",
                    }}
                  >
                    Let’s Work Together
                  </a>
                </div>

                {/* Bottom line */}
                <div className="absolute bottom-0 left-0 w-full">
                  <div className="w-full bg-black h-0.5"></div>
                </div>

              </div>
            );
          })}
        </div>

        

        {/* BI Benefits Section */}
        {/* Left side (buttons) */}
      <div className="flex justify-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 relative inline-block text-center">
          Business Intelligence Benefits
          <span className="block w-24 h-1 bg-black mx-auto mt-2 rounded-full"></span>
        </h2>
      </div>

      <div className="flex flex-wrap bg-white text-black">
      <div
        className="w-full md:w-1/3 flex flex-col p-6"
        style={{
          background: "linear-gradient(135deg, #ffffff, #23bec8, #ffffff)",
        }}
      >
        {benefits.map((benefit) => (
          <button
            key={benefit.id}
            onClick={() => setActiveBenefit(benefit.id)}
            className={`text-left py-3 px-4 font-semibold border-t border-b transition-all duration-300 mb-3 ${
              activeBenefit === benefit.id
                ? "bg-[#23bec8] text-white border-black rounded-md shadow-lg"
                : "bg-transparent text-black border-black/70 hover:bg-[#23bec8]/20 rounded-md"
            }`}
          >
            {benefit.title}
          </button>
        ))}
      </div>

          {/* Right side (details) */}
          <div
            className="w-full md:w-2/3 flex flex-col justify-center items-center text-center p-8 bg-cover bg-center relative shadow-lg"
            style={{
              backgroundImage: "url('/primeAI_bg_1.png')",
            }}
          >

            {/* Text container with its own background */}
            <div className="relative z-10 p-6 md:p-8 shadow-lg max-w-3xl text-justify mt-40" style={{
              background: "linear-gradient(135deg, #ffffff, #23bec8, #ffffff)",
            }}>
              {benefits.map((benefit) => (
                <div
                  key={benefit.id}
                  className={`transition-all duration-500 ${
                    activeBenefit === benefit.id ? "block" : "hidden"
                  }`}
                >
                  <h3 className="text-2xl font-bold mb-4 text-black">
                    {benefit.title}
                  </h3>
                  <p className="text-lg leading-relaxed text-gray-800">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>



        </div>

        
        {/* Industry Expertise */}
        <div className="text-center mb-12 mt-10">
          <div className="flex justify-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 relative inline-block text-center">
              Industry Intelligence Expertise
              <span className="block w-24 h-1 bg-black mx-auto mt-2 rounded-full"></span>
            </h2>
          </div>
          <p className="mb-6 text-justify">
            We help organizations across sectors harness the power of data to unlock clarity, drive action, and lead with confidence.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
            {[
              { icon: <FaDollarSign size={30} />, label: "Finance" },
              { icon: <FaHeartbeat size={30} />, label: "Healthcare" },
              { icon: <FaGraduationCap size={30} />, label: "Education" },
              { icon: <FaTractor size={30} />, label: "Agriculture" },
              { icon: <FaUniversity size={30} />, label: "Government" },
              { icon: <FaShoppingCart size={30} />, label: "Retail" },
            ].map((ind, i) => (
              <div key={i} className="flex flex-col items-center text-center bg-white rounded-lg shadow p-4 hover:shadow-lg transition">
                {ind.icon}
                <span className="mt-2 font-semibold">{ind.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    </div> 
    
      
  );
}

