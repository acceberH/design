import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import Script from "next/script";
import "./globals.css";
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
      <body className="antialiased">
        <BrandFacehash />
        <Tracker />
        {children}
        <GlobalDock />
        <Analytics />
      </body>
    </html>
  );
}
