"use client";

import { useState } from "react";
import Link from "next/link";
import Head from "next/head";
import StickyCTA from "./components/stickyCTA";

export default function HeroSection() {
  const [showMoreText, setShowMoreText] = useState(false);

  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-white to-[#23BEC8] text-black overflow-x-hidden font-poppins">
      {/* Hero Section */}
      <div
        className="w-full h-[60vh] flex flex-col justify-center items-center mx-auto px-6 py-5"
        style={{
          background: "linear-gradient(-320deg, #23bec8, #ffffff)",
        }}
      >
        <h1 className="text-4xl md:text-5xl font-bold text-black mb-6 text-center">
          Empower Your Business with Tsoelopele One
        </h1>

        <p className="text-lg md:text-xl text-black leading-relaxed text-center max-w-3xl">
          Transform your small business with intelligent tools, actionable insights, and strategic automation.
        </p>
      </div>

      {/* Floating CTA Section */}
      <div className="relative z-10 -mt-25">
        <div
          className="max-w-6xl mx-auto px-6 md:px-10 shadow-xl py-8 text-center rounded-lg"
          style={{
            background: "linear-gradient(-220deg, #ffffff, #23bec8, #ffffff)",
          }}
        >
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="p-4">
              <div className="flex flex-col items-center mb-3">
                <svg className="w-12 h-12 text-[#23BEC8] mb-3" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
                <h3 className="text-xl font-bold text-black mb-2">Data Clinics</h3>
              </div>
              <p className="text-black text-sm leading-relaxed">
                Insight-driven diagnostic sessions to uncover challenges and unlock your data's full growth potential.
              </p>
            </div>
            
            <div className="p-4">
              <div className="flex flex-col items-center mb-3">
                <svg className="w-12 h-12 text-[#23BEC8] mb-3" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
                </svg>
                <h3 className="text-xl font-bold text-black mb-2">Data Management</h3>
              </div>
              <p className="text-black text-sm leading-relaxed">
                Custom dashboards, cloud storage, and reports made easy.
              </p>
            </div>
            
            <div className="p-4">
              <div className="flex flex-col items-center mb-3">
                <svg className="w-12 h-12 text-[#23BEC8] mb-3" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M7 14c-1.66 0-3 1.34-3 3 0 1.31-1.16 2-2 2 .92 1.22 2.49 2 4 2 2.21 0 4-1.79 4-4 0-1.66-1.34-3-3-3zm13.71-9.37l-1.34-1.34a.996.996 0 00-1.41 0L9 12.25 11.75 15l8.96-8.96a.996.996 0 000-1.41z"/>
                </svg>
                <h3 className="text-xl font-bold text-black mb-2">Digital Transformation</h3>
              </div>
              <p className="text-black text-sm leading-relaxed">
                Strategic tools and automation for smarter growth.
              </p>
            </div>
          </div>

          {/* CTA Button */}
          <button className="relative inline-flex items-center text-black font-bold py-4 px-8 overflow-hidden rounded-lg group transition-all duration-300">
            <span className="absolute inset-0 bg-gradient-to-r from-[#23bec8] to-white transition-transform duration-300 ease-in-out transform group-hover:scale-105 rounded-lg"></span>
            <span className="relative z-10 flex items-center">
              Let's Talk
              <svg className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </span>
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

        {/* What Is / Who Is Section */}
        <section className="py-20 text-black">
          <div className="max-w-6xl mx-auto px-4 space-y-20">

            {/* What Is Tsoelopele One */}
            <div className="flex justify-start">
              <div className="w-full lg:w-2/3">
                <div className="flex items-center mb-6">
                  <svg className="w-10 h-10 text-[#23BEC8] mr-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/>
                  </svg>
                  <h2 className="text-3xl lg:text-4xl font-bold text-left">What Is Tsoelopele One?</h2>
                </div>
                <div className="shadow-lg p-8" style={{ background: "linear-gradient(135deg, #ffffff, #23BEC8, #ffffff)" }}>
                  <p className="text-base mb-4 text-justify leading-relaxed">
                    Tsoelopele One is a bold initiative under PrimeAI Analytics, designed to transform Lesotho's informal, small, and medium businesses by putting data and artificial intelligence at the heart of their growth journey.
                  </p>

                  {/* Desktop Content */}
                  <div className="hidden md:block">
                    <p className="text-base text-justify leading-relaxed">
                      "Tsoelopele" means <em className="font-semibold">progress</em> in Sesotho — capturing the ambition of driving national advancement through localized, intelligent systems. This program bridges the digital divide by converting undocumented, analogue business practices into AI-ready enterprises, paving the way for financial inclusion, data monetization, and policy transformation.
                    </p>
                  </div>

                  {/* Mobile Collapsible Content */}
                  <div className="md:hidden">
                    <div className={`transition-all duration-300 ${showMoreText ? 'block' : 'hidden'}`}>
                      <p className="text-base text-justify leading-relaxed">
                        "Tsoelopele" means <em className="font-semibold">progress</em> in Sesotho — capturing the ambition of driving national advancement through localized, intelligent systems. This program bridges the digital divide by converting undocumented, analogue business practices into AI-ready enterprises, paving the way for financial inclusion, data monetization, and policy transformation.
                      </p>
                    </div>
                    <button
                      className="flex items-center gap-2 mt-4 text-black font-semibold hover:text-[#23BEC8] transition-colors"
                      onClick={() => setShowMoreText(!showMoreText)}
                    >
                      <svg className={`w-5 h-5 transition-transform ${showMoreText ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                      <span>{showMoreText ? 'Show Less' : 'See More'}</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Who Is Tsoelopele One For */}
            <div className="flex justify-end">
              <div className="w-full lg:w-2/3">
                <div className="flex items-center justify-end mb-6">
                  <h2 className="text-3xl lg:text-4xl font-bold text-right mr-4">Who Is Tsoelopele One For?</h2>
                  <svg className="w-10 h-10 text-[#23BEC8]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
                  </svg>
                </div>
                <div className="shadow-lg p-8" style={{ background: "linear-gradient(135deg, #ffffff, #23BEC8, #ffffff)" }}>
                  
                  {/* Header Row */}
                  <div className="flex flex-wrap justify-between items-center mb-6">
                    <h5 className="font-bold text-xl min-w-[200px]">Grow Smarter with Data Strategies</h5>
                    <a href="#" className="inline-flex items-center bg-black text-white px-6 py-3 font-semibold hover:bg-[#23BEC8] transition-colors shadow-lg">
                      Let's Work Together
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </a>
                  </div>

                  <h5 className="font-bold text-black text-lg mb-4">Micro Enterprises</h5>
                  <div className="text-center">
                    <p className="mb-6 p-4 shadow-lg text-justify leading-relaxed" style={{ background: "linear-gradient(135deg, #ffffff, #23BEC8, #ffffff)" }}>
                      Small businesses are registered, growing businesses that have basic digital tools or some structured records, but need better data to scale.
                    </p>

                    {/* Business Type Options */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="flex flex-col items-center cursor-pointer group p-4 rounded-lg hover:bg-white/50 transition-all">
                        <svg className="w-16 h-16 text-[#23BEC8] mb-3 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm4 18v-6h2.5l-2.54-7.63A2.01 2.01 0 0018.06 7h-2.12c-.93 0-1.76.53-2.18 1.37L12.5 16H15v6h5zm-7.5-10.5c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5S11 9.17 11 10s.67 1.5 1.5 1.5zM5.5 6c1.11 0 2-.89 2-2s-.89-2-2-2-2 .89-2 2 .89 2 2 2zm2 16v-7H9V9c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v6h1.5v7h4zm6.5 0v-4h1v-4.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5V16h1v4h-5z"/>
                        </svg>
                        <h5 className="mt-2 font-bold text-lg group-hover:text-[#23BEC8] transition-colors">Micro</h5>
                      </div>
                      <div className="flex flex-col items-center cursor-pointer group p-4 rounded-lg hover:bg-white/50 transition-all">
                        <svg className="w-16 h-16 text-[#23BEC8] mb-3 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-4.86 8.86l-3 3.87L9 13.14 6 17h12l-3.86-5.14z"/>
                        </svg>
                        <h5 className="mt-2 font-bold text-lg group-hover:text-[#23BEC8] transition-colors">Small</h5>
                      </div>
                      <div className="flex flex-col items-center cursor-pointer group p-4 rounded-lg hover:bg-white/50 transition-all">
                        <svg className="w-16 h-16 text-[#23BEC8] mb-3 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z"/>
                        </svg>
                        <h5 className="mt-2 font-bold text-lg group-hover:text-[#23BEC8] transition-colors">Medium</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Services Section */}
        <section className="py-20 text-center border-t-2 border-b-2 border-black" style={{ background: "linear-gradient(135deg, #ffffff, #23BEC8, #ffffff)" }}>
          <div className="container mx-auto px-4">
            <div className="flex flex-col items-center mb-12">
              <svg className="w-16 h-16 text-[#23BEC8] mb-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
              <h2 className="text-4xl font-bold mb-4">What We Offer</h2>
              <p className="text-lg text-black max-w-2xl">
                Smart solutions designed to help SMEs thrive in a data-driven world
              </p>
            </div>

            {/* Services Grid */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {/* Data Clinics Service */}
              <div className="shadow-2xl text-left bg-gradient-to-br from-white to-[#23BEC8] p-8 border-b border-black rounded-none hover:scale-[1.02] transition-transform duration-300 fadeInUp">
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-white rounded-full mr-4 group-hover:bg-[#23BEC8] transition-colors">
                    <svg className="w-10 h-10 text-[#23BEC8] group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"/>
                    </svg>
                  </div>
                  <h4 className="text-2xl font-bold">Data Clinics</h4>
                </div>
                <p className="text-black border-l-4 border-black pl-4 text-justify leading-relaxed mb-6">
                  Personalized diagnostic sessions for SMEs to uncover data pain points, identify growth opportunities, and receive tailored recommendations for growth with data strategies and digital transformation.
                </p>
                <div className="flex flex-col sm:flex-row justify-between gap-4">
                  <a href="#" className="flex items-center justify-center bg-[#23BEC8] text-white px-6 py-3 rounded-full shadow hover:bg-black transition-colors font-semibold">
                    Learn More
                  </a>
                  <a href="#" className="flex items-center justify-center bg-black text-white px-6 py-3 rounded-full shadow hover:bg-[#23BEC8] transition-colors font-semibold">
                    Let's Talk
                  </a>
                </div>
              </div>

              {/* Data Management Service */}
              <div className="shadow-2xl text-left bg-gradient-to-br from-[#23BEC8] to-white p-8 border-b border-black rounded-none hover:scale-[1.02] transition-transform duration-300 fadeInUp">
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-white rounded-full mr-4 group-hover:bg-[#23BEC8] transition-colors">
                    <svg className="w-10 h-10 text-[#23BEC8] group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
                    </svg>
                  </div>
                  <h4 className="text-2xl font-bold">Data Management</h4>
                </div>
                <p className="text-black border-l-4 border-black pl-4 text-justify leading-relaxed mb-6">
                  End-to-end services for organizing, securing, and optimizing business data, turning chaos into clarity with structured, accessible, and AI-ready information systems.
                </p>
                <div className="flex flex-col sm:flex-row justify-between gap-4">
                  <a href="#" className="flex items-center justify-center bg-[#23BEC8] text-white px-6 py-3 rounded-full shadow hover:bg-black transition-colors font-semibold">
                    Learn More
                  </a>
                  <a href="#" className="flex items-center justify-center bg-black text-white px-6 py-3 rounded-full shadow hover:bg-[#23BEC8] transition-colors font-semibold">
                    Let's Talk
                  </a>
                </div>
              </div>

              {/* Sentiment Analysis Service */}
              <div className="shadow-2xl text-left bg-gradient-to-br from-white to-[#23BEC8] p-8 border-b border-black rounded-none hover:scale-[1.02] transition-transform duration-300 fadeInUp">
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-white rounded-full mr-4 group-hover:bg-[#23BEC8] transition-colors">
                    <svg className="w-10 h-10 text-[#23BEC8] group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z"/>
                    </svg>
                  </div>
                  <h4 className="text-2xl font-bold">Sentiment Analysis</h4>
                </div>
                <p className="text-black border-l-4 border-black pl-4 text-justify leading-relaxed mb-6">
                  Discover what customers, communities, and competitors are saying about your brand across social media. Our sentiment analysis tools reveal patterns, emotions, and trends that drive smarter marketing, improve reputation, and support digital decision-making.
                </p>
                <div className="flex flex-col sm:flex-row justify-between gap-4">
                  <a href="#" className="flex items-center justify-center bg-[#23BEC8] text-white px-6 py-3 rounded-full shadow hover:bg-black transition-colors font-semibold">
                    Learn More
                  </a>
                  <a href="#" className="flex items-center justify-center bg-black text-white px-6 py-3 rounded-full shadow hover:bg-[#23BEC8] transition-colors font-semibold">
                    Let's Talk
                  </a>
                </div>
              </div>

              {/* Digital Transformation Service */}
              <div className="shadow-2xl text-left bg-gradient-to-br from-[#23BEC8] to-white p-8 border-b border-black rounded-none hover:scale-[1.02] transition-transform duration-300 fadeInUp">
                <div className="flex items-center mb-6">
                   <div className="p-3 bg-white rounded-full mr-4 group-hover:bg-[#23BEC8] transition-colors">
                    <svg className="w-10 h-10 text-[#23BEC8] group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z"/>
                    </svg>
                  </div>
                  <h4 className="text-2xl font-bold">Digital Transformation</h4>
                </div>
                <p className="text-black border-l-4 border-black pl-4 text-justify leading-relaxed mb-6">
                  We guide SMEs into the digital era and provide clear and precise strategies, modern tools, and expert support that deliver measurable growth and maximize ROI. Digitize operations, unlock new markets, and future-proof your SME.
                </p>
                <div className="flex flex-col sm:flex-row justify-between gap-4">
                  <a href="#" className="flex items-center justify-center bg-[#23BEC8] text-white px-6 py-3 rounded-full shadow hover:bg-black transition-colors font-semibold">
                    Learn More
                  </a>
                  <a href="#" className="flex items-center justify-center bg-black text-white px-6 py-3 rounded-full shadow hover:bg-[#23BEC8] transition-colors font-semibold">
                    Let's Talk
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-20 border-2 border-black" style={{ background: "linear-gradient(135deg, #ffffff, #23BEC8, #ffffff)" }}>
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-16">
              <svg className="w-16 h-16 text-[#23BEC8] mx-auto mb-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"/>
              </svg>
              <h2 className="text-4xl font-bold mb-4">Why Choose Tsoelopele One</h2>
              <p className="text-lg text-black max-w-2xl mx-auto">
                Experience the difference with our comprehensive suite of services designed for your success
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Feature 1 */}
              <div className="relative group">
                <div className="p-8 shadow-lg h-full border-2 border-black bg-gradient-to-br from-white to-[#23BEC8] group-hover:scale-105 transition-transform duration-300">
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-white rounded-full mr-4 group-hover:bg-[#23BEC8] transition-colors">
                      <svg className="w-8 h-8 text-[#23BEC8] group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                      </svg>
                    </div>
                    <h5 className="font-bold text-black text-xl">Digital Transformation Expert</h5>
                  </div>
                  <p className="text-black leading-relaxed">Expertise & support to navigate the complexities of adopting new digital technology.</p>
                </div>
                <div className="absolute top-0 bottom-0 right-0 w-1 bg-black group-hover:bg-[#23BEC8] transition-colors"></div>
              </div>

              {/* Feature 2 */}
              <div className="group">
                <div className="p-8 shadow-lg h-full border-2 border-black bg-gradient-to-br from-[#23BEC8] to-white group-hover:scale-105 transition-transform duration-300">
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-white rounded-full mr-4 group-hover:bg-[#23BEC8] transition-colors">
                      <svg className="w-8 h-8 text-[#23BEC8] group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M7 19h10V4H7v15zm-5 2h20v2H2v-2z"/>
                      </svg>
                    </div>
                    <h5 className="font-bold text-black text-xl">Scalability and Flexibility</h5>
                  </div>
                  <p className="text-black leading-relaxed">Solutions that scale to match your evolving needs – keeping you agile and competitive.</p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="relative group">
                <div className="p-8 shadow-lg h-full border-2 border-black bg-gradient-to-br from-white to-[#23BEC8] group-hover:scale-105 transition-transform duration-300">
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-white rounded-full mr-4 group-hover:bg-[#23BEC8] transition-colors">
                      <svg className="w-8 h-8 text-[#23BEC8] group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"/>
                      </svg>
                    </div>
                    <h5 className="font-bold text-black text-xl">Secure and Reliable</h5>
                  </div>
                  <p className="text-black leading-relaxed">Reliable and robust security measures to protect your data and ensure business continuity.</p>
                </div>
                <div className="absolute top-0 bottom-0 right-0 w-1 bg-black group-hover:bg-[#23BEC8] transition-colors"></div>
              </div>

              {/* Feature 4 */}
              <div className="group">
                <div className="p-8 shadow-lg h-full border-2 border-black bg-gradient-to-br from-[#23BEC8] to-white group-hover:scale-105 transition-transform duration-300">
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-white rounded-full mr-4 group-hover:bg-[#23BEC8] transition-colors">
                      <svg className="w-8 h-8 text-[#23BEC8] group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 9h-2V5h2v6zm0 4h-2v-2h2v2z"/>
                      </svg>
                    </div>
                    <h5 className="font-bold text-black text-xl">Dedicated Support</h5>
                  </div>
                  <p className="text-black leading-relaxed">Customer support to readily assist you with any concerns, issues or queries.</p>
                </div>
              </div>

              {/* Feature 5 */}
              <div className="relative group">
                <div className="p-8 shadow-lg h-full border-2 border-black bg-gradient-to-br from-white to-[#23BEC8] group-hover:scale-105 transition-transform duration-300">
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-white rounded-full mr-4 group-hover:bg-[#23BEC8] transition-colors">
                      <svg className="w-8 h-8 text-[#23BEC8] group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z"/>
                      </svg>
                    </div>
                    <h5 className="font-bold text-black text-xl">Cost-Effective</h5>
                  </div>
                  <p className="text-black leading-relaxed">High-quality, economical solutions which ensure that you get the best return on your investment.</p>
                </div>
                <div className="absolute top-0 bottom-0 right-0 w-1 bg-black group-hover:bg-[#23BEC8] transition-colors"></div>
              </div>

              {/* Feature 6 */}
              <div className="group">
                <div className="p-8 shadow-lg h-full border-2 border-black bg-gradient-to-br from-[#23BEC8] to-white group-hover:scale-105 transition-transform duration-300">
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-white rounded-full mr-4 group-hover:bg-[#23BEC8] transition-colors">
                      <svg className="w-8 h-8 text-[#23BEC8] group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/>
                      </svg>
                    </div>
                    <h5 className="font-bold text-black text-xl">Proven Track Record</h5>
                  </div>
                  <p className="text-black leading-relaxed">Success stories and case studies demonstrate our ability to deliver results & drive business growth.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <StickyCTA/>
      </div>
    </div>
  );
}