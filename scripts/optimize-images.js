import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const IMAGE_DIR = path.resolve('public/images');
const MAX_WIDTH = 1200;       // Max width for general images
const THUMB_MAX = 600;        // Max width for portrait/thumbnail images (talent grids, etc.)
const JPEG_QUALITY = 80;      // Visually indistinguishable from 100 but much smaller

// Talent/portrait images that only appear at small sizes (grid thumbnails)
const THUMBNAIL_PATTERNS = [
  'borg', 'rafa', 'kim', 'novak', 'bouchard', 'vasek', 'seanpaul',
  'johnmcenroe', 'jewel', 'tommyhaas', 'donaldyoung', 'martina',
  'bradgilbert', 'mikebryan', 'kennychesney', 'samburns', 'carolinewozniacki',
  'redfoo', 'rodlaver', 'floridageorgialine', 'jamiefoxx', 'kateupton',
  'chevychase', 'mattkuchar', 'gregnorman', 'tommyfleetwood',
  'brysondechambeau', 'jimmybuffett', 'kevinanderson', 'borisbecker',
  'juandelpotro', 'stefanedberg', 'nickkyrgios', 'dominicthiem',
  'andreabocelli', 'dariusrucker', 'grigordimitrov', 'pitbull',
  'kevincostner', 'nickfaldo', 'kennyperforming', 'bransonwinning',
  'bransonfun',
];

function isThumbnail(filename) {
  const base = path.basename(filename, path.extname(filename)).toLowerCase();
  return THUMBNAIL_PATTERNS.some(p => base === p || base.startsWith('activity-'));
}

async function optimizeImage(filePath) {
  const filename = path.basename(filePath);
  const ext = path.extname(filePath).toLowerCase();
  
  if (ext !== '.jpg' && ext !== '.jpeg' && ext !== '.png') return;

  try {
    const originalSize = fs.statSync(filePath).size;
    const metadata = await sharp(filePath).metadata();
    const maxW = isThumbnail(filename) ? THUMB_MAX : MAX_WIDTH;

    let pipeline = sharp(filePath);

    // Only resize if wider than our max
    if (metadata.width && metadata.width > maxW) {
      pipeline = pipeline.resize(maxW, null, { withoutEnlargement: true });
    }

    // Re-encode as optimized JPEG
    pipeline = pipeline.jpeg({ quality: JPEG_QUALITY, mozjpeg: true });

    const outputBuffer = await pipeline.toBuffer();
    const newSize = outputBuffer.length;
    const savings = ((1 - newSize / originalSize) * 100).toFixed(1);

    if (newSize < originalSize) {
      fs.writeFileSync(filePath, outputBuffer);
      console.log(
        `  ${filename}: ${(originalSize/1024).toFixed(0)}KB -> ${(newSize/1024).toFixed(0)}KB (${savings}% smaller, ${metadata.width}px -> ${Math.min(metadata.width, maxW)}px)`
      );
      return { original: originalSize, optimized: newSize };
    } else {
      console.log(`  ${filename}: already optimal (${(originalSize/1024).toFixed(0)}KB)`);
      return { original: originalSize, optimized: originalSize };
    }
  } catch (err) {
    console.error(`  ERROR: ${filename}: ${err.message}`);
    return { original: 0, optimized: 0 };
  }
}

async function main() {
  console.log('Optimizing images in public/images/...\n');
  
  const files = fs.readdirSync(IMAGE_DIR)
    .filter(f => /\.(jpg|jpeg|png)$/i.test(f))
    .map(f => path.join(IMAGE_DIR, f));

  console.log(`Found ${files.length} images to process.\n`);

  let totalOriginal = 0;
  let totalOptimized = 0;

  for (const file of files) {
    const result = await optimizeImage(file);
    totalOriginal += result.original;
    totalOptimized += result.optimized;
  }

  console.log(`\n=== Summary ===`);
  console.log(`Total original:  ${(totalOriginal / (1024*1024)).toFixed(2)} MB`);
  console.log(`Total optimized: ${(totalOptimized / (1024*1024)).toFixed(2)} MB`);
  console.log(`Savings:         ${((1 - totalOptimized/totalOriginal) * 100).toFixed(1)}%`);
}

main();
