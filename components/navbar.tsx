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
    <>
      <div className='flex justify-center gap-x-10 mb-8'>
        {
          LINKS.map(({ name, url }) => (
            <LinkWrapper key={name} url={url}>
              <span className={clsx('text-xl', { 'text-primary dark:text-primaryDark': pathname === url })}>{name}</span>
            </LinkWrapper>
          ))
        }
      </div>
      <div className='absolute right-8'>
        <ThemeSwitch />
      </div>
    </>
  );
}
