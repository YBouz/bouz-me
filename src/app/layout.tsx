import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { Inter, JetBrains_Mono } from "next/font/google";
import React from "react";

import "./globals.css";

const sans = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mono",
});

const TITLE = "Youssef Bouz — Founder & Manager, GCC Brokers";
const DESCRIPTION =
  "Founder and manager of GCC Brokers, a multi-asset brokerage in Dubai running STP execution on infrastructure built in-house.";

export const metadata: Metadata = {
  metadataBase: new URL("https://bouz.me"),
  title: TITLE,
  description: DESCRIPTION,
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "https://bouz.me",
    siteName: "Youssef Bouz",
    locale: "en_US",
    type: "profile",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    creator: "@YBooouz",
  },
  alternates: { canonical: "https://bouz.me" },
};

export const viewport = {
  themeColor: "#050a10",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={sans.variable + " " + mono.variable}>
      <body className="font-sans">{children}</body>
      <Analytics />
    </html>
  );
}
