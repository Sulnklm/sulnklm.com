import type { ProjectFeature } from "../../../overview/KeyFeatures/types";

export const YUMPICK_PROJECT = {
  KEY_FEATURES: {
    SUBTEXT: "Quick preview",
    HEADING: "Key Features ✦",
  },
  REFLECTION: {
    title: "Focusing on Core Needs",
    description:
      "In the research phase, I felt overwhelmed by the range of issues uncovered through surveys, interviews, and competitive analysis, so many that I wondered how to tackle them all in one app. To regain focus, I identified the highest-impact problems and set clear scope boundaries, tackling core features first. This iterative approach allowed me to refine Yumpick into a lean prototype that truly addresses user pain points. Ultimately, I learned that defining a manageable scope and centering every decision on real user needs are essential to creating meaningful, user-focused solutions.",
  },
};

export const YUMPICK_FEATURES: ProjectFeature[] = [
  {
    icon: "mapPin",
    label: "Curated Local Categories",
    description: "Browse restaurants by curated categories.",
    image: "/images/projects/yumpick/key-features/yumpick-key-feature-1.webp",
  },
  {
    icon: "telescope",
    label: "Visual Discovery",
    description: "Explore restaurants through photos & videos",
    image: "/images/projects/yumpick/key-features/yumpick-key-feature-2.webp",
  },
  {
    icon: "utensils",
    label: "Live Menu Details",
    description: "Access up-to-date menus, prices & allergy info",
    image: "/images/projects/yumpick/key-features/yumpick-key-feature-3.webp",
  },
  {
    icon: "calendarCheck",
    label: "One-tap Reservation",
    description: "Reserve your table instantly, right in the app",
    image: "/images/projects/yumpick/key-features/yumpick-key-feature-4.webp",
  },
];
