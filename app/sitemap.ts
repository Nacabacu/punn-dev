import { MetadataRoute } from 'next';
import { Post, TagCount } from '@/types/sanity';
import { TAG_URL, BLOGS_URL, PROJECTS_URL } from '@/const';
import { getAllTags, getPosts } from '@/lib/sanity';

export default async function sitemap():Promise<MetadataRoute.Sitemap> {
  const posts: Post[] = await getPosts();
  const tags: TagCount[] = await getAllTags();

  const postUrls = posts.map((post) => ({
    url: `https://punn.dev${BLOGS_URL}/${post.slug.current}`,
    lastModified: new Date(post.publishedAt),
  }))

  const tagUrls = tags.map((tag) => ({
    url: `https://punn.dev${TAG_URL}/${tag.slug.current}`,
    lastModified: new Date(),
  }))

  return [
    {
      url: 'https://punn.dev/',
      lastModified: new Date(),
      priority: 1,
    },
    {
      url: `https://punn.dev${BLOGS_URL}`,
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: `https://punn.dev${PROJECTS_URL}`,
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: `https://punn.dev${TAG_URL}`,
      lastModified: new Date(),
      priority: 0.8,
    },
    ...postUrls,
    ...tagUrls
  ]
}