import { CodeInputValue } from '@sanity/code-input';
import { Metadata } from 'next';
import { PortableText, PortableTextComponentProps, PortableTextReactComponents } from 'next-sanity';
import Image from 'next/image';
import { Image as SanityImage } from 'sanity';

import CodeHighlighter from '@/components/codeHighlighter';
import Header from '@/components/header';
import TagButton from '@/components/tagButton';
import { BLOG_URL, WEBSITE_URL } from '@/const';
import { getPost } from '@/lib/sanity';
import { urlForImage } from '@/sanity/lib/image';
import { MermaidDiagramProps, Post } from '@/types/sanity';

import MermaidRenderer from '@/components/mermaidRenderer';
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
      images: {
        url: `${WEBSITE_URL}/api/og/${params.slug}`,
        width: 1200,
        height: 630,
      },
    },
  };

  return metadata;
}

export const revalidate = 60;

const BlogPage = async ({ params }: Params) => {
  const post = await getPost(params?.slug);
  const proseBaseStyle = 'prose prose-stone  dark:prose-invert';
  const prosePTagStyle =
    'prose-p:text-md prose-p:leading-7 sm:prose-p:text-lg sm:prose-p:leading-8';
  const proseBlockquoteStyle =
    'prose-blockquote:text-md prose-blockquote:leading-7 sm:prose-blockquote:text-lg sm:prose-blockquote:leading-8';
  const proseLiStyle =
    'prose-li:text-md prose-li:leading-7 sm:prose-li:text-lg sm:prose-li:leading-8';
  const portableTextStyle = `w-full text-start ${proseBaseStyle} ${prosePTagStyle} ${proseBlockquoteStyle} ${proseLiStyle}`;

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
      <div className={portableTextStyle}>
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
    mermaidDiagram: ({ value }: PortableTextComponentProps<MermaidDiagramProps>) => (
      <MermaidRenderer diagram={value.diagram} />
    ),
  },
  marks: {
    code: ({ children }) => (
      <span className="rounded-sm bg-gray p-0.5 dark:bg-grayDark">{children}</span>
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
