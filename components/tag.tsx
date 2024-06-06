import Link from 'next/link';
import { Slug } from '@/types/sanity';
import { BLOGS_TAG_URL } from '@/const';

interface TagProps {
  name: string;
  slug: Slug;
}

const Tag = ({ name, slug }: TagProps) => {
  return (
    <Link href={`${BLOGS_TAG_URL}/${slug.current}`}>
      <span className='mr-2 p-1 rounded-sm text-sm lowercase border transition-background-color 
      border-primary dark:border-primaryDark hover:text-white hover:bg-primary dark:hover:bg-primaryDark'>#{name}</span>
    </Link>
  )
}

export default Tag;