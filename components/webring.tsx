'use client';

import { useTheme } from 'next-themes';
import Image from 'next/image'
import { useEffect, useState } from 'react';


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

  return (<a
    className='sm:ml-8 ml-6'
    href='https://webring.wonderful.software#punn.dev'
    title='วงแหวนเว็บ'
  >
    <Image
      alt='วงแหวนเว็บ'
      width='28'
      height='28'
      src={`https://webring.wonderful.software/webring.${currentTheme === 'dark' ? 'white' : 'black'}.svg`}
    />
  </a>)
}

export default Webring;