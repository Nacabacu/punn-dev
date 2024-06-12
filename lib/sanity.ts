import { client } from '@/sanity/lib/client';
import { Post, Project, TagCount } from '@/types/sanity';

export const getAllPost = async (): Promise<Post[]> => {
  const query = `
  *[_type == 'post'] | order(publishedAt desc) {
    title,
    slug,
    publishedAt,
    excerpt,
    tags[]-> {
      _id,
      slug,
      name
    }
  }
  `;

  const data = await client.fetch<Post[]>(query);
  return data;
};

export const getPost = async (slug: string): Promise<Post> => {
  const query = `
  *[_type == 'post' && slug.current == '${slug}'][0] {
    title,
    ogTitle,
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
};

export const getAllTags = async (): Promise<TagCount[]> => {
  const query = `
  *[_type == 'tag' && count(*[_type == 'post' && references('tags', ^._id)]) > 0] {
    name,
    slug,
    _id,
    'postCount': count(*[_type == 'post' && references('tags', ^._id)])
  }
  `;

  const tags = client.fetch<TagCount[]>(query);
  return tags;
};

export const getPostsByTag = async (tag: string): Promise<Post[]> => {
  const query = `
  *[_type == 'post' && references(*[_type == 'tag' && slug.current == '${tag}']._id)]{
    title,
    slug,
    publishedAt,
    excerpt,
    tags[]-> {
      _id,
      slug,
      name
    }
  }
  `;

  const posts = await client.fetch<Post[]>(query);
  return posts;
};

export const getAllProjects = async (): Promise<Project[]> => {
  const query = `
  *[_type == 'project'] {
    name,
    description,
    url,
    githubUrl,
    'image': image.asset->url,
    tags[]-> {
      _id,
      slug,
      name
    }
  }
  `;

  const data = await client.fetch<Project[]>(query);
  return data;
};
