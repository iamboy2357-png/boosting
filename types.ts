export interface ServiceItem {
  id: string;
  number: string;
  iconName: string;
  title: string;
  tagline: string;
  description: string;
  features?: string[];
  items?: string[];
  fullDetails?: string;
  popular?: boolean;
  accentColor?: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  description: string;
  category: 'Websites' | 'Landing Pages' | 'Business Projects' | 'Digital Promotion' | string;
  categoryLabel?: string;
  image: string;
  tags: string[];
  features: string[];
  results?: string;
  demoUrl?: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface ProcessStep {
  step: string;
  number: string;
  title: string;
  description: string;
  iconName: string;
  highlight?: string;
}

export interface FeatureItem {
  number: string;
  title: string;
  description: string;
  iconName: string;
}
