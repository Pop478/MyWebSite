import { defineCollection } from 'astro:content'
import { glob } from 'astro/loaders'
import { z } from 'astro/zod'

const blog = defineCollection({
    loader: glob({
        base: './src/content/blog',
        pattern: '**/*.md',
    }),
    schema: z.object({
        title: z.string(),
        description: z.string(),
        pubDate: z.coerce.date(),
        tags: z.array(z.string()).default([]),
        draft: z.boolean().default(false),
    }),
})

const projects = defineCollection({
    loader: glob({
        base: './src/content/projects',
        pattern: '**/*.md',
    }),
    schema: z.object({
        title: z.string(),
        description: z.string(),
        category: z.enum([
            'IT',
            'Engineering',
            'Metalworking',
            '3D printing',
            'Other',
        ]),
        status: z
            .enum(['completed', 'in-progress', 'concept'])
            .default('completed'),
        pubDate: z.coerce.date(),
        technologies: z.array(z.string()).default([]),
        featured: z.boolean().default(false),
        draft: z.boolean().default(false),
        externalUrl: z.string().url().optional(),
        repositoryUrl: z.string().url().optional(),
    }),
})

export const collections = { blog, projects }
