import type { ProjectFeature } from "../../../overview/KeyFeatures/types";

export const YUMPICK_PROJECT = {
  KEY_FEATURES: {
    SUBTEXT: "Quick preview",
    HEADING: "Key Features ✦",
  },
  BACKGROUND: {
    HEADING: "Why This Project?",
    TITLE: "Eliminating App-Hopping",
    DESCRIPTION:
      "I began structuring this project after realizing how much time I spent switching between apps to find the right restaurant. Through research, I found that many others shared this frustration. I wanted to build a simpler way for people to discover restaurants and access all the necessary information in one place.",
  },
  USER_RESEARCH: {
    HEADING: "How Users Discover",
    USER_SURVEY: {
      DESCRIPTION:
        "To ensure this project would truly meet the needs of its users, I wanted to go beyond just my own experience and understand how other people approach restaurant discovery. So, I first conducted a user survey & interview to gather general insights on which apps users primarily rely on for restaurant discovery and what factors they consider most important when choosing a restaurant. One key finding was that users strongly prefer platforms with social media–like features for exploring restaurants!",
      TITLE: "Visual-First Apps Lead the Pack in Restaurant Discovery",
      SURVEY1_HEADING:
        "Which platforms or apps do you use to explore restaurants?",
    },
  },
  COMPETITOR_ANALYSIS: {
    HEADING: "What’s Missing in Other Apps?",
    IMG: {
      SRC: "/images/projects/yumpick/competitor-analysis/yumpick-competitor1.png",
      ALT: "Competitor Analysis Image",
    },
    TITLE: "No App Delivers Visuals and Details Simultaneously",
    DESCRIPTION: "To identify where existing apps fell short, I analyzed Instagram, Yelp, Beli, and Google Maps by evaluating their social-media style browsing, detailed reviews, local recommendations, and location data. I discovered that no platform offers immersive visual discovery alongside comprehensive menu and reservation details at the same time. This clear gap became the project’s guiding focus: uniting rich, photo-driven exploration with accurate, up-to-date information in one seamless experience."
  },
  REFLECTION: {
    TITLE: "Focusing on Core Needs",
    DESCRIPTION:
      "In the research phase, I felt overwhelmed by the range of issues uncovered through surveys, interviews, and competitive analysis, so many that I wondered how to tackle them all in one app. To regain focus, I identified the highest-impact problems and set clear scope boundaries, tackling core features first. This iterative approach allowed me to refine Yumpick into a lean prototype that truly addresses user pain points. Ultimately, I learned that defining a manageable scope and centering every decision on real user needs are essential to creating meaningful, user-focused solutions.",
  },
  DEFINING: {
    HEADING: "What Users Actually Need",
    TITLE: "From Insights to Requirements",
    DESCRIPTION: "To ensure that the app addresses real user needs, I created a user experience framework that includes persona development, journey mapping, and a flow chart to guide the design process. I chose a content creator as my persona, representing one of the target audiences of trendy food explorers struggling with using multiple platforms for restaurant discovery. Through this framework, I gained clear insights into what users truly need from the app. From these insights, I distilled three core requirements: immersive visual discovery, comprehensive restaurant information, and a user-friendly, intuitive interface.",
    IMG: {
      SRC: "/images/projects/yumpick/journey-map/yumpick-journey-map.png",
      ALT: "Journey Map Image",
    },
    IMG_DARK: {
      SRC: "/images/projects/yumpick/journey-map/yumpick-journey-map-dark.png",
      ALT: "Journey Map Image",
    },
  },
  USER_NEEDS: {
    IMG: {
      SRC: "/images/projects/yumpick/user-needs/yumpick-user-needs.png",
      ALT: "Journey Map Image",
    },
    IMG_DARK: {
      SRC: "/images/projects/yumpick/user-needs/yumpick-user-needs-dark.png",
      ALT: "Journey Map Image",
    },
  }
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
