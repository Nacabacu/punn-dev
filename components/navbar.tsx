'use client'

import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import LinkWrapper from './linkWrapper';
import ThemeSwitch from './themeSwitch';
import { BLOGS_URL, HOME_URL, PROJECTS_URL } from '@/const';

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

export default function Navbar() {
	const pathname = usePathname();

  return (
    <nav className='flex flex-col'>
      <div className='flex justify-center gap-x-10 my-8 leading-7'>
        {
          LINKS.map(({ name, url }) => (
            <LinkWrapper key={name} url={url}>
              <span className={clsx('text-xl transition-colors', { 'text-primary dark:text-primaryDark': pathname === url })}>{name}</span>
            </LinkWrapper>
          ))
        }
      </div>
      <div className='absolute top-8 xs:right-8 right-6 flex leading-7 items-center'>
        <ThemeSwitch />
      </div>
    </nav>
  );
}
