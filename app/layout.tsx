import type { Metadata } from "next";
import "./globals.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://teamwaleed.org"),
  title: {
    default: "Team Waleed Foundation",
    template: "%s | Team Waleed Foundation",
  },
  description:
    "Team Waleed Foundation is dedicated to rare disease awareness, education, research, patient support, and healthcare collaboration. Together for every rare life.",
  keywords: [
    "Team Waleed Foundation",
    "Rare Disease",
    "Morquio Syndrome",
    "MPS IVA",
    "Rare Disease Awareness",
    "Healthcare",
    "Research",
    "Medical Education",
    "Patient Support",
    "India",
  ],
  authors: [
    {
      name: "Team Waleed Foundation",
    },
  ],
  creator: "Team Waleed Foundation",
  publisher: "Team Waleed Foundation",

  openGraph: {
    title: "Team Waleed Foundation",
    description:
      "Together for every rare life. Supporting awareness, education, research and families affected by rare diseases.",
    url: "https://teamwaleed.org",
    siteName: "Team Waleed Foundation",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/images/teamwaleed-logo.png",
        width: 1200,
        height: 630,
        alt: "Team Waleed Foundation",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Team Waleed Foundation",
    description:
      "Together for every rare life. Supporting awareness, education, research and families affected by rare diseases.",
    images: ["/images/teamwaleed-logo.png"],
  },

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-IN">
      <body className="min-h-screen bg-white text-slate-900 antialiased">
        <Header />

        {children}

        <Footer />
      </body>
    </html>
  );
}