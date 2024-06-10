'use-client';

import { ThemeProvider as NextThemeProvider } from 'next-themes';
import React from 'react';

interface ThemProviderProps {
  children: React.ReactNode;
}

const ThemeProvider = ({ children }: ThemProviderProps) => {
  return (
    <NextThemeProvider defaultTheme="system" attribute="class">
      {children}
    </NextThemeProvider>
  );
};

export default ThemeProvider;
