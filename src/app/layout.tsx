import Footer from "@/components/footer";
import NavBar from "@/components/nav-bar";
import siteConfig from "@/config/site";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  openGraph: {
    title: siteConfig.title,
    description:
      "Connecting students with volunteer opportunities in their community",
    url: "https://voluntra.org",
    siteName: siteConfig.title,
    locale: "en_US",
    images: [
      {
        url: "/opengraph.jpg",
        width: 1894,
        height: 813,
      },
    ],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className + " bg-background"}>
        <SpeedInsights />
        <Analytics />
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
