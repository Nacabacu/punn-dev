'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpLong, faHashtag } from '@fortawesome/free-solid-svg-icons';
import LinkWrapper from './linkWrapper';
import { hasVerticalScroll } from '@/utils/html';
import { TAG_URL } from '@/const';

const Footer = () => {
  const [hasScroll, setHasScroll] = useState(false);
  const pathname = usePathname();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    setHasScroll(hasVerticalScroll());
  }, [pathname]);

  return (
    <footer className='flex w-full justify-center py-8 relative'>
      {hasScroll && (
        <div
          className='items-center absolute right-10 leading-8 space-x-2 cursor-pointer hover:text-primary dark:hover:text-primaryDark transition-colors'
          onClick={scrollToTop}
        >
          <span className='text-lg sm:inline hidden'>Back to top</span>
          <FontAwesomeIcon className='' icon={faUpLong} />
        </div>
      )}
      <span className='leading-8'>
        <LinkWrapper url={TAG_URL}>
          <FontAwesomeIcon icon={faHashtag} />
        </LinkWrapper>
      </span>
    </footer>
  );
};

export default Footer;
