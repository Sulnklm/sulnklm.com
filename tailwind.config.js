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
      boxShadow: {
        'br': '4px 4px 10px rgba(0, 0, 0, 0.55)',
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
        primary: "#252525",
        background: "#D9D9D1",
        grey_scale_100: "#F8F8F8",
        grey_scale_200: "#EFEFF1",
        grey_scale_300: "#F6F6F8",
        grey_scale_500: "#A4A4A4",
        grey_scale_700: "#9A9A9A",
        grey_scale_800: "#616161",
        grey_scale_900: "#434343",
      },
      backgroundImage: {
        gradient: "linear-gradient(180deg, #434343, #000000)",
        "gradient-dark":
          "linear-gradient(180deg, #434343 0%, #F6F6F8 40%, #FCFBFC 60%, #B6B6B6 100%)",
      },
      fontSize: {
        h1: ["48px", { lineHeight: "1" }],
        "h1-sm": ["55px"],
        "h1-md": ["80px"],
        "h1-lg": ["85px"],
        "h1-2xl": ["90px"],

        h2: ["26px", { lineHeight: "1.03" }],
        "h2-md": ["42px"],
        "h2-lg": ["45px"],

        h3: ["26px", { lineHeight: "1.1" }],
        "h3-md": ["28px"],
        "h3-lg": ["30px"],

        p: ["16px", { lineHeight: "1.3" }],
        "p-md": ["16px"],
        "p-lg": ["17px"],
      },
      fontFamily: {
        Sans: ['"Geist", sans-serif'],
        Schoolbell: ['"Schoolbell", cursive'],
        JetBrains: ['"JetBrains Mono", monospace'],
        Crimson: ['"Crimson Pro", serif'],
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
          "@apply text-h2 font-Schoolbell font-[400] text-primary dark:text-white text-center":
            {},
          "@media (min-width: 768px)": {
            "@apply text-h2-md": {},
          },
          "@media (min-width: 1024px)": {
            "@apply text-h2-lg": {},
          },
        },
        h3: {
          "@apply text-h3 font-Schoolbell text-primary dark:text-white": {},
          "@media (min-width: 768px)": {
            "@apply text-h3-md": {},
          },
          "@media (min-width: 1024px)": {
            "@apply text-h3-lg": {},
          },
        },

        p: {
          "@apply text-p font-Sans font-[350]": {},
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
