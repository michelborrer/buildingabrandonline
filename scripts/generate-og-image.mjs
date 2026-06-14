import sharp from 'sharp';
import { mkdir } from 'node:fs/promises';

await mkdir('public/images', { recursive: true });

const svg = `<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#4361EE"/>
      <stop offset="100%" style="stop-color:#3A0CA3"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#g)"/>
  <text x="600" y="290" font-family="Arial,sans-serif" font-size="56" font-weight="700" fill="white" text-anchor="middle">Building a Brand Online</text>
  <text x="600" y="370" font-family="Arial,sans-serif" font-size="32" fill="rgba(255,255,255,0.9)" text-anchor="middle">Digital Marketing Education</text>
</svg>`;

await sharp(Buffer.from(svg))
  .jpeg({ quality: 90 })
  .toFile('public/images/og-default.jpg');

console.log('Created public/images/og-default.jpg');
