import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    category: z.string(),
    excerpt: z.string(),
    pubDate: z.date(),
    author: z.string(),
    image: z.string(),
    slug: z.string().optional(),
    updatedDate: z.date().optional(),
  }),
});

export const collections = {
  blog: blogCollection,
};
