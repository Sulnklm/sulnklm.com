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
        grey_scale_100: "#F0F0F0",
        grey_scale_300: "#F6F6F8",
        grey_scale_500: "#A4A4A4",
        grey_scale_700: "#7C7C7C",
        grey_scale_900: "#434343"
      },
      backgroundImage: {
        "gradient": "linear-gradient(180deg, #7C7C7C, #000000)",
        "gradient-dark": "linear-gradient(180deg, #4F4F4F 0%, #F6F6F8 40%, #FCFBFC 60%, #B6B6B6 100%)",
      },
      fontSize: {
        h1: ["50px", { lineHeight: "1.03" }],
        "h1-md": ["70px"],
        "h1-lg": ["75px"],
        "h1-2xl": ["80px"],

        h3: ["26px", { lineHeight: "1.1" }],
        "h3-md": ["28px"],
        "h3-lg": ["30px"],
        "h3-2xl": ["32px"],

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
        h3: {
          "@apply text-h3 font-Schoolbell text-primary dark:text-white": {},
          "@media (min-width: 768px)": {
            "@apply text-h3-md": {},
          },
          "@media (min-width: 1024px)": {
            "@apply text-h3-lg": {},
          },
          "@media (min-width: 1536px)": {
            "@apply text-h3-2xl": {},
          },
        },

        p: {
          "@apply text-p font-Sans font-[400]": {},
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
