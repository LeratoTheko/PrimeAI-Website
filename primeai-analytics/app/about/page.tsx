"use client";

import React, { useState, useEffect, useRef } from "react";
import { 
  FaHandshake, 
  FaLightbulb, 
  FaUsers, 
  FaChartLine, } from "react-icons/fa";
import { 
  FiTarget, 
  FiTrendingUp, 
  FiShield, 
  FiAward, 
  FiLayers, 
  FiArrowRightCircle, 
  FiUsers, 
  FiCheckCircle} from "react-icons/fi";

import {
  motion, 
  useScroll, 
  useTransform, 
  useAnimation, 
  useInView } from "framer-motion";

import "@fontsource/poppins"; 


export default function AboutUs() {

  const [scrollY, setScrollY] = useState(0);
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Track scroll inside container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.6], [1, 0.6]);
  const yText = useTransform(scrollYProgress, [0, 0.6], ["0%", "-30%"]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  
  const section1Opacity = useTransform(scrollYProgress, [0, 0.75, 0.85], [1, 1, 0]);
  const section2Y = useTransform(scrollYProgress, [0.7, 1], ["20%", "0%"]);

  
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


  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const opacity = Math.max(0, 1 - scrollY / 300);
  const translateY = Math.min(100, scrollY / 3);

  const whoWeAreContent = {
    title: "Who Are We",
    description: `PrimeAI Analytics is a consulting firm based in Lesotho delivering cutting-edge Artificial Intelligence and data-driven solutions.

  We are here to show you how you can improve your business using advanced AI and data technologies.

  We detect roadblocks in your data flows, determine what type of data is needed to solve a given problem, and implement solutions that smoothly integrate with your existing software.`,
    benefits: ["Optimizing costs", "Improving customer experience", "Enhancing decision-making"],
  };


  const whatWeDoContent = {
    title: "What We Do",
    description: `PrimeAI Analytics consists of experienced professionals able to cover all datarelated areas. You don't need to know what solutions ill solve your business problem, just tell us more about the problem, and we will find the right solutions with:`,
    services: [
      "AI Consulting",
      "AI Development",
      "Data Analytics",
      "Data Engineering",
      "Machine Learning",
      "Software Engineering",
    ],
    description_1: `We will guide you through the entire process, from consulting the appropriate technology for your company's needs to building solution and implementing it in your existing infrastructure`
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-white to-[#23BEC8] text-black overflow-x-hidden font-poppins">
      {/* --- Section 1 --- */}
      <section
        ref={containerRef}
        className="
          flex flex-col items-center justify-center min-h-screen 
          bg-gradient-to-b from-white to-[#23bec8] 
          p-6 sm:p-8
        "
      >
        <motion.section
          style={{ opacity: section1Opacity }}
          className="
            sticky top-0 h-screen 
            flex flex-col items-center justify-center
            bg-gradient-to-b from-white to-[#23bec8]
          "
        >
          <motion.h1
            style={{ scale, y: yText, opacity: textOpacity }}
            className="
              text-3xl sm:text-4xl md:text-5xl 
              font-bold text-center text-black 
              px-4
            "
          >
            Partner with PrimeAI Analytics for strategic AI and data excellency.
          </motion.h1>

          <motion.button
            style={{ opacity: textOpacity }}
            className="
              mt-6 
              px-5 py-2 
              sm:px-6 sm:py-3
              bg-gradient-to-br from-[#23BEC8] to-[#47E1DC]
              text-white rounded-md shadow 
              hover:bg-black transition-colors
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
              <h2 className="text-3xl font-extrabold mb-2 text-black">Our Vision</h2>
              <h3 className="text-lg font-bold mb-4 text-black">
                To Leverage Information As Power
              </h3>
              <p className="text-black font-medium text-justify">
                We strive to be the most trusted Data and AI Intelligence partner,
                bridging technology and strategy. Through advanced data analytics, we 
                empower businesses to navigate complexity and unlock new opportunities.
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
              <h2 className="text-3xl font-extrabold mb-2 text-black">Our Mission</h2>
              <h3 className="text-lg font-bold mb-6 text-black">
                To Revolutionize Data Accessibility, Intelligence, and Decision Making.
              </h3>

              <div className="space-y-4">
                
                {/* Item 1 */}
                <div className="flex items-start gap-3">
                  <FiArrowRightCircle size={20} className="text-[#000000] mt-1" />
                  <p className="text-black font-medium text-justify">
                    Provide actionable insights.
                  </p>
                </div>

                {/* Item 2 */}
                <div className="flex items-start gap-3">
                  <FiArrowRightCircle size={20} className="text-[#000000] mt-1" />
                  <p className="text-black font-medium text-justify">
                    Enable better decision-making.
                  </p>
                </div>

                {/* Item 3 */}
                <div className="flex items-start gap-3">
                  <FiArrowRightCircle size={20} className="text-[#000000] mt-1" />
                  <p className="text-black font-medium text-justify">
                    Create competitive advantages for our clients.
                  </p>
                </div>

                {/* Item 4 */}
                <div className="flex items-start gap-3">
                  <FiArrowRightCircle size={20} className="text-[#000000] mt-1" />
                  <p className="text-black font-medium text-justify">
                    Be a trusted, long-term partner.
                  </p>
                </div>

                {/* Item 5 */}
                <div className="flex items-start gap-3">
                  <FiArrowRightCircle size={20} className="text-[#000000] mt-1" />
                  <p className="text-black font-medium text-justify">
                    Transform businesses, institutions, and governments with data excellency and strategic AI.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

        </motion.div>
      </motion.section>





{/* Who We Are & What We Do */}
<section 
  className="w-full py-16 px-6 md:px-16"
  style={{
    background: "linear-gradient(135deg, #ffffff, #23bec8, #ffffff)",
  }}
>
  {/* Top Section Header Bar */}
  <div className="flex flex-col sm:flex-row justify-between items-center w-full mb-10">
    {/* Left Side: Big Title */}
    <h2 className="text-3xl sm:text-4xl font-extrabold text-black">
      Get to know us better
    </h2>

    {/* Right Side: Learn More + Button */}
    <div className="flex items-center gap-3 mt-4 sm:mt-0">
      <span className="text-black font-semibold text-lg">
        Learn more about our services
      </span>

      <button
        className="
          px-4 py-2 
          bg-gradient-to-br from-[#23BEC8] to-[#47E1DC]
          text-white font-semibold rounded-md shadow 
          hover:bg-black transition-all duration-300
        "
      >
        Services
      </button>
    </div>

  </div>

  {/* Cards Row */}
  <div
    className="
      grid grid-cols-1 md:grid-cols-2 
      gap-8 md:gap-12 w-full
    "
  >

    {/* Card: Who We Are */}
    <div
      className="relative rounded-2xl p-8 flex flex-col items-start bg-gradient-to-tr
        from-[#23bec8]/30 to-white/30 backdrop-blur-xl border border-white/30 shadow-[0_8px_32px_0_rgba(35,190,200,0.25)]
        hover:shadow-[0_12px_48px_0_rgba(0_12px_48px_0_rgba(35,190,200,0.4))]
        tranform hover:-translate-y-4 transition-all duration-500
      "
    >
      <h2 className="text-3xl md:text-4xl font-bold">{whoWeAreContent.title}</h2>

      <p className="text-sm leading-relaxed whitespace-pre-line mt-5">
        {whoWeAreContent.description}
      </p>

      <p className="text-sm leading-relaxed whitespace-pre-line mt-5">
        Benefits:
      </p>

      <div className="mt-4 flex flex-col sm:flex-row sm:flex-wrap gap-6 justify-between">
        {/* Benefit 1: Optimizing costs */}
        <div className="flex flex-col items-center flex-1 min-w-[200px] text-center">
          <FiTrendingUp size={25} className="text-[#000000] mb-2" />
          <p className="text-sm text-black font-medium">Optimizing costs</p>
        </div>

        {/* Benefit 2: Improving customer experience */}
        <div className="flex flex-col items-center flex-1 min-w-[200px] text-center">
          <FiUsers size={25} className="text-[#000000] mb-2" />
          <p className="text-sm text-black font-medium">Improving customer experience</p>
        </div>

        {/* Benefit 3: Enhancing decision-making */}
        <div className="flex flex-col items-center flex-1 min-w-[200px] text-center">
          <FiTarget size={25} className="text-[#000000] mb-2" />
          <p className="text-sm text-black font-medium">Enhancing decision-making</p>
        </div>
      </div>
    </div>


    {/* Card: What We Do */}
    <div
      className="relative rounded-2xl p-8 flex flex-col items-start bg-gradient-to-tr
        from-[#23bec8]/30 to-white/30 backdrop-blur-xl border border-white/30 shadow-[0_8px_32px_0_rgba(35,190,200,0.25)]
        hover:shadow-[0_12px_48px_0_rgba(0_12px_48px_0_rgba(35,190,200,0.4))]
        tranform hover:-translate-y-4 transition-all duration-500
      "
    >
      <h2 className="text-3xl md:text-4xl font-bold">
        {whatWeDoContent.title}
      </h2>
      <p className="text-sm leading-relaxed mt-5">
        {whatWeDoContent.description}
      </p>
      <div className="list-disc list-inside text-lg mt-4 space-y-2">
        {whatWeDoContent.services.map((service, idx) => (
          <div key={idx} className="flex items-start gap-3">
            <FiCheckCircle size={20} className="text-[#000000] mt-1" />
            <p className="text-sm text-black fot-medium text-justify">{service}</p>
          </div>
        ))}
      </div>
      <p className="text-sm leading-relaxed mt-5">
        {whatWeDoContent.description_1}
      </p>
    </div>
  </div>
</section>



{/* Core Values */}
<section
  className="w-full py-16 px-6 md:px-16"
  style={{
    background: "linear-gradient(135deg, #ffffff, #23bec8, #ffffff)",
  }}
>
  {/* Section Header */}
  <div className="max-w-6xl mx-auto text-center mb-12">
    <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 relative inline-block 
                   bg-clip-text text-transparent 
                   bg-gradient-to-r from-[#000000] via-[#1aa3ad] to-[#000000]">
      Our Core Values
      <span className="absolute bottom-0 left-1/2 w-32 h-1 
                       bg-gradient-to-r from-[#ffffff] via-[#23BEC8] to-[#ffffff] 
                       rounded-full -translate-x-1/2 translate-y-2 shadow-lg"></span>
    </h2>
  </div>

  {/* Values Grid */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-6xl mx-auto">
    {[
      {
        icon: <FaHandshake className="w-6 h-6 text-white" />,
        title: "Integrity",
        desc: "We uphold transparency and accountability in all our data operations and partnerships.",
      },
      {
        icon: <FaLightbulb className="w-6 h-6 text-white" />,
        title: "Innovation",
        desc: "We drive forward-thinking solutions that redefine how AI serves the public and private sectors.",
      },
      {
        icon: <FaUsers className="w-6 h-6 text-white" />,
        title: "Inclusion",
        desc: "We embrace diversity and ensure equal access to data-driven solutions for all stakeholders.",
      },
      {
        icon: <FaChartLine className="w-6 h-6 text-white" />,
        title: "Impact",
        desc: "Our purpose is to deliver measurable value through every AI-driven insight and decision.",
      },
    ].map((value, index) => (
      <div
        key={index}
        className="relative rounded-2xl p-6 flex flex-col items-center
                   bg-gradient-to-tr from-[#23BEC8]/30 to-white/30
                   backdrop-blur-xl border border-white/30
                   shadow-[0_8px_32px_0_rgba(35,190,200,0.25)]
                   hover:shadow-[0_12px_48px_0_rgba(35,190,200,0.4)]
                   transform hover:-translate-y-4 transition-all duration-500 text-center"
      >
        {/* Icon Circle */}
        <div className="w-12 h-12 rounded-full bg-gradient-to-r from-white/40 via-white/20 to-[#23BEC8]/40 
                        flex items-center justify-center shadow-lg mb-4">
          {value.icon}
        </div>

        {/* Title & Description */}
        <h3 className="text-xl font-semibold mb-2 text-gray-900">{value.title}</h3>
        <p className="text-gray-900 text-sm md:text-base leading-relaxed">{value.desc}</p>
      </div>
    ))}
  </div>
</section>

</div>
  );
}
