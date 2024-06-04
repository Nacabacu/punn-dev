import Link from 'next/link';

interface LinkWrapperProps {
  children: React.ReactNode;
  url: string;
  newtab?: boolean;
}

export default function LinkWrapper({ children, url, newtab }: LinkWrapperProps) {
  return (
    <Link href={url} className="hover:text-blue-500" target={newtab ? '_blank' : undefined}>
      {children}
    </Link>
  );
}
