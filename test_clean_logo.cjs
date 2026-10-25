const sharp = require('sharp');

async function testTransparentLogo() {
  const input = 'C:/Users/Kashif/.gemini/antigravity/brain/15c4e5ec-c1e8-4e0a-bde4-231ad7ca3d17/.user_uploaded/media_1792913594909_0a73cb31.png';
  
  // The pink circle in screenshot:
  // minX: 323, maxX: 444 (center X = 383.5, diameter = 122)
  // minY: 119, maxY: 241 (center Y = 180, diameter = 123)
  // Let's take diameter = 122, left = 323, top = 119.
  
  const size = 122;
  const left = 323;
  const top = 119;
  
  // Antialiased circle mask (pure white circle with smooth edge, transparent outside)
  const maskSvg = Buffer.from(`
    <svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" xmlns="http://www.w3.org/2000/svg">
      <circle cx="${size / 2}" cy="${size / 2}" r="${(size / 2) - 0.5}" fill="#ffffff" />
    </svg>
  `);

  await sharp(input)
    .extract({ left, top, width: size, height: size })
    .composite([{ input: maskSvg, blend: 'dest-in' }])
    .png()
    .toFile('test_logo_clean.png');

  console.log('Done creating test_logo_clean.png');
}

testTransparentLogo();
