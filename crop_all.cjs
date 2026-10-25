const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const uploadedDir = 'C:/Users/Kashif/.gemini/antigravity/brain/15c4e5ec-c1e8-4e0a-bde4-231ad7ca3d17/.user_uploaded';
const outDir = 'c:/MERN/INA Kids Salon/public/images';

async function cropAllAuthenticImages() {
  // 1. Official INA Logo - crop tight circle
  // in media_1792922433391_4b054e52.png:
  // circle is around x: 31, y: 53, diameter: 158
  await sharp(path.join(uploadedDir, 'media_1792922433391_4b054e52.png'))
    .extract({ left: 32, top: 52, width: 160, height: 160 })
    .toFile(path.join(outDir, 'ina-logo-circle.png'));
  console.log('Saved logo');

  // 2. High-res hairstyles from mobile screenshot (460 x 1024)
  // Columns:
  // Col 1: left 0, width 151
  // Col 2: left 154, width 152
  // Col 3: left 308, width 152
  // Row 1: top 432, height 198
  // Row 2: top 633, height 198
  // Row 3: top 833, height 188
  const mobileImg = path.join(uploadedDir, 'media_1792913594909_0a73cb31.png');

  // Hero main image: Girl with gorgeous curved cornrows & pink top (Row 1, Col 1)
  await sharp(mobileImg)
    .extract({ left: 1, top: 432, width: 151, height: 198 })
    .resize(600, 786, { fit: 'cover' })
    .toFile(path.join(outDir, 'hero-ina-child.png'));

  // Card: Beaded braids two sisters (Row 1, Col 2)
  await sharp(mobileImg)
    .extract({ left: 154, top: 432, width: 152, height: 198 })
    .resize(600, 786, { fit: 'cover' })
    .toFile(path.join(outDir, 'style-beaded-sisters.png'));

  // Card: Signature cornrows pose (Row 2, Col 3) - Girl pointing at cheeks with intricate cornrows
  await sharp(mobileImg)
    .extract({ left: 308, top: 633, width: 151, height: 198 })
    .resize(600, 786, { fit: 'cover' })
    .toFile(path.join(outDir, 'style-cornrows-pose.png'));

  // Card: Two sisters smiling (Row 2, Col 1)
  await sharp(mobileImg)
    .extract({ left: 1, top: 633, width: 151, height: 198 })
    .resize(600, 786, { fit: 'cover' })
    .toFile(path.join(outDir, 'style-sisters-smile.png'));

  // Card: Salon First Date (Row 2, Col 2) - Baby girl waving with mom
  await sharp(mobileImg)
    .extract({ left: 154, top: 633, width: 152, height: 198 })
    .resize(600, 786, { fit: 'cover' })
    .toFile(path.join(outDir, 'style-first-date.png'));

  // Card: Stylist styling child at INA Salon (Row 3, Col 2)
  await sharp(mobileImg)
    .extract({ left: 154, top: 833, width: 152, height: 188 })
    .resize(600, 742, { fit: 'cover' })
    .toFile(path.join(outDir, 'salon-styling-ina.png'));

  // Card: Girl posing in orange/pink top in salon (Row 3, Col 1)
  await sharp(mobileImg)
    .extract({ left: 1, top: 833, width: 151, height: 188 })
    .resize(600, 742, { fit: 'cover' })
    .toFile(path.join(outDir, 'salon-client-happy.png'));

  // Now from Desktop screenshots:
  // Desktop 1 (media_1792922433391_4b054e52.png):
  // Col 1: Stylist in orange shirt doing girl's hair in chair
  await sharp(path.join(uploadedDir, 'media_1792922433391_4b054e52.png'))
    .extract({ left: 32, top: 271, width: 148, height: 196 })
    .resize(600, 794, { fit: 'cover' })
    .toFile(path.join(outDir, 'salon-chair-styling.png'));

  // Col 3: Beautiful curved cornrows back view with pink bows (Row 1, Col 3)
  await sharp(path.join(uploadedDir, 'media_1792922433391_4b054e52.png'))
    .extract({ left: 361, top: 271, width: 148, height: 196 })
    .resize(600, 794, { fit: 'cover' })
    .toFile(path.join(outDir, 'style-cornrows-bows.png'));

  // Desktop 2 (media_1792922453759_81f3e62c.png):
  // Notice in desktop 2, the left navigation is ~134px wide.
  // Video cards:
  // Row 1 (y: 215 to 411? or y: 215 to 415)
  // Let's find video cards in desktop 2:
  // Looking at screenshot 2:
  // Row A: top 215, height 195:
  // Cards are:
  // Col 1: x: 136, Col 2: x: 278, Col 3: x: 421, Col 4: x: 563, Col 5: x: 706, Col 6: x: 848 (width ~ 130)
  // Let's check card 3: Blue braids back view!
  await sharp(path.join(uploadedDir, 'media_1792922453759_81f3e62c.png'))
    .extract({ left: 421, top: 218, width: 130, height: 195 })
    .resize(600, 900, { fit: 'cover' })
    .toFile(path.join(outDir, 'style-blue-braids.png'));

  // Card 4: Girl posing with blue braids in salon
  await sharp(path.join(uploadedDir, 'media_1792922453759_81f3e62c.png'))
    .extract({ left: 563, top: 218, width: 130, height: 195 })
    .resize(600, 900, { fit: 'cover' })
    .toFile(path.join(outDir, 'style-blue-braids-pose.png'));

  // Card 5: Stylist with child in salon
  await sharp(path.join(uploadedDir, 'media_1792922453759_81f3e62c.png'))
    .extract({ left: 706, top: 218, width: 130, height: 195 })
    .resize(600, 900, { fit: 'cover' })
    .toFile(path.join(outDir, 'salon-team-ina.png'));

  // Row B in desktop 2 (y: 434 to 629):
  // Col 1 (x: 136): Heart cornrows with beads
  await sharp(path.join(uploadedDir, 'media_1792922453759_81f3e62c.png'))
    .extract({ left: 136, top: 434, width: 130, height: 125 })
    .resize(600, 600, { fit: 'cover' })
    .toFile(path.join(outDir, 'style-heart-cornrows.png'));

  // Col 4 (x: 563): Purple box braids / twist child
  await sharp(path.join(uploadedDir, 'media_1792922453759_81f3e62c.png'))
    .extract({ left: 563, top: 434, width: 130, height: 125 })
    .resize(600, 600, { fit: 'cover' })
    .toFile(path.join(outDir, 'style-purple-twists.png'));

  // Desktop 3 (media_1792922474645_8c0cc523.png):
  // Let's crop:
  // Row 2, Col 1: Curved zig-zag cornrows on child (x: 136, top: 434)
  await sharp(path.join(uploadedDir, 'media_1792922474645_8c0cc523.png'))
    .extract({ left: 136, top: 430, width: 130, height: 125 })
    .resize(600, 600, { fit: 'cover' })
    .toFile(path.join(outDir, 'style-zigzag-cornrows.png'));

  // Row 2, Col 4: Top knot bun with sleek curved cornrows
  await sharp(path.join(uploadedDir, 'media_1792922474645_8c0cc523.png'))
    .extract({ left: 706, top: 430, width: 130, height: 125 })
    .resize(600, 600, { fit: 'cover' })
    .toFile(path.join(outDir, 'style-topknot-cornrows.png'));

  // Row 2, Col 5: Double space buns with pink flowers & beads
  await sharp(path.join(uploadedDir, 'media_1792922474645_8c0cc523.png'))
    .extract({ left: 848, top: 430, width: 130, height: 125 })
    .resize(600, 600, { fit: 'cover' })
    .toFile(path.join(outDir, 'style-double-buns.png'));

  // Desktop 4 (media_1792922497482_07a746d0.png):
  // High ponytail cornrows (bottom row, col 5 & 6)
  await sharp(path.join(uploadedDir, 'media_1792922497482_07a746d0.png'))
    .extract({ left: 706, top: 430, width: 130, height: 125 })
    .resize(600, 600, { fit: 'cover' })
    .toFile(path.join(outDir, 'style-high-ponytail.png'));

  // Toddler in pink fleece jacket smiling (row 1, col 5)
  await sharp(path.join(uploadedDir, 'media_1792922497482_07a746d0.png'))
    .extract({ left: 706, top: 122, width: 130, height: 195 })
    .resize(600, 900, { fit: 'cover' })
    .toFile(path.join(outDir, 'style-toddler-cute.png'));

  // Child with pink afro puffs (row 2, col 2)
  await sharp(path.join(uploadedDir, 'media_1792922497482_07a746d0.png'))
    .extract({ left: 278, top: 430, width: 130, height: 125 })
    .resize(600, 600, { fit: 'cover' })
    .toFile(path.join(outDir, 'style-pink-puffs.png'));

  console.log('All authentic client images extracted successfully!');
}

cropAllAuthenticImages().catch(console.error);
