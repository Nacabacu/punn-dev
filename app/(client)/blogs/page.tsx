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
    <>
      <div className='flex flex-col items-center'>
        <Header title='Blogs' />
        <div className='space-y-6 2xl:mx-96 xl:mx-64 lg:mx-48 md:mx-32 sm:mx-16 mx-8'>
          {postList?.length > 0 &&
            postList?.map((post) => (
              <PostItem key={post.slug.current} post={post} />
            ))}
        </div>
      </div>
    </>
  );
}

export default BlogPage;