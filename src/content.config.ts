
import { defineCollection, z } from "astro:content";

const issues = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      date: z.coerce.date(),
      description: z.string(),
      issueNumber: z.number(),
      heroImage: image().optional(),
      tags: z.array(z.string()).default([]),
    }),
});

export const collections = { issues };
