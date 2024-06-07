import Link from 'next/link';
import { Post } from '@/types/sanity';
import Tag from './tagButton';
import { BLOGS_URL } from '../const';

interface BlogCardProps {
  post: Post;
}

const BlogCard = ({ post }: BlogCardProps) => {
  return (
    <div
      className="flex flex-col p-4 rounded-md shadow-md
       transition-all hover:bg-secondary hover:text-white
       dark:hover:bg-backgroundDark dark:shadow-lg dark:hover:shadow-2xl"
    >
      <Link href={`${BLOGS_URL}/${post?.slug?.current}`}>
        <h2 className={'text-2xl line-clamp-2 min-h-16'}>{post?.title}</h2>
        <p className={'text-sm my-1 text-primary dark:text-primaryDark'}>
          {new Date(post?.publishedAt).toDateString()}
        </p>
        <p className="leading-7 mb-4 line-clamp-2 min-h-14">{post?.excerpt}</p>
      </Link>

      <div>
        {post.tags?.map((tag) => (
          <Tag key={tag._id} name={tag?.name} slug={tag?.slug} />
        ))}
      </div>
    </div>
  );
};

export default BlogCard;
