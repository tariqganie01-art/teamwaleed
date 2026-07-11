import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Team Waleed Foundation",
    template: "%s | Team Waleed Foundation",
  },

  description:
    "Team Waleed Foundation promotes rare disease awareness, inclusive education, family support, medical knowledge, and research. Together for Every Rare Life.",

  keywords: [
    "Team Waleed Foundation",
    "Team Waleed",
    "Morquio Syndrome",
    "MPS IV",
    "MPS IVA",
    "Rare Diseases",
    "Rare Disease India",
    "Inclusive Education",
    "Rare Disease Awareness",
  ],

  authors: [
    {
      name: "Team Waleed Foundation",
    },
  ],

  creator: "Team Waleed Foundation",
  publisher: "Team Waleed Foundation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}