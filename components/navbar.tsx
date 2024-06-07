'use client';

import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import LinkWrapper from './linkWrapper';
import ThemeSwitch from './themeSwitch';
import { BLOGS_URL, HOME_URL, PROJECTS_URL } from '@/const';
import Webring from './webring';

const LINKS = [
  {
    name: 'Home',
    url: HOME_URL,
  },
  {
    name: 'Blogs',
    url: BLOGS_URL,
  },
  {
    name: 'Projects',
    url: PROJECTS_URL,
  },
];

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className='flex flex-col'>
      <div className='flex justify-center my-8 leading-7'>
        <Webring />
        <span className='flex-1 flex gap-x-10 justify-center'>
          {LINKS.map(({ name, url }) => (
            <LinkWrapper key={name} url={url}>
              <span
                className={clsx('text-xl transition-colors', {
                  'text-primary dark:text-primaryDark': pathname === url,
                })}
              >
                {name}
              </span>
            </LinkWrapper>
          ))}
        </span>
        <span className='flex xs:mr-8 mr-6 w-2'>
          <ThemeSwitch />
        </span>
      </div>
      {/* <div className='absolute top-9 xs:right-8 right-6 flex leading-7 items-center'>
        
      </div> */}
    </nav>
  );
};

export default Navbar;
