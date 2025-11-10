"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  ChevronDown,
  BrainCircuit,
  ChartNoAxesCombined,
  Database,
  Menu,
  X,
  FileText,
  Briefcase,
  Video,
  BookOpen,
  BookOpenText,
  CalendarDays,
  ScrollText,
  FileBarChart,
} from "lucide-react";

export default function Nav() {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [bgColor, setBgColor] = useState("bg-white");
  const [isClient, setIsClient] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => setIsClient(true), []);

  useEffect(() => {
    if (!isClient) return;

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = document.documentElement.clientHeight;
      const currentScrollY = window.scrollY;


      if (currentScrollY > lastScrollY && currentScrollY > 50){
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      if (currentScrollY === 0 || currentScrollY + clientHeight >= scrollHeight) {
        setBgColor("bg-white");
      } else {
        setBgColor("bg-black/60 backdrop-blur-md shadow-lg");
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isClient, lastScrollY]);

  const textColor = "#23bec8";

  if (!isClient) return null;

  return (
    <nav
      className={`fixed top-0 w-full z-50 px-4 sm:px-8 py-3 transition-all duration-500 transform ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      } ${bgColor}`}
    >

      <div className="flex items-center justify-between">
        {/* Logo / Title */}
        <div className="flex items-center space-x-2">
          {bgColor.includes("bg-white") ? (
            <span className="font-bold text-xl tracking-wide" style={{ color: textColor }}>
              PrimeAI Analytics
            </span>
          ) : (
            <img
              src="/No_Background.png"
              alt="PrimeAI Analytics Logo"
              className="h-10 w-auto object-contain transition-transform duration-500 hover:scale-105"
            />
          )}
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {[
            { name: "Home", href: "/" },
            { name: "About Us", href: "/about" },
          ].map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="relative font-medium group"
              style={{ color: textColor }}
            >
              {item.name}
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#23bec8] transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}

          {/* Services Dropdown */}
          {/* Services Mega Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => {
              setIsResourcesOpen(false);
              setIsServicesOpen(true)
            }}
            onMouseLeave={() => setIsServicesOpen(false)}>
            <button
              onClick={() => {
                setIsServicesOpen(!isServicesOpen);
                setIsResourcesOpen(false);
              }}
              className="flex items-center space-x-1 font-medium focus:outline-none relative group"
              style={{ color: textColor }}
            >
              <span>Services</span>
              <ChevronDown
                size={18}
                className={`transition-transform duration-300 ${
                  isServicesOpen ? "rotate-180" : ""
                }`}
              />
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#23bec8] transition-all duration-300 group-hover:w-full"></span>
            </button>

            {isServicesOpen && (
              <div
                className="absolute mt-3 w-[600px] bg-white rounded-lg shadow-2xl border border-gray-100 z-30 p-6 animate-fadeIn
                left-1/2 -translate-x-1/2 max-w-[95vw] overflow-hidden"
                style={{ background: "linear-gradient(180deg, #ffffff, #f8fcfd)" }}
              >
                <div className="grid grid-cols-2 gap-6">
                  {/* Column 1 */}
                  <div>
                    <h4 className="font-bold text-[#23bec8] uppercase text-sm mb-3">
                      Intelligence & Analytics
                    </h4>

                    <Link
                      href="/services/business-intelligence"
                      className="flex items-start gap-3 py-2 px-2 rounded-md hover:bg-[#23bec8]/10 transition"
                      onClick={() => setIsServicesOpen(false)}
                    >
                      <BrainCircuit size={22} className="text-[#23bec8] mt-1" />
                      <div>
                        <p className="font-semibold text-black">Business Intelligence</p>
                        <p className="text-sm text-gray-600">
                          Dashboards and automation reports
                        </p>
                      </div>
                    </Link>

                    <Link
                      href="/services/data-analytics"
                      className="flex items-start gap-3 py-2 px-2 rounded-md hover:bg-[#23bec8]/10 transition"
                      onClick={() => setIsServicesOpen(false)}
                    >
                      <ChartNoAxesCombined size={22} className="text-[#23bec8] mt-1" />
                      <div>
                        <p className="font-semibold text-black">Data Analytics</p>
                        <p className="text-sm text-gray-600">
                          Data exploration, trends & performance
                        </p>
                      </div>
                    </Link>
                  </div>

                  {/* Column 2 */}
                  <div>
                    <h4 className="font-bold text-[#23bec8] uppercase text-sm mb-3">
                      SME Solutions
                    </h4>

                    <Link
                      href="/services/tsoelopele-one"
                      className="flex items-start gap-3 py-2 px-2 rounded-md hover:bg-[#23bec8]/10 transition"
                      onClick={() => setIsServicesOpen(false)}
                    >
                      <Database size={22} className="text-[#23bec8] mt-1" />
                      <div>
                        <p className="font-semibold text-black">Tsoelopele One</p>
                        <p className="text-sm text-gray-600">
                          Data & AI tools for SMEs and informal traders
                        </p>
                      </div>
                    </Link>

                    <div className="mt-5 border-t pt-3">
                      <p className="text-sm text-gray-600 mb-2">
                        Need something more tailored?
                      </p>
                      <Link
                        href="/partner"
                        className="inline-block text-sm font-semibold px-4 py-2 rounded-md bg-[#23bec8] text-white hover:opacity-90 transition"
                        onClick={() => setIsServicesOpen(false)}
                      >
                        Talk to Our Team
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>


          {/* Resources Dropdown */}
          {/* Resources Mega Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => {
              setIsResourcesOpen(true);
              setIsServicesOpen(false)
            }}
            onMouseLeave={() => setIsResourcesOpen(false)}>
            <button
              onClick={() => {
                setIsResourcesOpen(!isResourcesOpen);
                setIsServicesOpen(false);
              }}
              className="flex items-center space-x-1 font-medium focus:outline-none relative group"
              style={{ color: textColor }}
            >
              <span>Resources</span>
              <ChevronDown
                size={18}
                className={`transition-transform duration-300 ${
                  isResourcesOpen ? "rotate-180" : ""
                }`}
              />
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#23bec8] transition-all duration-300 group-hover:w-full"></span>
            </button>

            {isResourcesOpen && (
              <div
                className="absolute mt-3 bg-white rounded-lg shadow-2xl border border-gray-100 z-30 p-6 animate-fadeIn
                w-[600px] max-w-[95vw] overflow-hidden left-1/2 -translate-x-1/2"
                style={{
                  background: "linear-gradient(180deg, #ffffff, #f8fcfd)",
                  // smart constraint to ensure it doesn't get cut off
                  position: "absolute",
                  right: "auto",
                  transform: "translateX(-50%)",
                  insetInline: "auto",
                }}
              >
                <div className="grid grid-cols-2 gap-6">
                  {/* Column 1 */}
                  <div>
                    <h4 className="font-bold text-[#23bec8] uppercase text-sm mb-3">
                      Knowledge & Insights
                    </h4>

                    <Link
                      href="/resources/blogs"
                      className="flex items-start gap-3 py-2 px-2 rounded-md hover:bg-[#23bec8]/10 transition"
                      onClick={() => setIsResourcesOpen(false)}
                    >
                      <BookOpenText size={22} className="text-[#23bec8] mt-1" />
                      <div>
                        <p className="font-semibold text-black">Blogs</p>
                        <p className="text-sm text-gray-600">
                          Expert insights, trends & AI applications
                        </p>
                      </div>
                    </Link>

                    <Link
                      href="/resources/case-studies"
                      className="flex items-start gap-3 py-2 px-2 rounded-md hover:bg-[#23bec8]/10 transition"
                      onClick={() => setIsResourcesOpen(false)}
                    >
                      <FileBarChart size={22} className="text-[#23bec8] mt-1" />
                      <div>
                        <p className="font-semibold text-black">Case Studies</p>
                        <p className="text-sm text-gray-600">
                          Real-world results from our data projects
                        </p>
                      </div>
                    </Link>
                  </div>

                  {/* Column 2 */}
                  <div>
                    <h4 className="font-bold text-[#23bec8] uppercase text-sm mb-3">
                      Learning & Support
                    </h4>

                    <Link
                      href="/resources/events"
                      className="flex items-start gap-3 py-2 px-2 rounded-md hover:bg-[#23bec8]/10 transition"
                      onClick={() => setIsResourcesOpen(false)}
                    >
                      <CalendarDays size={22} className="text-[#23bec8] mt-1" />
                      <div>
                        <p className="font-semibold text-black">Events & Workshops</p>
                        <p className="text-sm text-gray-600">
                          Join our AI clinics and training sessions
                        </p>
                      </div>
                    </Link>

                    <div className="mt-5 border-t pt-3">
                      <p className="text-sm text-gray-600 mb-2">
                        Stay ahead with exclusive updates
                      </p>
                      <Link
                        href="/newsletter"
                        className="inline-block text-sm font-semibold px-4 py-2 rounded-md bg-[#23bec8] text-white hover:opacity-90 transition"
                        onClick={() => setIsResourcesOpen(false)}
                      >
                        Subscribe to Newsletter
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>


          {/* Partner Button */}
          <Link
            href="/partner"
            className="px-5 py-2 font-semibold text-black rounded-lg shadow-md transition-all duration-300 hover:shadow-[#23bec8]/60 hover:shadow-lg hover:-translate-y-[1px]"
            style={{
              background: "linear-gradient(135deg, #ffffff, #23bec8)",
            }}
          >
            Partner Up
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button className="md:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={26} color="#23bec8" /> : <Menu size={26} color="#23bec8" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed top-[70px] left-0 w-full h-[calc(100vh-70px)] bg-white/95 backdrop-blur-lg shadow-2xl z-40 overflow-y-auto transition-all duration-500 animate-fadeIn">
          <div className="p-6 flex flex-col gap-5">
            {/* Logo Section */}
            <div className="flex items-center justify-between">
              <span className="text-lg font-bold text-[#23bec8] tracking-wide">PrimeAI Analytics</span>
              <button onClick={() => setIsMobileMenuOpen(false)} className="text-gray-600 hover:text-[#23bec8] transition">
                <X size={26} />
              </button>
            </div>

            <div className="h-[1px] bg-gray-200" />

            {/* Menu Links */}
            <div className="flex flex-col gap-3 text-black">
              <Link
                href="/"
                className="font-semibold text-base py-2 hover:text-[#23bec8] transition-all"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/about"
                className="font-semibold text-base py-2 hover:text-[#23bec8] transition-all"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About Us
              </Link>

              {/* Services Dropdown */}
              <MobileDropdown
                title="Services"
                description="Explore our analytics and SME solutions"
                isOpen={isServicesOpen}
                setIsOpen={setIsServicesOpen}
                items={[
                  {
                    href: "/services/business-intelligence",
                    icon: <BrainCircuit className="text-[#23bec8]" size={20} />,
                    title: "Business Intelligence",
                    desc: "Dashboards and automation reports",
                  },
                  {
                    href: "/services/data-analytics",
                    icon: <ChartNoAxesCombined className="text-[#23bec8]" size={20} />,
                    title: "Data Analytics",
                    desc: "Trends, insights & data storytelling",
                  },
                  {
                    href: "/services/tsoelopele-one",
                    icon: <Database className="text-[#23bec8]" size={20} />,
                    title: "Tsoelopele One",
                    desc: "AI tools for SMEs & informal traders",
                  },
                ]}
                closeMenu={() => setIsMobileMenuOpen(false)}
              />

              {/* Resources Dropdown */}
              <MobileDropdown
                title="Resources"
                description="Insights, case studies, and events"
                isOpen={isResourcesOpen}
                setIsOpen={setIsResourcesOpen}
                items={[
                  {
                    href: "/resources/blogs",
                    icon: <BookOpenText className="text-[#23bec8]" size={20} />,
                    title: "Blogs",
                    desc: "Expert insights & industry trends",
                  },
                  {
                    href: "/resources/case-studies",
                    icon: <FileBarChart className="text-[#23bec8]" size={20} />,
                    title: "Case Studies",
                    desc: "Real-world AI & data results",
                  },
                  {
                    href: "/resources/events",
                    icon: <CalendarDays className="text-[#23bec8]" size={20} />,
                    title: "Events & Workshops",
                    desc: "Join AI clinics & learning sessions",
                  },
                ]}
                closeMenu={() => setIsMobileMenuOpen(false)}
              />
            </div>

            {/* Actions */}
            <div className="mt-6 flex flex-col gap-3">
              <Link
                href="/partner"
                className="w-full py-3 font-semibold text-center rounded-lg text-white bg-[#23bec8] hover:bg-[#1aa7b2] transition-all shadow-md"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Partner Up
              </Link>
              <Link
                href="/newsletter"
                className="w-full py-3 font-semibold text-center rounded-lg border border-[#23bec8] text-[#23bec8] hover:bg-[#23bec8]/10 transition-all"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Subscribe to Newsletter
              </Link>
            </div>
          </div>
        </div>
      )}


    </nav>
  );
}

