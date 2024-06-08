import { NextResponse } from 'next/server';
import RSS from 'rss';
import { BLOG_URL, WEBSITE_URL } from '@/const';
import { getAllPost } from '@/lib/sanity';

export async function GET() {
  const feedOptions: RSS.FeedOptions = {
    title: 'Punn.dev',
    description: 'Punn\'s programming blogs',
    site_url: WEBSITE_URL,
    feed_url: `${WEBSITE_URL}/rss.xml`,
    image_url: `${WEBSITE_URL}/default-og.png`,
    pubDate: new Date(),
    copyright: `All rights reserved ${new Date().getFullYear()}`,
  };

  const feed = new RSS(feedOptions);
  const allPosts = await getAllPost();

  // Add each individual post to the feed.
  allPosts.map((post) => {
    feed.item({
      title: post.title,
      guid: `${WEBSITE_URL}${BLOG_URL}/${post.slug.current}`,
      url: `${WEBSITE_URL}${BLOG_URL}/${post.slug.current}`,
      description: post.excerpt,
      date: post.publishedAt,
      categories: post.tags.map((tag) => tag.name),
    });
  });


  return new NextResponse(feed.xml(), {
    headers: {
      'Content-Type': 'application/rss+xml',
    },
  });
}