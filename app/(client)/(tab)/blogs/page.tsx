import { Metadata } from 'next';
import Header from '@/components/header';
import BlogCard from '@/components/blogCard';
import { getAllPost } from '@/lib/sanity';

export const revalidate = 60;

export const metadata: Metadata = {
  title: 'Blogs',
};

const BlogPage = async () => {
  const postList = await getAllPost();

  return (
    <>
      <Header title='All Posts' />
      <div className='w-full grid md:grid-cols-2 grid-cols-1 gap-4'>
        {postList?.map((post) => (
          <BlogCard key={post.slug.current} post={post} />
        ))}
      </div>
    </>
  );
};

export default BlogPage;
