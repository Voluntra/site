import NavBar from '@/components/nav-bar';
import { ThemeProvider } from '@/components/theme-provider';
import siteConfig from '@/config/site';
import { cn } from '@/lib/utils';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import { PropsWithChildren } from 'react';
import './globals.css';

const poppins = Poppins({ subsets: ['latin'], weight: '400' });

export const metadata: Metadata = {
  metadataBase: new URL('https://voluntra.org'),
  title: siteConfig.title,
  description: 'Connecting students with volunteer organizations',
  keywords: siteConfig.keywords,
  openGraph: {
    title: siteConfig.title,
    description: 'Supercharge your résumé and college apps.',
    url: 'https://voluntra.org',
    siteName: siteConfig.title,
    locale: 'en_US',
    type: 'website',
    images: '/opengraph-image.jpg',
  },
};

export default function RootLayout({ children }: Readonly<PropsWithChildren>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={cn(
          poppins.className,
          'overflow-hidden bg-background text-foreground selection:bg-purple-900 selection:text-purple-300'
        )}
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
