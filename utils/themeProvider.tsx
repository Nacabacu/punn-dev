'use-client';

import React from 'react';
import { ThemeProvider as NextThemeProvider } from 'next-themes';

interface ThemProviderProps {
  children: React.ReactNode;
}

const ThemeProvider = ({ children }: ThemProviderProps) => {
  return <NextThemeProvider defaultTheme="system" attribute='class'>{children}</NextThemeProvider>;
};

export default ThemeProvider;