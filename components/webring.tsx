'use client';

import { useTheme } from 'next-themes';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { WEBSITE_URL } from '../const';

const Webring = () => {
  const { theme } = useTheme();
  const [currentTheme, setCurrentTheme] = useState(theme);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    setCurrentTheme(theme);
  }, [theme]);

  if (!mounted) {
    return null;
  }

  return (
    <a
      className="ml-6 sm:ml-8"
      href="https://webring.wonderful.software#punn.dev"
      title="วงแหวนเว็บ"
    >
      <Image
        alt="วงแหวนเว็บ"
        width="28"
        height="28"
        src={`${WEBSITE_URL}/webring-${currentTheme === 'dark' ? 'dark' : 'light'}.svg`}
      />
    </a>
  );
};

export default Webring;
