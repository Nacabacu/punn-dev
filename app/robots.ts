import { WEBSITE_URL } from '@/const';
import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: ['/', '/api/og/*'],
      disallow: '/studio',
    },
    sitemap: `${WEBSITE_URL}/sitemap.xml`,
  };
}
