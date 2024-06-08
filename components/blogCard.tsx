import Link from 'next/link';
import { Post } from '@/types/sanity';
import Tag from './tagButton';
import { BLOG_URL } from '@/const';

interface BlogCardProps {
  post: Post;
}

const BlogCard = ({ post }: BlogCardProps) => {
  return (
    <div className="flex flex-col rounded-md p-4 shadow-md transition-all hover:bg-secondary hover:text-white dark:shadow-lg dark:hover:bg-backgroundDark dark:hover:shadow-2xl">
      <Link href={`${BLOG_URL}/${post?.slug?.current}`}>
        <h2 className={'line-clamp-2 min-h-16 text-2xl'}>{post?.title}</h2>
        <p className={'my-1 text-sm text-primary dark:text-primaryDark'}>
          {new Date(post?.publishedAt).toDateString()}
        </p>
        <p className="mb-4 line-clamp-2 min-h-14 leading-7">{post?.excerpt}</p>
      </Link>

      <div>{post.tags?.map((tag) => <Tag key={tag._id} name={tag?.name} slug={tag?.slug} />)}</div>
    </div>
  );
};

export default BlogCard;
