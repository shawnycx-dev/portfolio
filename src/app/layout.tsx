import type { Metadata } from "next";
import { Kode_Mono, Montserrat } from "next/font/google";
import { GoogleTagManager } from "@next/third-parties/google";
import { Analytics } from "@vercel/analytics/react";
import Header from "@/components/header";
import Footer from "@/components/footer";

import { cn } from "@/utils/cn";
import { siteConfig } from "@/site.config";
import "./globals.css";

const kodeMono = Kode_Mono({
  subsets: ["latin"],
  variable: "--kode-mono",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  title: siteConfig.siteTitle,
  description: siteConfig.siteDescription,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth scroll-pt-8">
      <GoogleTagManager gtmId="G-TP13CLSN0B" />
      <body
        className={cn(
          montserrat.variable,
          kodeMono.variable,
          "font-kode-mono",
          "max-w-screen-xl mx-auto py-10 px-8 min-h-screen flex flex-col bg-primary text-foreground"
        )}
      >
        <Header />
        <main className="py-20 flex-grow">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
