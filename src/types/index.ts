export interface ServicePageProps {
  title: string;
  subtitle: string;
  imageUrl: string;
  imageAlt: string;
  description: string;
  benefits: string[];
  steps: { step: string; desc: string }[];
  startingPrice?: string;
  slug: string;
}
