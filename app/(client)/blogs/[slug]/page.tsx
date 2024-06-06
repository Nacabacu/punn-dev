import Image from 'next/image';
import {
  PortableText,
  PortableTextBlock,
  PortableTextComponentProps,
  PortableTextReactComponents,
} from 'next-sanity';
import { Image as SanityImage } from 'sanity';

import { Post } from '@/types/sanity';
import { client } from '@/sanity/lib/client';
import { urlForImage } from '@/sanity/lib/image';
import Header from '@/components/header';
import Tag from '@/components/tag';
import { CodeInputValue } from '@sanity/code-input';
import CodeHighlighter from '@/components/codeHighlighter';

import NotFound from './not-found';

interface Params {
  params: {
    slug: string;
  };
}

async function getPost(slug: string): Promise<Post> {
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

const BlogPage = async ({ params }: Params) => {
  const post: Post = await getPost(params?.slug);

  if (!post) {
    return NotFound();
  }

  return (
    <div>
      <Header title={post?.title} />
      <div className="text-center">
        <span className={'text-primary dark:text-primaryDark'}>
          {new Date(post?.publishedAt).toDateString()}
        </span>
        <div className="mt-5">
          {post?.tags?.map((tag) => (
            <Tag key={tag?._id} name={tag?.name} slug={tag?.slug} />
          ))}
        </div>
        <div className="mt-8 text-start 2xl:mx-60 xl:mx-48 lg:mx-32 md:mx-24 sm:mx-16 mx-8">
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
    image: ({ value }: PortableTextComponentProps<SanityImage>) => (
      <Image
        src={urlForImage(value)}
        alt={value.alt as string}
        height={300}
        width={300}
        className="m-auto"
      />
    ),
    code: ({ value }: PortableTextComponentProps<CodeInputValue>) => {
      const { language = '' , code = '' } = value;
      return (
        <CodeHighlighter code={code} language={language} />
      );
    },
  },
  block: {
    h1: ({ value }: PortableTextComponentProps<PortableTextBlock>) => (
      <h1 className="text-4xl font-bold mb-3">{value.children[0].text}</h1>
    ),
    h2: ({ value }: PortableTextComponentProps<PortableTextBlock>) => (
      <h2 className="text-3xl font-bold mb-3">{value.children[0].text}</h2>
    ),
    h3: ({ value }: PortableTextComponentProps<PortableTextBlock>) => (
      <h3 className="text-2xl font-bold mb-3">{value.children[0].text}</h3>
    ),
    h4: ({ value }: PortableTextComponentProps<PortableTextBlock>) => (
      <h4 className="text-2xl font-bold mb-3">{value.children[0].text}</h4>
    ),
    h5: ({ value }: PortableTextComponentProps<PortableTextBlock>) => (
      <h5 className="text-xl font-bold mb-3">{value.children[0].text}</h5>
    ),
    h6: ({ value }: PortableTextComponentProps<PortableTextBlock>) => (
      <h6 className="text-lg font-bold mb-3">{value.children[0].text}</h6>
    ),
    normal: ({ value }: PortableTextComponentProps<PortableTextBlock>) => (
      <p className="text-base leading-7 mb-5">{value.children[0].text}</p>
    ),
    strong: ({ value }: PortableTextComponentProps<PortableTextBlock>) => (
      <p className="text-base leading-7 font-extrabold mb-5">
        {value.children[0].text}
      </p>
    ),
  },
};
// prose-headings:my-5
// prose-heading:text-2xl
// prose-p:mb-5
// prose-p:leading-7
// prose-li:list-disc
// prose-li:leading-7
// prose-li:ml-4

export default BlogPage;