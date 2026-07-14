import { defineCollection, z } from 'astro:content';

const blogs = defineCollection({
  type: 'content',
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
  type: 'content',
  schema: z.object({
    title: z.string(),
    pubDate: z.date(),
    tags: z.array(z.string()).default([]),
    sheet: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

const techNotes = defineCollection({
  type: 'content',
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
    blogs: blogs,
    journal,
    'tech-notes': techNotes
};