import type { ExperienceItem } from "../home/types";

export const ABOUT_CONST = {
  HERO: {
    BACKGROUND: {
      SRC: "/images/about/hero/grassland.jpg",
      ALT: "Grassland Image",
    },
    IMAGE1: {
      SRC: "/images/about/hero/about1.jpg",
      ALT: "Image of Suin 1",
    },
    IMAGE2: {
      SRC: "/images/about/hero/about4.jpg",
      ALT: "Image of Suin 2",
    },
    IMAGE3: {
      SRC: "/images/about/hero/about5.jpg",
      ALT: "Image of Suin 3",
    },
    HEADING1: "Hi again!",
  },
  MY_STORY: {
    SUBTEXT: "My Story",
    TITLE1: "Where I Began 🌄",
    PARAGRAPH1:
      "I was drawn not only to the aesthetics of design but to creating interactive experiences that truly engage people and bringing those ideas to life. Leaving my comfort zone in Korea right after high school, I took a bold step toward my dreams by moving alone to Vancouver, far from my family. Here, I’ve found inspiration and growth through collaborating with diverse, passionate individuals who share my vision :)",
    TITLE2: "Where I Stand Today 👩🏻‍💻",
    PARAGRAPH2:
      "Completing my first internship, I came to understand that in the ever-evolving world of digital design, there is always infinite room for growth. This ongoing journey of improvement deepened my passion for the field and drives me to continuously push my creative and technical boundaries. Moving forward, I aspire to create work that truly inspires while evolving into a more innovative designer and developer.",
  },
};

export const SKILLS_CONST = {
  HEADING: "Key ✦ Skills",
  DEVELOPMENT_TOOLS: [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "React Native",
    "Tailwind",
    "Bootstrap",
    "jQuery",
    "Express.js",
    "PHP",
    "WordPress",
    "Git",
    "GitHub",
    "Postman",
    "Framer Motion",
    "GSAP",
  ],
  DESIGN_TOOLS: [
    "Figma",
    "Photoshop",
    "Illustrator",
    "InDesign",
    "After Effects",
    "Premiere Pro",
    "Dimension",
  ],
  DEVELOPMENT_SKILLS: [],
  DESIGN_SKILLS: [
    "UX Research",
    "Information Architecture",
    "Design System",
    "Wireframing",
    "Usability Testing",
    "Web Design",
    "Branding",
    "Marketing Graphics",
  ],
};

export const EXPERIENCE_CONST: ExperienceItem[] = [
  {
    time: "May - July 2025",
    position: "Media designer",
    company: "Internship @ Pixel Ramen",
    images: [
      {
        src: "/images/about/experience/pixelramen1.png",
        alt: "Pixel Ramen Post Design Image 1",
      },
      {
        src: "/images/about/experience/pixelramen2.png",
        alt: "Pixel Ramen Post Design Image 2",
      },
      {
        src: "/images/about/experience/pixelramen3.png",
        alt: "Pixel Ramen Post Design Image 3",
      },
      {
        src: "/images/about/experience/pixelramen4.png",
        alt: "Pixel Ramen Post Design Image 4",
      },
    ],
    description: "Designed scroll-stopping visuals for social media",
  },
  {
    time: "May - July 2025",
    position: "Web developer",
    company: "Internship @ Convergence",
    images: [
      {
        src: "/images/about/experience/convergence.png",
        alt: "Convergence logo",
      },
      {
        src: "/images/about/experience/simuhealth.png",
        alt: "Simuhealth logo",
      },
    ],
    description:
      "Worked on several exciting projects integrating UI/UX and frontend",
  },
  {
    time: "May - July 2025",
    company: "Freelance",
    position: "Designer & Developer",
    images: [
      {
        src: "/images/about/experience/pixelramen3.png",
        alt: "Graphic design image3",
      },
      { src: "/images/home/experience4.png", alt: "Graphic design image4" },
    ],
    description:
      "Worked on several exciting projects integrating UI/UX and frontend",
  },
];
