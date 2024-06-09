/* eslint-disable react/no-unknown-property */
import { ImageResponse } from 'next/og';
import { getPost } from '@/lib/sanity';

export async function GET(_request: Request, { params }: { params: { slug: string } }) {
  const { slug } = params;
  const post = await getPost(slug);

  if (!post) {
    return new Response('Error: post not found', {
      status: 404,
    });
  }

  const { title, tags } = post;

  return new ImageResponse(
    (
      <div
        style={{ fontFamily: 'fantasy' }}
        tw="flex flex-col h-full w-full justify-between bg-[#c9d1d1]"
      >
        <div tw="p-8 ml-auto text-6xl font-bold text-[#0070f3]">Punn.dev</div>
        <div tw="flex justify-center mx-8 text-6xl leading-[120px]">{title}</div>
        {tags && (
          <div tw="p-8 flex">
            {tags.map((tag, index) => (
              <div
                key={index}
                tw="mr-4 rounded-lg border-4 border-[#0070f3] p-2 text-4xl lowercase"
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
