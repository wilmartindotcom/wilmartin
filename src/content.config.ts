import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const posts = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/posts' }),
  schema: z.object({
    title: z.string().optional(),
    date: z.date(),
    emoji: z.string().default('💬'),
    type: z.enum(['short', 'long']).default('short'),
    tags: z.array(z.string()).optional(),
  }),
});

export const collections = { posts };