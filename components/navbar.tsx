'use client';

import { BLOGS_URL, HOME_URL } from '@/const';
import clsx from 'clsx';
import { usePathname } from 'next/navigation';
import LinkWrapper from './linkWrapper';
import ThemeSwitch from './themeSwitch';
import Webring from './webring';

const LINKS = [
  {
    name: 'Home',
    url: HOME_URL,
    title: 'Home',
  },
  {
    name: 'Blogs',
    url: BLOGS_URL,
    title: 'Blogs',
  },
  // {
  //   name: 'Projects',
  //   url: PROJECTS_URL,
  // },
];

const Navbar = () => {
  const pathname = usePathname();

  return (
    <header className={`fixed w-screen transition-colors bg-background dark:bg-backgroundDark flex flex-col z-50 ${clsx({'border-b border-dashed border-primary border-opacity-50 dark:border-primaryDark': pathname !== HOME_URL})}`}>
      <div className="my-4 flex justify-center leading-7">
        <Webring />
        <nav className="flex flex-1 justify-center gap-x-6 sm:gap-x-10">
          {LINKS.map(({ name, url, title }) => (
            <LinkWrapper key={name} url={url} title={title}>
              <span
                className={clsx('text-lg sm:text-xl', {
                  'text-primary dark:text-primaryDark': pathname === url,
                })}
              >
                {name}
              </span>
            </LinkWrapper>
          ))}
        </nav>
        <ThemeSwitch />
      </div>
    </header>
  );
};

export default Navbar;
