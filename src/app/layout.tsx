import Footer from "@/components/footer";
import NavBar from "@/components/nav-bar";
import siteConfig from "@/config/siteConfig";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className + " bg-background"}>
        <NavBar />
        <SpeedInsights />
        {children}
        <Analytics />
        <Footer />
      </body>
    </html>
  );
}
