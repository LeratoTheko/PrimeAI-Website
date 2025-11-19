"use client";
import React from "react";
import "@/app/styles/cards.css";
import { useState } from "react";
import { 
    ChartNoAxesCombined, 
    BrainCog, 
    ChartColumn, 
    HandCoins, 
    BookCopy, 
    Layers, 
    BarChart2, 
    Activity, 
    Cpu, 
    TrendingUp, 
    DollarSign, 
    Settings, 
    Zap, 
    Database, 
    Server, 
    BrainCircuit, 
    ShoppingCart, 
    Utensils, 
    Building, 
    TreeDeciduous, 
    Hospital} from "lucide-react"; // optional icon for hero section

export default function DataAnalyticsPage() {

    const industries = [
    {
      icon: <HandCoins size={30} className="text-black mr-2" />,
      title: "Finance",
      description:
        "PrimeAI Analytics enables smarter lending, fraud detection, and customer segmentation, helping financial institutions minimize risks and maximize profitability.",
    },
    {
      icon: <ShoppingCart size={30} className="text-black mr-2" />,
      title: "Retail",
      description:
        "Through sales forecasting, inventory optimization, and personalization, PrimeAI Analytics empowers retailers to boost revenue and enhance customer loyalty.",
    },
    {
      icon: <Hospital size={28} className="text-black mr-2" />,
      title: "Healthcare",
      description:
        "PrimeAI Analytics leverages predictive models to streamline patient care, optimize resource allocation, and reduce operational inefficiencies in healthcare systems.",
    },
    {
      icon: <BookCopy size={28} className="text-black mr-2" />,
      title: "Education",
      description:
        "By applying learning analytics, PrimeAI Analytics helps institutions improve student performance, retention rates, and curriculum effectiveness.",
    },
    {
      icon: <Utensils size={28} className="text-black mr-2" />,
      title: "Restaurant",
      description:
        "PrimeAI Analytics supports restaurants with demand forecasting, menu engineering, and customer behavior insights to drive profitability and satisfaction.",
    },
    {
      icon: <Building size={28} className="text-black mr-2" />,
      title: "Government",
      description:
        "PrimeAI Analytics assists governments in evidence-based policymaking, public service optimization, and transparent resource management for citizens.",
    },
    {
      icon: <TreeDeciduous size={28} className="text-black mr-2" />,
      title: "Agriculture",
      description:
        "With precision farming and weather-data analytics, PrimeAI Analytics helps farmers increase yields, reduce costs, and improve sustainability practices.",
    },
  ];

  const services = [
    {
      id: 1,
      title: "Sentiment Analysis",
      description: "Gain insights into customer emotions and opinions for smarter decision-making.",
    },
    {
      id: 2,
      title: "Business Analytics",
      description: "Transform raw data into actionable insights for business growth and strategy.",
    },
    {
      id: 3,
      title: "Customer Analytics",
      description: "Understand customer behaviors to improve engagement, loyalty, and retention.",
    },
    {
      id: 4,
      title: "Operational Analytics",
      description: "Optimize workflows and streamline operations with data-driven efficiency.",
    },
    {
      id: 5,
      title: "HR Analytics",
      description: "Leverage employee data to improve hiring, retention, and workforce planning.",
    },
    {
      id: 6,
      title: "Digital Analytics",
      description: "Track and analyze digital platforms to optimize your online presence and impact.",
    },
    {
      id: 7,
      title: "Sales & Marketing Analytics",
      description: "Measure campaign effectiveness and boost sales performance with data insights.",
    },
  ];


type ButtonType = {
  title: string;
  desc: string;
  img?: string; // optional because some buttons may not have it
  icons?: { Icon: React.FC<any>; label: string }[]; // optional
};


const [active, setActive] = useState<ButtonType>({
  title: "Your Trusted Data Analytics Partner",
  desc: "PrimeAI Analytics empowers businesses in Lesotho to transform complex data into actionable insights...",
  img: "https://images.unsplash.com/photo-1605902711622-cfb43c4434f4?auto=format&fit=crop&w=900&q=60",
});


const buttons = [
  {
    title: "Experts at your service",
    desc: "Our team of specialists — including Data Engineers, Data Scientists, and Data Center Design Engineers — collaborate to deliver innovative, reliable, and scalable analytics solutions. We work closely with your organization to understand your unique business challenges and design strategies that leverage the power of data. From implementing advanced analytics platforms to optimizing data flows, we ensure that your data infrastructure supports sustainable growth, operational efficiency, and informed decision-making at every level.",
    icons: [
      { Icon: Database, label: "Data Engineering" },
      { Icon: BrainCog, label: "Data Science" },
      { Icon: Server, label: "Data Center Design" },
    ],
    img: "https://images.unsplash.com/photo-1661961112141-c928d5ec9f0a?auto=format&fit=crop&w=900&q=60",
  },
  {
    title: "Custom Data Solutions",
    desc: "We design and implement bespoke data architectures and pipelines tailored specifically to your organization’s requirements. Our solutions ensure seamless integration, maintain high data integrity, and maximize performance across all systems. Whether it’s building automated data workflows, consolidating multiple data sources, or optimizing storage and retrieval processes, we provide end-to-end support that transforms raw data into structured, actionable intelligence for your business.",
    icons: [
      { Icon: Layers, label: "Data Architecture" },
      { Icon: Database, label: "Data Pipelines" },
      { Icon: Cpu, label: "Automation & Optimization" },
    ],
  },
  {
    title: "Results Oriented Analytics",
    desc: "Our analytics solutions go far beyond simple reporting — we transform complex datasets into actionable insights that drive measurable business outcomes. By applying predictive modeling, machine learning, and advanced business intelligence techniques, we help leaders make informed decisions, identify opportunities for growth, and optimize operational performance. Every recommendation we provide is rooted in solid data, ensuring that your strategies are both effective and aligned with long-term business objectives.",
    icons: [
      { Icon: ChartNoAxesCombined, label: "Predictive Insights" },
      { Icon: BrainCircuit, label: "Machine Learning Models" },
      { Icon: ChartColumn, label: "Business Intelligence" },
    ],
  },
];

  const [] = useState(buttons[0]);


  return (
    

    <main className="w-full min-h-screen bg-[#23bec8] relative">
{/* Hero Section */}
<div
  className="w-full min-h-[70vh] flex flex-col justify-center items-center text-center px-6 md:px-12 py-12 relative overflow-hidden bg-gradient-to-b from-white to-[#23bec8]"
>
  {/* Floating background glow blobs for depth */}
  <div className="absolute -top-20 -left-20 w-72 h-72 bg-[#ffffff40] rounded-full filter blur-3xl animate-pulse-slow"></div>
  <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-[#ffffff40] rounded-full filter blur-3xl animate-pulse-slow"></div>

  <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6 leading-tight drop-shadow-lg">
    Data Analytics Services
  </h1>

  <p className="text-lg md:text-xl lg:text-2xl text-gray-800 max-w-3xl leading-relaxed drop-shadow-sm">
    Transform your business data into actionable insights and smarter decisions.
  </p>
</div>

{/* Floating CTA Section */}
<div className="relative z-20 -mt-24 px-4 md:px-10">
  <div
    className="max-w-4xl mx-auto p-10 rounded-2xl text-center backdrop-blur-xl border border-white/30 shadow-[0_8px_32px_0_rgba(35,190,200,0.25)] bg-gradient-to-tr from-[#23BEC8]/30 to-white/40 hover:shadow-[0_12px_48px_0_rgba(35,190,200,0.4)] transition-all duration-500"
  >
    <h3 className="text-3xl font-bold text-gray-900 mb-4 leading-relaxed">
      Start Your Analytics Journey Today
    </h3>
    <p className="text-gray-700 text-lg mb-8 leading-relaxed max-w-2xl mx-auto">
      Request a demo or explore our services to see how data can transform your business.
    </p>

    <div className="flex justify-center">
      <button className="relative inline-flex items-center justify-center text-white font-bold py-4 px-10 overflow-hidden rounded-md bg-gradient-to-r from-[#23bec8] to-[#47e1dc] shadow-xl hover:shadow-2xl transition-all duration-300 group">
        <span className="relative z-10 flex items-center space-x-2">
          <span>Request Demo</span>
          <svg
            className="w-5 h-5 transition-transform group-hover:translate-x-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </span>
        <span className="absolute inset-0 bg-white/10 rounded-full opacity-0 group-hover:opacity-20 transition duration-300"></span>
      </button>
    </div>
  </div>
</div>




{/* Consulting Services Section */}
<section
  className="w-full py-20 px-6 md:px-16 relative z-0 overflow-hidden"
  style={{
    background: "linear-gradient(135deg, #ffffff, #23bec8, #ffffff)",
  }}
>
  {/* Soft glow blobs for depth */}
  <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#ffffff50] rounded-full blur-3xl animate-pulse-slow"></div>
  <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-[#ffffff60] rounded-full blur-3xl animate-pulse-slow"></div>

  {/* Section Heading */}
  <div className="max-w-6xl mx-auto text-center mb-16 relative z-10">
    <h2
      className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6 relative inline-block
                 bg-clip-text text-transparent 
                 bg-gradient-to-r from-[#000000] via-[#1aa3ad] to-[#000000]"
    >
      Our Suite of Data Analytics Consulting Services
      <span
        className="absolute bottom-0 left-1/2 w-40 h-1 
                   bg-gradient-to-r from-[#ffffff] via-[#23BEC8] to-[#ffffff] 
                   rounded-full -translate-x-1/2 translate-y-3 shadow-lg"
      ></span>
    </h2>

    <p className="text-lg md:text-xl text-gray-800 max-w-3xl mx-auto leading-relaxed drop-shadow-sm text-justify">
      Deriving the greatest value from data is the key to success, and this is precisely what PrimeAI Analytics delivers through a rich pool of data analytics services designed to accelerate insight-driven growth.
    </p>
  </div>

  {/* Cards Grid */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto relative z-10">
    {[
      {
        icon: <BarChart2 className="w-8 h-8 text-white" />,
        title: "Analytics Consulting",
        desc: "Expert guidance to develop and execute effective data analytics strategies for your business.",
      },
      {
        icon: <Activity className="w-8 h-8 text-white" />,
        title: "Analytics as a Service",
        desc: "On-demand analytics solutions without the need for heavy infrastructure investment.",
      },
      {
        icon: <Cpu className="w-8 h-8 text-white" />,
        title: "Data Analytics Modernization",
        desc: "Upgrade outdated analytics systems to modern, agile, and scalable platforms.",
      },
      {
        icon: <TrendingUp className="w-8 h-8 text-white" />,
        title: "Predictive Analytics",
        desc: "Leverage historical data to forecast future outcomes and trends with precision.",
      },
      {
        icon: <DollarSign className="w-8 h-8 text-white" />,
        title: "Pricing Analytics",
        desc: "Optimize pricing strategies based on demand, competition, and customer behavior insights.",
      },
      {
        icon: <Settings className="w-8 h-8 text-white" />,
        title: "Analytics Managed Services",
        desc: "Outsource your analytics operations to ensure continuous optimization and insights delivery.",
      },
      {
        icon: <Zap className="w-8 h-8 text-white" />,
        title: "Advanced Analytics",
        desc: "Unlock deep insights with machine learning, AI, and statistical modeling techniques.",
      },
      {
        icon: <Database className="w-8 h-8 text-white" />,
        title: "Data Warehousing",
        desc: "Centralize and organize data for fast, reliable analytics and reporting.",
      },
      {
        icon: <Server className="w-8 h-8 text-white" />,
        title: "Big Data Services",
        desc: "Process and analyze massive datasets to reveal patterns and opportunities.",
      },
    ].map((card) => (
      <div
        key={card.title}
        className="relative rounded-2xl p-4 flex flex-col items-start
                   bg-gradient-to-tr from-[#23BEC8]/30 to-white/30
                   backdrop-blur-xl border border-white/30
                   shadow-[0_8px_32px_0_rgba(35,190,200,0.25)]
                   hover:shadow-[0_12px_48px_0_rgba(35,190,200,0.4)]
                   transform hover:-translate-y-4 transition-all duration-500"
      >
        <div className="mb-4 flex items-center space-x-4">
          <div
            className="w-12 h-12 rounded-full 
                       bg-gradient-to-r from-white/40 via-white/20 to-[#23BEC8]/40
                       flex items-center justify-center shadow-lg flex-shrink-0"
          >
            {card.icon}
          </div>
          <h3 className="text-2xl font-bold text-gray-900 leading-snug">{card.title}</h3>
        </div>

        <p className="text-gray-900 text-base leading-relaxed mb-4 text-justify">{card.desc}</p>
      </div>
    ))}
  </div>
</section>


    {/* Industries Section */}
    <section id="two-column-section" className="flex flex-col md:flex-row w-full">
    {/* Right Column (60%) */}
    <div
        className="md:w-7/12 p-5 relative flex items-center justify-center bg-cover bg-center right-bg-container max-h-[500px] md:max-h-[600px]"
        style={{
        backgroundImage: "url('/path-to-your-image.jpg')", // Replace with your image
        }}
    >
        <div className="overlay-text p-6 ">
        <h2 className="text-2xl md:text-3xl font-bold text-black mb-4 leading-relaxed">
            We provide effective data analytics services for different industries
        </h2>
        <p className="text-black text-justify leading-relaxed">
            We utilize the potential of enormous data flow to uncover previously untapped insights that can help businesses from different industries make better decisions and reap competitive advantages.
        </p>
        </div>
    </div>

    {/* Left Column (40%) */}
        <div className="md:w-5/12 p-5 bg-gradient-to-b from-white to-[#23bec8] overflow-y-auto scrollbar-hide max-h-[500px] md:max-h-[600px]">
        <h3 className="text-xl md:text-2xl font-bold mb-6 text-center">Industries We Serve</h3>
        <div className="flex flex-col gap-6">
            {industries.map((industry, index) => (
            <div key={index}>
                <div className="flex items-center mb-1">
                {industry.icon}
                <h3 className="font-bold text-black">{industry.title}</h3>
                </div>
                <p className="text-black text-justify text-sm md:w-11/12">{industry.description}</p>
            </div>
            ))}
        </div>
        </div>
    </section>



{/* Custom Data & Analytics Services Section */}
<section
  className="w-full py-20 px-6 md:px-16 relative z-0 overflow-hidden"
  style={{
    background: "linear-gradient(135deg, #ffffff, #23bec8, #ffffff)",
  }}
>
  {/* Soft glow blobs for depth */}
  <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#ffffff50] rounded-full blur-3xl animate-pulse-slow"></div>
  <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-[#ffffff60] rounded-full blur-3xl animate-pulse-slow"></div>

  {/* Section Heading */}
  <div className="max-w-6xl mx-auto text-center mb-16 relative z-10">
    <h2
      className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6 relative inline-block
                 bg-clip-text text-transparent 
                 bg-gradient-to-r from-[#000000] via-[#1aa3ad] to-[#000000]"
    >
      PrimeAI Analytics Custom Range of Data & Analytics Services
      <span
        className="absolute bottom-0 left-1/2 w-40 h-1 
                   bg-gradient-to-r from-[#ffffff] via-[#23BEC8] to-[#ffffff] 
                   rounded-full -translate-x-1/2 translate-y-3 shadow-lg"
      ></span>
    </h2>

    <p className="text-lg md:text-xl text-gray-800 max-w-3xl mx-auto leading-relaxed drop-shadow-sm text-justify">
      Data is the key to unlocking growth and staying ahead of the curve in today’s fast-paced business world. 
      As the first data analytics consulting firm in Lesotho, PrimeAI Analytics offers a customized suite of 
      services and solutions designed to drive business intelligence, efficiency, and sustainable growth.
    </p>
  </div>

  {/* Grid Container */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto relative z-10">
    {services.map((service) => (
      <div
        key={service.id}
        className="relative rounded-2xl p-4 flex flex-col
                   bg-gradient-to-tr from-[#23BEC8]/30 to-white/30
                   backdrop-blur-xl shadow-[0_8px_32px_0_rgba(35,190,200,0.25)]
                   hover:shadow-[0_12px_48px_0_rgba(35,190,200,0.4)]
                   transform hover:-translate-y-4 transition-all duration-500"
      >
        {/* Number Header */}
        <div className="flex items-center justify-between w-full">
          <h5
            className="text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-black via-[#1aa3ad] to-black"
          >
            {service.id}
          </h5>
        </div>

        {/* Title */}
        <h3 className="text-2xl font-bold text-gray-900 mb-4 leading-snug">
          {service.title}
        </h3>

        {/* Description */}
        <p className="text-gray-900 text-base leading-relaxed mb-6 text-justify">
          {service.description}
        </p>
      </div>
    ))}
  </div>
</section>


    <section
      className="py-10 px-6 bg-gradient-to-br from-white via-[#23bec8] to-white"
    >
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center md:text-left">
          <h2 className="font-bold text-2xl text-black mb-4 text-justify">
            Why Choose PrimeAI Analytics as Your Trusted Data Analytics Partner
          </h2>
          <p className="text-black text-justify leading-relaxed max-w-7xl mx-auto md:mx-0">
            At PrimeAI Analytics, we seamlessly connect data, technology, and strategy to drive meaningful business outcomes.
            Every solution we design is tailored to your unique objectives, ensuring that your data becomes a powerful engine for growth and insight.
            As one of Lesotho’s leading data analytics consulting firms, we specialize in delivering bespoke strategies that transform complex data into actionable intelligence.
            Our team of experts harnesses cutting-edge technologies and innovative methodologies to tackle your most pressing business challenges,
            enabling you to make confident, data-driven decisions that propel your organization forward.
          </p>
        </div>

        {/* Interactive Buttons + Dynamic Content */}
        <div className="flex flex-col md:flex-row gap-5 min-h-[350px]">
          {/* Left Buttons */}
          <div className="md:w-1/3 flex flex-col justify-start md:sticky mt-20">
            {buttons.map((btn, idx) => (
              <button
                key={idx}
                onClick={() => setActive(btn)}
                className={`text-left py-4 px-5 mb-4 font-semibold border border-[#23bec8] transition-all duration-300 shadow-md mb-10 ${
                  active.title === btn.title
                    ? "bg-[#23bec8] text-white shadow-lg scale-105"
                    : "bg-[23bec8] text-black hover:bg-[#23bec8]/20"
                }`}
              >
                {btn.title}
              </button>
            ))}
          </div>

          {/* Right Dynamic Content */}
          <div className="w-full relative flex items-center justify-center">
            <div
              className="w-full h-full rounded-lg overflow-hidden shadow-lg relative"
              style={{
                backgroundImage: `url(${active.img || "https://images.unsplash.com/photo-1612831662653-7e6b6b0e3f9e?auto=format&fit=crop&w=900&q=60"})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="bg-black/60 p-8 flex flex-col justify-center h-full text-white">
                <h3 className="text-3xl font-semibold mb-4">{active.title}</h3>
                <p className="text-base leading-relaxed mb-6 text-justify" >{active.desc}</p>

                {/* Icons */}
                {active.icons && (
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-4">
                    {active.icons.map(({ Icon, label }, i) => (
                      <div
                        key={i}
                        className="flex flex-col items-center text-center bg-white/10 rounded-lg p-4 hover:bg-[#23bec8]/40 transition-all duration-300"
                      >
                        <Icon size={40} className="text-white mb-3" />
                        <span className="text-sm font-semibold">{label}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>


{/* Data Security & Compliance Section */}
<section
  className="w-full py-20 px-6 md:px-16 relative z-0 overflow-hidden"
  style={{
    background: "linear-gradient(135deg, #ffffff, #23bec8, #ffffff)",
  }}
>
  {/* Soft glow blobs for depth */}
  <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#ffffff50] rounded-full blur-3xl animate-pulse-slow"></div>
  <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-[#ffffff60] rounded-full blur-3xl animate-pulse-slow"></div>

  {/* Section Heading */}
  <div className="max-w-6xl mx-auto text-center mb-16 relative z-10">
    <h2
      className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6 relative inline-block
                 bg-clip-text text-transparent 
                 bg-gradient-to-r from-[#000000] via-[#1aa3ad] to-[#000000]"
    >
      Your Data Is Safe with Us
      <span
        className="absolute bottom-0 left-1/2 w-40 h-1 
                   bg-gradient-to-r from-[#ffffff] via-[#23BEC8] to-[#ffffff] 
                   rounded-full -translate-x-1/2 translate-y-3 shadow-lg"
      ></span>
    </h2>

    <p className="text-lg md:text-xl text-gray-800 max-w-3xl mx-auto leading-relaxed drop-shadow-sm text-justify">
      At <span className="font-semibold">PrimeAI Analytics</span>, 
      security and reliability are the foundation of how we deliver 
      Data Analytics as a Service. We rigorously comply with globally recognized 
      standards and certifications, setting a new benchmark for trust, 
      integrity, and excellence in the industry.
    </p>
  </div>

  {/* Compliance Grid */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto relative z-10">
    {[
      {
        title: "DP Act 2011",
        description:
          "Safeguards personal data in Lesotho, ensuring fair collection, processing, and secure handling of sensitive information.",
      },
      {
        title: "GDPR",
        description:
          "The EU regulation that protects personal data, ensuring transparency, consent, and accountability in data usage.",
      },
      {
        title: "HIPAA",
        description:
          "U.S. law enforcing protection of sensitive patient health information, guaranteeing confidentiality and security in healthcare data.",
      },
      {
        title: "SOC 2",
        description:
          "A compliance standard ensuring systems are designed to keep customer data secure, private, and reliable.",
      },
      {
        title: "SOC 3",
        description:
          "Publicly accessible certification that demonstrates strong internal controls for data protection and service integrity.",
      },
    ].map((item, index) => (
      <div
        key={index}
        className="relative rounded-2xl p-4 flex flex-col
                  bg-gradient-to-tr from-[#23BEC8]/30 to-white/30
                  backdrop-blur-xl shadow-[0_8px_32px_0_rgba(35,190,200,0.25)]
                  hover:shadow-[0_12px_48px_0_rgba(35,190,200,0.4)]
                  transform hover:-translate-y-4 transition-all duration-500"
      >
        <div className="flex items-center justify-between w-full mb-2">
          <h1 className="text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-black via-[#1aa3ad] to-black">
            {index + 1}
          </h1>
        </div>

        <h3 className="text-2xl font-bold text-gray-900 mb-3 leading-snug">
          {item.title}
        </h3>

        <p className="text-gray-900 text-base leading-relaxed mb-6 text-justify">
          {item.description}
        </p>
      </div>
    ))}

  </div>
</section>



    </main>
  );
}
