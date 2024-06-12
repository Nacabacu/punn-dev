/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unknown-property */
import { getPost } from '@/lib/sanity';
import { ImageResponse } from 'next/og';

export async function GET(_request: Request, { params }: { params: { slug: string } }) {
  const { slug } = params;
  const post = await getPost(slug);

  if (!post) {
    return new Response('Error: post not found', {
      status: 404,
    });
  }

  const { ogTitle, title, tags } = post;

  return new ImageResponse(
    (
      <div
        tw="flex flex-col h-full w-full justify-between bg-[#c9d1d1]"
      >
        <div tw="p-8 text-5xl text-[#0070f3]">Punn.dev</div>
        <div
          style={{
            backgroundImage: 'linear-gradient(90deg, #0070f3, #003575)',
            backgroundClip: 'text',
            color: 'transparent',
          }}
          tw="flex justify-center text-center mx-8 text-6xl leading-[90px]
        "
        >
          {ogTitle ?? title}
        </div>
        {tags && (
          <div tw="p-8 ml-auto flex">
            {tags.map((tag, index) => (
              <div
                key={index}
                tw="mr-4 rounded-xl border-2 border-[#0070f3] p-2 text-4xl lowercase"
              >
                {`#${tag.name}`}
              </div>
            ))}
          </div>
        )}
      </div>
    ),
    {
      width: 1200,
      height: 630,
    },
  );
}
