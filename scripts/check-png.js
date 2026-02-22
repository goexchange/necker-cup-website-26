import fs from 'fs';

const file = 'public/images/nclogo.png';
const buf = fs.readFileSync(file);

// PNG magic bytes: 89 50 4E 47
const isPNG = buf[0] === 0x89 && buf[1] === 0x50 && buf[2] === 0x4E && buf[3] === 0x47;
// JPEG magic bytes: FF D8 FF
const isJPEG = buf[0] === 0xFF && buf[1] === 0xD8 && buf[2] === 0xFF;

console.log(`File: ${file}`);
console.log(`Size: ${buf.length} bytes`);
console.log(`First 4 bytes: ${buf[0].toString(16)} ${buf[1].toString(16)} ${buf[2].toString(16)} ${buf[3].toString(16)}`);
console.log(`Is PNG: ${isPNG}`);
console.log(`Is JPEG: ${isJPEG}`);

// Also check premier-live-logo.png
const file2 = 'public/images/premier-live-logo.png';
const buf2 = fs.readFileSync(file2);
const isPNG2 = buf2[0] === 0x89 && buf2[1] === 0x50 && buf2[2] === 0x4E && buf2[3] === 0x47;
const isJPEG2 = buf2[0] === 0xFF && buf2[1] === 0xD8 && buf2[2] === 0xFF;
console.log(`\nFile: ${file2}`);
console.log(`Size: ${buf2.length} bytes`);
console.log(`Is PNG: ${isPNG2}`);
console.log(`Is JPEG: ${isJPEG2}`);
