import { VisualItem } from "@/components/ui/Section/PrimarySection";
import type { ProjectFeature } from "../../../overview/KeyFeatures/types";

export const FLICKMOOD_CONST = {
  KEY_FEATURES: {
    SUBTEXT: "Live data via TMDb API",
    HEADING: "Key Features ✦",
  },
  PROCESS: {
    SUBTEXT: "Key logic for fetching details",
    HEADING: "Code Snippet",
  },
  REFLECTION: {
    TITLE: "Reflection",
    SUBTITLE: "Bridging Design and Code",
    DESCRIPTION:
      "This project strengthened my skills in web design and component-based frontend development with React. I learned how to fetch and manage real-world data using APIs, handle state changes, and store user selections with Local Storage—all while ensuring a fully responsive layout.",
    visuals: [
      {
        type: "image",
        src: "/images/projects/flickmood/feature1.jpg",
        alt: "Challenges graphic 2",
        boxHeight: { base: 240, md: 400 },
        // objectFit: "contain",
        // scale: 3,
        translateY: "10%",
      },
    ] satisfies VisualItem[],
  },
};
export const FLICKMOOD_FEATURES: ProjectFeature[] = [
  {
    icon: "table2",
    label: "Mood-Based Filtering",
    description: "Easily browse movies by mood or vibe",
    image: "/images/projects/flickmood/feature1.jpg",
  },
  {
    icon: "LayoutDashboard",
    label: "Dynamic Movie Data Fetching",
    description: "All the movie info at a glance",
    image: "/images/projects/flickmood/feature2.jpg",
  },
  {
    icon: "LayoutDashboard",
    label: "Favorites Stored Locally",
    description: "Save your picks with one click",
    image: "/images/projects/flickmood/feature3.jpg",
  },
];
