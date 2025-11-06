"use client";

import React, { useState, useEffect } from "react";
import { FaHandshake, FaLightbulb, FaUsers, FaChartLine } from "react-icons/fa";
import "@fontsource/poppins"; // Ensure Poppins is installed via npm

export default function AboutUs() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const opacity = Math.max(0, 1 - scrollY / 300);
  const translateY = Math.min(100, scrollY / 3);

  const whoWeAreContent = {
    title: "Who Are We",
    description: `PrimeAI Analytics is a consulting firm based in Lesotho delivering cutting-edge Artificial Intelligence and Data-driven solutions.

We show Businesses, Organizations, and Governments how to improve performance using advanced AI and data technologies.

We leverage the latest AI advancements to provide tailored services that meet your unique business needs, from predictive insights to operational efficiency.`,
    benefits: ["Optimizing costs", "Improving customer experience", "Enhancing decision-making"],
  };

  const whatWeDoContent = {
    title: "What We Do",
    description: `At PrimeAI Analytics, we specialize across all data related areas. Simply tell us your business challenge, and we’ll identify and deploy the right AI-driven solution.`,
    services: [
      "Data analysis and visualization",
      "Project management",
      "AI-driven automation",
      "Business intelligence solutions",
    ],
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-white to-[#23BEC8] text-black overflow-x-hidden font-poppins">
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-4 sm:px-8 bg-gradient-to-b from-transparent to-[#23BEC8]/80">
        <div className="transition-all duration-200" style={{ opacity, transform: `translateY(-${translateY}px)` }}>
          <h1 className="text-4xl sm:text-5xl font-bold max-w-5xl mx-auto mb-6 text-justify">
            Partner with PrimeAI Analytics for strategic AI and data excellence
          </h1>
          <button className="bg-gradient-to-br from-white via-[#23BEC8] to-white text-black px-8 py-3 border border-[#23BEC8]/30 rounded-xl font-semibold shadow-md hover:bg-black hover:text-white transition-all duration-300">
            Let’s Talk
          </button>
        </div>
        <div className="absolute bottom-10 flex flex-col items-center">
          <div className="w-5 h-8 border-2 border-black rounded-full flex justify-center items-start p-1">
            <div className="w-2 h-2 bg-black rounded-full animate-bounce"></div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <div className="max-w-6xl mx-auto px-4 sm:px-10 py-20 space-y-20">
        {/* Vision & Mission */}
        <section className="relative w-full flex flex-col items-center md:h-screen md:block px-4 py-16">
          {/* Vision Card (Left) */}
          <div className="w-full max-w-lg bg-transparent border border-black p-8 shadow-none hover:shadow-none transition-all duration-300 text-justify card-gradient mb-6 md:mb-0 md:absolute md:top-0 md:left-0">
            <div className="hidden md:block absolute -left-1 top-3 h-full border-l-10 border-[#23BEC8] rounded"></div>
            <div className="hidden md:block absolute -left-1 -top-1 w-4 h-10 bg-black rounded-t-sm"></div>
            <h3 className="text-2xl font-bold mb-3">Our Vision</h3>
            <p className="font-medium mb-2">
              To leverage information as power and bridge technology with strategy.
            </p>
            <p className="leading-relaxed">
              We strive to be the most trusted AI intelligence partner, empowering businesses to navigate complexity and unlock new opportunities.
            </p>
          </div>

          {/* Mission Card (Diagonal Right) */}
          <div className="w-full max-w-lg bg-transparent border border-black p-8 shadow-none hover:shadow-none transition-all duration-300 text-justify card-gradient mt-6 md:absolute md:top-[35%] md:left-[55%]">
            <div className="hidden md:block absolute -left-1 top-3 h-full border-l-10 border-[#23BEC8] rounded"></div>
            <div className="hidden md:block absolute -left-1 -top-1 w-4 h-10 bg-black rounded-t-sm"></div>
            <h3 className="text-2xl font-bold mb-3">Our Mission</h3>
            <p className="font-medium mb-2">
              To revolutionize data accessibility, intelligence, and decision-making.
            </p>
            <ul className="list-disc list-inside leading-relaxed">
              <li>Provide actionable insights</li>
              <li>Enable better decision-making</li>
              <li>Create competitive advantages</li>
              <li>Transform businesses, organizations, and governments with AI</li>
            </ul>
          </div>
        </section>

        {/* Who We Are & What We Do */}
        <section className="space-y-12 text-justify">
          <div className="bg-gradient-to-br from-white via-[#23BEC8] to-white rounded-xl shadow-lg p-8 md:p-12 space-y-4 hover:shadow-2xl transition-all duration-300">
            <h2 className="text-3xl md:text-4xl font-bold">{whoWeAreContent.title}</h2>
            <p className="text-lg leading-relaxed whitespace-pre-line">{whoWeAreContent.description}</p>
            <ul className="list-disc list-inside text-lg mt-4 space-y-2">
              {whoWeAreContent.benefits.map((benefit, idx) => (
                <li key={idx}>{benefit}</li>
              ))}
            </ul>
          </div>

          <div className="bg-gradient-to-br from-white via-[#23BEC8] to-white rounded-xl shadow-lg p-8 md:p-12 space-y-4 hover:shadow-2xl transition-all duration-300">
            <h2 className="text-3xl md:text-4xl font-bold">{whatWeDoContent.title}</h2>
            <p className="text-lg leading-relaxed">{whatWeDoContent.description}</p>
            <ul className="list-disc list-inside text-lg mt-4 space-y-2">
              {whatWeDoContent.services.map((service, idx) => (
                <li key={idx}>{service}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* Core Values */}
        <section className="text-justify">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center">
            Our Core Values
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            {[
              {
                icon: <FaHandshake className="text-[#23BEC8] w-12 h-12 mx-auto mb-4" />,
                title: "Integrity",
                desc: "We uphold transparency and accountability in all our data operations and partnerships.",
              },
              {
                icon: <FaLightbulb className="text-[#23BEC8] w-12 h-12 mx-auto mb-4" />,
                title: "Innovation",
                desc: "We drive forward-thinking solutions that redefine how AI serves the public and private sectors.",
              },
              {
                icon: <FaUsers className="text-[#23BEC8] w-12 h-12 mx-auto mb-4" />,
                title: "Inclusion",
                desc: "We embrace diversity and ensure equal access to data-driven solutions for all stakeholders.",
              },
              {
                icon: <FaChartLine className="text-[#23BEC8] w-12 h-12 mx-auto mb-4" />,
                title: "Impact",
                desc: "Our purpose is to deliver measurable value through every AI-driven insight and decision.",
              },
            ].map((value, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-white via-[#23BEC8] to-white border border-[#23BEC8]/30 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center"
              >
                {value.icon}
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p>{value.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
