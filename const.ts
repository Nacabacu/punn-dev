export const HOME_URL = '/';
export const BLOG_URL = '/blog';
export const BLOGS_URL = '/blogs';
export const TAG_URL = '/tag';
export const PROJECTS_URL = '/projects';
export const WEBSITE_URL =
  process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : 'https://punn.dev';
export const DEFAULT_OG_IMAGE = `${WEBSITE_URL}/default-og.png`;
