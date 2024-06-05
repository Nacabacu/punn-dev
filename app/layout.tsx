import type { Metadata } from 'next';
import { Ubuntu_Mono } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';

import './globals.css';
import Navbar from '@/components/navbar';

const roboto = Ubuntu_Mono({
  weight: '400',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Punn a developer',
  description: 'Portfolio website of Punn',
  keywords: ['Punn', 'developer', 'portfolio'],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Analytics />
        <div className="flex items-center mt-64 flex-col">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
