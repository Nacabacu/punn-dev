import { defineField, defineType } from 'sanity';

export const post = defineType({
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required().error('A title is required.'),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required().error('A slug is required.'),
    }),
    defineField({
      name: 'ogImage',
      title: 'OG Image',
      type: 'image',
      validation: (Rule) =>
        Rule.custom((image) => {
          if (!image || !image?.asset?._ref) return true;

          const decodedAsset = decodeAssetId(image?.asset?._ref);

          if (!decodedAsset) {
            return true;
          }

          const { dimensions } = decodedAsset;
          const { width, height } = dimensions;

          if (width < 1200 || height < 630) {
            return 'Image must be at least 1200x630 pixels';
          }

          return true; // No errors
        }),
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'tag' } }],
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    }),
    defineField({
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      validation: (Rule) => Rule.max(200).error('Excerpt must be less than 200 characters.'),
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      publishedAt: 'publishedAt',
    },
    prepare({ title, publishedAt }) {
      return {
        title,
        subtitle: new Date(publishedAt).toLocaleDateString(),
      };
    },
  },
});

const pattern = /^image-([a-f\d]+)-(\d+x\d+)-(\w+)$/;

const decodeAssetId = (id: string) => {
  const result = pattern.exec(id);
  if (result) {
    const [, assetId, dimensions, format] = result;
    const [width, height] = dimensions.split('x').map((v) => parseInt(v, 10));

    return {
      assetId,
      dimensions: { width, height },
      format,
    };
  }
  return null;
};
