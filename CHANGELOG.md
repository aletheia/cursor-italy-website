# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.0] - 2026-01-20

### Changed

- **Complete migration from Next.js to Astro 5** - Rebuilt the entire site using Astro's static site generator for improved performance and simpler architecture
- Converted React components to Astro components (EventCard, Footer, Hero, SponsorGrid, Button, Card, LoadingSpinner)
- Moved content collections to `src/content/` with Zod schemas for type-safe content
- Replaced Next.js App Router with Astro pages
- Updated Tailwind configuration for Astro compatibility

### Added

- Astro content collections with Zod validation for events, sponsors, and about pages
- BaseLayout component for consistent page structure
- CLAUDE.md with project guidelines and development instructions
- Live stream pages for events (`/events/[slug]/live`)

### Retained

- Header.tsx as a React island with `client:load` for interactive navigation
- Milano-inspired gradient design system
- All existing event and sponsor content

## [0.3.0] - 2026-01-20

### Added

- Cursor Meetup Milano #3 event for January 20, 2026
- Banner images for all events
- Live streaming pages with YouTube embed support

### Fixed

- Event detail image paths to use available banner images
- React Server Components CVE vulnerabilities

### Changed

- Updated live stream YouTube video configuration
