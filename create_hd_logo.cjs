const sharp = require('sharp');

async function createHDLogo() {
  const input = 'C:/Users/Kashif/.gemini/antigravity/brain/15c4e5ec-c1e8-4e0a-bde4-231ad7ca3d17/.user_uploaded/media_1792913594909_0a73cb31.png';
  
  const size = 122;
  const left = 323;
  const top = 119;
  
  // Antialiased circle mask (pure white circle with smooth edge, transparent outside)
  const maskSvg = Buffer.from(`
    <svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" xmlns="http://www.w3.org/2000/svg">
      <circle cx="${size / 2}" cy="${size / 2}" r="${(size / 2) - 0.5}" fill="#ffffff" />
    </svg>
  `);

  const rawCrop = await sharp(input)
    .extract({ left, top, width: size, height: size })
    .composite([{ input: maskSvg, blend: 'dest-in' }])
    .png()
    .toBuffer();

  // Upscale to 244x244 with lanczos3 and subtle sharpening for Retina screens
  await sharp(rawCrop)
    .resize(244, 244, {
      kernel: sharp.kernel.lanczos3
    })
    .sharpen({ sigma: 1.0, m1: 1.2, m2: 0.5 })
    .png()
    .toFile('public/images/ina-logo-circle.png');

  console.log('Successfully saved to public/images/ina-logo-circle.png');
}

createHDLogo();
