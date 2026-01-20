# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm dev          # Start development server
pnpm build        # Production build
pnpm preview      # Preview production build
pnpm check        # Astro type checking
pnpm lint         # Run ESLint
pnpm lint:fix     # Run ESLint with auto-fix
pnpm format       # Format with Prettier
pnpm format:check # Check formatting
```

## Architecture

This is an Astro 5 website for the Cursor Italy meetup community, using content collections with Zod schemas.

### Content System

Events, sponsors, and about pages are stored as markdown files in `src/content/`:

- **Events**: `src/content/events/{date-slug}/index.md` - Each event is a folder containing `index.md` with YAML frontmatter
- **Sponsors**: `src/content/sponsors/{name}.md`
- **About**: `src/content/about/{page}.md` (description, founder, code-of-conduct)

Content schemas are defined in `src/content/config.ts` using Zod.

### Key Technologies

- **Astro 5**: Static site generator with zero JS by default
- **React Islands**: Interactive components like Header use `client:load`
- **Content Collections**: Type-safe content with Zod schemas
- **Tailwind CSS**: Utility-first styling
- **Lucide React**: Icon library

### Path Aliases

```typescript
@/*           → ./src/*
@/components/* → ./src/components/*
@/lib/*       → ./src/lib/*
@/layouts/*   → ./src/layouts/*
```

### Project Structure

```
src/
├── components/
│   ├── Header.tsx          # React island (client:load)
│   ├── Hero.astro
│   ├── Footer.astro
│   ├── EventCard.astro
│   ├── SponsorGrid.astro
│   └── ui/                 # Button, Card, LoadingSpinner
├── content/
│   ├── config.ts           # Zod schemas
│   ├── events/
│   ├── sponsors/
│   └── about/
├── layouts/
│   └── BaseLayout.astro
├── lib/
│   ├── config.ts
│   ├── types.ts
│   └── utils.ts
├── pages/
│   ├── index.astro
│   ├── about.astro
│   ├── contact.astro
│   ├── code-of-conduct.astro
│   ├── founder.astro
│   ├── 404.astro
│   ├── 500.astro
│   └── events/
│       ├── index.astro
│       └── [...slug].astro  # Handles [slug] and [slug]/live
└── styles/
    └── globals.css
```

## Content Guidelines

### Adding an Event

Create `src/content/events/YYYY-MM-DD-cursor-meetup/index.md`:

```yaml
---
title: 'Event Title'
date: 'YYYY-MM-DD'
startTime: '18:30'
endTime: '21:00'
timezone: 'CET'
location: 'Venue Name, Address, City'
locationUrl: 'https://maps.app.goo.gl/...'
description: 'Brief description'
image: '/images/events/YYYY-MM-DD-cursor-meetup/banner.jpg'
eventDetailImage: '/images/events/YYYY-MM-DD-cursor-meetup/banner.jpg'
published: true
speakers:
  - name: 'Speaker Name'
    topic: 'Talk Title'
    bio: 'Speaker bio'
---

Event content in markdown...
```

Place event images in `public/images/events/YYYY-MM-DD-cursor-meetup/`.

## Design System

- **Colors**: Milano-inspired gradient (teal → blue → pink), primary blue (#007ACC)
- **Typography**: Inter font family via @fontsource/inter
- **Icons**: Lucide React
- **Styling**: Tailwind CSS with mobile-first responsive design

## Commit Messages

Use gitmoji when writing git commit messages.
