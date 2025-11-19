import { VisualItem } from "@/components/ui/Section/PrimarySection";

export const YUMPICK_PROJECT = {
  KEY_FEATURES: {
    SUBTEXT: "Quick preview",
    HEADING: "Key Features ✦",
  },
  BACKGROUND: {
    HEADING: "Discovering restaurants feels more fragmented than it should.",
    TITLE: "Identifying The Problem",
    DESCRIPTION:
      "Through surveys and interviews with 36 participants, I found that many users struggled with fragmented restaurant discovery experiences. They often switched between multiple apps to check reviews, menus, and availability — a process that felt time-consuming and repetitive.",
  },
  THE_PROBLEM: {
    TITLE: "The Problem",
    DESCRIPTION:
      "Diners often juggle multiple apps to find restaurants, check menus, and make reservations. This fragmented experience causes information overload and decision fatigue, making it harder to choose where to dine.",
  },
  THE_MISSION: {
    TITLE: "The Mission",
    DESCRIPTION:
      "To simplify how people discover, decide, and share dining experiences — all in one cohesive platform.",
  },
  GRID_IMAGE: {
    SRC: "/images/projects/yumpick/grid.webp",
    ALT: "Yumpick Background Grid Image",
  },
  GRID_IMAGE_DARK: {
    SRC: "/images/projects/yumpick/grid-dark.webp",
    ALT: "Yumpick Background Grid Image",
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
    TITLE: "What’s Missing in Other Apps?",
    SUBTITLE: "No App Delivers Visuals and Details Simultaneously.",
    DESCRIPTION:
      "To identify where existing apps fell short, I analyzed Instagram, Google Maps, Yelp, and OpenTable by evaluating their social-media style browsing, detailed reviews, local recommendations, and location data. I discovered that no platform offers immersive visual discovery alongside comprehensive menu and reservation details at the same time.",
    DESCRIPTION2:
      "Based on these insights, I defined three key goals for the app.",
    GOALS: [
      {
        EYEBROW: "VISUAL DISCOVERY",
        BODY: "Enable users to explore restaurants through immersive, image-driven browsing that reflects real dining experiences.",
      },
      {
        EYEBROW: "DETAIL DEPTH",
        BODY: "Provide comprehensive restaurant profiles with menus, hours, reviews, and location data in one cohesive view.",
      },
      {
        EYEBROW: "USABILITY",
        BODY: "Design a user-friendly, intuitive interface that minimizes cognitive load and streamlines the decision-making process.",
      },
    ],
  },

  APPROACH: {
    TITLE: "Design Foundation",
    SUBTITLE:
      "Translating research insights into structured, actionable design decisions.",
    // DESCRIPTION:
    //   "To address the identified gaps, I mapped out how users interact, navigate, and experience the app before moving into visual design.",
    CARD: {
      EYEBROW: "INFORMATION ARCHITECTURE",
      HEADER: "Making Navigation Simple and Predictable",
      BODY: "To establish a clear and scalable structure for the app, I designed an information architecture that defines how users navigate and interact across key sections such as Home, Browse, Map, and Reservations. This framework helped clarify feature hierarchy and user flow, ensuring a seamless experience across exploration, and decision-making.",
      IMG: {
        SRC: "/images/projects/yumpick/IA.webp",
        ALT: "Information Architecture Image",
      },
    },
    CARDS: [
      {
        EYEBROW: "USER JOURNEY MAP",
        HEADER: "Identifying Friction Points That Shaped the Experience",
        BODY: "To translate research insights into a clear design direction, I created a user journey map that visualizes how users discover, decide, and share dining experiences. By mapping their goals, emotions, and pain points, I identified key friction areas and opportunities that shaped the app’s core flow and interaction design.",
        IMG: {
          SRC: "/images/projects/yumpick/journeymap.webp",
          ALT: "User Journey Map Image",
        },
      },
      {
        EYEBROW: "Early Design Exploration",
        HEADER: "Transforming Insights into Tangible Design Concepts",
        BODY: "I started shaping early design concepts based on the insights from the user journey map and information architecture. Through low-fidelity sketches and wireframes, I explored how key features connect across screens, refined the navigation flow, and established a foundation for the high-fidelity design phase.",
        IMG: {
          SRC: "/images/projects/yumpick/lo-fi.webp",
          ALT: "Design Sketches Image",
        },
      },
    ],
    CARD2: {
      EYEBROW: "DESIGN SYSTEM",
      HEADER: "Ensuring Visual Consistency and Design Efficiency",
      BODY: "Before moving into high-fidelity design, I established a design system to ensure visual consistency, accessibility, and interaction coherence across the product. This system created a unified framework that strengthened usability and supported efficient iteration throughout the design process.",
      IMG: {
        SRC: "/images/projects/yumpick/design-system.webp",
        ALT: "Design System Image",
      },
    },
  },

  SOLUTIONS: {
    TITLE: "The Solutions",
    SUBTITLE:
      "Combining visual exploration, detailed information, and seamless usability in one platform.",
    DESCRIPTION:
      "Building on the established design system, I developed a vibrant and engaging visual style for the app. I focused on balancing aesthetics with usability, ensuring that the interface is not only visually appealing but also intuitive and easy to navigate. Key elements included a bright color palette, clear typography, and consistent iconography to enhance user experience.",
    COLOR_PALETTE: {
      IMG: {
        SRC: "/images/projects/yumpick/color-palette.webp",
        ALT: "Color Palette Image",
      },
    },

    CARD: {
      EYEBROW: "SOCIAL DISCOVERY FEED",
      HEADER:
        "Created the main flow and interfaces for users to visually browse, discover, and access restaurant information in one place.",
      BODY: "Discover restaurants through engaging food photos and videos. Save places that catch your attention or explore trending dishes nearby. Instantly access restaurant menus, reviews, and pricing details without leaving the feed, turning visual inspiration into confident dining choices.",
      VIDEO: {
        src: "/video/projects/yumpick/browse.mp4",
      },
      IMAGE: {
        src: "/images/projects/yumpick/home.webp",
        alt: "Homepage image",
      },
    },
    CARD3: {
      EYEBROW: "RESERVATION",
      HEADER:
        "Designed a connected reservation experience that bridges discovery and decision-making.",
      BODY: "Users can move effortlessly from exploring restaurants to securing a table within the same flow. By integrating exploration and booking, the experience feels continuous and intentional, turning casual discovery into confident dining plans.",
      VIDEO: {
        src: "/video/projects/yumpick/reservation.mp4",
      },
      IMAGE: {
        src: "/images/projects/yumpick/reservation.webp",
        alt: "Homepage image",
      },
    },
    CARD2: {
      EYEBROW: "INTEGRATING FEEDBACK",
      HEADER:
        "Enhancing user engagement and personalized discovery through a unified, visually-driven browsing experience.",
      BODY: "Through user testing and feedback, I refined the browsing flow to make restaurant exploration more seamless. I combined the “Following” and “Browse” sections into one integrated experience, allowing users to explore both personalized and general posts within a unified feed for smoother discovery and interaction.",
      IMG: {
        SRC: "/images/projects/yumpick/feedback.webp",
        DARK_SRC: "/images/projects/yumpick/feedback-dark.webp",
        ALT: "Design System Image",
      },
    },
  },

  DESIGN_PROCESS: {
    HEADING: "Bringing Ideas to Life",
    STEP1: {
      TITLE: "Laying the Foundations",
      DESCRIPTION:
        "Before diving into full UI design, I mapped out the information architecture and rough wireframe sketches to ensure the app’s structure would meet real user needs. This groundwork let me validate key workflows and flow into higher-fidelity mockups with confidence.",
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
      },
    },
    STEP2: {
      TITLE: "Crafting a Consistent Visual Framework",
      DESCRIPTION:
        "After validating the app’s structure, I translated core user flows into medium-fidelity wireframes, iterating on layouts, interactions, and visual hierarchy to balance clarity and functionality. I also established a cohesive design system by defining typography, color palette, components, and spacing guidelines to ensure consistency across screens and speed up future iterations.",
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
      },
    },
    STEP3: {
      TITLE: "From Mockups to Interactive Prototype",
      DESCRIPTION:
        "Building on the design system, I crafted polished high-fidelity mockups that showcase finalized UI elements, including typography, color palette, and components. I then assembled an interactive prototype with clickable flows to simulate key user journeys. Usability tests on this prototype revealed minor tweaks needed for smoother interactions, ensuring the final design delivers a seamless, intuitive experience.",
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
    },
  },
  REFLECTION: {
    TITLE: "Reflection",
    SUBTEXT: "Trying to solve it all only blurs what really matters.",
    DESCRIPTION:
      "In the research phase, I felt overwhelmed by the range of issues uncovered through surveys, interviews, and competitive analysis, so many that I wondered how to tackle them all in one app. To regain focus, I identified the highest-impact problems and set clear scope boundaries, tackling core features first. This iterative approach allowed me to refine Yumpick into a lean prototype that truly addresses user pain points. ",
    DESCRIPTION2:
      "Ultimately, I learned that defining a manageable scope and centering every decision on real user needs are essential to creating meaningful, user-focused solutions.",
    IMAGE: {
      SRC: "/images/projects/yumpick/mockup.webp",
      DARK_SRC: "/images/projects/yumpick/mockup-dark.webp",
      ALT: "Mockup Image",
    },
    visuals: [
      {
        type: "image",
        src: "/images/projects/yumpick/mockup2.webp",
        alt: "Challenges graphic 2",
        boxHeight: { base: 240, md: 400 },
        objectFit: "contain",
        scale: 3,
        translateY: "40%",
      },
    ] satisfies VisualItem[],
  },
};

export const USER_INTERVIEW_SURVEY = [
  {
    name: "Yelp user",
    description:
      "I like seeing what people eat through photos, but the interface feels too complicated.",
    time: "5m ago",
    icon: "👩🏽‍🦱",
    color: "#F76239",
  },
  {
    name: "OpenTable user",
    description:
      "There are just too many options on the homepage. It feels endless and overwhelming.",
    time: "10m ago",
    icon: "👱🏻‍♂️",
    color: "#F76239",
  },
  {
    name: "Google Maps user",
    description:
      "It’s easy to find nearby restaurants, but there’s not enough menu information and it’s hard to discover popular places.",
    time: "10m ago",
    icon: "🧑🏻‍🦱",
    color: "#F76239",
  },
  {
    name: "Instagram user",
    description:
      "I love discovering trendy spots through photos and videos, but I still need other apps to find detailed info.",
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
