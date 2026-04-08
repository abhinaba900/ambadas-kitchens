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

export const portfolioProjects: PortfolioProject[] = [
  {
    id: 1,
    title: "Modern Minimalist Parallel Kitchen",
    category: "Kitchens",
    location: "Indiranagar, Bangalore",
    thumbnail: "https://images.unsplash.com/photo-1742280879518-ada47b660ccd?q=80&w=2070&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1742280879518-ada47b660ccd?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1556909212-d5b604d7c992?auto=format&fit=crop&q=80&w=1200"
    ],
    description: "A sleek, handle-less parallel kitchen designed for maximum efficiency in a compact space.",
    materials: ["Acrylic Finish", "Quartz Countertop", "Soft-close Drawers"],
    budgetRange: "₹4.5L - ₹6L",
    beforeImage: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=1200",
    afterImage: "https://images.unsplash.com/photo-1742280879518-ada47b660ccd?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "Luxury Floor-to-Ceiling Wardrobe",
    category: "Wardrobes",
    location: "Whitefield, Bangalore",
    thumbnail: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&q=80&w=1200",
    images: [
      "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80&w=1200"
    ],
    description: "Bespoke wardrobe solution with integrated lighting and sliding doors for a premium master bedroom.",
    materials: ["Laminate Finish", "Toughened Glass", "Hettich Hardware"],
    budgetRange: "₹2.5L - ₹4L"
  },
  {
    id: 3,
    title: "Contemporary 3BHK Full Home Interior",
    category: "Full Home Interiors",
    location: "Koramangala, Bangalore",
    thumbnail: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=1200",
    images: [
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1616489953149-8e7c107ecda5?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1617103996702-96ff29b1c467?auto=format&fit=crop&q=80&w=1200"
    ],
    description: "Complete home transformation focusing on neutral tones and functional luxury.",
    materials: ["Veneer Finish", "Designer Lighting", "Custom Furniture"],
    budgetRange: "₹25L - ₹35L"
  },
  {
    id: 4,
    title: "Island Kitchen with Breakfast Counter",
    category: "Kitchens",
    location: "HSR Layout, Bangalore",
    thumbnail: "https://images.unsplash.com/photo-1565538810643-b5bdb714032a?auto=format&fit=crop&q=80&w=1200",
    images: [
      "https://images.unsplash.com/photo-1565538810643-b5bdb714032a?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&q=80&w=1200"
    ],
    description: "A spacious island kitchen designed for families who love to cook and socialize together.",
    materials: ["PU Finish", "Granite Countertop", "In-built Appliances"],
    budgetRange: "₹8L - ₹12L"
  },
  {
    id: 5,
    title: "Glossy Grey Modular Kitchen",
    category: "Kitchens",
    location: "Electronic City, Bangalore",
    thumbnail: "https://images.unsplash.com/photo-1584622781564-1d987f7333c1?auto=format&fit=crop&q=80&w=1200",
    images: [
      "https://images.unsplash.com/photo-1584622781564-1d987f7333c1?auto=format&fit=crop&q=80&w=1200"
    ],
    description: "Modern modular kitchen with high-gloss finish and smart storage solutions.",
    materials: ["Glossy Laminate", "Tandem Drawers"],
    budgetRange: "₹3.5L - ₹5L"
  },
  {
    id: 6,
    title: "Scandinavian Style 2BHK Home",
    category: "Full Home Interiors",
    location: "Sarjapur Road, Bangalore",
    thumbnail: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&q=80&w=1200",
    images: [
      "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&q=80&w=1200"
    ],
    description: "Light and airy interiors utilizing natural wood textures and minimalist furniture.",
    materials: ["Birch Plywood", "Fabric Textures"],
    budgetRange: "₹15L - ₹20L"
  }
];
