# Event Folder Structure

This folder contains all assets for the Cursor Meetup Milano #3 event on January 20, 2026.

## Structure

```
2026-01-20-cursor-meetup/
├── index.md          # Main event content and metadata
├── images/           # Event-specific images
│   ├── banner@1220x250.jpg
│   ├── banner@1920x1080.jpg
│   ├── speaker-photos/
│   └── event-photos/
└── README.md         # This file
```

## Adding Images

1. Place event banner images in the `images/` folder
2. Use `./images/filename.jpg` in the `index.md` file
3. For speaker photos, create a `speaker-photos/` subfolder
4. For event photos, create an `event-photos/` subfolder

## Naming Convention

- Event banner (for event lists): `banner@1220x250.jpg` (1220x250 - 4.88:1 aspect ratio)
- Event detail banner: `banner@1920x1080.jpg` (1920x1080 - 16:9 aspect ratio)
- Speaker photos: `speaker-name.jpg`
- Event photos: `event-YYYY-MM-DD-XX.jpg`

## Usage

The `index.md` file contains the event metadata and content. Images referenced in the markdown should be placed in the `images/` folder.

## Speakers

- **Alex Casalboni** (unleash.io) - Designing for Failure and Speed in Agentic AI Workflows
- **TBA** - Office Hours with Cursor team
