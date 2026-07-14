import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blogs = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blogs' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    tags: z.array(z.string()).default([]),
    sheet: z.string().optional(), // e.g. "BLOG-014"
    draft: z.boolean().default(false),
  }),
});

const journal = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/journal' }),
  schema: z.object({
    title: z.string(),
    pubDate: z.date(),
    tags: z.array(z.string()).default([]),
    sheet: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

const techNotes = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/tech-notes' }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    pubDate: z.date(),
    topic: z.string(), // e.g. "Kubernetes", "System Design"
    tags: z.array(z.string()).default([]),
    sheet: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = {
  blogs,
  journal,
  'tech-notes': techNotes,
};
