import { GoogleAnalytics } from '@next/third-parties/google';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import type { Metadata } from 'next';

import { DEFAULT_OG_IMAGE, WEBSITE_URL } from '@/const';
import ThemeProvider from '@/utils/themeProvider';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import './globals.css';

config.autoAddCss = false;

export const metadata: Metadata = {
  metadataBase: new URL(WEBSITE_URL),
  title: {
    default: 'Punn a full stack developer',
    template: 'Punn | %s',
  },
  keywords: [
    'Punn',
    'Nararatwong',
    'Punn Nararatwong',
    'full stack developer',
    'programmer',
    'developer',
    'blogs',
    'development blogs',
  ],
  authors: {
    name: 'Punn Nararatwong',
  },
  robots: 'index follow',
  description: "Blog of Punn Nararatwong, a full stack developer.",
  openGraph: {
    title: 'Punn',
    description: "Blog of Punn Nararatwong, a full stack developer.",
    type: 'website',
    locale: 'en_US',
    url: WEBSITE_URL,
    siteName: 'Punn.dev',
    images: {
      url: DEFAULT_OG_IMAGE,
      width: 1200,
      height: 630,
      type: 'image/png',
    },
  },
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Analytics />
        <SpeedInsights />
        <GoogleAnalytics gaId="G-CTBR68YLBZ" />
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
