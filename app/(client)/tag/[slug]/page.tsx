import Header from '@/components/header';
import { getPostsByTag } from '@/lib/sanity';
import { TAG_URL } from '@/const';
import PostItem from '@/components/postItem';

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
    <div className='flex flex-col items-center'>
      <Header title={`#${params.slug}`} />
      <div className='space-y-6 2xl:mx-96 xl:mx-64 lg:mx-48 md:mx-32 sm:mx-16 mx-8'>
        {postList?.length > 0 &&
          postList?.map((post) => (
            <PostItem key={post.slug.current} post={post} />
          ))}
      </div>
    </div>
  )
};

export default TagPage;