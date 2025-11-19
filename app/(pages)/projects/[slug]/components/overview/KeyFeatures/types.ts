export interface ProjectFeature {
  icon: string;
  label: string;
  description?: string;
  image: string;
}

export interface KeyFeaturesSectionProps {
  features: ProjectFeature[];
  iconMap: Record<string, React.ElementType>;
}
