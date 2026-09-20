import type { Metadata } from "next";
import { Archivo, Newsreader } from "next/font/google";
import "./globals.css";

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "600", "700"],
  display: "swap",
});

const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500"],
  style: ["normal", "italic"],
  display: "swap",
});

const SITE_URL = "https://devbymagdy.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "devbymagdy | Shopify storefronts for growing brands",
  description:
    "Mahmoud Magdy builds custom Shopify themes and websites for brands in Cairo and abroad. One developer, direct contact, live in weeks.",
  keywords: [
    "Shopify theme developer",
    "Shopify developer Cairo",
    "custom Shopify theme",
    "devbymagdy",
    "Mahmoud Magdy",
  ],
  authors: [{ name: "Mahmoud Magdy" }],
  alternates: { canonical: SITE_URL },
  openGraph: {
    title: "devbymagdy | Shopify storefronts for growing brands",
    description:
      "Custom Shopify themes and websites for brands that need to launch, not wait months.",
    url: SITE_URL,
    siteName: "devbymagdy",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "devbymagdy | Shopify storefronts for growing brands",
    description:
      "Custom Shopify themes and websites for brands that need to launch, not wait months.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${archivo.variable} ${newsreader.variable}`}
    >
      <body className="bg-paper font-body antialiased">{children}</body>
    </html>
  );
}
