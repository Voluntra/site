import NavBar from "@/components/nav-bar";
import { ThemeProvider } from "@/components/theme-provider";
import siteConfig from "@/config/site";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://voluntra.org"),
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
    type: "website",
    images: "/opengraph-image.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={
          inter.className +
          " bg-background text-foreground selection:bg-purple-900 selection:text-purple-300"
        }
      >
        <SpeedInsights />
        <Analytics />
        <NavBar />
        <ThemeProvider attribute="class" defaultTheme="system">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

