"use client";

import StickyCTA from "./components/stickyCTA";
import React, { useState, useRef, useEffect } from "react";
import {motion, useScroll, useTransform, useAnimation, useInView } from "framer-motion";
import {
  FiDatabase, 
  FiSettings, 
  FiCpu,
  FiLayers,
  FiShield,
  FiHeadphones,
  FiDollarSign,
  FiCheckCircle,
  FiBarChart2,
  FiSmile,
  FiRefreshCw, 
  FiUsers,
  FiSend,
  FiTrendingUp,
  FiBriefcase,
  FiArrowRightCircle
 } from "react-icons/fi";

export default function HeroSection() {
  const [showMoreText, setShowMoreText] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [scrollVal, setScrollVal] = useState(0);

  // Fix hydration issue
  useEffect(() => {
    if (!containerRef.current) return;

    const { scrollYProgress } = useScroll({
      target: containerRef,
      offset: ["start start", "end end"],
    });

    return scrollYProgress.on("change", (v) => setScrollVal(v));
  }, []);

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) controls.start("visible");
  }, [isInView, controls]);


  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, staggerChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };

  const lineVariants = {
    hidden: { height: 0 },
    visible: { height: "100%", transition: { duration: 0.8 } },
  };
  



  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-white to-[#23BEC8] text-black overflow-x-hidden font-poppins">
      {/* Hero Section */}
      <div
        className="w-full min-h-[70vh] flex flex-col bg-gradient-to-b from-white to-[#23bec8] justify-center items-center text-center px-6 md:px-12 py-12 relative overflow-hidden"

      >
        {/* Subtle floating blobs for depth */}
        <div className="absolute -top-20 -left-20 w-72 h-72 bg-[#ffffff30] rounded-full filter blur-3xl animate-pulse-slow"></div>
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-[#ffffff40] rounded-full filter blur-3xl animate-pulse-slow"></div>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6 leading-tight drop-shadow-lg">
          Empower Your Business with Tsoelopele One
        </h1>

        <p className="text-lg md:text-xl lg:text-2xl text-gray/90 max-w-3xl leading-relaxed drop-shadow-sm">
          Transform your small business with intelligent tools, actionable insights, and strategic automation.
        </p>
      </div>

      {/* Floating CTA Section */}
      <div className="relative z-20 -mt-24 px-4 md:px-10">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        {/* Card Template */}
        {[
          {
            title: "Data Clinics",
            icon: <FiDatabase className="w-8 h-8 text-white" />,
            desc: "Insight-driven diagnostic sessions to uncover challenges and unlock your data's full growth potential.",
          },
          {
            title: "Data Management",
            icon: <FiSettings className="w-8 h-8 text-white" />,
            desc: "Custom dashboards, cloud storage, and reports made easy.",
          },
          {
            title: "Digital Transformation",
            icon: <FiCpu className="w-8 h-8 text-white" />,
            desc: "Strategic tools and automation for smarter growth.",
          },
        ].map((card) => (
          <div
            key={card.title}
            className="relative rounded-2xl p-8 flex flex-col items-center text-center
                      bg-gradient-to-tr from-[#23BEC8]/30 to-white/30
                      backdrop-blur-xl border border-white/30
                      shadow-[0_8px_32px_0_rgba(35,190,200,0.25)]
                      hover:shadow-[0_12px_48px_0_rgba(35,190,200,0.4)]
                      transform hover:-translate-y-4 transition-all duration-500"
          >
            <div className="mb-4 flex items-center justify-center w-12 h-12 rounded-full
                            bg-gradient-to-r from-white/40 via-white/20 to-[#23BEC8]/40
                            shadow-lg">
              {card.icon}
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">{card.title}</h3>
            <p className="text-gray-700 text-base">{card.desc}</p>
          </div>
        ))}
      </div>


        {/* CTA Button */}
        <div className="mt-12 text-center">
          <button className="relative inline-flex items-center justify-center text-white font-bold py-4 px-12 overflow-hidden rounded-md bg-gradient-to-r from-[#23bec8] to-[#47e1dc] shadow-xl hover:shadow-2xl transition-all duration-300 group">
            <span className="relative z-10 flex items-center space-x-2">
              <span>Let's Talk</span>
              <svg
                className="w-5 h-5 transition-transform group-hover:translate-x-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </span>
            <span className="absolute inset-0 bg-white/10 rounded-full opacity-0 group-hover:opacity-20 transition duration-300"></span>
          </button>
        </div>
      </div>


      {/* Main Content Container */}
      <div className="w-full max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-12 py-20 space-y-20">        
        {/* Vision & Mission Section */}
        <section className="relative w-full flex flex-col items-center md:h-screen md:block px-4 py-16">
          {/* Vision Card */}
          <div className="w-full max-w-lg bg-white/80 backdrop-blur-sm border-2 border-black p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-justify mb-8 md:mb-0 md:absolute md:top-0 md:left-0">
            <div className="hidden md:block absolute -left-1 top-9 h-[calc(100%-1.5rem)] border-l-8 border-[#23BEC8] rounded"></div>
            <div className="hidden md:block absolute -left-1 -top-2 w-4 h-12 bg-black rounded-t-sm"></div>
            <div className="flex items-center mb-4">
              <svg className="w-8 h-8 text-[#23BEC8] mr-3" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
              </svg>
              <h3 className="text-2xl font-bold text-black">Tsoelopele One Vision</h3>
            </div>
            <p className="font-semibold mb-3 text-black text-lg">
              Delivering Data-Powered Intelligence for SMEs.
            </p>
            <p className="leading-relaxed text-black">
              To be Lesotho's most trusted AI enablement platform for informal, small, and medium enterprises (SMEs), transforming fragmented business activity into structured data and actionable intelligence.
            </p>
          </div>

          {/* Mission Card */}
          <div className="w-full max-w-lg bg-white/80 backdrop-blur-sm border-2 border-black p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-justify mt-8 md:absolute md:top-[35%] md:left-[55%]">
            <div className="hidden md:block absolute -left-1 top-9 h-[calc(100%-1.5rem)] border-l-8 border-[#23BEC8] rounded"></div>
            <div className="hidden md:block absolute -left-1 -top-2 w-4 h-12 bg-black rounded-t-sm"></div>
            <div className="flex items-center mb-4">
              <svg className="w-8 h-8 text-[#23BEC8] mr-3" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"/>
              </svg>
              <h3 className="text-2xl font-bold text-black">Tsoelopele One Mission</h3>
            </div>
            <p className="font-semibold mb-3 text-black text-lg">
              Empowering SMEs Through Digital Transformation.
            </p>
            <p className="leading-relaxed text-black">
              To empower every SME in Lesotho with tools and services that help them collect, manage, and monetize their data through smart decision making.
            </p>
          </div>
        </section>

        
      {/*--------------------------
          SECTION: WHO & WHAT WE DO
         -------------------------- */}
      <section ref={containerRef} className="min-h-screen">
        <motion.section
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="relative min-h-screen bg-gradient-to-b from-white to-[#a4edef] flex flex-col justify-center px-4 sm:px-6 md:px-12 py-12 md:py-24"
        >
          {/* Who Are We */}
          <motion.div variants={itemVariants} className="relative w-full md:w-1/2 mb-12">
            <motion.div
              variants={lineVariants}
              className="absolute left-2 sm:left-3 md:left-4 top-0 bottom-0 w-[4px] md:w-[5px] bg-black"
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="absolute top-0 -left-[5px] w-[12px] md:w-[15px] h-[25%] 
                bg-gradient-to-br from-[#23BEC8]/70 via-[#47E1DC]/70 to-[#23BEC8]/70
                backdrop-blur-sm rounded-md shadow-md"
              ></motion.div>
            </motion.div>

            <motion.div className="flex flex-col md:flex-row items-stretch ml-6 sm:ml-8 md:ml-14">
              <div className="flex-1 text-left">
                <h2 className="text-3xl font-extrabold mb-2 text-black">Tsoelopele One Vision</h2>
                <h3 className="text-lg font-bold mb-4 text-black">
                  Delivering Data-Powered Intelligence for SMEs.
                </h3>
                <p className="text-black font-medium text-justify">
                  To be Lesotho's most t4rusted AI enablement platform for informal, small, and medium enterprises
                  (SMEs), tranforming fragmented business activity into structured data and actionable intelligence.
                </p>
              </div>
            </motion.div>
          </motion.div>

        {/* What Do We Do */}
        <motion.div
          variants={itemVariants}
          className="relative w-full md:w-1/2 mb-12 md:ml-auto"
        >
          <motion.div
            variants={lineVariants}
            className="absolute left-2 sm:left-3 md:left-4 top-0 bottom-0 w-[4px] md:w-[5px] bg-black"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="absolute top-0 -left-[5px] w-[12px] md:w-[15px] h-[25%] 
              bg-gradient-to-br from-[#23BEC8]/70 via-[#47E1DC]/70 to-[#23BEC8]/70
              backdrop-blur-sm rounded-md shadow-md"
            ></motion.div>
          </motion.div>



          <motion.div
            className="
              flex flex-col md:flex-row
              items-stretch gap-8
              ml-6 sm:ml-8 md:ml-14
            "
          >
            <div className="flex-1 text-left">
              <h2 className="text-3xl font-extrabold mb-2 text-black">Tsoelopele One Mission</h2>
              <h3 className="text-lg font-bold mb-6 text-black">
                Empowering SMEs Through Digital Transformation.
              </h3>
              
              <p className="text-black font-medium text-justify">
                  To emppower every SME in Lesotho with tools and services that help them collect, 
                  manage, and monetize their data through smart decision making.
              </p>
            </div>
          </motion.div>

        </motion.div>
      </motion.section>
      </section>
  


{/* What Is / Who Is Section */}
<section className="py-20 bg-transparent text-black relative overflow-hidden">
  {/* Subtle floating blobs for aesthetic depth */}
  <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#23BEC8]/10 rounded-full blur-3xl animate-pulse-slow"></div>
  <div className="absolute -bottom-40 -right-40 w-[30rem] h-[30rem] bg-[#23BEC8]/20 rounded-full blur-3xl animate-pulse-slow"></div>

  <div className="max-w-6xl mx-auto px-6 space-y-24 relative z-10">
    {/* What Is Tsoelopele One */}
    <div className="flex justify-start">
      <div className="w-full lg:w-2/3">
        <div className="flex items-center mb-8">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900">
            What Is Tsoelopele One?
          </h2>
        </div>

        {/* Card Container */}
        <div
          className="relative rounded-2xl p-8 md:p-10 bg-gradient-to-tr from-[#23BEC8]/30 to-white/30 
                     backdrop-blur-xl border border-white/30 
                     shadow-[0_8px_32px_0_rgba(35,190,200,0.25)]
                     hover:shadow-[0_12px_48px_0_rgba(35,190,200,0.4)]
                     transition-all duration-500"
        >
          <p className="text-base mb-4 text-justify leading-relaxed text-gray-800">
            <strong>Tsoelopele One</strong> is a bold initiative under <strong>PrimeAI Analytics</strong>, 
            designed to transform Lesotho’s informal, small, and medium businesses by putting data 
            and artificial intelligence at the heart of their growth journey.
          </p>

          {/* Desktop Content */}
          <div className="hidden md:block">
            <p className="text-base text-justify leading-relaxed text-gray-800">
              “Tsoelopele” means <em className="font-semibold">progress</em> in Sesotho — capturing the ambition 
              of driving national advancement through localized, intelligent systems. This program bridges 
              the digital divide by converting undocumented, analogue business practices into AI-ready enterprises, 
              paving the way for financial inclusion, data monetization, and policy transformation.
            </p>
          </div>

          {/* Mobile Collapsible Content */}
          <div className="md:hidden">
            <div className={`transition-all duration-300 ${showMoreText ? "block" : "hidden"}`}>
              <p className="text-base text-justify leading-relaxed text-gray-800">
                “Tsoelopele” means <em className="font-semibold">progress</em> in Sesotho — capturing the ambition 
                of driving national advancement through localized, intelligent systems. This program bridges 
                the digital divide by converting undocumented, analogue business practices into AI-ready enterprises, 
                paving the way for financial inclusion, data monetization, and policy transformation.
              </p>
            </div>
            <button
              className="flex items-center gap-2 mt-4 text-gray-800 font-semibold hover:text-[#23BEC8] transition-colors"
              onClick={() => setShowMoreText(!showMoreText)}
            >
              <svg
                className={`w-5 h-5 transition-transform ${showMoreText ? "rotate-180" : ""}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
              <span>{showMoreText ? "Show Less" : "See More"}</span>
            </button>
          </div>
        </div>
      </div>
    </div>

    {/* Who Is Tsoelopele One For
      <div className="absolute inset-0 bg-gradient-to-br from-[#23BEC8]/10 via-transparent to-[#23BEC8]/10 blur-3xl opacity-70 pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">

        <div className="flex flex-col lg:flex-row items-center justify-between mb-12">
          <h2
            className="text-3xl lg:text-4xl font-extrabold text-gray-900 
                       bg-clip-text text-transparent bg-gradient-to-r from-[#000000] via-[#23BEC8] to-[#000000]"
          >
            Who Is Tsoelopele One For?
          </h2>

          <a
            href="#"
            className="mt-6 lg:mt-0 inline-flex items-center bg-gradient-to-r from-[#23BEC8] to-[#47E1DC]
                       text-white px-6 py-3 rounded-full font-semibold shadow-lg
                       hover:scale-105 hover:shadow-[0_8px_30px_rgba(35,190,200,0.5)]
                       transition-all duration-500"
          >
            Let’s Work Together
            <FiSend className="ml-2 w-5 h-5" />
          </a>
        </div>

        <div
          className="rounded-3xl p-10 bg-gradient-to-tr from-[#23BEC8]/30 to-white/40
                     backdrop-blur-xl border border-white/40
                     shadow-[0_8px_32px_0_rgba(35,190,200,0.25)]
                     hover:shadow-[0_12px_48px_0_rgba(35,190,200,0.4)]
                     transition-all duration-500"
        >

          <div className="flex items-center mb-8 space-x-4">
            <div className="p-3 bg-[#23BEC8]/20 rounded-full">
              <FiTrendingUp className="text-[#23BEC8] w-6 h-6" />
            </div>
            <h5 className="font-bold text-2xl text-gray-900 leading-snug">
              Grow Smarter with Data Strategies
            </h5>
          </div>


          <div className="bg-white/30 rounded-xl p-6 mb-8 shadow-inner border border-white/20 backdrop-blur-sm">
            <p className="text-black text-lg leading-relaxed text-justify">
              Tsoelopele One empowers small and growing enterprises to use data strategically — 
              whether you’re starting to digitize or optimizing your operations for smarter, 
              faster growth. We tailor our tools and insights to meet your business maturity.
            </p>
          </div>


          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
            {[
              {
                title: "Micro Enterprises",
                desc: "Registered microbusinesses ready to formalize data tracking, start digital adoption, and establish structure for scale.",
                icon: <FiUsers className="w-12 h-12 text-[#23BEC8]" />,
              },
              {
                title: "Small Businesses",
                desc: "Growing SMEs already using digital tools, seeking better data systems, performance insights, and growth dashboards.",
                icon: <FiBriefcase className="w-12 h-12 text-[#23BEC8]" />,
              },
              {
                title: "Medium Enterprises",
                desc: "Structured companies aiming to optimize efficiency, forecast trends, and integrate AI-driven decision frameworks.",
                icon: <FiTrendingUp className="w-12 h-12 text-[#23BEC8]" />,
              },
            ].map((item, i) => (
              <div
                key={i}
                className="group bg-gradient-to-tr from-white/50 via-[#23BEC8]/10 to-white/50
                           backdrop-blur-md rounded-2xl p-8 border border-white/30
                           shadow-lg hover:-translate-y-3 hover:shadow-[0_12px_48px_rgba(35,190,200,0.4)]
                           transition-all duration-500 text-left"
              >
                <div className="flex items-center justify-center mb-4">
                  <div className="p-4 rounded-full bg-white/50 group-hover:bg-[#23BEC8]/30 transition-all">
                    {item.icon}
                  </div>
                </div>

                <h5 className="text-xl font-bold text-gray-900 mb-3 text-center group-hover:text-[#23BEC8] transition-colors">
                  {item.title}
                </h5>
                <p className="text-black text-base text-justify leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
     */}
  </div>
</section>

        
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2
            className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 relative inline-block 
                       bg-clip-text text-transparent 
                       bg-gradient-to-r from-[#000000] via-[#23BEC8] to-[#000000]"
          >
            What We Offer
            <span
              className="absolute bottom-0 left-1/2 w-32 h-1 
                         bg-gradient-to-r from-[#ffffff] via-[#23BEC8] to-[#ffffff] 
                         rounded-full -translate-x-1/2 translate-y-2 shadow-lg"
            ></span>
          </h2>
          <p className="text-lg text-black max-w-2xl mx-auto">
            Smart solutions designed to help SMEs thrive in a data-driven world
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {[
            {
              title: "Data Clinics",
              icon: <FiBarChart2 className="w-8 h-8 text-white" />,
              gradient: "from-white/40 to-[#23BEC8]/40",
              desc: "Personalized diagnostic sessions for SMEs to uncover data pain points, identify growth opportunities, and receive tailored recommendations for growth with data strategies and digital transformation.",
            },
            {
              title: "Data Management",
              icon: <FiDatabase className="w-8 h-8 text-white" />,
              gradient: "from-[#23BEC8]/40 to-white/40",
              desc: "End-to-end services for organizing, securing, and optimizing business data, turning chaos into clarity with structured, accessible, and AI-ready information systems.",
            },
            {
              title: "Sentiment Analysis",
              icon: <FiSmile className="w-8 h-8 text-white" />,
              gradient: "from-white/40 to-[#23BEC8]/40",
              desc: "Discover what customers, communities, and competitors are saying about your brand across social media. Our sentiment analysis tools reveal patterns, emotions, and trends that drive smarter marketing and decision-making.",
            },
            {
              title: "Digital Transformation",
              icon: <FiRefreshCw className="w-8 h-8 text-white" />,
              gradient: "from-[#23BEC8]/40 to-white/40",
              desc: "We guide SMEs into the digital era with clear strategies, modern tools, and expert support to deliver measurable growth and maximize ROI. Digitize operations, unlock new markets, and future-proof your SME.",
            },
          ].map((service) => (
            <div
              key={service.title}
              className="relative rounded-2xl p-8 flex flex-col items-start
                         bg-gradient-to-tr from-[#23BEC8]/30 to-white/30
                         backdrop-blur-xl border border-white/30
                         shadow-[0_8px_32px_0_rgba(35,190,200,0.25)]
                         hover:shadow-[0_12px_48px_0_rgba(35,190,200,0.4)]
                         transform hover:-translate-y-4 transition-all duration-500"
            >
              <div className="mb-4 flex items-center space-x-4">
                <div
                  className={`w-12 h-12 rounded-full bg-gradient-to-r ${service.gradient}
                              flex items-center justify-center shadow-lg flex-shrink-0`}
                >
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 leading-snug">
                  {service.title}
                </h3>
              </div>

              <p className="text-gray-900 text-base leading-relaxed mb-6 text-justify">
                {service.desc}
              </p>



              <div className="flex flex-row flex-wrap justify-center sm:justify-between gap-4 w-full">
                <a
                  href="#"
                  className="flex items-center justify-center bg-gradient-to-br from-[#23BEC8] to-[#47E1DC]
                            text-white px-6 py-3 rounded-md shadow hover:bg-black transition-colors
                            font-semibold w-full sm:w-auto"
                >
                  Learn More
                </a>

                <a
                  href="#"
                  className="flex items-center justify-center px-6 py-3 rounded-md font-semibold text-white
                            bg-gradient-to-br from-[#23BEC8] to-white/70
                            hover:from-white/70 hover:to-[#23BEC8]
                            shadow-lg transition-all duration-300 w-full sm:w-auto"
                >
                  Let’s Work Together
                </a>
              </div>

            </div>
          ))}
        </div>
      </div>

{/* Why Choose Us Section */}
  <div className="max-w-6xl mx-auto text-center mb-12">
    <h2
      className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 relative inline-block 
                 bg-clip-text text-transparent 
                 bg-gradient-to-r from-[#000000] via-[#1aa3ad] to-[#000000]"
    >
      Why Choose Tsoelopele One
      <span
        className="absolute bottom-0 left-1/2 w-32 h-1 
                   bg-gradient-to-r from-[#ffffff] via-[#23BEC8] to-[#ffffff] 
                   rounded-full -translate-x-1/2 translate-y-2 shadow-lg"
      ></span>
    </h2>

    <p className="text-lg text-black max-w-2xl mx-auto">
      Experience the difference with our comprehensive suite of services designed for your success
    </p>
  </div>

  {/* Cards Container */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
    {[
      {
        title: "Digital Transformation Expert",
        icon: <FiCpu className="w-8 h-8 text-white" />,
        desc: "Expertise & support to navigate the complexities of adopting new digital technology.",
      },
      {
        title: "Scalability and Flexibility",
        icon: <FiLayers className="w-8 h-8 text-white" />,
        desc: "Solutions that scale to match your evolving needs – keeping you agile and competitive.",
      },
      {
        title: "Secure and Reliable",
        icon: <FiShield className="w-8 h-8 text-white" />,
        desc: "Reliable and robust security measures to protect your data and ensure business continuity.",
      },
      {
        title: "Dedicated Support",
        icon: <FiHeadphones className="w-8 h-8 text-white" />,
        desc: "Customer support to readily assist you with any concerns, issues or queries.",
      },
      {
        title: "Cost-Effective",
        icon: <FiDollarSign className="w-8 h-8 text-white" />,
        desc: "High-quality, economical solutions which ensure that you get the best return on your investment.",
      },
      {
        title: "Proven Track Record",
        icon: <FiCheckCircle className="w-8 h-8 text-white" />,
        desc: "Success stories and case studies demonstrate our ability to deliver results & drive business growth.",
      },
    ].map((card) => (
      <div
        key={card.title}
        className="relative rounded-2xl p-8 flex flex-col items-start
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
          <h3 className="text-2xl font-bold text-gray-900 leading-snug">
            {card.title}
          </h3>
        </div>

        <p className="text-gray-900 text-base leading-relaxed mb-4">
          {card.desc}
        </p>
      </div>
    ))}
  </div>
        <StickyCTA/>
      </div>
    </div>
  );
}