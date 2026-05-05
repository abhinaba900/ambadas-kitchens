const fs = require('fs');
const path = require('path');

const DATA_JSON_PATH = path.join(process.cwd(), 'output', 'data.json');

const kitchenImages = [];
for (let i = 1; i <= 29; i++) {
    kitchenImages.push(`/portfolio/kitchens/kitchen-${String(i).padStart(2, '0')}.webp`);
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
    
    // Add new kitchen slides
    kitchenImages.forEach((imgPath, index) => {
        data.push({
            slideNumber: maxSlide + index + 1,
            category: "kitchens",
            content: "Premium Modular Kitchen customized for modern Indian homes. Factory-finished with high-quality materials and expert installation.",
            images: [imgPath]
        });
    });

    fs.writeFileSync(DATA_JSON_PATH, JSON.stringify(data, null, 2));
    console.log(`Successfully added ${kitchenImages.length} kitchen projects to data.json.`);

    console.log("Regenerating generated-portfolio-data.ts...");
    require('./transform-data.js');
}

run();
