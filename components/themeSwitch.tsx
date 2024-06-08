'use client';

import React, { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <button
      className='flex items-center sm:mr-8 mr-6 text-primary dark:text-primaryDark'
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    >
      <IconWrapper icon={theme === 'dark' ? faSun : faMoon} className='w-8 h-8 text-2xl' />
    </button>
  );
};

export default ThemeSwitch;