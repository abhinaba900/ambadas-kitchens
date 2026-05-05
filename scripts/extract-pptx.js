const fs = require('fs');
const path = require('path');
const JSZip = require('jszip');
const xml2js = require('xml2js');
const sharp = require('sharp'); 

const PPTX_PATH = "C:\\Users\\abhin\\Downloads\\Website Information.pptx";
const OUTPUT_DIR = path.join(process.cwd(), 'output');
const PUBLIC_PORTFOLIO_DIR = path.join(process.cwd(), 'public', 'portfolio');

const CATEGORIES = ['kitchens', 'wardrobes', 'bathrooms', 'consoles', 'others'];

// Categorization heuristics based on text keywords
function determineCategory(text) {
    const lowerText = text.toLowerCase();
    if (lowerText.includes('kitchen')) return 'kitchens';
    if (lowerText.includes('wardrobe') || lowerText.includes('closet')) return 'wardrobes';
    if (lowerText.includes('bathroom') || lowerText.includes('vanity')) return 'bathrooms';
    if (lowerText.includes('console') || lowerText.includes('tv unit')) return 'consoles';
    return 'others'; // Default fallback
}

async function run() {
    console.log("Starting PPTX Extraction...");
    
    // 1. Ensure Directories exist
    if (!fs.existsSync(OUTPUT_DIR)) fs.mkdirSync(OUTPUT_DIR, { recursive: true });
    CATEGORIES.forEach(cat => {
        const catDir = path.join(PUBLIC_PORTFOLIO_DIR, cat);
        if (!fs.existsSync(catDir)) fs.mkdirSync(catDir, { recursive: true });
    });

    // 2. Read Zip (PPTX)
    if (!fs.existsSync(PPTX_PATH)) {
        console.error(`PPTX not found at: ${PPTX_PATH}`);
        return;
    }
    const data = fs.readFileSync(PPTX_PATH);
    const zip = await JSZip.loadAsync(data);
    
    const parser = new xml2js.Parser();
    const slidesData = [];
    const mediaFiles = {}; 

    // 3. Extract Media Buffers
    console.log("Extracting media files...");
    for (const [filename, fileData] of Object.entries(zip.files)) {
        if (filename.startsWith('ppt/media/') && !fileData.dir) {
            const buffer = await fileData.async('nodebuffer');
            mediaFiles[filename] = buffer;
        }
    }

    // 4. Extract Slide Text and Media Relations
    console.log("Extracting slide content...");
    const slideFiles = Object.keys(zip.files).filter(f => f.match(/^ppt\/slides\/slide\d+\.xml$/));
    
    for (const slideFile of slideFiles) {
        const slideNum = slideFile.match(/\d+/)[0];
        const relFile = `ppt/slides/_rels/slide${slideNum}.xml.rels`;
        
        let slideText = "";
        
        // Parse slide text
        const slideXml = await zip.files[slideFile].async('text');
        const parsedSlide = await parser.parseStringPromise(slideXml);
        
        const extractTextFromObj = (obj) => {
            let text = "";
            if (typeof obj === 'object' && obj !== null) {
                for (const key in obj) {
                    if (key === 'a:t') {
                        if (Array.isArray(obj[key])) {
                            text += obj[key].map(t => typeof t === 'object' ? t._ : t).join(' ') + " ";
                        } else if (typeof obj[key] === 'string') {
                            text += obj[key] + " ";
                        } else if (obj[key]._) {
                            text += obj[key]._ + " ";
                        }
                    } else {
                        text += extractTextFromObj(obj[key]);
                    }
                }
            } else if (Array.isArray(obj)) {
                obj.forEach(item => text += extractTextFromObj(item));
            }
            return text;
        };
        
        slideText = extractTextFromObj(parsedSlide).trim();
        
        // Parse relations to link media to this slide
        const mediaTargets = [];
        if (zip.files[relFile]) {
            const relXml = await zip.files[relFile].async('text');
            const parsedRel = await parser.parseStringPromise(relXml);
            if (parsedRel.Relationships && parsedRel.Relationships.Relationship) {
                const rels = Array.isArray(parsedRel.Relationships.Relationship) 
                    ? parsedRel.Relationships.Relationship 
                    : [parsedRel.Relationships.Relationship];
                
                rels.forEach(rel => {
                    const target = rel.$.Target;
                    if (target.includes('../media/')) {
                        mediaTargets.push(`ppt/media/${target.split('../media/')[1]}`);
                    }
                });
            }
        }
        
        slidesData.push({
            slideNumber: parseInt(slideNum),
            text: slideText,
            mediaTargets: mediaTargets
        });
    }

    // Sort by slide number
    slidesData.sort((a, b) => a.slideNumber - b.slideNumber);

    // 5. Process Images and Categorize
    console.log("Processing and converting images to WebP...");
    const categoryCounters = { kitchens: 1, wardrobes: 1, bathrooms: 1, consoles: 1, others: 1 };
    const processedImages = new Set();
    const finalSlidesData = [];

    for (const slide of slidesData) {
        const category = determineCategory(slide.text);
        const imagesAdded = [];
        
        for (const target of slide.mediaTargets) {
            if (processedImages.has(target)) {
                // If same image is used again, we might want to still link it, but for portfolio we want unique
                continue; 
            }
            if (mediaFiles[target]) {
                try {
                    const ext = path.extname(target).toLowerCase();
                    if (['.jpeg', '.jpg', '.png', '.gif', '.webp'].includes(ext)) {
                        const count = categoryCounters[category]++;
                        const paddedCount = String(count).padStart(2, '0');
                        // Use singular for file names
                        const prefix = category.endsWith('s') ? category.slice(0, -1) : category;
                        const newFilename = `${prefix}-${paddedCount}.webp`;
                        
                        const outputPath = path.join(PUBLIC_PORTFOLIO_DIR, category, newFilename);
                        
                        await sharp(mediaFiles[target])
                            .webp({ quality: 80 })
                            .toFile(outputPath);
                            
                        imagesAdded.push(`/portfolio/${category}/${newFilename}`);
                        processedImages.add(target);
                    }
                } catch (e) {
                    console.error(`Failed to process image ${target}:`, e.message);
                }
            }
        }
        
        finalSlidesData.push({
            slideNumber: slide.slideNumber,
            category: category,
            content: slide.text,
            images: imagesAdded
        });
    }

    // 6. Output JSON
    const dataOutputPath = path.join(OUTPUT_DIR, 'data.json');
    fs.writeFileSync(dataOutputPath, JSON.stringify(finalSlidesData, null, 2));
    console.log(`\nExtraction complete!`);
    console.log(`- Structured data saved to: ${dataOutputPath}`);
    console.log(`- Images saved into: /public/portfolio/*`);
}

run().catch(console.error);
