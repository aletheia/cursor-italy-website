const fs = require('fs');
const path = require('path');

const contentEventsDir = path.join(process.cwd(), 'content', 'events');
const publicEventsDir = path.join(process.cwd(), 'public', 'images', 'events');

function copyEventImages() {
  console.log('📸 Copying event images from content to public...');

  // Ensure public events directory exists
  if (!fs.existsSync(publicEventsDir)) {
    fs.mkdirSync(publicEventsDir, { recursive: true });
  }

  // Read all event directories in content
  const eventDirs = fs
    .readdirSync(contentEventsDir, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name);

  eventDirs.forEach(eventDir => {
    const contentEventDir = path.join(contentEventsDir, eventDir);
    const publicEventDir = path.join(publicEventsDir, eventDir);

    // Create public event directory if it doesn't exist
    if (!fs.existsSync(publicEventDir)) {
      fs.mkdirSync(publicEventDir, { recursive: true });
    }

    // Check if images directory exists in content
    const contentImagesDir = path.join(contentEventDir, 'images');
    if (fs.existsSync(contentImagesDir)) {
      copyDirectoryRecursive(contentImagesDir, publicEventDir);
      console.log(`✅ Copied images for event: ${eventDir}`);
    } else {
      console.log(`⚠️  No images directory found for event: ${eventDir}`);
    }
  });

  console.log('🎉 Event images copy completed!');
}

function copyDirectoryRecursive(src, dest) {
  // Create destination directory if it doesn't exist
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }

  // Read source directory
  const items = fs.readdirSync(src);

  items.forEach(item => {
    const srcPath = path.join(src, item);
    const destPath = path.join(dest, item);

    const stat = fs.statSync(srcPath);

    if (stat.isDirectory()) {
      // Recursively copy subdirectories
      copyDirectoryRecursive(srcPath, destPath);
    } else {
      // Copy file
      fs.copyFileSync(srcPath, destPath);
    }
  });
}

// Run the script
copyEventImages();
