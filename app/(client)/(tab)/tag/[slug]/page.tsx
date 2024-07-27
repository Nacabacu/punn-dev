import BlogCard from '@/components/blogCard';
import Header from '@/components/header';
import { DEFAULT_OG_IMAGE, TAG_URL, WEBSITE_URL } from '@/const';
import { getPostsByTag } from '@/lib/sanity';
import NotFound from './not-found';

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
      url: `${WEBSITE_URL}${TAG_URL}/${params.slug}`,
      siteName: 'Punn.dev',
      images: {
        url: DEFAULT_OG_IMAGE,
        width: 1200,
        height: 630,
        type: 'image/png',
      },
    },
  };
}

const TagPage = async ({ params }: Params) => {
  const postList = await getPostsByTag(params.slug);

  if (!postList || postList.length === 0) {
    return NotFound();
  }

  return (
    <>
      <Header title={`#${params.slug}`} />
      <div className="flex w-full flex-col gap-4">
        {postList?.map((post) => <BlogCard key={post.slug.current} post={post} />)}
      </div>
    </>
  );
};

export default TagPage;
