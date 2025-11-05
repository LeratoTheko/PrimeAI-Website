"use client";

import React, { useState } from "react";

export default function Home() {
  const [showAbout, setShowAbout] = useState(false);

  return (
    <main className="text-gray-900 text-center">
      {/* --- Section 1 --- */}
      <section className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-white to-[#23bec8] p-8">
        <h1 className="text-5xl font-bold mb-6">
          Elevating Decisions with Precision Driven Insights
        </h1>

        <button className="mt-4 px-6 py-3 bg-gradient-to-r from-white to-[#23bec8] text-black font-medium rounded-[3px] shadow-lg hover:bg-[#23bec8] transition duration-300">
          Let’s Talk
        </button>
      </section>

      <section className="relative min-h-screen bg-gradient-to-b from-white to-[#a4edef] flex flex-col justify-center px-6 py-12 md:px-12 md:py-24">

        {/* Who Are We */}
        <div className="relative w-full md:w-1/2 rounded-lg mb-12 flex flex-col md:flex-row items-stretch">
          {/* Line beside text */}
          <div className="flex flex-col items-center mr-0 md:mr-6 mb-4 md:mb-0">
            <div className="relative bg-black w-[5px] h-full">
              <div className="absolute top-0 -left-[5px] bg-[#23bec8] w-[15px] h-[25%]" />
            </div>
          </div>

          {/* Content */}
          <div className="flex flex-col text-left">
            <h2 className="text-3xl font-extrabold mb-2 text-black">Who Are We?</h2>
            <h3 className="text-lg font-semibold mb-4 text-black">
              PrimeAI Analytics is an AI and Data Analytics Consulting Firm
            </h3>
            <p className="text-black font-medium text-justify">
              We are focused on delivering cutting-edge Artificial Intelligence and
              Data-Driven solutions. We are here to show Businesses, Organizations, and
              Governments how they can improve using advanced Artificial Intelligence
              and data technologies.
            </p>

            <button className="mt-6 px-6 py-3 bg-gradient-to-r from-[#23bec8] to-[#47e1dc] text-black font-semibold rounded-md shadow-md hover:opacity-90 transition duration-300">
              Learn More
            </button>
          </div>
        </div>

        {/* What Do We Do */}
        <div className="relative w-full md:w-1/2 rounded-lg flex flex-col md:flex-row items-stretch md:ml-auto">
          {/* Line beside text */}
          <div className="flex flex-col items-center mr-0 md:mr-6 mb-4 md:mb-0">
            <div className="relative bg-black w-[5px] h-full">
              <div className="absolute top-0 -left-[5px] bg-[#23bec8] w-[15px] h-[25%]" />
            </div>
          </div>

          {/* Content */}
          <div className="flex flex-col text-left">
            <h2 className="text-3xl font-extrabold mb-2 text-black">What Do We Do?</h2>
            <h3 className="text-lg font-semibold mb-4 text-black">
              We implement AI-driven solutions to accelerate business growth
            </h3>
            <p className="text-black font-medium text-justify">
              We don’t provide generic solutions. Each project we handle is done with
              your specific requirements in mind. At the end of the day, you are
              provided with a tool that will simply make your life easier and enhance
              your business decisions.
            </p>

            <button className="mt-6 px-6 py-3 bg-gradient-to-r from-[#23bec8] to-[#47e1dc] text-black font-semibold rounded-md shadow-md hover:opacity-90 transition duration-300">
              Lets Talk
            </button>
          </div>
        </div>
      </section>

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


{/* Four Cards Section */}
<section
  className="w-full py-16 px-6 md:px-16"
  style={{
    background: "linear-gradient(135deg, #ffffff, #23bec8, #ffffff)",
  }}>

  <div className="max-w-6xl mx-auto text-center mb-12">
    <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 inline-block relative">
      Our Co-Creation Models
      <span className="absolute mt-5 bottom-0 left-1/2 w-24 h-1 bg-black rounded-full -translate-x-1/2"></span>
    </h2>
  </div>




  {/* Cards Container */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">

    {/* Card 1 */}
    <div 
      className="bg-white/80 backdrop-blur-sm p-8 shadow-md hover:shadow-xl transition-transform duration-500 hover:-translate-y-2 text-left"
      style={{
        background: "linear-gradient(135deg, #ffffff, #23bec8, #ffffff)",
      }}>
      
      <div className="flex items-center space-x-4 mb-5">
        <div className="w-12 h-12 bg-[#23bec8] rounded-full flex items-center justify-center shadow-md">
          <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2a10 10 0 100 20 10 10 0 000-20zM10 17l5-5-5-5v10z"/>
          </svg>
        </div>

        <h3 className="text-2xl font-semibold text-gray-900 mb-3">
          Collaborative Model
        </h3>
      </div>
      <p className="text-black-700 leading-relaxed">
        We partner closely with clients to co-design solutions, combining your expertise with 
        data and AI insights for maximum impact.
      </p>

      <div className="mt-4 flex justify-end">
        <button className="px-5 py-2 rounded-md font-semibold text-black 
                          bg-gradient-to-br from-white to-[#23bec8] 
                          hover:bg-[#23bec8] transition-colors duration-300">
          Let’s Work Together
        </button>
      </div>

    </div>

    {/* Card 2 */}
    <div 
      className="bg-white/80 backdrop-blur-sm p-8 shadow-md hover:shadow-xl transition-transform duration-500 hover:-translate-y-2 text-left"
      style={{
        background: "linear-gradient(135deg, #ffffff, #23bec8, #ffffff)",
      }}>

      <div className="flex items-center space-x-4 mb-5">
        <div className="w-12 h-12 bg-[#23bec8] rounded-full flex items-center justify-center shadow-md">
          <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2a7 7 0 00-7 7c0 3.31 2.69 6 6 6v3h2v-3c3.31 0 6-2.69 6-6a7 7 0 00-7-7zm-1 18h2v2h-2v-2z"/>
          </svg>
        </div>

        <h3 className="text-2xl font-semibold text-gray-900 mb-3">
          Solution Providing Model
        </h3>
      </div>


      <p className="text-black-700 leading-relaxed">
        We deliver ready-to-deploy data and AI solutions tailored to your specific needs, 
        driving measurable results from day one.
      </p>

      <div className="mt-4 flex justify-end">
        <button className="px-5 py-2 rounded-md font-semibold text-black 
                          bg-gradient-to-br from-white to-[#23bec8] 
                          hover:bg-[#23bec8] transition-colors duration-300">
          Let’s Work Together
        </button>
      </div>
    </div>

    {/* Card 3 */}
    <div 
      className="bg-white/80 backdrop-blur-sm p-8 shadow-md hover:shadow-xl transition-transform duration-500 hover:-translate-y-2 text-left"
      style={{
        background: "linear-gradient(135deg, #ffffff, #23bec8, #ffffff)",
      }}>

      <div className="flex items-center space-x-4 mb-5">
        <div className="w-12 h-12 bg-[#23bec8] rounded-full flex items-center justify-center shadow-md">
          <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M9 11l3 3L22 4l-1.5-1.5-8.5 8.5-2-2L4 12.5V14h5v-2zM3 17v2h18v-2H3z"/>
          </svg>
        </div>

        <h3 className="text-2xl font-semibold text-gray-900 mb-3">
          Managed & Deliver Services
        </h3>
      </div>

      <p className="text-black-700 leading-relaxed">
        We manage and deliver ongoing data services and AI operations, so you can focus on 
        your core business while we handle the complexity.
      </p>

      <div className="mt-4 flex justify-end">
        <button className="px-5 py-2 rounded-md font-semibold text-black 
                          bg-gradient-to-br from-white to-[#23bec8] 
                          hover:bg-[#23bec8] transition-colors duration-300">
          Let’s Work Together
        </button>
      </div>
    </div>

    {/* Card 4 */}
    <div 
      className="bg-white/80 backdrop-blur-sm p-8 shadow-md hover:shadow-xl transition-transform duration-500 hover:-translate-y-2 text-left"
      style={{
        background: "linear-gradient(135deg, #ffffff, #23bec8, #ffffff)",
      }}>
              
      <div className="flex items-center space-x-4 mb-5">
        <div className="w-12 h-12 bg-[#23bec8] rounded-full flex items-center justify-center shadow-md">
          <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M4 12h4v1H4v-1zm12 0h4v1h-4v-1zm-6 6v4h1v-4h-1zm0-12V2h1v4h-1zm4.95 2.95l2.12-2.12.7.7-2.12 2.12-.7-.7zm-9.9 0l-.7.7 2.12 2.12.7-.7-2.12-2.12zm9.9 9.9l.7.7-2.12 2.12-.7-.7 2.12-2.12zm-9.9 0l-2.12 2.12-.7-.7 2.12-2.12.7.7z"/>
          </svg>
        </div>

        <h3 className="text-2xl font-semibold text-gray-900 mb-3">
          We Are Flexible
        </h3>
      </div>

      <p className="text-black-700 leading-relaxed">
        Our approach adapts to your needs, whether you require full co-creation, stand-alone 
        solutions, or ongoing managed services.
      </p>

      <div className="mt-4 flex justify-end">
        <button className="px-5 py-2 rounded-md font-semibold text-black 
                          bg-gradient-to-br from-white to-[#23bec8] 
                          hover:bg-[#23bec8] transition-colors duration-300">
          Let’s Work Together
        </button>
      </div>
    </div>

  </div>
</section>


<section 
  className="w-full bg-cover bg-center py-16 px-6 md:px-16" 
  style={{ backgroundImage: "url('/primeAI_bg_2.png')" }}
>
  <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-6">

    <div className="md:w-1/2 flex items-center justify-start">
      <h3 className="text-3xl md:text-4xl font-bold text-black text-right">
        Contact Us
      </h3>
    </div>

    <div className="md:w-1/2 flex flex-col items-start  gap-4">
      <p className="text-black text-justify">
        Book an introductory call to explore how we collaborate and see if we're the right fit for your goals.
      </p>
      
      <button className="px-5 py-2 rounded-md font-semibold text-black bg-gradient-to-br from-white to-[#23bec8] 
                hover:bg-[#23bec8] transition-colors duration-300">
        Let’s Talk
      </button>
    </div>

  </div>
</section>



<section 
  className="w-full bg-cover bg-center py-16 px-6 md:px-16" 
  style={{ 
    background: "linear-gradient(135deg, #ffffff, #23bec8, #ffffff)", }}
>
  <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-6">

    <div className="md:w-1/2 flex items-center justify-start">
      <h3 className="text-3xl md:text-4xl font-bold text-black text-right">
        DIKIW Scorecard
      </h3>
    </div>

    <div className="md:w-1/2 flex flex-col items-start  gap-4">
      <p className="text-black font-medium text-justify md:text-xl">
        Business Intelligence is a journey, from raw data to actionable Wisdom. Our DIKIW Scorecard assesses where your business stands along the spectrum.
      </p>
      <p className="text-black text-justify mb-5">
        Whether you're just starting with data or operating at peak insight, the Scorecard uncovers hidden gaps, overlooked inefficienceies, or missed strategic signals, even at the highest levels. Because in today's world, even wisdom can get outdated.
      </p>
      
      <button className="px-5 py-2 rounded-md text-black bg-gradient-to-br from-white to-[#23bec8] 
                hover:bg-[#23bec8] transition-colors duration-300 mb-5">
        Assess Your BI Maturity
      </button>
    </div>

  </div>
</section>



<section 
  className="w-full bg-white py-16 px-6 md:px-16"
  style = {{
    background: "linear-gradient(135deg, #ffffff, #23bec8, #ffffff)",
  }}>
  <div className="max-w-6xl mx-auto text-center mb-12">
    <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 inline-block relative">
      Our Core Capabilities
      <span className="absolute left-1/2 -bottom-2 w-24 h-1 bg-black rounded-full -translate-x-1/2"></span>
    </h2>
  </div>


  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
  <div 
    className="relative bg-gray-100 p-6 shadow-md rounded-lg overflow-hidden"
    style={{
      background: "linear-gradient(135deg, #ffffff, #23bec8, #ffffff)",
    }}
  >
    
    <h3 className="text-xl font-semibold text-gray-900 mb-2">AI Consulting</h3>

    <div className="absolute bottom-4 right-4 w-12 h-12 bg-[#23bec8] rounded-full flex items-center justify-center shadow-md">
      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm1 14.59L16.59 13 18 14.41 13 19.41 6 12.41 7.41 11 13 16.59z"/>
      </svg>
    </div>
  </div>

    
    <div 
      className="bg-gray-100 p-6 shadow-md"
      style = {{
        background: "linear-gradient(135deg, #ffffff, #23bec8, #ffffff)",
      }}>
      <h3 className="text-xl font-semibold mb-2">Market Research & Customer Intelligence</h3>
    </div>

    <div 
      className="bg-gray-100 p-6 shadow-md"
      style = {{
        background: "linear-gradient(135deg, #000000, #23bec8, #000000)",
      }}>
      <h3 className="text-xl font-semibold mb-2">AI Ethics & Compliance</h3>
    </div>

    <div 
      className="bg-gray-100 p-6 hadow-md"
      style = {{
        background: "linear-gradient(135deg, #000000, #23bec8, #000000)",
      }}>
      <h3 className="text-xl font-semibold mb-2">Business Intelligence & Analytics</h3>
    </div>
    
    <div 
      className="bg-gray-100 p-6 shadow-md"
      style = {{
        background: "linear-gradient(135deg, #000000, #23bec8, #000000)",
      }}>
      <h3 className="text-xl font-semibold mb-2">Operations & Infrastructure Management</h3>
    </div>

    <div 
      className="bg-gray-100 p-6 shadow-md"
      style = {{
        background: "linear-gradient(135deg, #23bec8, #ffffff, #23bec8)",
      }}>
      <h3 className="text-xl font-semibold mb-2">AI Development</h3>
    </div>

    <div 
      className="bg-gray-100 p-6 shadow-md"
      style = {{
        background: "linear-gradient(135deg, #23bec8, #ffffff, #23bec8)",
      }}>
      <h3 className="text-xl font-semibold mb-2">Data Engineering</h3>
    </div>
    
    <div 
      className="bg-gray-100 p-6 shadow-md"
      style = {{
        background: "linear-gradient(135deg, #23bec8, #ffffff, #23bec8)",
      }}>
      <h3 className="text-xl font-semibold mb-2">Software Engineering</h3>
    </div>

    <div 
      className="bg-gray-100 p-6 shadow-md"
      style = {{
        background: "linear-gradient(135deg, #23bec8, #ffffff, #23bec8)",
      }}>
      <h3 className="text-xl font-semibold mb-2">Strategic Business Alignment</h3>
    </div>
  </div>
</section>

    </main>
  );
}