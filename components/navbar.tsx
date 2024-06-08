'use client';

import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import LinkWrapper from './linkWrapper';
import ThemeSwitch from './themeSwitch';
import { BLOGS_URL, HOME_URL } from '@/const';
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
  // {
  //   name: 'Projects',
  //   url: PROJECTS_URL,
  // },
];

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="flex flex-col">
      <div className="my-8 flex justify-center leading-7">
        <Webring />
        <span className="flex flex-1 justify-center gap-x-6 sm:gap-x-10">
          {LINKS.map(({ name, url }) => (
            <LinkWrapper key={name} url={url}>
              <span
                className={clsx('text-lg transition-colors sm:text-xl', {
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
