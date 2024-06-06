'use client'

import { useEffect, useState } from 'react';
import { hasVerticalScroll } from '../utils/html';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpLong } from '@fortawesome/free-solid-svg-icons';
import { usePathname } from 'next/navigation';

const Footer = () => {
  const [hasScroll, setHasScroll] = useState(false);
  const pathname = usePathname();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  useEffect(() => {
    setHasScroll(hasVerticalScroll());    
  }, [pathname]);

  return (
    <footer className='text-center text-sm'>
      {
        hasScroll &&
        <div className='flex justify-center py-8'>
          <div className='space-x-2 cursor-pointer hover:text-primary dark:hover:text-primaryDark transition-colors' onClick={scrollToTop}>
            <span className='text-lg'>Back to top</span>
            <FontAwesomeIcon icon={faUpLong} />
          </div>
        </div>
      }
    </footer>
  );
}

export default Footer;