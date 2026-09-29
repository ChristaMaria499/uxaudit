export type ProductCategory =
  | 'auto'
  | 'ecommerce'
  | 'food'
  | 'fitness'
  | 'education'
  | 'finance'
  | 'travel'
  | 'social'
  | 'productivity'
  | 'other';

export interface DetectedCategory {
  key: ProductCategory;
  label: string;
  score: number;
}

export interface Persona {
  name: string;
  type: string;
  goal: string;
  need: string;
  friction: string;
}

export type Severity = 'High' | 'Medium' | 'Low';

export interface Friction {
  problem: string;
  severity: Severity;
  why: string;
}

export interface JourneyStep {
  step: number;
  title: string;
  detail: string;
}

export interface Recommendation {
  recommendation: string;
  benefit: string;
}

export interface SuggestedScreen {
  name: string;
  purpose: string;
}

export interface AccessibilityItem {
  area: 'Visual' | 'Interaction' | 'Content' | 'Navigation';
  detail: string;
}

export interface PriorityAction {
  priority: 'P1' | 'P2' | 'P3';
  label: string;
  action: string;
}

export interface ProductSnapshot {
  productType: string;
  primaryUser: string;
  mainGoal: string;
  coreExperience: string;
}

export interface UXAnalysis {
  id: string;
  description: string;
  createdAt: number;
  category: ProductCategory;
  categoryLabel: string;
  uxSignal: number;
  opportunityCount: number;
  snapshot: ProductSnapshot;
  personas: Persona[];
  frictions: Friction[];
  journey: JourneyStep[];
  recommendations: Recommendation[];
  screens: SuggestedScreen[];
  accessibility: AccessibilityItem[];
  priorities: PriorityAction[];
}

export const CATEGORY_LABELS: Record<ProductCategory, string> = {
  auto: 'Auto Detect',
  ecommerce: 'E-commerce',
  food: 'Food & Delivery',
  fitness: 'Fitness & Health',
  education: 'Education',
  finance: 'Finance',
  travel: 'Travel',
  social: 'Social',
  productivity: 'Productivity',
  other: 'Other',
};
