const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const uploadedDir = 'C:/Users/Kashif/.gemini/antigravity/brain/15c4e5ec-c1e8-4e0a-bde4-231ad7ca3d17/.user_uploaded';
const outDir = 'c:/MERN/INA Kids Salon/public/images';

if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

async function extractAssets() {
  // 1. Extract Logo from media_1792922433391_4b054e52.png
  // The logo is the pink circle on the left
  await sharp(path.join(uploadedDir, 'media_1792922433391_4b054e52.png'))
    .extract({ left: 32, top: 30, width: 158, height: 158 })
    .toFile(path.join(outDir, 'ina-logo.png'));
  console.log('Extracted logo');

  // Let's determine video card coordinates in media_1792922433391_4b054e52.png:
  // Row 1 of videos starts around y: 270.
  // There are 6 columns. Total width is 1024.
  // Let's extract columns across width:
  // Card width ~ 148, gap ~ 16
  // Card height ~ 198 (approx 3:4 aspect)
  const img1 = path.join(uploadedDir, 'media_1792922433391_4b054e52.png');
  
  // Row 1 cards: y: 271 to 468 (height ~198)
  // Col 1: left 32, width 148
  // Col 2: left 196, width 148
  // Col 3: left 360, width 148
  // Col 4: left 526, width 148
  // Col 5: left 690, width 148
  // Col 6: left 854, width 148

  const cols = [32, 196, 361, 526, 690, 854];
  const cardW = 148;
  const cardH = 196;

  // Row 1 from img1
  for (let i = 0; i < 6; i++) {
    await sharp(img1)
      .extract({ left: cols[i], top: 271, width: cardW, height: cardH })
      .toFile(path.join(outDir, `crop_row1_${i + 1}.png`));
  }
  console.log('Extracted row 1');

  // Now from media_1792922453759_81f3e62c.png
  // Row 2 is near top: y: 124 to 320
  // Row 3 is: y: 342 to 538
  const img2 = path.join(uploadedDir, 'media_1792922453759_81f3e62c.png');
  const cols2 = [136, 280, 424, 568, 712, 856]; // Let's check sidebar width on desktop view 2
  // Note: in img2, there is left sidebar with "TikTok", "For You", "Explore", etc.
  // Let's inspect the cards in img2!
}

extractAssets().catch(console.error);
