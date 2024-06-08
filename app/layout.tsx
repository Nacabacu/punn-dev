import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/react';

import './globals.css';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
import ThemeProvider from '@/utils/themeProvider';
import { DEFAULT_OG_IMAGE, WEBSITE_URL } from '@/const';

config.autoAddCss = false;

export const metadata: Metadata = {
  metadataBase: new URL(WEBSITE_URL),
  title: {
    default: 'Punn.dev',
    template: 'Punn.dev | %s',
  },
  keywords: [
    'Punn',
    'Nararatwong',
    'Punn Nararatwong',
    'full stack developer',
    'programmer',
    'developer',
    'portfolio',
    'blogs',
    'development blogs',
  ],
  description: "Punn's programming blogs",
  openGraph: {
    title: 'Punn.dev',
    description: "Punn's programming blogs",
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
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
