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
    <div className='space-y-6'>
      <Header title={`#${params.slug}`} />
      {postList?.length > 0 &&
        postList?.map((post) => (
          <PostItem key={post.slug.current} post={post} />
        ))}
    </div>
  );
};

export default TagPage;
