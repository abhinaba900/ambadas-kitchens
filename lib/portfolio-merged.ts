import { portfolioProjects as originalProjects, PortfolioProject } from './portfolio-data';
import { generatedPortfolioProjects } from './generated-portfolio-data';

// Phase 6: Fallback Safety - Clean and validate generated data
const validGeneratedProjects = generatedPortfolioProjects.flatMap((project, index) => {
  try {
    // Ensure critical fields exist
    if (!project.id || !project.title || !project.thumbnail || !project.images || project.images.length === 0) {
      return [];
    }

    const categoryMap: Record<string, PortfolioProject["category"]> = {
      kitchens: "Kitchens",
      wardrobes: "Wardrobes",
      interiors: "Full Home Interiors",
      bathrooms: "Full Home Interiors",
      consoles: "Full Home Interiors",
      others: "Full Home Interiors",
      "full home interiors": "Full Home Interiors"
    };

    const mappedCategory = categoryMap[project.category?.toLowerCase() || ""];

    if (!mappedCategory) {
      console.warn(`Skipping invalid category project: ${project.id} - ${project.category}`);
      return [];
    }

    return [{
      ...project,
      id: 100 + index,
      category: mappedCategory
    } as PortfolioProject];
  } catch (error) {
    console.error("Error validating generated project:", error);
    return [];
  }
});

// Phase 1: Data Merge Strategy
export const portfolioProjects: PortfolioProject[] = [
  ...originalProjects,
  ...validGeneratedProjects
];
