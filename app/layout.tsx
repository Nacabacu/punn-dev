import type { Metadata } from 'next';
import { Ubuntu_Mono } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';

import './globals.css';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
import ThemeProvider from '@/utils/themeProvider';

config.autoAddCss = false;

const roboto = Ubuntu_Mono({
  weight: '400',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Punn',
  description: 'Portfolio website of Punn',
  keywords: ['Punn', 'Nararatwong', 'Punn Nararatwong', 'full stack developer', 'programmer', 'developer', 'portfolio'],
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={roboto.className}>
        <Analytics />
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

export default RootLayout;