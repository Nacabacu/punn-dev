import { BLOGS_URL, BLOG_URL, PROJECTS_URL, TAG_URL, WEBSITE_URL } from '@/const';
import { getAllPost, getAllTags } from '@/lib/sanity';
import { Post, TagCount } from '@/types/sanity';
import { MetadataRoute } from 'next';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts: Post[] = await getAllPost();
  const tags: TagCount[] = await getAllTags();

  const postUrls = posts.map((post) => ({
    url: `${WEBSITE_URL}${BLOG_URL}/${post.slug.current}`,
    lastModified: new Date(post.publishedAt),
  }));

  const tagUrls = tags.map((tag) => ({
    url: `${WEBSITE_URL}${TAG_URL}/${tag.slug.current}`,
    lastModified: new Date(),
  }));

  return [
    {
      url: WEBSITE_URL,
      lastModified: new Date(),
      priority: 1,
    },
    {
      url: `${WEBSITE_URL}${BLOGS_URL}`,
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: `${WEBSITE_URL}${PROJECTS_URL}`,
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: `${WEBSITE_URL}${TAG_URL}`,
      lastModified: new Date(),
      priority: 0.8,
    },
    ...postUrls,
    ...tagUrls,
  ];
}
