import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "devbymagdy — Websites That Actually Sell",
  description:
    "Mahmoud Magdy builds premium Shopify themes and custom web experiences for Egyptian and international brands. Book a free discovery call.",
  keywords: [
    "Shopify theme development",
    "custom web development",
    "devbymagdy",
    "Mahmoud Magdy",
    "Cairo Egypt web developer",
  ],
  openGraph: {
    title: "devbymagdy — Websites That Actually Sell",
    description:
      "Custom Shopify themes and web development for brands that want to scale.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
