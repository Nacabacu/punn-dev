import { MetadataRoute } from 'next';
import { WEBSITE_URL } from '@/const';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/studio',
    },
    sitemap: `${WEBSITE_URL}/sitemap.xml`,
  };
}
