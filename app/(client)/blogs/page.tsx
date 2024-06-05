import { client } from '@/sanity/lib/client';
import { Metadata } from 'next';
import Header from '@/components/header';
import { Post } from '@/types/sanity';
import PostItem from '@/components/postItem';

async function getPosts(): Promise<Post[]> {
  const query = `
  *[_type == "post"] {
    title,
    slug,
    publishedAt,
    excerpt,
    tags[]-> {
      _id,
      slug,
      name
    }
  }
  `;
  const data = await client.fetch<Post[]>(query);

  return data;
}

export const revalidate = 60;

export const metadata: Metadata = {
  title: 'Punn | Blogs',
};

export default async function BlogPage() {
  const postList = await getPosts();

  return (
    <>
      <div className="flex flex-col items-center mb-8">
        <Header title="Blogs" />
        <div className="space-y-6 2xl:mx-96 xl:mx-64 lg:mx-48 md:mx-32 sm:mx-16 mx-8">
          {postList?.length > 0 &&
            postList?.map((post) => (
              <PostItem key={post.slug.current} post={post} />
            ))}
        </div>
      </div>
    </>
  );
}
