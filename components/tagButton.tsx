import Link from 'next/link';
import { Slug } from '@/types/sanity';
import { TAG_URL } from '@/const';

interface TagProps {
  name: string;
  slug: Slug;
  count?: number
}

const TagButton = ({ name, slug, count }: TagProps) => {
  return (
    <Link href={`${TAG_URL}/${slug.current}`}>
      <span className='mr-2 p-1 rounded text-sm lowercase border transition-background-color 
      border-primary dark:border-primaryDark hover:text-white hover:bg-primary dark:hover:bg-primaryDark'>
        {count ? `#${name} (${count})` : `#${name}`}
      </span>
    </Link>
  )
}

export default TagButton;