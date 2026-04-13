import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const posts = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './posts' }),
  schema: ({ image }) => z.object({
    id: z.number(),
    title: z.string(),
    slug: z.string(),
    author: z.string(),
    image: image().optional(),
  }),
});

export const collections = { posts };
