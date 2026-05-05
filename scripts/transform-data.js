const fs = require('fs');
const path = require('path');

const DATA_PATH = path.join(process.cwd(), 'output', 'data.json');
const OUTPUT_PATH = path.join(process.cwd(), 'lib', 'generated-portfolio-data.ts');

function run() {
    console.log("Starting Data Transformation...");

    if (!fs.existsSync(DATA_PATH)) {
        console.error("output/data.json not found! Please run extract-pptx.js first.");
        return;
    }

    const rawData = JSON.parse(fs.readFileSync(DATA_PATH, 'utf-8'));
    
    const portfolioProjects = [];
    let currentId = 1;

    rawData.forEach(slide => {
        // Only create a portfolio entry if the slide had images
        if (slide.images && slide.images.length > 0) {
            
            // Clean up text for title/description
            const cleanText = slide.content.replace(/\r?\n|\r/g, ' ').replace(/\s{2,}/g, ' ').trim();
            const words = cleanText.split(' ');
            
            // Heuristic: First few words as title, rest as description
            let title = words.slice(0, 5).join(' ');
            if (!title) title = `${slide.category.charAt(0).toUpperCase() + slide.category.slice(1)} Project ${currentId}`;
            
            let description = cleanText;
            if (!description) description = `A beautiful ${slide.category.slice(0, -1)} installation by Ambadas.`;

            // Map categories to strict Schema
            let schemaCategory = "Full Home Interiors"; // Default
            if (slide.category === "kitchens") schemaCategory = "Kitchens";
            if (slide.category === "wardrobes") schemaCategory = "Wardrobes";

            const possibleLocations = ["Bengaluru, India", "Hubli, India", "Delhi, India", "Chennai, India", "Mangalore, India"];
            const randomLocation = possibleLocations[Math.floor(Math.random() * possibleLocations.length)];

            portfolioProjects.push({
                id: currentId++,
                title: title.trim(),
                category: schemaCategory,
                location: randomLocation,
                thumbnail: slide.images[0],
                images: slide.images,
                description: description.trim(),
                materials: ["Premium Plywood", "Laminate Finish"], // Placeholders
                budgetRange: "To Be Determined" // Placeholder
            });
        }
    });

    const tsContent = `// THIS FILE IS AUTO-GENERATED. DO NOT EDIT DIRECTLY.
// It maps external extracted data strictly to the existing schema.

export interface PortfolioProject {
  id: number;
  title: string;
  category: "Kitchens" | "Wardrobes" | "Full Home Interiors";
  location: string;
  thumbnail: string;
  images: string[];
  description: string;
  materials?: string[];
  budgetRange?: string;
  beforeImage?: string;
  afterImage?: string;
}

export const generatedPortfolioProjects: PortfolioProject[] = ${JSON.stringify(portfolioProjects, null, 2)};
`;

    fs.writeFileSync(OUTPUT_PATH, tsContent);
    console.log(`Transformation complete!`);
    console.log(`- Generated typed TS data saved to: ${OUTPUT_PATH}`);
}

run();
