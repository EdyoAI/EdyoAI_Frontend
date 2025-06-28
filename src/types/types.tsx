// You can define types for your data if you're fetching from Directus
interface FeatureItem {
    id: string;
    name: string;
    icon: string; // Placeholder for icon URL or a component name
    isFree?: boolean;
    link: string;
  }
  
  interface MockTestSet {
    id: string;
    title: string;
    subtitle: string;
    description: string;
    price: number;
    discountPercentage: number;
    aiFeatures: string[]; // e.g., ["Adaptive", "Instant Analysis"]
    coverImage: string;
    link: string;
  }
  export type { FeatureItem, MockTestSet };