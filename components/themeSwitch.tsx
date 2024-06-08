'use client';

import React, { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import IconWrapper from './iconWrapper';

const ThemeSwitch = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const matchMedia = window.matchMedia('(prefers-color-scheme: dark)');

    if (theme === 'system') {
      matchMedia.matches ? setTheme('dark') : setTheme('light');
    }

    setMounted(true);
  }, [setTheme, theme]);

  if (!mounted) {
    return null;
  }

  return (
    <button
      className="mr-6 flex items-center text-primary dark:text-primaryDark sm:mr-8"
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    >
      <IconWrapper icon={theme === 'dark' ? faSun : faMoon} className="h-8 w-8 text-2xl" />
    </button>
  );
};

export default ThemeSwitch;
