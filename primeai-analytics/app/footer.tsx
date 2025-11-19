"use client";

import Link from "next/link";
import { useState } from "react";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhone,
  FaFacebookF,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

export default function Footer() {
  const iconColor = "#23bec8";
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/newsletter/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus("success");
        setEmail("");
      } else {
        setStatus("error");
        console.error(data.error);
      }
    } catch (err) {
      setStatus("error");
      console.error(err);
    }
  };

  return (
    <footer className="bg-black text-white pt-12 pb-8 border-t border-gray-700 shadow-inner">
      <div className="container mx-auto px-[0px]">
        <div className="flex flex-wrap lg:flex-nowrap justify-start gap-8 mb-10">
          {/* Logo and Contact */}
          <div className="w-full md:w-1/3 lg:w-[20%] text-center md:text-left">
            <img
              src="/No_Background.png"
              alt="Logo"
              className="h-[50px] mb-4 mx-auto md:mx-0 object-contain transition-transform duration-300 hover:scale-105"
            />
            <p className="text-sm mb-2 flex items-center justify-center md:justify-start gap-2 hover:text-[#23bec8] transition-colors">
              <FaMapMarkerAlt color={iconColor} /> Lesotho Housing, Limkokwing LEAP
            </p>
            <p className="text-sm flex items-center justify-center md:justify-start gap-2 hover:text-[#23bec8] transition-colors">
              <FaEnvelope color={iconColor} /> info@primeai-analytics.com
            </p>
            <p className="text-sm flex items-center justify-center md:justify-start gap-2 hover:text-[#23bec8] transition-colors">
              <FaPhone color={iconColor} /> +266 5761 2519
            </p>
          </div>

          {/* Sections */}
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 w-full">
            {[
              { title: "Solutions", links: ["Tsoelopele One", "Analytics", "Automation", "Insights"] },
              { title: "Support", links: ["Documentation", "Guides"] },
              { title: "Company", links: ["About", "Blog", "Press"] },
              { title: "Legal", links: ["Terms of Service", "Privacy Policy"] },
            ].map((section) => (
              <div key={section.title} className="text-center md:text-left flex-shrink-0">
                <h6 className="uppercase font-bold mb-3 text-[#23bec8] tracking-wider">
                  {section.title}
                </h6>
                {section.links.map((link) => (
                  <p key={link}>
                    <Link
                      href="#"
                      className="text-white hover:text-[#23bec8] transition-colors duration-200 hover:underline"
                    >
                      {link}
                    </Link>
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>

        <hr className="border-t border-[#23bec8] mb-8 opacity-50" />

        {/* Newsletter */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-10 gap-4">
          <div className="w-full sm:w-1/2">
            <h6 className="font-bold mb-2 text-lg text-[#23bec8]">Subscribe to our Newsletter</h6>
            <p className="text-white text-sm">
              Stay updated with the latest insights and updates from PrimeAI Analytics.
            </p>
          </div>
          <div className="w-full sm:w-1/2">
            <form
              className="flex flex-row gap-2 items-center justify-center sm:justify-start"
              onSubmit={handleSubmit}
            >
              <input
                type="email"
                placeholder="Enter your email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="px-3 py-2 rounded-md text-black flex-1 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-[#23bec8] transition w-[70%]"
              />
              <button
                type="submit"
                className="bg-[#23bec8] px-6 py-2 rounded-md font-semibold hover:bg-[#1fa8b0] transition-colors shadow-lg whitespace-nowrap"
              >
                Subscribe
              </button>
              {status === "success" && (
                <p className="ml-2 text-green-400">Subscribed successfully!</p>
              )}
              {status === "error" && (
                <p className="ml-2 text-red-400">Subscription failed. Try again.</p>
              )}
            </form>
          </div>
        </div>

        <hr className="border-t border-[#23bec8] mb-6 opacity-40" />

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="text-center sm:text-left">
            <small className="text-gray-400">© 2025 PrimeAI Analytics. All rights reserved.</small>
          </div>
          <div className="flex justify-center sm:justify-end gap-4 text-xl">
            {[FaFacebookF, FaGithub, FaLinkedin].map((Icon, idx) => (
              <Link
                key={idx}
                href="#"
                className="transition-transform duration-300 hover:scale-110 hover:text-[#23bec8]"
              >
                <Icon color={iconColor} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
