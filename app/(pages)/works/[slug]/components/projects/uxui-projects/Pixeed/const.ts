export const PIXEED_PROJECT = {
  KEY_FEATURES: {
    SUBTEXT: "Quick preview",
    HEADING: "Key Features ✦",
  },
  BACKGROUND: {
    HEADING: "Why This Project?",
    TITLE: "From Messy Feedback to Clear Action",
    DESCRIPTION:
      "While working on SaaS and freelance projects, I often struggled with scattered client feedback, long user testing videos, and tickets that lacked context. Important details were buried in lengthy recordings, making it hard for teams to act quickly and confidently. Pixeed was created to turn messy video feedback into clear, actionable insights by automatically breaking it into chapters, generating tickets with the right context, and helping teams collaborate with clarity from the start.",
    IMAGE: {
      SRC: "/images/projects/pixeed/background.png",
      ALT: "Pixeed image",
    },
  },
  PROBLEM: {
    SUBTEXT: "Problem",
    HEADING: "Real-World Frustration",
    TITLE: "Where things often get messy",
    DESCRIPTION: {
      1: "In small teams, client feedback often plays a key role in QA. But the way feedback comes in, whether through vague videos, scattered emails, or out-of-sync DMs, creates real friction.",
      2: "🌀 Without context, feedback gets misunderstood or misprioritized.",
      3: "🔁 Teams unknowingly revisit the same issue, unsure if it is new, resolved, or still in development.",
      4: "💬 Designers and developers repeat the same explanations because past decisions were not visible.",
      5: "The result? Duplicate tickets, wasted time, and broken focus for both the team and the client. This inefficiency did not come from laziness. It came from a lack of visibility. It does not just slow down the team, it breaks the loop.",
    },
    IMAGE: {
      SRC: "/images/projects/pixeed/problem.jpg",
      ALT: "Pixeed image",
    },

    IMAGE2: {
      SRC: "/images/projects/pixeed/as-is-flow.jpg",
      ALT: "Pixeed As-is-flow image",
    },
  },
  COMPETITOR_ANALYSIS: {
    HEADING: "Alternative Approaches to Client Feedback",
    IMG1: {
        SRC: "/images/projects/pixeed/pixeed-competitors.jpg",
        ALT: "Competitor Analysis Image",
      },
    IMG2: {
      SRC: "/images/projects/pixeed/pixeed-competitors-table.jpg",
      ALT: "Competitor Analysis Image",
    },
    TITLE: "Video-first vs. Pin-on-page: What’s the Difference?",
    DESCRIPTION:
      "Tools like Marker.io and BugHerd focus on pin-on-page annotations. This is perfect for quick visual fixes, copy tweaks, or spotting small UI glitches. You click directly on the page, leave a note, and the team knows exactly where to look. This works well for simple, isolated changes.",
      DESCRIPTION2:
      "However, when a project involves complex user flows, multi-step processes, or interactions across multiple screens, single-point annotations fall short. In these cases, video feedback becomes a better solution, as it captures the entire journey in context and helps teams understand not just where an issue occurs, but how the user got there.",
  },
  DIFFERENTIATORS: {
    SUBTEXT: "Key Opportunities",
    HEADING: "How Can We Stand Out?",
    1: {
      TITLE: "Video-first feedback",
      DESCRIPTION:
        "Shows complete UX flows in one recording, covering both UI bugs and interaction issues, making it clear how problems occur.",
    },
    2: {
      TITLE: "AI-Powered Chaptering & Ticketing",
      DESCRIPTION:
        "Splits long videos into timestamped issues and instantly turns them into ready-to-use tickets with full context.",
    },
    3: {
      TITLE: "Duplicate Report Prevention",
      DESCRIPTION: "Detects overlapping issues to avoid duplicate QA work.",
    },
    4: {
      TITLE: "Shared Context",
      DESCRIPTION:
        "Connects feedback, tickets, and resolutions so the whole team stays aligned.",
    },
  },
  DESIGN_PROCESS: {
    HEADING: "Bringing Ideas to Life",
    STEP1: {
        TITLE: "Step 1: Laying the Foundations",
        DESCRIPTION: "Before diving into full UI design, I mapped out the information architecture and user flows to ensure the app’s structure would meet real user needs. This groundwork let me validate key workflows and flow into higher-fidelity mockups with confidence.",
        IA: {
          IMG: {
            SRC: "/images/projects/pixeed/pixeed-ia.png",
            ALT: "Information Architecture Image",
          },
        },
        IA_DARK: {
            IMG: {
              SRC: "/images/projects/pixeed/pixeed-ia-dark.png",
              ALT: "Information Architecture Image",
            },
          },
        USER_FLOW: {
          IMG: {
            SRC: "/images/projects/pixeed/pixeed-user-flow.png",
            ALT: "User Flow Image",
          },
        }
      },
  }
};
