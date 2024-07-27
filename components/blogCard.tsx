import { BLOG_URL } from '@/const';
import { Post } from '@/types/sanity';
import Link from 'next/link';
import { formatDate } from '../utils/date';

interface BlogCardProps {
  post: Post;
}

const BlogCard = ({ post }: BlogCardProps) => {
  return (
    <div className="flex gap-3">
      <time
        dateTime={post?.publishedAt}
        className="min-w-24 text-sm leading-7 text-primary dark:text-primaryDark"
      >
        {formatDate(post?.publishedAt)}
      </time>
      <Link href={`${BLOG_URL}/${post?.slug?.current}`}>
        <h2 className="text-lg hover:text-primary dark:hover:text-primaryDark">{post?.title}</h2>
      </Link>
    </div>
  );
};

export default BlogCard;
