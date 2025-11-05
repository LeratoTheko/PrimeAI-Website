import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Nav from "./nav";
import Footer from "./footer";


// Load Poppins from Google Fonts
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: {
    default: "PrimeAI Analytics | Data & AI Business Intelligence Firm Lesotho",
    template: "%s | PrimeAI Analytics",
  },
  description: "PrimeAI Analytics is Lesotho's Business Intelligence consulting firm. We help businesses and institutions transform raw data into intelligence that drives growth, competitiveness, and lasting impact.",
  keywords: [
    "PrimeAI Analytics",
    "AI Consulting Lesotho",
    "Data Analytics Firm",
    "Business Intelligence",
    "Business Intelligence Lesotho",
    "Machine Learning Solutions",
    "Smart Decisions",
    "Digital Business Decisions",
    "Digital Transformation",
    "Lesotho Tech",
  ],


  authors: [
    {
      name: "PrimeAI Analytics",
      url: "https://primeai-analytics.com",
    },
  ],

  openGraph: {
    title: "PrimeAI Analytics | Data & AI Business Intelligence Firm Lesotho",
    description: 
      "Empowering Lesotho's businesses with AI, data analytics, and intelligence solutions that transform decision-making.",
    url: "https://primeai-analytics.com",
    siteName: "PrimeAI Analytics",
    locale: "en_LS",
    type: "website",
    images: [
      {
        url: "https://primeai-analytics.com/logo.png",
        width: 800,
        height: 600,
        alt: "PrimeAI Analytics Logo"
      },
    ],
  },
  icons: {
    icon: '/logo.png',
    shortcut: '/logo_bg.png',
    apple: 'logo_bg.png',
  },
  metadataBase: new URL("https://primeai-analytics.com"),
  alternates: {
    canonical: "https://primeai-analytics.com",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">        
      <body className={`${poppins.variable} font-sans antialiased`}>
        <Nav />

        <main className="pt-0">{children}</main>
        {/* --- Structured Data for Organization --- */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "PrimeAI Analytics",
              url: "https://primeai-analytics.com",
              logo: "https://primeai-analytics.com/logo_bg.png",
              description:
                "PrimeAI Analytics delivers AI and data-driven solutions that empower businesses in Lesotho and beyond.",
              sameAs: [
                "https://www.linkedin.com/company/primeai-analytics",
                "https://www.facebook.com/primeaianalytics",
              ],
            }),
          }}
        />
        <Footer/>
      </body>
    </html>
  );
}