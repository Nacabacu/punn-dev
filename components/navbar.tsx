'use client'

import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import LinkWrapper from './linkWrapper';
import ThemeSwitch from './themeSwitch';

const LINKS = [
    {
      name: 'Home',
      url: '/',
    },
    {
      name: 'Blogs',
      url: '/blogs',
    },
    {
      name: 'Projects',
      url: '/projects',
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
