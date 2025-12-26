
export interface TimelineItem {
  years: string;
  role: string;
  location: string;
  description: string;
  achievements: string[];
  impactMetric?: {
    label: string;
    value: string;
  };
}
