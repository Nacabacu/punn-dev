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
        <span className='flex-1 flex sm:gap-x-10 gap-x-6 justify-center'>
          {LINKS.map(({ name, url }) => (
            <LinkWrapper key={name} url={url}>
              <span
                className={clsx('sm:text-xl text-lg transition-colors', {
                  'text-primary dark:text-primaryDark': pathname === url,
                })}
              >
                {name}
              </span>
            </LinkWrapper>
          ))}
        </span>
        <ThemeSwitch />
      </div>
    </nav>
  );
};

export default Navbar;
