export interface ExperienceImage {
    src: string;
    alt: string;
  }
  
  export interface ExperienceItem {
    time: string;
    position: string;
    company: string;
    images: ExperienceImage[];
    description: string;
  }