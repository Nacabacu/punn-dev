import Link from 'next/link';

interface LinkWrapperProps {
  children: React.ReactNode;
  url: string;
  newtab?: boolean;
  className?: string;
}

const LinkWrapper = ({ children, url, newtab, className }: LinkWrapperProps) => {
  return (
    <Link href={url} className={`hover:text-primary dark:hover:text-primaryDark ${className}`} target={newtab ? '_blank' : undefined}>
      {children}
    </Link>
  );
}

export default LinkWrapper;