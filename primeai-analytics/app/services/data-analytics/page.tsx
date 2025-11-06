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
        className="w-full h-[60vh] flex flex-col justify-center items-center mx-auto px-2 py-5"
        style={{
          background: "linear-gradient(-320deg, #23bec8, #ffffff)",
        }}
      >
        <h1 className="text-3xl font-bold text-black mb-3 ">
          Data Analytics Services
        </h1>

        <p className="text-lg text-gray-700 leading-relaxed px-5 text-justify ">
          Transform your business data into actionable insights and smarter decisions.
        </p>
      </div>


      {/* Floating CTA (half on hero, half on services) */}
    <div className="relative z-10 -mt-25 justify-center">
    <div className="max-w-4xl mx-auto px-5 bg-white shadow-xl py-3 justify-center" style={{
          background: "linear-gradient(-220deg, #ffffff, #23bec8, #ffffff)",
        }}>
        <h3 className="text-2xl font-bold text-black-900 mb-2 justify-center leading-relaxed">
        Start Your Analytics Journey Today
        </h3>
        <p className="text-gray-700 text-lg mb-6 leading-relaxed">
        Request a demo or explore our services to see how data can transform your business.
        </p>

       <div className="flex justify-center items-center mt-8">
        <button className="relative inline-block text-black hover:text-white font-bold py-3 px-6 overflow-hidden align-middle border border-[#23bec8] transition-all duration-300">
          <span className="absolute inset-0 bg-gradient-to-r from-[#23bec8] to-white transition-transform duration-300 ease-in-out transform hover:scale-105"></span>
          <span className="relative z-10 leading-relaxed">Request Demo</span>
        </button>
      </div>
    </div>
    </div>


      
    {/* Consulting Services Section */}
    <section
    className="w-full bg-gradient-to-b from-white via-[#f8f9fa] to-[#e6f8fa] relative z-0 -mt-23"
    style={{
        background: "linear-gradient(-220deg, #ffffff, #23bec8, #ffffff)",
    }}
    >
    <div className="max-w-8xl mx-auto px-6 pt-20 pb-20 px-8 text-justify">
        <h2 className="text-2xl font-bold  text-black mb-6 mt-15 leading-relaxed">
        Our Suite of Data Analytics Consulting Services
        </h2>

        <p className="text-lg text-black-700 leading-relaxed mb-12 leading-relaxed">
        Deriving the greatest value from data is the key to success, and this is precisely what PrimeAI Analytics, a world-class data analytics consulting company, delivers through a rich pool of data analytics services.
        </p>

          <div className="horizontal-line first"></div>
          <div className="horizontal-line second"></div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

        {/* Card 1 */}
        <div className="bg-white shadow-lg p-6 flex flex-col justify-between border-b border-gray-200" style={{
        background: "linear-gradient(-220deg, #ffffff, #23bec8, #ffffff)"}}>
            <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#23bec8]">
                <BarChart2 size={24} className="text-white" />
            </div>
            <h3 className="text-xl font-bold text-black leading-relaxed">Analytics Consulting</h3>
            </div>
            <div className="flex">
            <div className="w-3 bg-black ml-4 "></div>
            <p className="text-black text-sm ml-2 leading-relaxed">
                Expert guidance to develop and execute effective data analytics strategies for your business.
            </p>
            </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white shadow-lg p-6 flex flex-col justify-between border-b border-gray-200"  style={{
        background: "linear-gradient(-220deg, #ffffff, #23bec8, #ffffff)"}}>
            <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#23bec8]">
                <Activity size={24} className="text-white" />
            </div>
            <h3 className="text-xl font-bold text-black leading-relaxed">Analytics as a Service</h3>
            </div>
            <div className="flex">
            <div className="w-3 bg-black ml-4 h-15"></div>
            <p className="text-black-700 text-sm ml-2 leading-relaxed">
                On-demand analytics solutions without the need for heavy infrastructure investment.
            </p>
            </div>
        </div>

        {/* Card 3 */}
        <div className="bg-white shadow-lg p-6 flex flex-col justify-between border-b border-gray-200"  style={{
        background: "linear-gradient(-220deg, #ffffff, #23bec8, #ffffff)"}}>
            <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#23bec8]">
                <Cpu size={24} className="text-white" />
            </div>
            <h3 className="text-xl font-bold text-black leading-relaxed">Data Analytics Modernization</h3>
            </div>
            <div className="flex">
            <div className="w-3 bg-black ml-4 h-15"></div>
            <p className="text-black-700 text-sm ml-2 leading-relaxed">
                Upgrade outdated analytics systems to modern, agile, and scalable platforms.
            </p>
            </div>
        </div>

        {/* Card 4 */}
        <div className="bg-white shadow-lg p-6 flex flex-col justify-between border-b border-gray-200"  style={{
        background: "linear-gradient(-220deg, #ffffff, #23bec8, #ffffff)"}}>
            <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#23bec8]">
                <TrendingUp size={24} className="text-white" />
            </div>
            <h3 className="text-xl font-bold text-black leading-relaxed">Predictive Analytics</h3>
            </div>
            <div className="flex">
            <div className="w-3 bg-black ml-4 h-15"></div>
            <p className="text-black-700 text-sm ml-2 leading-relaxed">
                Leverage historical data to forecast future outcomes and trends with precision.
            </p>
            </div>
        </div>

        {/* Card 5 */}
        <div className="bg-white shadow-lg p-6 flex flex-col justify-between border-b border-gray-200"  style={{
        background: "linear-gradient(-220deg, #ffffff, #23bec8, #ffffff)"}}>
            <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#23bec8]">
                <DollarSign size={24} className="text-white" />
            </div>
            <h3 className="text-xl font-bold text-black leading-relaxed">Pricing Analytics</h3>
            </div>
            <div className="flex">
            <div className="w-3 bg-black ml-4 h-15"></div>
            <p className="text-black-700 text-sm ml-2 leading-relaxed">
                Optimize pricing strategies based on demand, competition, and customer behavior insights.
            </p>
            </div>
        </div>

        {/* Card 6 */}
        <div className="bg-white shadow-lg p-6 flex flex-col justify-between border-b border-gray-200"  style={{
        background: "linear-gradient(-220deg, #ffffff, #23bec8, #ffffff)"}}>
            <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#23bec8]">
                <Settings size={24} className="text-white" />
            </div>
            <h3 className="text-xl font-bold text-black leading-relaxed">Analytics Managed Services</h3>
            </div>
            <div className="flex">
            <div className="w-3 bg-black ml-4 h-15"></div>
            <p className="text-black-700 text-sm ml-2 leading-relaxed">
                Outsource your analytics operations to ensure continuous optimization and insights delivery.
            </p>
            </div>
        </div>

        {/* Card 7 */}
        <div className="bg-white shadow-lg p-6 flex flex-col justify-between border-b border-gray-200"  style={{
        background: "linear-gradient(-220deg, #ffffff, #23bec8, #ffffff)"}}>
            <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#23bec8]">
                <Zap size={24} className="text-white" />
            </div>
            <h3 className="text-xl font-bold text-black leading-relaxed">Advanced Analytics</h3>
            </div>
            <div className="flex">
            <div className="w-3 bg-black ml-4 h-15"></div>
            <p className="text-black-700 text-sm ml-2 leading-relaxed">
                Unlock deep insights with machine learning, AI, and statistical modeling techniques.
            </p>
            </div>
        </div>

        {/* Card 8 */}
        <div className="bg-white shadow-lg p-6 flex flex-col justify-between border-b border-gray-200"  style={{
        background: "linear-gradient(-220deg, #ffffff, #23bec8, #ffffff)"}}>
            <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#23bec8]">
                <Database size={24} className="text-white" />
            </div>
            <h3 className="text-xl font-bold text-black">Data Warehousing</h3>
            </div>
            <div className="flex">
            <div className="w-3 bg-black ml-4 h-15"></div>
            <p className="text-black-700 text-sm ml-2 leading-relaxed">
                Centralize and organize data for fast, reliable analytics and reporting.
            </p>
            </div>
        </div>

        {/* Card 9 */}
        <div className="bg-white shadow-lg p-6 flex flex-col justify-between border-b border-gray-200"  style={{
        background: "linear-gradient(-220deg, #ffffff, #23bec8, #ffffff)"}}>
            <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#23bec8]">
                <Server size={24} className="text-white" />
            </div>
            <h3 className="text-xl font-bold text-black leading-relaxed">Big Data Services</h3>
            </div>
            <div className="flex">
            <div className="w-3 bg-black ml-4 h-15"></div>
            <p className="text-black-700 text-sm ml-2 leading-relaxed">
                Process and analyze massive datasets to reveal patterns and opportunities.
            </p>
            </div>
        </div>

        </div>
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
 <section className="w-full py-10 bg-gradient-to-b from-white via-[#f8f9fa] to-[#e6f8fa]" style={{
              background: "linear-gradient(-240deg, #ffffff, #23bec8, #ffffff)",
            }}>
      {/* Upper Container */}
      <div className="max-w-8xl mx-auto mb-8 px-8">
        <h2 className="text-2xl md:text-3xl font-bold text-black mb-4">
          PrimeAI Analytics Custom Range of Data and Analytics Services
        </h2>
        <p className="text-black-700 text-justify md:text-lg leading-relaxed">
          Data is the key to unlocking growth and staying ahead of the curve in today's fast-paced business world. 
          PrimeAI Analytics, the first data analytics consulting firm, understands the unique challenges that businesses face, 
          which is why we offer a range of custom data analytics consulting services and solutions designed to drive business success.
        </p>
      </div>

    {/* Grid Container */}
    <div className="max-w-8xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-8">
    {services.map((service) => (
        <div
        key={service.id}
        className="bg-white shadow-lg p-5 flex flex-col relative"
        style={{
            background: "linear-gradient(-240deg, #ffffff, #23bec8, #ffffff)",
        }}
        >
        {/* Top Number */}
        <div className="border-b-2 border-black pb-2 mb-4">
            <h1
            className="text-2xl font-extrabold text-black"
            style={{ fontSize: "40px" }}
            >
            {service.id}
            </h1>
        </div>

        {/* Title */}
        <h5
            className="font-bold text-black mb-2"
            style={{ fontSize: "20px" }}
        >
            {service.title}
        </h5>

        {/* Description with side line */}
        <div className="flex">
            <div className="w-3 bg-black h-12"></div>
            <p
            className="text-black text-sm ml-2 pb-4"
            style={{ fontSize: "16px" }}
            >
            {service.description}
            </p>
        </div>

        {/* Bottom line aligned to card edge */}
        <div className="absolute bottom-0 left-0 w-full">
            <div className="w-full bg-black h-0.5"></div>
        </div>
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


    <section
      className="py-12"
      style={{ background: "linear-gradient(135deg, #ffffff, #23bec8, #ffffff)" }}
    >
      {/* First Container */}
      <div className="container max-w-8xl mx-auto mb-10 px-8">
        <h2 className="text-2xl font-bold text-black mb-4">
          Your Data Is Safe with Us
        </h2>
        <p className="text-black max-w-8xl mx-auto text-lg leading-relaxed text-justify ">
          At <span className="font-semibold">PrimeAI Analytics</span>, security and reliability
          are not just features—they are the foundation of how we deliver Data Analytics
          as a Service. We rigorously comply with globally recognized standards and
          certifications, setting a new benchmark for trust, integrity, and excellence
          in the industry.
        </p>
      </div>

      {/* Second Container */}
        <div className="container max-w-8xl mx-auto px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
            {/* DP Act 2011 */}
            <div
            className="shadow-lg h-full border-0 p-6 transition-transform duration-300 hover:scale-105 text-justify"
            style={{ background: "linear-gradient(135deg, #ffffff, #23bec8, #ffffff)" }}
            >
            <h5 className="text-xl font-bold text-black mb-3">DP Act 2011</h5>
            <div className="flex items-start">
                <div className="w-4 bg-black h-25 mr-4 "></div>
                <p className="text-black text-base leading-relaxed">
                Data Protection Act 2011 safeguards personal data in Lesotho, ensuring fair
                collection, processing, and secure handling of sensitive information.
                </p>
            </div>
            </div>

            {/* GDPR */}
            <div
            className="shadow-lg h-full border-0 p-6 transition-transform duration-300 hover:scale-105 text-justify"
            style={{ background: "linear-gradient(135deg, #ffffff, #23bec8, #ffffff)" }}
            >
            <h5 className="text-xl font-bold text-black mb-3">GDPR</h5>
            <div className="flex items-start">
                <div className="w-4 bg-black h-25 mr-4 "></div>
                <p className="text-black text-base leading-relaxed">
                The European Union regulation that protects personal data, ensuring
                transparency, consent, and accountability in data usage.
                </p>
            </div>
            </div>

            {/* HIPAA */}
            <div
            className="shadow-lg h-full border-0 p-6 transition-transform duration-300 hover:scale-105 text-justify"
            style={{ background: "linear-gradient(135deg, #ffffff, #23bec8, #ffffff)" }}
            >
            <h5 className="text-xl font-bold text-black mb-3">HIPAA</h5>
            <div className="flex items-start">
                <div className="w-4 bg-black h-25 mr-4"></div>
                <p className="text-black text-base leading-relaxed">
                U.S. law that enforces protection of sensitive patient health information,
                guaranteeing confidentiality and security in healthcare data.
                </p>
            </div>
            </div>

            {/* SOC 2 */}
            <div
            className="shadow-lg h-full border-0 p-6 transition-transform duration-300 hover:scale-105 text-justify"
            style={{ background: "linear-gradient(135deg, #ffffff, #23bec8, #ffffff)" }}
            >
            <h5 className="text-xl font-bold text-black mb-3">SOC 2</h5>
            <div className="flex items-start">
                <div className="w-4 bg-black h-25 mr-4"></div>
                <p className="text-black text-base leading-relaxed">
                A compliance standard for service providers, ensuring systems are designed
                to keep customer data secure, private, and reliable.
                </p>
            </div>
            </div>
  


          {/* SOC 3 */}
          <div
            className="shadow-lg h-full border-0 p-6 transition-transform duration-300 hover:scale-105 text-justify"
            style={{ background: "linear-gradient(135deg, #ffffff, #23bec8, #ffffff)" }}
            >
            <h5 className="text-xl font-bold text-black mb-3">SOC 3</h5>
            <div className="flex items-start">
                {/* vertical line */}
                <div className="w-4 bg-black h-25 mr-4"></div>

                {/* text */}
                <p className="text-black text-base leading-relaxed">
                Publicly accessible compliance certification that demonstrates strong internal
                controls for data protection and service integrity.
                </p>
            </div>
            </div>

        </div>
      </div>
    </section>

    </main>
  );
}
