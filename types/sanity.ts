export interface Post {
  title: string;
  ogTitle?: string;
  slug: Slug;
  publishedAt: string;
  excerpt: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  body: any;
  tags?: Tag[];
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

export interface MermaidDiagramProps {
  _type: string;
  diagram: string;
}
