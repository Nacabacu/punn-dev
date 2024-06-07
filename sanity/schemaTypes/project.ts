import { defineType } from 'sanity'

export const project = defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Project Name',
      type: 'string',
      validation: (Rule) => Rule.required().error('A project name is required.'),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: [
        (Rule) => Rule.max(200).error('Description must be less than 200 characters.'),
        (Rule) => Rule.required().error('Description is required.')
      ],
    },
    {
      name: 'url',
      title: 'URL',
      type: 'url',
      validation: (Rule) => Rule.required().error('A URL is required.'),
    },
    {
      name: 'githubUrl',
      title: 'GitHub URL',
      type: 'url',
      validation: (Rule) => Rule.required().error('A GitHub URL is required.'),
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      validation: (Rule) => Rule.required().error('An image is required.'),
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'tag' }],
        },
      ],
    },
  ],
});
