import { defineCollection, z } from 'astro:content'
const algorithms = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    timeComplexity: z.string().optional(),
    spaceComplexity: z.string().optional(),
    category: z.enum(['sorting', 'searching', 'graph']),
  }),
})

export const collections = { algorithms }
