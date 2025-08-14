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
    DESCRIPTION:
      "To identify where existing apps fell short, I analyzed Instagram, Yelp, Beli, and Google Maps by evaluating their social-media style browsing, detailed reviews, local recommendations, and location data. I discovered that no platform offers immersive visual discovery alongside comprehensive menu and reservation details at the same time. This clear gap became the project’s guiding focus: uniting rich, photo-driven exploration with accurate, up-to-date information in one seamless experience.",
  },

  DESIGN_PROCESS: {
    HEADING: "Bringing Ideas to Life",
    STEP1: {
      TITLE: "Laying the Foundations",
      DESCRIPTION: "Before diving into full UI design, I mapped out the information architecture and rough wireframe sketches to ensure the app’s structure would meet real user needs. This groundwork let me validate key workflows and flow into higher-fidelity mockups with confidence.",
      IA: {
        IMG: {
          SRC: "/images/projects/yumpick/design-process/yumpick-ia.png",
          ALT: "Information Architecture Image",
        },
      },
      LOW_FI: {
        IMG: {
          SRC: "/images/projects/yumpick/design-process/yumpick-low-fi.png",
          ALT: "Low Fidelity Wireframes Image",
        },
      }
    },
    STEP2: {
      TITLE: "Crafting a Consistent Visual Framework",
      DESCRIPTION:"After validating the app’s structure, I translated core user flows into medium-fidelity wireframes, iterating on layouts, interactions, and visual hierarchy to balance clarity and functionality. I also established a cohesive design system by defining typography, color palette, components, and spacing guidelines to ensure consistency across screens and speed up future iterations.",
      MID_FI: {
        IMG: {
          SRC: "/images/projects/yumpick/design-process/yumpick-mid-fi.png",
          ALT: "Mid Fidelity Wireframes Image",
        },
      },
      DESIGN_SYSTEM: {
        IMG: {
          SRC: "/images/projects/yumpick/design-process/yumpick-design-system.jpg",
          ALT: "Design System Image",
        },
      },
      DESIGN_SYSTEM_DARK: {
        IMG: {
          SRC: "/images/projects/yumpick/design-process/yumpick-design-system-dark.jpg",
          ALT: "Design System Image",
        },
      }
    },
    STEP3: {
      TITLE: "From Mockups to Interactive Prototype",
      DESCRIPTION:"Building on the design system, I crafted polished high-fidelity mockups that showcase finalized UI elements, including typography, color palette, and components. I then assembled an interactive prototype with clickable flows to simulate key user journeys. Usability tests on this prototype revealed minor tweaks needed for smoother interactions, ensuring the final design delivers a seamless, intuitive experience.",
      HI_FI: {
        IMG: {
          SRC: "/images/projects/yumpick/design-process/yumpick-hi-fi.png",
          ALT: "High Fidelity Wireframes Image",
        },
      },
      PROTOTYPE: {
        VIDEO: {
          SRC: "/images/projects/yumpick/design-process/Yumpick-prototype.mp4",
          ALT: "Prototype Video",
        },
      },
    }
    
  },
  REFLECTION: {
    TITLE: "Focusing on Core Needs",
    DESCRIPTION:
      "In the research phase, I felt overwhelmed by the range of issues uncovered through surveys, interviews, and competitive analysis, so many that I wondered how to tackle them all in one app. To regain focus, I identified the highest-impact problems and set clear scope boundaries, tackling core features first. This iterative approach allowed me to refine Yumpick into a lean prototype that truly addresses user pain points. Ultimately, I learned that defining a manageable scope and centering every decision on real user needs are essential to creating meaningful, user-focused solutions.",
  },
  DEFINING: {
    HEADING: "What Users Need",
    TITLE: "From Insights to Requirements",
    DESCRIPTION:
      "To ensure that the app addresses real user needs, I created a user experience framework that includes persona development, journey mapping, and a flow chart to guide the design process. I chose a content creator as my persona, representing one of the target audiences of trendy food explorers struggling with using multiple platforms for restaurant discovery. Through this framework, I gained clear insights into what users truly need from the app. From these insights, I distilled three core requirements: immersive visual discovery, comprehensive restaurant information, and a user-friendly, intuitive interface.",
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
  },
};

export const USER_INTERVIEW_PROBLEMS = [
  {
    name: "OpenTable user",
    description:
      "Their homepage lists 80 restaurants across eight categories and it feels endless. I get overwhelmed scrolling through all the options, and it’s frustrating trying to pinpoint the right place.",
    time: "5m ago",
    icon: "🧔🏽‍♂️",
    color: "#F76239",
  },
  {
    name: "Instagram user",
    description:
      "It’s great to discover trendy restaurants through high-quality photos and videos, but in the end, I have to use other apps to find the detailed information.",
    time: "15m ago",
    icon: "🧑🏻‍🦱",
    color: "#F76239",
  },
  {
    name: "Google Maps user",
    description:
      "I use it all the time, but I don’t think of it as a place for menus. It’s often hard to find accurate prices or allergy info, and since the menus rely on user-uploaded photos, they can be outdated or misleading.",
    time: "10m ago",
    icon: "👱🏻‍♀️",
    color: "#F76239",
  },
];

export const USER_INTERVIEW_SURVEY = [
  {
    name: "Beli user",
    description:
      "Beli almost has a social media aspect to their app, which makes finding restaurants much more enjoyable.",
    time: "10m ago",
    icon: "👱🏻‍♂️",
    color: "#F76239",
  },
  {
    name: "Yelp user",
    description:
      "I use Yelp because I like to see what people eat and what they have through pictures",
    time: "5m ago",
    icon: "👩🏽‍🦱",
    color: "#F76239",
  },
  {
    name: "Instagram user",
    description: "Instagram is good to find out hot places",
    time: "15m ago",
    icon: "👩🏻",
    color: "#F76239",
  },
];

export const APP_DATA = [
  { label: "Instagram", value: 14 },
  { label: "Google Maps", value: 10 },
  { label: "OpenTable", value: 5 },
  { label: "Yelp", value: 4 },
  { label: "Beli", value: 1 },
  { label: "TikTok", value: 1 },
  { label: "Other", value: 1 },
];

export const YUMPICK_FEATURES: ProjectFeature[] = [
  {
    icon: "mapPin",
    label: "Curated Local Categories",
    description: "Browse restaurants by curated categories.",
    image: "/images/projects/yumpick/key-features/yumpick-key-feature-1.jpg",
  },
  {
    icon: "telescope",
    label: "Visual Discovery",
    description: "Explore restaurants through photos & videos",
    image: "/images/projects/yumpick/key-features/yumpick-key-feature-2.jpg",
  },
  {
    icon: "utensils",
    label: "Live Menu Details",
    description: "Access up-to-date menus, prices & allergy info",
    image: "/images/projects/yumpick/key-features/yumpick-key-feature-3.jpg",
  },
  {
    icon: "calendarCheck",
    label: "One-tap Reservation",
    description: "Reserve your table instantly, right in the app",
    image: "/images/projects/yumpick/key-features/yumpick-key-feature-4.jpg",
  },
];
