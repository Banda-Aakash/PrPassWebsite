import type { Config } from "tailwindcss";

const withMT = require("@material-tailwind/react/utils/withMT");


const config: Config =  withMT({
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      'mob': { 'min': '300px', 'max': '850px' },
      'des': { 'min': '1001px' },
      'tab': { 'min': '851px', 'max': '1000px' },
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        'pixel':['Pixelify Sans', 'sans-serif'],
    },
  },
  },
  plugins: [],
});
export default config;
