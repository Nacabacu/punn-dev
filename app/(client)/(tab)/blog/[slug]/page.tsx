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
  const proseBaseStyle = 'prose prose-stone dark:prose-invert';
  const prosePreStyle = 'prose-pre:bg-grayCode';
  const prosePTagStyle =
    'prose-p:text-md prose-p:leading-7 sm:prose-p:text-lg sm:prose-p:leading-8';
  const proseBlockquoteStyle =
    'prose-blockquote:text-md prose-blockquote:leading-7 sm:prose-blockquote:text-lg sm:prose-blockquote:leading-8';
  const proseLiStyle =
    'prose-li:text-md prose-li:leading-7 sm:prose-li:text-lg sm:prose-li:leading-8';
  const proseH4Style = 'prose-h4:text-lg prose-h4:leading-9';
  const portableTextStyle = `w-full text-start ${prosePreStyle} ${proseBaseStyle} ${prosePTagStyle} ${proseBlockquoteStyle} ${proseLiStyle} ${proseH4Style}`;
  const publishedDate = new Date(post?.publishedAt);

  if (!post) {
    return NotFound();
  }

  return (
    <>
      <Header title={post?.title} />
      <time
        dateTime={publishedDate.toISOString()}
        className={'text-center text-primary dark:text-primaryDark'}
      >
        {publishedDate.toDateString()}
      </time>
      <div className="mb-8 mt-4 text-center">
        {post?.tags?.map((tag) => <TagButton key={tag?._id} name={tag?.name} slug={tag?.slug} />)}
      </div>
      <article className={portableTextStyle}>
        <PortableText value={post?.body} components={myPortableTextComponents} />
      </article>
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
      <span className="rounded-sm py-0.5 px-1 bg-grayCode text-grayProse">{children}</span>
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
