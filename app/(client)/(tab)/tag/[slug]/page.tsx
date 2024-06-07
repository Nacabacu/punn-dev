import Header from '@/components/header';
import { getPostsByTag } from '@/lib/sanity';
import { TAG_URL } from '@/const';
import BlogCard from '@/components/blogCard';

interface Params {
  params: {
    slug: string;
  };
}

export const revalidate = 60;

export async function generateMetadata({ params }: Params) {
  return {
    title: `#${params.slug}`,
    description: `Posts with the tag ${params.slug}`,
    openGraph: {
      title: `#${params.slug}`,
      description: `Posts with the tag ${params.slug}`,
      type: 'website',
      locale: 'en_US',
      url: `https://punn.dev${TAG_URL}/${params.slug}`,
      siteName: 'Punn.dev',
    },
  };
}

const TagPage = async ({ params }: Params) => {
  const postList = await getPostsByTag(params.slug);

  return (
    <>
      <Header title={`#${params.slug}`} />
      <div className='w-full grid md:grid-cols-2 grid-cols-1 gap-4'>
        {postList?.map((post) => (
          <BlogCard key={post.slug.current} post={post} />
        ))}
      </div>
    </>
  );
};

export default TagPage;
