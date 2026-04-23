import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import Script from "next/script";
import { Geist } from "next/font/google";
import "./globals.css";
// Satoshi loaded via <link> in <head> below

const geist = Geist({ subsets: ["latin"], variable: "--font-geist", display: "swap" });
import BrandFacehash from "@/components/BrandFacehash";
import GlobalDock from "@/components/GlobalDock";
import Tracker from "@/components/Tracker";

export const metadata: Metadata = {
  title: "Rebecca Huang",
  description: "Product designer & engineer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://api.fontshare.com" />
        <link href="https://api.fontshare.com/v2/css?f[]=satoshi@300,400,500,600,700&display=swap" rel="stylesheet" />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-5CLKL7MLRR"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-5CLKL7MLRR');
          `}
        </Script>
      </head>
      <body className={`antialiased ${geist.variable}`} style={{ fontFamily: "'Satoshi', sans-serif" }}>
        <BrandFacehash />
        <GlobalDock />
        <Tracker />
        {children}
<Analytics />
      </body>
    </html>
  );
}
