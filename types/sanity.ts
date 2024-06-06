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
