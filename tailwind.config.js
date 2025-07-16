/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",

  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      borderColor: {
        DEFAULT: "var(--border-color)",
      },

      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        },
        screens: {
          sm: "640px",
          md: "768px",
          lg: "1024px",
          xl: "1280px",
          "2xl": "1540px",
        },
      },

      boxShadow: {
        br: "4px 4px 10px rgba(0, 0, 0, 0.55)",
        brWhite: "4px 4px 10px rgba(255, 255, 255, 0.55)",
        brBoth:
          "inset 0.5px 2px 2px rgba(0, 0, 0, 0.08), inset 0 -1px 5px rgba(0, 0, 0, 0.03), 4px 4px 25px rgba(255, 255, 255, 0.9)",
        "inner-custom": "inset 0 1px 3px rgba(0, 0, 0, 0.1)",
        brBothDark:
          "inset 0.5px 2px 2px rgba(0, 0, 0, 2), inset 0 -2px 5px rgba(0, 0, 0, 0.5), 4px 4px 20px rgba(255, 255, 255, 0.029)",
        "inner-custom": "inset 0 1px 3px rgba(0, 0, 0, 0.1)",
      },

      animation: {
        "shiny-text": "shiny-text 8s infinite",
        "shimmer-slide":
          "shimmer-slide var(--speed) ease-in-out infinite alternate",
        "spin-around": "spin-around calc(var(--speed) * 2) infinite linear",
      },
      keyframes: {
        "shiny-text": {
          "0%, 90%, 100%": {
            "background-position": "calc(-100% - var(--shiny-width)) 0",
          },
          "30%, 60%": {
            "background-position": "calc(100% + var(--shiny-width)) 0",
          },
        },
        "shimmer-slide": {
          to: {
            transform: "translate(calc(100cqw - 100%), 0)",
          },
        },
        "spin-around": {
          "0%": {
            transform: "translateZ(0) rotate(0deg)",
          },
          "15%, 35%": {
            transform: "translateZ(0) rotate(90deg)",
          },
          "65%, 85%": {
            transform: "translateZ(0) rotate(270deg)",
          },
          "100%": {
            transform: "translateZ(0) rotate(360deg)",
          },
        },
      },
      screens: {
        "sm-custom": { raw: "(min-width: 500px) and (max-width: 800px)" },
        "lg-custom": { raw: "(min-width: 1023px) and (max-width: 1279px)" },
        "lg-2-custom": { raw: "(min-width: 1280px) and (max-width: 1439px)" },
        "xl-custom": { raw: "(min-width: 1440px) and (max-width: 1536px)" },
        "3xl-custom": { raw: "(min-width: 2300px) and (max-width: 3000px)" },
      },
      colors: {
        primary: "#111111",
        background: "#EBEBE7",
        grey_scale_50: "#F9F9F9",
        grey_scale_100: "#F8F8F8",
        grey_scale_200: "#EFEFF1",
        grey_scale_300: "#F6F6F8",
        grey_scale_500: "#A4A4A4",
        grey_scale_700: "#9A9A9A",
        grey_scale_800: "#797979",
        grey_scale_900: "#434343",
      },
      backgroundImage: {
        "pattern-bg": "url('/images/pattern.png')",
        gradient: "linear-gradient(180deg, #434343, #000000)",
        "gradient-dark":
          "linear-gradient(180deg, #434343 0%, #F6F6F8 40%, #FCFBFC 60%, #B6B6B6 100%)",
        "orange-gradient":
          "linear-gradient(180deg, #ED3C00 0%, #FF6741 60%, #A81C00 100%)",
      },
      fontSize: {
        h1: ["48px", { lineHeight: "1" }],
        "h1-sm": ["55px"],
        "h1-md": ["80px"],
        "h1-lg": ["85px"],
        "h1-2xl": ["100px"],

        h2: ["40px", { lineHeight: "1.03" }],
        "h2-md": ["50px"],
        "h2-lg": ["60px"],

        h3: ["30px", { lineHeight: "1.1" }],
        "h3-md": ["33px"],
        "h3-lg": ["35px"],

        h4: ["20px", { lineHeight: "1.1" }],
        "h4-md": ["22px"],
        "h4-lg": ["24px"],

        h5: ["16px", { lineHeight: "1.3" }],
        "h5-md": ["16px"],
        "h5-lg": ["16px"],

        p: ["16px", { lineHeight: "1.3" }],
        "p-md": ["16px"],
        "p-lg": ["16px"],
      },
      fontFamily: {
        Sans: ['"Geist", sans-serif'],
        Schoolbell: ['"Schoolbell", cursive'],
        JetBrains: ['"JetBrains Mono", monospace'],
        Crimson: ['"Crimson Pro", serif'],
        Reenie: ['"Reenie Beanie", cursive'],
        Chelsea: ['"Chelsea Market", system-ui'],
        Playfair: ['"Playfair Display", serif'],
        PerfectlyNineties: ["'Perfectly Nineties'", "sans-serif"],
      },
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        h1: {
          "@apply text-h1 font-Sans text-primary dark:text-white font-[500] text-center tracking-tighter":
            {},
          "@media (min-width: 340px)": {
            "@apply text-h1-sm": {},
          },
          "@media (min-width: 768px)": {
            "@apply text-h1-md": {},
          },
          "@media (min-width: 1024px)": {
            "@apply text-h1-lg": {},
          },
          "@media (min-width: 1536px)": {
            "@apply text-h1-2xl": {},
          },
        },
        h2: {
          "@apply text-h2 font-Sans font-[500] tracking-tighter text-grey_scale_900 dark:text-white text-center":
            {},
          "@media (min-width: 768px)": {
            "@apply text-h2-md": {},
          },
          "@media (min-width: 1024px)": {
            "@apply text-h2-lg": {},
          },
        },
        h3: {
          "@apply text-h3 font-Sans tracking-tighter text-grey_scale_900 font-[450] dark:text-white":
            {},
          "@media (min-width: 768px)": {
            "@apply text-h3-md": {},
          },
          "@media (min-width: 1024px)": {
            "@apply text-h3-lg": {},
          },
        },
        h4: {
          "@apply text-h4 font-PerfectlyNineties font-[500] dark:text-white text-grey_scale_900":
            {},
          "@media (min-width: 768px)": {
            "@apply text-h4-md": {},
          },
          "@media (min-width: 1024px)": {
            "@apply text-h4-lg": {},
          },
        },

        h5: {
          "@apply text-h5 font-Sans text-grey_scale_800 dark:text-grey_scale_500/90 font-[300]":
            {},
          "@media (min-width: 768px)": {
            "@apply text-h5-md": {},
          },
          "@media (min-width: 1024px)": {
            "@apply text-h5-lg": {},
          },
        },

        p: {
          "@apply text-p font-Sans dark:text-white text-grey_scale_900 font-[300]":
            {},
          "@media (min-width: 768px)": {
            "@apply text-p-md": {},
          },
          "@media (min-width: 1024px)": {
            "@apply text-p-lg": {},
          },
        },
      });
    },
  ],
};
