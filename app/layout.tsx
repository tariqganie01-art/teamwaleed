import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import Footer from "@/components/Footer";
import Header from "@/components/Header";

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
  metadataBase: new URL("https://teamwaleed.org"),

  title: {
    default: "Team Waleed Foundation",
    template: "%s | Team Waleed Foundation",
  },

  description:
    "Team Waleed Foundation supports rare disease awareness, family support, medical education, research, and responsible collaboration.",

  keywords: [
    "Team Waleed Foundation",
    "Team Waleed",
    "rare disease",
    "rare disease awareness",
    "rare disease support",
    "rare disease research",
    "medical education",
    "family support",
    "MPS IV",
    "Morquio syndrome",
    "Morquio syndrome awareness",
    "rare diseases in India",
  ],

  authors: [
    {
      name: "Team Waleed Foundation",
      url: "https://teamwaleed.org",
    },
  ],

  creator: "Team Waleed Foundation",
  publisher: "Team Waleed Foundation",

  applicationName: "Team Waleed Foundation",

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://teamwaleed.org",
    siteName: "Team Waleed Foundation",
    title: "Team Waleed Foundation",
    description:
      "Supporting rare disease awareness, family support, medical education, and research.",
    images: [
      {
        url: "/team-waleed-logo.png",
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
      "Supporting rare disease awareness, family support, medical education, and research.",
    images: ["/team-waleed-logo.png"],
  },

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },

  manifest: "/manifest.webmanifest",
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "NonprofitOrganization",
  name: "Team Waleed Foundation",
  url: "https://teamwaleed.org",
  logo: "https://teamwaleed.org/team-waleed-logo.png",
  description:
    "Team Waleed Foundation supports rare disease awareness, family support, medical education, and research.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-white text-slate-900 antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />

        <Header />

        {children}

        <Footer />
      </body>
    </html>
  );
}