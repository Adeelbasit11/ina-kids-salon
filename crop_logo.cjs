const sharp = require('sharp');

async function run() {
  const input = 'C:/Users/Kashif/.gemini/antigravity/brain/15c4e5ec-c1e8-4e0a-bde4-231ad7ca3d17/.user_uploaded/media_1792913594909_0a73cb31.png';
  
  // Just extract the raw unmasked bounding box first
  await sharp(input)
    .extract({ left: 320, top: 116, width: 128, height: 128 })
    .png()
    .toFile('test_logo_raw.png');

  console.log('Saved raw');
}
run();
