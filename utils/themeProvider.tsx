'use-client';

import React from 'react';
import { ThemeProvider as NextThemeProvider } from 'next-themes';

interface ThemProviderProps {
  children: React.ReactNode;
}

export default function ThemeProvider({ children }: ThemProviderProps) {
  return <NextThemeProvider attribute='class'>{children}</NextThemeProvider>;
};