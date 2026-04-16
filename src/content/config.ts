import { defineCollection, z } from 'astro:content';

const articles = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.string(),
    date: z.string(),
    image: z.string().optional(),
    schema_type: z.string().default('Article'),
  }),
});

export const collections = { articles };