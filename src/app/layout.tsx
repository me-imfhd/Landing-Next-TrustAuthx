import React from "react";
import Script from "next/script";
import "../styles/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "TrustAuthX",
  description:
    "TrustAuthX is a Low Code Authentication as a Service Platform for developers/businesses worldwide.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <head>
        <title>{`${metadata.title}`}</title>
        <meta name="description" content={`${metadata.description}`} />
        <link rel="icon" href="./favicon.ico" />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-7NXTY5KCKL"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-7NXTY5KCKL');
        `}
        </Script>
      </head>
      <body>
        <div className="flex min-h-screen flex-col ">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
