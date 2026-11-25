import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(), slug: z.string(), language: z.enum(['sl', 'en']), description: z.string(), seoTitle: z.string().optional(), seoDescription: z.string().optional(), primaryKeyword: z.string(), secondaryKeywords: z.array(z.string()).default([]), publicationDate: z.coerce.date(), updatedDate: z.coerce.date().optional(), author: z.string(), featuredImage: z.string().optional(), imageAlt: z.string().optional(), category: z.string(), draft: z.boolean().default(true), translationId: z.string(), faq: z.array(z.object({ question: z.string(), answer: z.string() })).optional()
  })
});

export const collections = { blog };