/* ---- Reusable Dropdown Link ---- */
function DropdownLink({ href, icon, title, desc, close }: any) {
  return (
    <Link
      href={href}
      onClick={close}
      className="flex items-start gap-3 px-4 py-2 hover:bg-white/50 transition-all duration-300 rounded-md"
    >
      {icon}
      <div className="flex flex-col">
        <span className="font-bold text-black text-base">{title}</span>
        <span className="text-sm text-black/80">{desc}</span>
      </div>
    </Link>
  );
}

/* ---- Reusable Mobile Dropdown ---- */
function MobileDropdown({ title, description, isOpen, setIsOpen, items, closeMenu }: any) {
  return (
    <div className="border border-gray-100 rounded-lg overflow-hidden shadow-sm bg-gradient-to-br from-white to-[#f9fdfd]">
      {/* Header */}
      <button
        className="w-full flex justify-between items-center py-3 px-4 text-left font-semibold text-gray-800"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div>
          <p>{title}</p>
          <p className="text-sm text-gray-500 font-normal">{description}</p>
        </div>
        <ChevronDown
          size={22}
          className={`transition-transform duration-300 ${
            isOpen ? "rotate-180 text-[#23bec8]" : "text-gray-400"
          }`}
        />
      </button>

      {/* Dropdown Items */}
      <div
        className={`transition-all duration-500 overflow-hidden ${
          isOpen ? "max-h-[800px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 pb-3 flex flex-col gap-2">
          {items.map((item: any) => (
            <Link
              key={item.title}
              href={item.href}
              onClick={closeMenu}
              className="flex items-start gap-3 p-3 rounded-md hover:bg-[#23bec8]/10 transition"
            >
              {item.icon}
              <div>
                <p className="font-medium text-black">{item.title}</p>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

