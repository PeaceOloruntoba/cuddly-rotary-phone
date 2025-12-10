import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SafeNest — Real Estate & Podcast Apps · Software Agency",
  description:
    "SafeNest builds beautiful, scalable web and mobile applications — real estate platforms, podcast experiences, and custom software for businesses worldwide.",
  keywords: [
    "safenest",
    "real estate app",
    "podcast app",
    "software agency",
    "web development",
    "mobile apps",
    "fintech",
    "ecommerce",
    "seo",
  ],
  authors: [{ name: "SafeNest", url: "https://safenest.ng" }],
  openGraph: {
    title: "SafeNest — Real Estate & Podcast Apps · Software Agency",
    description:
      "We build web and mobile apps for real estate, podcast publishers, and businesses — design-forward, scalable, and SEO-optimized.",
    url: "https://safenest.ng",
    siteName: "SafeNest",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "SafeNest — Build & Invest",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[--background] text-[--foreground]`}
      >
        {children}
      </body>
    </html>
  );
}
