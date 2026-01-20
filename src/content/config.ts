import { defineCollection, z } from 'astro:content';

const speakerSchema = z.object({
  name: z.string(),
  topic: z.string(),
  company: z.string().optional(),
  bio: z.string().optional(),
  image: z.string().optional(),
  social: z
    .object({
      twitter: z.string().optional(),
      linkedin: z.string().optional(),
      github: z.string().optional(),
    })
    .optional(),
});

const events = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.string(),
    startTime: z.string(),
    endTime: z.string().optional(),
    timezone: z.string().optional(),
    location: z.string(),
    locationUrl: z.string().optional(),
    description: z.string(),
    image: z.string().optional(),
    eventDetailImage: z.string().optional(),
    speakers: z.array(speakerSchema).optional().default([]),
    tags: z.array(z.string()).optional().default([]),
    registrationUrl: z.string().optional(),
    attendees: z.number().optional(),
    maxAttendees: z.number().optional(),
    published: z.boolean().optional().default(true),
  }),
});

const sponsors = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    tier: z.enum(['main', 'platinum', 'gold', 'silver', 'bronze', 'community']),
    logo: z.string(),
    website: z.string(),
    description: z.string(),
    featured: z.boolean().optional().default(false),
    order: z.number().optional().default(999),
  }),
});

const about = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    lastUpdated: z.string().optional(),
    version: z.string().optional(),
  }),
});

export const collections = {
  events,
  sponsors,
  about,
};
