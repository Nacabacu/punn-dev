import BlogCard from '@/components/blogCard';
import Header from '@/components/header';
import { getAllPost } from '@/lib/sanity';
import { Metadata } from 'next';

export const revalidate = 60;

export const metadata: Metadata = {
  title: 'Blogs',
};

const BlogPage = async () => {
  const postList = await getAllPost();

  return (
    <>
      <Header title="Blogs" />
      <div className="flex w-full flex-col gap-4">
        {postList?.map((post) => <BlogCard key={post.slug.current} post={post} />)}
      </div>
    </>
  );
};

export default BlogPage;
