"use client";

import Link from "next/link";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhone,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

export default function Footer() {
  const iconColor = "#23bec8";

  return (
    <footer className="bg-black text-white pt-8 pb-8 shadow-sm border-t border-gray-700">
      <div className="container mx-auto px-6">
      <div className="flex flex-wrap justify-center gap-6 mb-6">
            {/* Logo and Address */}
            <div className="w-full md:w-1/3 lg:w-1/4 px-4 text-center md:text-left">
                <img
                src="/Logo.png"
                alt="Logo"
                className="h-[45px] mb-3 mx-auto md:mx-0 object-contain"
                />
                <p className="text-sm mb-1 flex items-center justify-center md:justify-start gap-2">
                <FaMapMarkerAlt color={iconColor} /> Lesotho Housing, Limkokwing LEAP
                </p>
                <p className="text-sm flex items-center justify-center md:justify-start gap-2">
                <FaEnvelope color={iconColor} /> info.primeaianalytics@gmail.com
                </p>
                <p className="text-sm flex items-center justify-center md:justify-start gap-2">
                <FaPhone color={iconColor} /> +266 5301 1161
                </p>
            </div>

            {/* Solutions */}
            <div className="w-1/2 sm:w-1/3 md:w-1/6 lg:w-1/6 px-4 text-center md:text-left">
                <h6 className="uppercase font-bold mb-3" style={{ color: iconColor }}>
                Solutions
                </h6>
                <p><Link href="#" className="text-white hover:underline">Tsoelopele AI</Link></p>
                <p><Link href="#" className="text-white hover:underline">Analytics</Link></p>
                <p><Link href="#" className="text-white hover:underline">Automation</Link></p>
                <p><Link href="#" className="text-white hover:underline">Commerce</Link></p>
                <p><Link href="#" className="text-white hover:underline">Insights</Link></p>
            </div>

            {/* Support */}
            <div className="w-1/2 sm:w-1/3 md:w-1/6 lg:w-1/6 px-4 text-center md:text-left">
                <h6 className="uppercase font-bold mb-3" style={{ color: iconColor }}>
                Support
                </h6>
                <p><Link href="#" className="text-white hover:underline">Documentation</Link></p>
                <p><Link href="#" className="text-white hover:underline">Guides</Link></p>
            </div>

            {/* Company */}
            <div className="w-1/2 sm:w-1/3 md:w-1/6 lg:w-1/6 px-4 text-center md:text-left">
                <h6 className="uppercase font-bold mb-3" style={{ color: iconColor }}>
                Company
                </h6>
                <p><Link href="#" className="text-white hover:underline">About</Link></p>
                <p><Link href="#" className="text-white hover:underline">Blog</Link></p>
                <p><Link href="#" className="text-white hover:underline">Press</Link></p>
            </div>

            {/* Legal */}
            <div className="w-1/2 sm:w-1/3 md:w-1/6 lg:w-1/6 px-4 text-center md:text-left">
                <h6 className="uppercase font-bold mb-3" style={{ color: iconColor }}>
                Legal
                </h6>
                <p><Link href="#" className="text-white hover:underline">Terms of Service</Link></p>
                <p><Link href="#" className="text-white hover:underline">Privacy Policy</Link></p>
            </div>
        </div>


        <hr className="border-t border-[#23bec8] mb-6" />

        {/* Newsletter */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
          <div className="w-full sm:w-1/2">
            <h6 className="font-bold mb-1">Subscribe to our Newsletter</h6>
            <p className="text-white text-sm mb-0">
              Stay updated with the latest insights and updates from PrimeAI Analytics.
            </p>
          </div>
          <div className="w-full sm:w-1/2">
            <form className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                required
                className="px-2 py-1 rounded text-black flex-1 bg-white"
              />
              <button
                type="submit"
                className="bg-[#23bec8] px-4 py-1 rounded hover:opacity-90 transition"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <hr className="border-t border-[#23bec8] mb-4" />

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-3">
          <div className="text-center sm:text-left">
            <small>© 2025 PrimeAI Analytics. All rights reserved.</small>
          </div>
          <div className="flex justify-center sm:justify-end gap-3 text-xl">
            <Link href="#"><FaFacebookF color={iconColor} /></Link>
            <Link href="#"><FaInstagram color={iconColor} /></Link>
            <Link href="#"><FaTwitter color={iconColor} /></Link>
            <Link href="#"><FaGithub color={iconColor} /></Link>
            <Link href="#"><FaLinkedin color={iconColor} /></Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

