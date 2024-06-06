import Link from 'next/link';

interface LinkWrapperProps {
  children: React.ReactNode;
  url: string;
  newtab?: boolean;
}

const LinkWrapper = ({ children, url, newtab }: LinkWrapperProps) => {
  return (
    <Link href={url} className='hover:text-primary dark:hover:text-primaryDark' target={newtab ? '_blank' : undefined}>
      {children}
    </Link>
  );
}

export default LinkWrapper;