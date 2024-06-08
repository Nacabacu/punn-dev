import { Image } from 'sanity';

export interface Post {
  title: string;
  slug: Slug;
  publishedAt: string;
  excerpt: string;
  body: any;
  tags: Tag[];
  _id: string;
}

export interface Slug {
  current: string;
}

export interface Tag {
  name: string;
  slug: Slug;
  _id: string;
}

export interface TagCount extends Tag {
  postCount: number;
}

export interface Project {
  name: string;
  description: string;
  url: string;
  githubUrl: string;
  image: string;
  tags: Tag[];
}
