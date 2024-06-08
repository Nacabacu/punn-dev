import { Metadata } from 'next';
import Image from 'next/image';
import { PortableText, PortableTextComponentProps, PortableTextReactComponents } from 'next-sanity';
import { Image as SanityImage } from 'sanity';
import { CodeInputValue } from '@sanity/code-input';

import { Post } from '@/types/sanity';
import { urlForImage } from '@/sanity/lib/image';
import Header from '@/components/header';
import TagButton from '@/components/tagButton';
import { BLOG_URL, DEFAULT_OG_IMAGE, WEBSITE_URL } from '@/const';
import { getPost } from '@/lib/sanity';
import CodeHighlighter from '@/components/codeHighlighter';

import NotFound from '../not-found';

interface Params {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: Params): Promise<Metadata | undefined> {
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
      url: `${WEBSITE_URL}${BLOG_URL}/${params.slug}`,
      siteName: 'Punn.dev',
    },
  };

  if (!metadata.openGraph) {
    metadata.openGraph = {};
  }

  metadata.openGraph.images = [
    {
      url: post.ogImage ? urlForImage(post.ogImage) : DEFAULT_OG_IMAGE,
      width: 1200,
      height: 630,
    },
  ];

  return metadata;
}

export const revalidate = 60;

const BlogPage = async ({ params }: Params) => {
  const post = await getPost(params?.slug);

  if (!post) {
    return NotFound();
  }

  return (
    <>
      <Header title={post?.title} />
      <div className={'text-center text-primary dark:text-primaryDark'}>
        {new Date(post?.publishedAt).toDateString()}
      </div>
      <div className="mb-8 mt-4 text-center">
        {post?.tags?.map((tag) => <TagButton key={tag?._id} name={tag?.name} slug={tag?.slug} />)}
      </div>
      <div className="prose prose-stone w-full text-start dark:prose-invert prose-p:text-lg prose-p:leading-8 prose-blockquote:text-lg prose-blockquote:leading-8 prose-li:text-lg prose-li:leading-8">
        <PortableText value={post?.body} components={myPortableTextComponents} />
      </div>
    </>
  );
};

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
      const { language = '', code = '', filename } = value;
      return <CodeHighlighter code={code} language={language} filename={filename} />;
    },
  },
  marks: {
    code: ({ children }) => (
      <span className="rounded-sm bg-gray p-1 dark:bg-grayDark">{children}</span>
    ),
    link: ({ children, value }) => (
      <a href={value.href} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    ),
  },
  block: {
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-primary p-4 dark:border-primaryDark">
        {children}
      </blockquote>
    ),
  },
};

export default BlogPage;
