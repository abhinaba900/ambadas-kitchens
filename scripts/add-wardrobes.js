const fs = require('fs');
const path = require('path');

const DATA_JSON_PATH = path.join(process.cwd(), 'output', 'data.json');

const wardrobeImages = [];
for (let i = 1; i <= 31; i++) {
    wardrobeImages.push(`/portfolio/wardrobes/wardrobe-${String(i).padStart(2, '0')}.webp`);
}

function run() {
    let data = [];
    if (fs.existsSync(DATA_JSON_PATH)) {
        try {
            data = JSON.parse(fs.readFileSync(DATA_JSON_PATH, 'utf-8'));
        } catch(e) {
            console.error("Invalid data.json, starting fresh.");
        }
    }

    // Determine the next slide number
    const maxSlide = data.reduce((max, s) => Math.max(max, s.slideNumber || 0), 0);
    
    // Add new wardrobe slides
    wardrobeImages.forEach((imgPath, index) => {
        data.push({
            slideNumber: maxSlide + index + 1,
            category: "wardrobes",
            content: "Custom floor-to-ceiling wardrobe designed for maximum storage efficiency. Features premium finishes and modern sliding or hinged configurations.",
            images: [imgPath]
        });
    });

    fs.writeFileSync(DATA_JSON_PATH, JSON.stringify(data, null, 2));
    console.log(`Successfully added ${wardrobeImages.length} wardrobe projects to data.json.`);

    console.log("Regenerating generated-portfolio-data.ts...");
    require('./transform-data.js');
}

run();
