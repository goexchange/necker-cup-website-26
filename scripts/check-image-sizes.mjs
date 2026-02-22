import fs from 'fs';
import path from 'path';

const dirs = ['public/images', 'public/sponsors', 'src/app/logos'];
let totalSize = 0;
const files = [];

for (const dir of dirs) {
  const fullDir = path.resolve(dir);
  if (!fs.existsSync(fullDir)) continue;
  for (const file of fs.readdirSync(fullDir)) {
    const filePath = path.join(fullDir, file);
    const stat = fs.statSync(filePath);
    if (stat.isFile()) {
      files.push({ path: `${dir}/${file}`, size: stat.size });
      totalSize += stat.size;
    }
  }
}

files.sort((a, b) => b.size - a.size);

console.log('=== Image File Sizes (sorted largest first) ===\n');
for (const f of files) {
  const kb = (f.size / 1024).toFixed(0);
  const mb = (f.size / (1024 * 1024)).toFixed(2);
  const display = f.size > 1024 * 1024 ? `${mb} MB` : `${kb} KB`;
  console.log(`${display.padStart(10)}  ${f.path}`);
}

console.log(`\n=== Total: ${(totalSize / (1024 * 1024)).toFixed(2)} MB across ${files.length} files ===`);
console.log(`=== Average: ${(totalSize / files.length / 1024).toFixed(0)} KB per file ===`);
