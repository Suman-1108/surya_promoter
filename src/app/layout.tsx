import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Space_Mono, Inter } from "next/font/google";
import { LanguageProvider } from "@/hooks/useLanguage";
import SmoothScroll from "@/components/animations/SmoothScroll";
import ScrollToTop from "@/components/layout/ScrollToTop";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  variable: "--font-space-mono",
  display: "swap",
  weight: ["400", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://suryapromoters.com"),
  title: "Surya Promoters | Real Estate & Land Developers in Madurai | Estd 2010",
  description:
    "Surya Promoters, established in 2010 by Indian Air Force veteran Mr. Manickam Natarajan. Premier residential plots, commercial land, and agricultural farm developments in Madurai, Tamil Nadu.",
  keywords: [
    "Surya Promoters",
    "Real Estate Madurai",
    "Land Developers Madurai",
    "Plots in Madurai",
    "Commercial Land Madurai Ring Road",
    "Vaigai Elite Commercial Land",
    "Madurai Farms and Fruits",
    "Orange Garden Madurai",
    "Manickam Natarajan",
  ],
  authors: [{ name: "Surya Promoters" }],
  openGraph: {
    title: "Surya Promoters | From Land. To Legacy.",
    description:
      "Discover thoughtfully developed land opportunities for living, growing and investing across Madurai and southern Tamil Nadu.",
    url: "https://suryapromoters.com",
    siteName: "Surya Promoters",
    images: [
      {
        url: "/images/hero-poster.jpg",
        width: 1200,
        height: 630,
        alt: "Surya Promoters Madurai Land Transformation",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  icons: {
    icon: "/images/surya-logo.png",
    apple: "/images/surya-logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${jakarta.variable} ${spaceMono.variable} ${inter.variable}`}>
      <body className="min-h-screen bg-[#FFFFFF] text-[#242820] font-sans antialiased selection:bg-[#EAB308] selection:text-[#0A0D12]">
        <LanguageProvider>
          <SmoothScroll>{children}</SmoothScroll>
          <ScrollToTop />
        </LanguageProvider>
      </body>
    </html>
  );
}
