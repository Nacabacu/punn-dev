import { BLOG_URL } from '@/const';
import { Post } from '@/types/sanity';
import Link from 'next/link';
import Tag from './tagButton';

interface BlogCardProps {
  post: Post;
}

const BlogCard = ({ post }: BlogCardProps) => {
  return (
    <div className="flex flex-col rounded-md p-4 shadow-md transition-all hover:shadow-xl dark:shadow-lg dark:hover:shadow-2xl">
      <Link href={`${BLOG_URL}/${post?.slug?.current}`}>
        <h2 className={'line-clamp-2 text-xl'}>{post?.title}</h2>
        <p className={'my-1 text-sm text-primary dark:text-primaryDark'}>
          {new Date(post?.publishedAt).toDateString()}
        </p>
        <p className="line-clamp-2 min-h-14 leading-7">{post?.excerpt}</p>
      </Link>

      <div className={post.tags && 'mt-3'}>
        {post.tags?.map((tag) => <Tag key={tag._id} name={tag?.name} slug={tag?.slug} />)}
      </div>
    </div>
  );
};

export default BlogCard;
