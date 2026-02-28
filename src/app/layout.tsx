import type { Metadata } from "next";
import { Caveat } from "next/font/google";
import "./globals.css";

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  weight: ["500", "600"],
});

export const metadata: Metadata = {
  title: "ExportKit - Data Export Tool for GoHighLevel",
  description:
    "The ultimate data export tool for GoHighLevel. Export conversations, SMS, emails, WhatsApp, Facebook & Instagram messages with advanced filtering. CSV & JSON formats.",
  icons: {
    icon: "/exportkit-icon.svg",
  },
  keywords: [
    "GoHighLevel export",
    "export GHL conversations",
    "GHL data export",
    "export messages",
    "GoHighLevel backup",
    "GHL marketplace",
  ],
  openGraph: {
    title: "Export Messages - Data Export Tool for GoHighLevel",
    description:
      "Export conversations, SMS, emails, WhatsApp, Facebook & Instagram messages with advanced filtering. Pay-per-credit pricing with volume discounts.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="light" style={{ colorScheme: "light" }}>
      <body className={`${caveat.variable} antialiased bg-[#FFF9EB] text-gray-900`}>{children}</body>
    </html>
  );
}
