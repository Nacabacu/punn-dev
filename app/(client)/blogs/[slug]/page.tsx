import Image from 'next/image';
import { PortableText, PortableTextReactComponents } from 'next-sanity';

import { slugify } from '@/utils/slugify';
import { Post } from '@/types/sanity';
import { client } from '@/sanity/lib/client';
import { urlForImage } from '@/sanity/lib/image';
import Header from '@/components/header';
import Tag from '@/components/tag';

import NotFound from './not-found';

interface Params {
  params: {
    slug: string;
  };
}

async function getPost(slug: string,): Promise<Post> {
  const query = `
  *[_type == 'post' && slug.current == '${slug}'][0] {
    title,
    slug,
    publishedAt,
    excerpt,
    _id,
    body,
    tags[]-> {
      _id,
      slug,
      name
    }
  }
  `;
  const data = await client.fetch<Post>(query);

  return data;
}

export const revalidate = 60;

export default async function BlogPage({ params }: Params) {
  const post: Post = await getPost(params?.slug);

  if (!post) {
    return NotFound();
  }

  return (
    <div>
      <Header title={post?.title} />
      <div className='text-center'>
        <span className={'text-primary dark:text-primaryDark'}>
          {new Date(post?.publishedAt).toDateString()}
        </span>
        <div className='mt-5'>
          {post?.tags?.map((tag) => (
            <Tag key={tag?._id} name={tag?.name} slug={tag?.slug} />
          ))}
        </div>
        <div className={richTextStyles}>
          <PortableText
            value={post?.body}
            components={myPortableTextComponents}
          />
        </div>
      </div>
    </div>
  );
}

const myPortableTextComponents: Partial<PortableTextReactComponents> = {
  types: {
    image: ({ value }: any) => (
      <Image
        src={urlForImage(value)}
        alt='Post'
        width={700}
        height={700}
      />
    ),
  },
  block: {
    h1: ({ value }: any) => (
      <h1
        id={slugify(value.children[0].text)}
        className='text-4xl font-bold mb-3'
      >
        {value.children[0].text}
      </h1>
    ),
    h2: ({ value }: any) => (
      <h2
        id={slugify(value.children[0].text)}
        className='text-3xl font-bold mb-3'
      >
        {value.children[0].text}
      </h2>
    ),
    h3: ({ value }: any) => (
      <h3
        id={slugify(value.children[0].text)}
        className='text-2xl font-bold mb-3'
      >
        {value.children[0].text}
      </h3>
    ),
    h4: ({ value }: any) => (
      <h4
        id={slugify(value.children[0].text)}
        className='text-2xl font-bold mb-3'
      >
        {value.children[0].text}
        </h4>
    ),
    h5: ({ value }: any) => (
      <h5
        id={slugify(value.children[0].text)}
        className='text-xl font-bold mb-3'
      >
        {value.children[0].text}
      </h5>
    ),
    h6: ({ value }: any) => (
      <h6
        id={slugify(value.children[0].text)}
        className='text-lg font-bold mb-3'
      >
        {value.children[0].text}
      </h6>
    ),
    strong: ({ value }: any) => (
      <h6
        id={slugify(value.children[0].text)}
        className='text-lg font-bold mb-3'
      >
        {value.children[0].text}
      </h6>
    ),
  },
};

const richTextStyles = `
mt-8
text-justify
2xl:mx-60 xl:mx-48 lg:mx-32 md:mx-24 sm:mx-16 mx-8
m-auto
prose-headings:my-5
prose-heading:text-2xl
prose-p:mb-5
prose-p:leading-7
prose-li:list-disc
prose-li:leading-7
prose-li:ml-4
`;