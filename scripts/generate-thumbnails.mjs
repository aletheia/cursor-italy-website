#!/usr/bin/env node
/**
 * Generates thumbnails for event gallery images.
 * Reads from public/images/events/<slug>/*.jpg|png|webp and writes
 * resized images to public/images/events/<slug>/thumb/
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');
const eventsDir = path.join(root, 'public', 'images', 'events');

const THUMB_MAX_WIDTH = 400;
const THUMB_QUALITY = 85;
const EXTENSIONS = ['.jpg', '.jpeg', '.png', '.webp'];

async function generateThumbnails() {
  let sharp;
  try {
    sharp = (await import('sharp')).default;
  } catch {
    console.warn('Run: pnpm add -D sharp');
    process.exit(1);
  }

  if (!fs.existsSync(eventsDir)) {
    console.log('No public/images/events folder, skipping thumbnails.');
    return;
  }

  const slugs = fs.readdirSync(eventsDir, { withFileTypes: true })
    .filter((d) => d.isDirectory() && !d.name.startsWith('.'))
    .map((d) => d.name);

  for (const slug of slugs) {
    const dir = path.join(eventsDir, slug);
    const thumbDir = path.join(dir, 'thumb');
    const files = fs.readdirSync(dir)
      .filter((f) => EXTENSIONS.some((ext) => f.toLowerCase().endsWith(ext)) && !f.startsWith('.'));

    if (files.length === 0) continue;

    if (!fs.existsSync(thumbDir)) {
      fs.mkdirSync(thumbDir, { recursive: true });
    }

    for (const file of files) {
      const srcPath = path.join(dir, file);
      const destPath = path.join(thumbDir, file);
      const stat = fs.statSync(srcPath);
      if (stat.isDirectory()) continue;

      try {
        let pipeline = sharp(srcPath).resize(THUMB_MAX_WIDTH, null, {
          withoutEnlargement: true,
        });
        const ext = path.extname(file).toLowerCase();
        if (ext === '.jpg' || ext === '.jpeg') {
          pipeline = pipeline.jpeg({ quality: THUMB_QUALITY });
        } else if (ext === '.png') {
          pipeline = pipeline.png();
        } else if (ext === '.webp') {
          pipeline = pipeline.webp({ quality: THUMB_QUALITY });
        }
        await pipeline.toFile(destPath);
        console.log('  thumb:', path.relative(root, destPath));
      } catch (e) {
        console.error('  skip', file, e.message);
      }
    }
  }

  console.log('Thumbnails done.');
}

generateThumbnails().catch((err) => {
  console.error(err);
  process.exit(1);
});
