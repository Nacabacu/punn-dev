'use client'

import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import LinkWrapper from './linkWrapper';

const HOME_PATH = '/';
const PROJECTS_PATH = '/projects';

export default function Navbar() {
	const pathname = usePathname();

  return (
    <div className="flex justify-center gap-x-10 mb-10">
      <LinkWrapper url={HOME_PATH}>
				<span className={clsx('text-xl', { 'text-blue-500': pathname === HOME_PATH })}>Home</span>
      </LinkWrapper>
      <LinkWrapper url={PROJECTS_PATH}>
        <span className={clsx('text-xl', { 'text-blue-500': pathname === PROJECTS_PATH })}>Projects</span>
      </LinkWrapper>
    </div>
  );
}
