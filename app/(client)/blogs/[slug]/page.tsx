import { Metadata } from 'next';
import Image from 'next/image';
import {
  PortableText,
  PortableTextComponentProps,
  PortableTextReactComponents,
} from 'next-sanity';
import { Image as SanityImage } from 'sanity';
import { CodeInputValue } from '@sanity/code-input';

import { Post } from '@/types/sanity';
import { urlForImage } from '@/sanity/lib/image';
import Header from '@/components/header';
import TagButton from '@/components/tagButton';
import { BLOGS_URL } from '@/const';
import { getPost } from '@/lib/sanity';
import CodeHighlighter from '@/components/codeHighlighter';

import NotFound from '../not-found';

interface Params {
  params: {
    slug: string;
  };
}

export async function generateMetadata({
  params,
}: Params): Promise<Metadata | undefined> {
  const post: Post = await getPost(params?.slug);
  if (!post) {
    return;
  }

  const metadata: Metadata = {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      locale: 'en_US',
      url: `https://punn.dev${BLOGS_URL}/${params.slug}`,
      siteName: 'Punn.dev',
    },
  };

  const image = post?.body?.find((b: any) => b._type === 'image');
  if (image) {
    if (!metadata.openGraph) {
      metadata.openGraph = {};
    }

    metadata.openGraph.images = [
      {
        url: urlForImage(image),
        width: 1200,
        height: 630,
      },
    ];
  }

  return metadata;
}

export const revalidate = 60;

const BlogPage = async ({ params }: Params) => {
  const post: Post = await getPost(params?.slug);

  if (!post) {
    return NotFound();
  }

  return (
    <div className="flex flex-col items-center">
      <Header title={post?.title} />
      <div className="text-center max-w-full">
        <span className={'text-primary dark:text-primaryDark'}>
          {new Date(post?.publishedAt).toDateString()}
        </span>
        <div className="mt-5">
          {post?.tags?.map((tag) => (
            <TagButton key={tag?._id} name={tag?.name} slug={tag?.slug} />
          ))}
        </div>
        <div className="mt-8 text-start prose prose-stone dark:prose-invert max-w-none 2xl:mx-96 xl:mx-64 lg:mx-48 md:mx-32 sm:mx-18 mx-10">
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
  marks: {
    strong: ({ children }) => <strong>{children}</strong>,
    em: ({ children }) => <em>{children}</em>,
    underline: ({ children }) => <u>{children}</u>,
    'strike-through': ({ children }) => <s>{children}</s>,
    code: ({ children }) => <span className='p-1 bg-gray-400 dark:bg-gray-700 rounded-sm'>{children}</span>,
    link: ({ children, value }) => (
      <a href={value.href} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    ),
  },
  block: {
    h1: ({ children }) => <h1>{children}</h1>,
    h2: ({ children }) => <h2>{children}</h2>,
    h3: ({ children }) => <h3>{children}</h3>,
    h4: ({ children }) => <h4>{children}</h4>,
    h5: ({ children }) => <h5>{children}</h5>,
    h6: ({ children }) => <h6>{children}</h6>,
    normal: ({ children }) => <p>{children}</p>
  },
};

export default BlogPage;