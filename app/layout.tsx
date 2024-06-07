import type { Metadata } from 'next';
import { Prompt } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';

import './globals.css';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
import ThemeProvider from '@/utils/themeProvider';

config.autoAddCss = false;

const prompt = Prompt({
  weight: '400',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  metadataBase: new URL('https://punn.dev/'),
  title: {
    default: 'Punn.dev',
    template: '%s | Punn.dev'
  },
  keywords: ['Punn', 'Nararatwong', 'Punn Nararatwong', 'full stack developer', 'programmer', 'developer', 'portfolio', 'blog', 'development blog'],
  description: 'Punn\'s blogs',
  openGraph: {
    title: 'Punn.dev',
    description: 'Punn\'s blogs',
    type: 'website',
    locale: 'en_US',
    url: 'https://punn.dev/',
    siteName: 'Punn.dev',
    images: {
      url: 'https://punn.dev/images/og-image.png',
      width: 1200,
      height: 630,
      type: 'image/png',
    }
  },
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={prompt.className}>
        <Analytics />
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

export default RootLayout;