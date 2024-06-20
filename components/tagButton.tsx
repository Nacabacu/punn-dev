import { TAG_URL } from '@/const';
import { Slug } from '@/types/sanity';
import Link from 'next/link';

interface TagProps {
  name: string;
  slug?: Slug;
  count?: number;
  className?: string;
}

const TagButton = ({ name, slug, count, className }: TagProps) => {
  const formatText = () => {
    return count ? `#${name} (${count})` : `#${name}`;
  };
  const baseStlye =
    'mr-2 rounded border border-primary p-1 text-sm lowercase dark:border-primaryDark';

  if (!slug) return <span className={baseStlye}>{formatText()}</span>;

  return (
    <Link href={`${TAG_URL}/${slug.current}`}>
      <span
        className={`${baseStlye} ${className} transition-background-color hover:bg-primary hover:text-white dark:hover:bg-primaryDark`}
      >
        {formatText()}
      </span>
    </Link>
  );
};

export default TagButton;
