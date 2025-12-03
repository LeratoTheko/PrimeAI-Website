"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, useScroll, useTransform, useAnimation, useInView } from "framer-motion";
import { FiUsers, FiBox, FiLayers, FiRepeat } from "react-icons/fi";

import StickyCTA from "./components/hooks/stickyCTA";

export default function Home() {
  const [showAbout, setShowAbout] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Track scroll inside container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Section 1 Animations
  const scale = useTransform(scrollYProgress, [0, 0.6], [1, 0.6]);
  const yText = useTransform(scrollYProgress, [0, 0.6], ["0%", "-30%"]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  const section1Opacity = useTransform(scrollYProgress, [0, 0.75, 0.85], [1, 1, 0]);

  // Section 2 Animations (Parallax Behind)
  const section2Opacity = useTransform(scrollYProgress, [0.7, 0.9], [0, 1]);
  const section2Y = useTransform(scrollYProgress, [0.7, 1], ["20%", "0%"]);


  interface CardProps {
    title: string;
    gradient: string;
  }


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

  const Card: React.FC<CardProps> = ({ title, gradient }) => (
    <div className="relative flex-none w-full sm:w-[220px] h-[180px]">
      {/* Glow behind card */}
      <div className="absolute inset-0 rounded-2xl blur-xl opacity-40 bg-gradient-to-tr from-[#23BEC8]/30 to-white/30 transition-all duration-500 group-hover:opacity-60"></div>

      {/* Glass Card */}
      <div
        className="relative z-10 flex flex-col justify-center items-center text-center rounded-2xl p-6 backdrop-blur-xl border border-white/30
                  shadow-[0_8px_32px_0_rgba(35,190,200,0.25)]
                  hover:shadow-[0_12px_48px_0_rgba(35,190,200,0.4)]
                  transform hover:-translate-y-2 hover:scale-105
                  transition-all duration-500 group"
        style={{ background: gradient }}
      >
        <h3 className="text-lg md:text-xl font-bold text-gray-900 leading-snug">
          {title}
        </h3>
      </div>
    </div>
  );




  return (
    <main className="text-gray-900 text-center">
      {/* --- Section 1 --- */}
      <section
        ref={containerRef}
        className="flex flex-col items-center justify-center min-h-screen 
                  bg-gradient-to-b from-white to-[#23bec8] p-6 sm:p-8"
      >
        <motion.section
          style={{ opacity: section1Opacity }}
          className="sticky top-0 h-screen flex flex-col items-center justify-center
                    bg-gradient-to-b from-white to-[#23bec8]"
        >
          <motion.h1
            style={{ scale, y: yText, opacity: textOpacity }}
            className="
              text-3xl sm:text-4xl md:text-5xl 
              font-bold text-center text-black px-4
            "
          >
            Elevating Decisions with Precision-Driven Insights
          </motion.h1>

          <motion.button
            style={{ opacity: textOpacity }}
            className="
              mt-6 px-5 py-2 sm:px-6 sm:py-3 
              bg-gradient-to-br from-[#23BEC8] to-[#47E1DC]
              text-white rounded-md shadow hover:bg-black transition-colors
              font-semibold
            "
          >
            Let’s Work Together
          </motion.button>
        </motion.section>
      </section>




      {/*--------------------------
          SECTION: WHO & WHAT WE DO
         -------------------------- */}
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
              <h2 className="text-3xl font-extrabold mb-2 text-black">Who Are We?</h2>
              <h3 className="text-lg font-bold mb-4 text-black">
                PrimeAI Analytics is an AI and Data Analytics Consulting Firm
              </h3>
              <p className="text-black font-medium text-justify">
                We are focused on delivering cutting-edge Artificial Intelligence and
                Data-Driven solutions. We show Businesses, Organizations, and Governments how
                they can improve using advanced AI and data technologies.
              </p>
              <motion.button
                variants={itemVariants}
                className="mt-6 px-6 py-3 bg-gradient-to-r from-[#23bec8] to-[#47e1dc] text-black font-semibold rounded-md shadow-md hover:opacity-90 transition"
              >
                Learn More
              </motion.button>
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

          <motion.div className="flex flex-col md:flex-row items-stretch ml-6 sm:ml-8 md:ml-14">
            <div className="flex-1 text-left">
              <h2 className="text-3xl font-extrabold mb-2 text-black">What Do We Do?</h2>
              <h3 className="text-lg font-bold mb-4 text-black">
                We implement AI-driven solutions to accelerate growth
              </h3>
              <p className="text-black font-medium text-justify">
                We don’t provide generic solutions. Each project is tailored to your
                specific requirements. At the end, you get tools that simplify your
                operations and enhance business decisions.
              </p>
              <motion.button
                variants={itemVariants}
                className="mt-6 px-6 py-3 bg-gradient-to-r from-[#23bec8] to-[#47e1dc] text-black font-semibold rounded-md shadow-md hover:opacity-90 transition"
              >
                Let’s Work Together
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </motion.section>




      <section className="w-full flex flex-col md:flex-row md:h-[85vh] overflow-hidden">

        {/* Left Container (Text Section) */}
        <div
          className="w-full md:w-1/2 flex items-center justify-center p-10"
          style={{
            background: "linear-gradient(135deg, #ffffff, #23bec8, #ffffff)",
          }}>
          <div className="text-center md:text-left max-w-lg">
            <h2 className="text-3xl md:text-5xl font-extrabold text-black mb-6 leading-tight">
              Our Transformational Model
            </h2>
            <p className="text-base text-black text-justify">
              At PrimeAI Analytics, transformation is not just about technology, it’s about strategic evolution.
              Our model is a blueprint for data-driven evolution across five pillars: Data Readiness, Intelligence Deployment,
              Human-AI Synergy, Sustainable Impact, and Continuous Optimization.
              <br /><br />
              We guide organizations through this journey, starting from raw data and ending with sustained innovation.
              Whether you're an SME or a government institution, our model adapts to your context and scales with your ambition.
              <br /><br />
              This framework powers every solution we deliver, from foundational analytics to advanced AI systems, ensuring that our
              impact is practical, measurable, and transformative.
            </p>
          </div>
        </div>


        {/* Right Container (Creative Visual Section) */}
        <div className="w-full md:w-1/2 relative flex items-center justify-center bg-gradient-to-tr from-gray-100 to-[#d9f8f9]">

          {/* Background Accent Circle */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#23bec8] opacity-20 rounded-full blur-3xl translate-x-1/4 -translate-y-1/4"></div>

          {/* Floating Image Card */}
          <div className="relative z-10 bg-white/70 backdrop-blur-md rounded-2xl shadow-2xl p-4 md:p-6 transform hover:scale-[1.03] transition duration-500 ease-in-out">
            <img
              src="/primeai_model.png"
              alt="Transformational Model"
              className="w-[90%] md:w-[450px] h-auto rounded-xl shadow-lg mx-auto object-contain"
            />
          </div>

          {/* Decorative Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-white/40 to-transparent"></div>
        </div>

      </section>

      <StickyCTA />


      {/* Four Cards Section */}
      <section
        className="w-full py-16 px-6 md:px-16"
        style={{
          background: "linear-gradient(135deg, #ffffff, #23bec8, #ffffff)",
        }}>

        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 relative inline-block 
                 bg-clip-text text-transparent 
                 bg-gradient-to-r from-[#000000] via-[#1aa3ad] to-[#000000]">
            Our Co-Creation Models
            <span className="absolute bottom-0 left-1/2 w-32 h-1 
                     bg-gradient-to-r from-[#ffffff] via-[#23BEC8] to-[#ffffff] 
                     rounded-full -translate-x-1/2 translate-y-2 shadow-lg"></span>
          </h2>
        </div>


        {/* Cards Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">

          {[
            {
              title: "Collaborative Model",
              icon: <FiUsers className="w-8 h-8 text-white" />,
              desc: "We partner closely with clients to co-design solutions, combining your expertise with data and AI insights for maximum impact.",
              button: "Let’s Work Together",
            },
            {
              title: "Solution Providing Model",
              icon: <FiBox className="w-8 h-8 text-white" />,
              desc: "We deliver ready-to-deploy data and AI solutions tailored to your specific needs, driving measurable results from day one.",
              button: "Let’s Work Together",
            },
            {
              title: "Managed & Delivered Services",
              icon: <FiLayers className="w-8 h-8 text-white" />,
              desc: "We manage and deliver ongoing data services and AI operations, so you can focus on your core business while we handle the complexity.",
              button: "Let’s Work Together",
            },
            {
              title: "We Are Flexible",
              icon: <FiRepeat className="w-8 h-8 text-white" />,
              desc: "Our approach adapts to your needs, whether you require full co-creation, stand-alone solutions, or ongoing managed services.",
              button: "Let’s Work Together",
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
                <div className="w-12 h-12 rounded-full 
                        bg-gradient-to-r from-white/40 via-white/20 to-[#23BEC8]/40
                        flex items-center justify-center shadow-lg flex-shrink-0">
                  {card.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 leading-snug">{card.title}</h3>
              </div>

              <p className="text-gray-900 text-base leading-relaxed mb-4">{card.desc}</p>

              <div className="flex justify-end w-full">
                <button className="px-5 py-2 rounded-md font-semibold text-white
                           bg-gradient-to-br from-[#23BEC8] to-white/70
                           hover:from-white/70 hover:to-[#23BEC8]
                           shadow-lg transition-all duration-300">
                  {card.button}
                </button>
              </div>
            </div>
          ))}

        </div>

      </section>




      <section
        className="w-full min-h-screen flex flex-col justify-center px-6 py-16 relative overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #e0f7fa, #23bec8, #ffffff)",
        }}
      >
        {/* Optional floating abstract shapes */}
        <div className="absolute top-0 left-1/2 w-72 h-72 bg-[#23bec8]/20 rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#23bec8]/10 rounded-full pointer-events-none"></div>

        {/* Section Heading */}
        <div className="max-w-6xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4 relative inline-block
                   bg-clip-text text-transparent
                   bg-gradient-to-r from-[#000000] via-[#23BEC8] to-[#000000]">
            Our Core Capabilities
            <span className="absolute bottom-0 left-1/2 w-32 h-1
                       bg-gradient-to-r from-[#ffffff] via-[#23BEC8] to-[#ffffff]
                       rounded-full -translate-x-1/2 translate-y-2 shadow-lg"></span>
          </h2>
        </div>

        {/* Cards Container */}
        <div className="max-w-6xl mx-auto flex flex-col items-center gap-12 relative">

          {/* Bottom row: 4 cards */}
          <div className="flex flex-wrap justify-center w-full gap-6 z-10">
            <Card title="AI Development" gradient="linear-gradient(135deg, #23BEC8/30, #ffffff/30, #23BEC8/30)" />
            <Card title="Data Engineering" gradient="linear-gradient(135deg, #23BEC8/30, #ffffff/30, #23BEC8/30)" />
            <Card title="Software Engineering" gradient="linear-gradient(135deg, #23BEC8/30, #ffffff/30, #23BEC8/30)" />
            <Card title="Strategic Business Alignment" gradient="linear-gradient(135deg, #23BEC8/30, #ffffff/30, #23BEC8/30)" />
          </div>

          {/* Middle row: 3 cards, overlapping bottom */}
          <div className="flex flex-wrap justify-center w-3/4 -mt-20 gap-6 z-20">
            <Card title="AI Ethics & Compliance" gradient="linear-gradient(135deg, #000000/20, #23BEC8/30, #000000/20)" />
            <Card title="Business Intelligence & Analytics" gradient="linear-gradient(135deg, #000000/20, #23BEC8/30, #000000/20)" />
            <Card title="Operations & Infrastructure Management" gradient="linear-gradient(135deg, #000000/20, #23BEC8/30, #000000/20)" />
          </div>

          {/* Top row: 2 cards, overlapping middle */}
          <div className="flex flex-wrap justify-center w-1/2 -mt-20 gap-6 z-30">
            <Card title="AI Consulting" gradient="linear-gradient(135deg, #ffffff/30, #23BEC8/30, #ffffff/30)" />
            <Card title="Market Research & Customer Intelligence" gradient="linear-gradient(135deg, #ffffff/30, #23BEC8/30, #ffffff/30)" />
          </div>
        </div>
      </section>


      <section
        className="w-full relative py-24 px-6 md:px-16 overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #e0f7fa, #23bec8, #ffffff)",
        }}
      >
        {/* Abstract Shapes */}
        <div className="absolute top-0 left-1/2 w-72 h-72 bg-[#23bec8]/20 rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#23bec8]/10 rounded-full pointer-events-none"></div>

        <div className="max-w-6xl mx-auto flex flex-col gap-20 relative z-10">

          {/* ===================== */}
          {/*       DATA CLINICS    */}
          {/* ===================== */}
          <div className="flex flex-col md:flex-row items-center gap-12">

            {/* Left Title */}
            <div className="md:w-1/2 flex items-center justify-center md:justify-start">
              <h3 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-snug">
                Data Clinics Assessment
              </h3>
            </div>

            {/* Right Card */}
            <div className="md:w-1/2 flex flex-col gap-6
                      bg-gradient-to-tr from-[#23BEC8]/30 to-white/25
                      backdrop-blur-3xl border border-white/30
                      rounded-3xl p-10 shadow-[0_12px_48px_0_rgba(35,190,200,0.25)]
                      hover:shadow-[0_16px_64px_0_rgba(35,190,200,0.35)]
                      transition-all duration-500">

              <p className="text-gray-900 font-medium text-justify md:text-lg leading-relaxed">
                Being digital is not enough—without BI solutions growth stalls. The real question is how well your business captures and uses data at every interaction point: how deeply it understands its customers and how intelligently it runs its internal processes.
              </p>

              <p className="text-gray-900 text-justify md:text-base leading-relaxed">
                Whether you’re just starting with data or operating at peak insight, the Assessment uncovers hidden gaps, inefficiencies, or missed signals that weaken performance—even in advanced businesses.
              </p>

              <button className="self-start px-8 py-3 rounded-lg font-semibold text-white
                         bg-gradient-to-br from-[#23BEC8] to-white/70
                         shadow-lg hover:shadow-[0_16px_64px_0_rgba(35,190,200,0.35)]
                         hover:scale-105 transition-all duration-300">
                Get Assessed Now
              </button>

              <p className="text-sm mt-2 font-semibold text-gray-700">
                Lesotho's Largest BI Advisory and Implementer for MSMEs
              </p>

            </div>
          </div>

          {/* ===================== */}
          {/*     DIKIW SCORECARD   */}
          {/* ===================== */}
          <div className="flex flex-col md:flex-row items-center gap-12">

            {/* Left Title */}
            <div className="md:w-1/2 flex items-center justify-center md:justify-start">
              <h3 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-snug">
                DIKIW Assessement
              </h3>
            </div>

            {/* Right Card */}
            <div className="md:w-1/2 flex flex-col gap-5
                      bg-gradient-to-tr from-[#23BEC8]/30 to-white/30
                      backdrop-blur-xl border border-white/30
                      rounded-3xl p-10 shadow-[0_12px_48px_0_rgba(35,190,200,0.25)]
                      hover:shadow-[0_16px_64px_0_rgba(35,190,200,0.4)]
                      transition-all duration-500">

              <p className="text-gray-900 font-medium text-justify md:text-lg leading-relaxed">
                Business Intelligence is a journey—moving from raw data to actionable Wisdom. The DIKIW Scorecard measures how far your business has progressed on that path.
              </p>

              <p className="text-gray-900 text-justify md:text-base leading-relaxed">
                It reveals where intelligence is strong and where insights are being lost, enabling you to prioritize the systems that build an insight-driven organization.
              </p>

              <button className="self-start px-6 py-3 rounded-md font-semibold text-white
                         bg-gradient-to-br from-[#23BEC8] to-white/70
                         shadow-lg hover:shadow-[0_12px_48px_0_rgba(35,190,200,0.4)]
                         hover:scale-105 transition-all duration-300">
                Learn More
              </button>

            </div>
          </div>

        </div>
      </section>



    </main>
  );
}