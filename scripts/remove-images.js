const fs = require('fs');
const path = require('path');

const DATA_JSON_PATH = path.join(process.cwd(), 'output', 'data.json');

const filesToRemove = [
  "other-20.webp", "other-21.webp", "other-22.webp", "other-23.webp", "other-24.webp", 
  "other-25.webp", "other-26.webp", "other-27.webp", "other-28.webp", "other-29.webp", 
  "other-30.webp", "other-31.webp", "other-32.webp", "other-33.webp", "other-34.webp", 
  "other-35.webp", "other-36.webp", "other-37.webp", "other-38.webp", "other-39.webp", 
  "other-40.webp", "other-41.webp", "other-42.webp", "other-43.webp", "other-44.webp", 
  "other-45.webp", "other-46.webp", "other-47.webp", "other-48.webp", "other-49.webp", 
  "other-50.webp", "other-51.webp", "other-52.webp", "other-53.webp", "other-54.webp", 
  "other-55.webp", "other-56.webp", "other-57.webp", "other-58.webp", "other-59.webp", 
  "other-60.webp", "other-61.webp", "other-62.webp", "wardrobe-32.webp", "wardrobe-33.webp", 
  "wardrobe-34.webp", "wardrobe-35.webp", "kitchen-30.webp", "kitchen-31.webp", 
  "kitchen-32.webp", "kitchen-33.webp", "kitchen-34.webp", "kitchen-35.webp", 
  "kitchen-36.webp", "kitchen-37.webp", "kitchen-38.webp", "kitchen-39.webp", 
  "kitchen-40.webp", "kitchen-41.webp", "kitchen-42.webp", "kitchen-43.webp", 
  "kitchen-44.webp", "kitchen-45.webp", "kitchen-46.webp", "kitchen-47.webp", 
  "kitchen-48.webp", "kitchen-49.webp", "kitchen-50.webp", "kitchen-51.webp", 
  "kitchen-52.webp", "kitchen-53.webp", "kitchen-54.webp", "kitchen-55.webp", 
  "kitchen-56.webp", "kitchen-57.webp", "kitchen-58.webp", "kitchen-59.webp", 
  "kitchen-60.webp", "kitchen-61.webp", "kitchen-62.webp", "kitchen-63.webp", 
  "kitchen-64.webp", "kitchen-65.webp", "kitchen-66.webp", "kitchen-67.webp", 
  "kitchen-68.webp", "kitchen-69.webp", "kitchen-70.webp", "kitchen-71.webp", 
  "kitchen-72.webp", "kitchen-73.webp", "kitchen-74.webp", "kitchen-75.webp", 
  "kitchen-76.webp", "kitchen-77.webp", "kitchen-78.webp", "kitchen-79.webp", 
  "kitchen-80.webp", "kitchen-81.webp", "kitchen-82.webp", "kitchen-83.webp", 
  "kitchen-84.webp", "kitchen-85.webp", "kitchen-86.webp", "kitchen-87.webp", 
  "other-01.webp", "other-02.webp", "other-03.webp", "other-04.webp", "other-05.webp", 
  "other-06.webp", "other-07.webp", "other-08.webp", "other-09.webp", "other-10.webp", 
  "other-11.webp", "other-12.webp", "other-13.webp", "other-14.webp", "other-15.webp", 
  "other-16.webp", "other-17.webp", "other-18.webp", "other-19.webp"
];

const filesSet = new Set(filesToRemove);

function run() {
    if (!fs.existsSync(DATA_JSON_PATH)) {
        console.error("data.json not found!");
        return;
    }

    let rawJson = fs.readFileSync(DATA_JSON_PATH, 'utf-8');
    let data = JSON.parse(rawJson);
    let removedCount = 0;

    data.forEach(slide => {
        if (slide.images && slide.images.length > 0) {
            slide.images = slide.images.filter(imgPath => {
                const filename = path.basename(imgPath);
                if (filesSet.has(filename)) {
                    removedCount++;
                    return false;
                }
                return true;
            });
        }
    });

    fs.writeFileSync(DATA_JSON_PATH, JSON.stringify(data, null, 2));
    console.log(`Successfully removed ${removedCount} image references from data.json.`);
    
    // Now call transform-data.js to regenerate the ts file
    console.log("Regenerating generated-portfolio-data.ts...");
    require('./transform-data.js');
}

run();
