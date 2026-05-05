const fs = require('fs');
const path = require('path');

const PORTFOLIO_DIR = path.join(process.cwd(), 'public', 'portfolio');
const OTHERS_DIR = path.join(PORTFOLIO_DIR, 'others');
const KITCHENS_DIR = path.join(PORTFOLIO_DIR, 'kitchens');
const WARDROBES_DIR = path.join(PORTFOLIO_DIR, 'wardrobes');

const DATA_JSON_PATH = path.join(process.cwd(), 'output', 'data.json');
const TS_DATA_PATH = path.join(process.cwd(), 'lib', 'generated-portfolio-data.ts');

function ensureDir(dir) {
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

function moveFiles(srcDir, destDir, srcCategory) {
    if (!fs.existsSync(srcDir)) return [];
    
    const files = fs.readdirSync(srcDir);
    const moved = [];
    
    files.forEach(file => {
        const srcPath = path.join(srcDir, file);
        if (fs.statSync(srcPath).isFile()) {
            let finalFileName = file;
            let destPath = path.join(destDir, finalFileName);
            
            // Prevent accidental overwrite if same name exists in "others"
            if (fs.existsSync(destPath)) {
                 const ext = path.extname(file);
                 const name = path.basename(file, ext);
                 finalFileName = `${name}-${Date.now()}${ext}`;
                 destPath = path.join(destDir, finalFileName);
            }
            
            // Move file
            fs.renameSync(srcPath, destPath);
            
            moved.push({ 
                from: `/portfolio/${srcCategory}/${file}`, 
                to: `/portfolio/others/${finalFileName}` 
            });
            console.log(`[Moved] ${srcCategory}/${file}  -->  others/${finalFileName}`);
        }
    });
    
    return moved;
}

function run() {
    console.log("=== Phase 1: Moving Images to Clean Structure ===");
    ensureDir(OTHERS_DIR);
    ensureDir(path.join(PORTFOLIO_DIR, 'interiors'));
    ensureDir(path.join(PORTFOLIO_DIR, 'bathrooms'));
    ensureDir(path.join(PORTFOLIO_DIR, 'consoles'));
    
    // Move from kitchens and wardrobes to others
    const movedKitchens = moveFiles(KITCHENS_DIR, OTHERS_DIR, 'kitchens');
    const movedWardrobes = moveFiles(WARDROBES_DIR, OTHERS_DIR, 'wardrobes');
    
    const allMoved = [...movedKitchens, ...movedWardrobes];
    
    if (allMoved.length === 0) {
        console.log("No images found in kitchens/wardrobes to move.");
    } else {
        console.log(`Total images moved: ${allMoved.length}`);
    }

    console.log("\n=== Phase 3: Updating Data Consistency ===");
    
    // Update data.json
    if (fs.existsSync(DATA_JSON_PATH)) {
        let rawJson = fs.readFileSync(DATA_JSON_PATH, 'utf-8');
        
        // Update paths
        allMoved.forEach(m => {
            rawJson = rawJson.split(m.from).join(m.to);
        });
        
        // Update raw category data
        try {
            const jsonData = JSON.parse(rawJson);
            jsonData.forEach(item => {
                if (item.category === 'kitchens' || item.category === 'wardrobes') {
                    item.category = 'others';
                }
            });
            fs.writeFileSync(DATA_JSON_PATH, JSON.stringify(jsonData, null, 2));
            console.log("- Successfully synced output/data.json");
        } catch (e) {
            console.error("Failed to parse data.json:", e);
        }
    }

    // Update generated-portfolio-data.ts
    if (fs.existsSync(TS_DATA_PATH)) {
        let tsContent = fs.readFileSync(TS_DATA_PATH, 'utf-8');
        
        // Update paths
        allMoved.forEach(m => {
            tsContent = tsContent.split(m.from).join(m.to);
        });
        
        // Change category to "Full Home Interiors"
        tsContent = tsContent.replace(/category:\s*"Kitchens"/g, 'category: "Full Home Interiors"');
        tsContent = tsContent.replace(/category:\s*"Wardrobes"/g, 'category: "Full Home Interiors"');
        
        fs.writeFileSync(TS_DATA_PATH, tsContent);
        console.log("- Successfully synced lib/generated-portfolio-data.ts");
    }
    
    console.log("\n=== Done! System is in a clean state. ===");
}

run();
