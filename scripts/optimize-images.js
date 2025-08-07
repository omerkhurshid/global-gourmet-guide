const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// Define optimization settings
const OPTIMIZATION_SETTINGS = {
  jpeg: {
    quality: 85,
    progressive: true,
    mozjpeg: true
  },
  webp: {
    quality: 85,
    effort: 6
  },
  png: {
    compressionLevel: 9,
    adaptiveFiltering: true
  }
};

// Target sizes for responsive images
const RESPONSIVE_SIZES = {
  hero: [
    { width: 1920, suffix: '-xl' },
    { width: 1280, suffix: '-lg' },
    { width: 768, suffix: '-md' },
    { width: 480, suffix: '-sm' }
  ],
  spotlight: [
    { width: 800, suffix: '-lg' },
    { width: 600, suffix: '-md' },
    { width: 400, suffix: '-sm' }
  ]
};

async function optimizeImage(inputPath, outputDir, baseName, type = 'hero') {
  const stats = fs.statSync(inputPath);
  const originalSize = stats.size;
  
  console.log(`\n🖼️  Processing: ${baseName}`);
  console.log(`📏 Original size: ${(originalSize / 1024 / 1024).toFixed(2)}MB`);
  
  const sizes = RESPONSIVE_SIZES[type] || RESPONSIVE_SIZES.hero;
  let totalSaved = 0;
  
  for (const size of sizes) {
    const outputName = `${baseName}${size.suffix}`;
    
    // Create WebP version (best compression)
    const webpPath = path.join(outputDir, `${outputName}.webp`);
    await sharp(inputPath)
      .resize(size.width, null, { 
        withoutEnlargement: true,
        fit: 'inside'
      })
      .webp(OPTIMIZATION_SETTINGS.webp)
      .toFile(webpPath);
    
    // Create optimized JPEG fallback
    const jpegPath = path.join(outputDir, `${outputName}.jpg`);
    await sharp(inputPath)
      .resize(size.width, null, { 
        withoutEnlargement: true,
        fit: 'inside'
      })
      .jpeg(OPTIMIZATION_SETTINGS.jpeg)
      .toFile(jpegPath);
    
    const webpSize = fs.statSync(webpPath).size;
    const jpegSize = fs.statSync(jpegPath).size;
    
    totalSaved += (originalSize - Math.min(webpSize, jpegSize));
    
    console.log(`  ✅ ${size.width}w: WebP ${(webpSize/1024).toFixed(0)}KB, JPEG ${(jpegSize/1024).toFixed(0)}KB`);
  }
  
  console.log(`💾 Total saved: ${(totalSaved / 1024 / 1024).toFixed(2)}MB`);
  return totalSaved;
}

async function processDirectory(dirPath, type = 'hero') {
  const files = fs.readdirSync(dirPath);
  let totalSavings = 0;
  
  for (const file of files) {
    const filePath = path.join(dirPath, file);
    const ext = path.extname(file).toLowerCase();
    
    if (['.jpg', '.jpeg', '.png'].includes(ext)) {
      const baseName = path.basename(file, ext);
      const outputDir = path.join(dirPath, 'optimized');
      
      // Create output directory
      if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
      }
      
      const saved = await optimizeImage(filePath, outputDir, baseName, type);
      totalSavings += saved;
    }
  }
  
  return totalSavings;
}

async function main() {
  console.log('🚀 Starting image optimization...\n');
  
  const publicDir = path.join(__dirname, '..', 'public', 'images');
  let grandTotal = 0;
  
  // Process city hero images
  const citiesDir = path.join(publicDir, 'cities');
  if (fs.existsSync(citiesDir)) {
    console.log('📍 Processing city hero images...');
    const cityTotal = await processDirectory(citiesDir, 'hero');
    grandTotal += cityTotal;
  }
  
  // Process spotlight images
  const spotlightDir = path.join(publicDir, 'spotlight');
  if (fs.existsSync(spotlightDir)) {
    console.log('\n✨ Processing spotlight images...');
    const spotlightTotal = await processDirectory(spotlightDir, 'spotlight');
    grandTotal += spotlightTotal;
  }
  
  console.log(`\n🎉 OPTIMIZATION COMPLETE!`);
  console.log(`💰 Total space saved: ${(grandTotal / 1024 / 1024).toFixed(2)}MB`);
  console.log(`📈 Expected page speed improvement: 2-5x faster loading`);
  console.log(`🏆 SEO benefit: Better Core Web Vitals scores\n`);
}

main().catch(console.error);