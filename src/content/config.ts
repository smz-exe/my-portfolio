import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  schema: () =>
    z.object({
      title: z.string(),
      description: z.string().optional(),
      publishedAt: z.coerce.date(),
      updatedAt: z.coerce.date().optional(),
      tags: z.array(z.string()).default([]),
      state: z.enum(['draft', 'published', 'archived']).default('draft'),
    }),
});

export const collections = { blog };
