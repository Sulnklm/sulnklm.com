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
    TITLE: "Technical Growth",
    DESCRIPTION:
      "This project strengthened my skills in web design and component-based frontend development with React. I learned how to fetch and manage real-world data using APIs, handle state changes, and store user selections with Local Storage—all while ensuring a fully responsive layout.",
  },
};
export const FLICKMOOD_FEATURES: ProjectFeature[] = [
  {
    icon: "table2",
    label: "Mood-Based Filtering",
    description: "Easily browse movies by mood or vibe",
    image: "/images/projects/flickmood/feature1.png",
  },
  {
    icon: "LayoutDashboard",
    label: "Dynamic Movie Data Fetching",
    description: "All the movie info at a glance",
    image: "/images/projects/flickmood/feature2.png",
  },
  {
    icon: "LayoutDashboard",
    label: "Favorites Stored Locally",
    description: "Save your picks with one click",
    image: "/images/projects/flickmood/feature3.png",
  },
];
