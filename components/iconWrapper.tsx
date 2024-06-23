import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

interface IconWrapperProps {
  icon: IconDefinition;
  url?: string;
  newtab?: boolean;
  className?: string;
  title?: string;
}

const IconWrapper = ({ icon, url, newtab, className, title }: IconWrapperProps) => {
  const defaultClassName = 'flex justify-center items-center';

  if (!url)
    return (
      <div className={`${defaultClassName} ${className}`}>
        <FontAwesomeIcon icon={icon} />
      </div>
    );

  return (
    <Link
      href={url}
      className={`${defaultClassName} hover:text-primary dark:hover:text-primaryDark ${className}`}
      target={newtab ? '_blank' : undefined}
      title={title}
    >
      <FontAwesomeIcon icon={icon} />
    </Link>
  );
};

export default IconWrapper;
