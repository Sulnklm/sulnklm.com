/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
  ],
  
  theme: {
    extend: {
      screens: {
        "sm-custom": { raw: "(min-width: 500px) and (max-width: 800px)" },
        "lg-custom": { raw: "(min-width: 1023px) and (max-width: 1279px)" },
        "lg-2-custom": { raw: "(min-width: 1280px) and (max-width: 1439px)" },
        "xl-custom": { raw: "(min-width: 1440px) and (max-width: 1536px)" },
        "3xl-custom": { raw: "(min-width: 2300px) and (max-width: 3000px)" },
      },
      colors: {
        primary: "#252525",
        background: "#FFFFFF",
        lightGrey: "#F6F6F8",
        darkGrey: "#A4A4A4",
      },
      fontSize: {
        h1: ["50px", { lineHeight: "1.1" }],
        "h1-md": ["40px"],
        "h1-lg": ["45px"],
        "h1-2xl": ["80px"],

        p: ["16px", { lineHeight: "1.3" }],
        "p-md": ["16px"],
        "p-lg": ["17px"],
        "p-2xl": ["18px"],
      },
      fontFamily: {
        Sans: ['"Instrument Sans", sans-serif'],
        Schoolbell: ['"Schoolbell", cursive'],
      },
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        h1: {
          "@apply text-h1 font-Sans text-primary dark:text-white font-[600] text-center":
            {},
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

        p: {
          "@apply text-p font-Sans  font-[400] text-center":
            {},
          "@media (min-width: 768px)": {
            "@apply text-p-md": {},
          },
          "@media (min-width: 1024px)": {
            "@apply text-p-lg": {},
          },
          "@media (min-width: 1536px)": {
            "@apply text-p-2xl": {},
          },
        },
      });
    },
  ],
};
