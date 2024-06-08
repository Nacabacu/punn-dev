'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpLong, faHashtag } from '@fortawesome/free-solid-svg-icons';
import { hasVerticalScroll } from '@/utils/html';
import { TAG_URL } from '@/const';
import IconWrapper from './iconWrapper';

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
    <footer className="relative flex w-full justify-center py-8">
      {hasScroll && (
        <div
          className="absolute right-10 cursor-pointer items-center space-x-2 leading-8 transition-colors hover:text-primary dark:hover:text-primaryDark"
          onClick={scrollToTop}
        >
          <span className="hidden text-lg sm:inline">Back to top</span>
          <FontAwesomeIcon className="" icon={faUpLong} />
        </div>
      )}
      <span className="leading-8">
        <IconWrapper url={TAG_URL} className="h-8 w-8" icon={faHashtag} />
      </span>
    </footer>
  );
};

export default Footer;
