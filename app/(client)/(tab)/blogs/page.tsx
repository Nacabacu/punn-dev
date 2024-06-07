import { Metadata } from 'next';
import Header from '@/components/header';
import PostItem from '@/components/postItem';
import { getPosts } from '@/lib/sanity';

export const revalidate = 60;

export const metadata: Metadata = {
  title: 'Blogs',
};

const BlogPage = async () => {
  const postList = await getPosts();

  return (
    <div className='space-y-6'>
      <Header title='All Blogs' />
      {postList?.length > 0 &&
        postList?.map((post) => (
          <PostItem key={post.slug.current} post={post} />
        ))}
    </div>
  );
};

export default BlogPage;
