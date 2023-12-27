import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      padding: {
        page: "6rem",
      },
      colors: {
        background: "#0F0F0F",
        foreground: "#E0E0E0",
        white: "#E0E0E0",
        black: "#0F0F0F",
        purple: {
          100: "#E0CCF4",
          200: "#D4BFEB",
          300: "#C9B2E2",
          400: "#BEA6D9",
          500: "#B29BD1",
          600: "#A78FC8",
        },
        blue: {
          100: "#C9D2F8",
          200: "#B9C4F0",
          300: "#ABB7E7",
          400: "#9CAADF",
          500: "#8F9FD6",
          600: "#8293CE",
        },
        brown: {
          100: "#EEF0A1",
          200: "#E2E293",
          300: "#D4D285",
          400: "#C6C277",
          500: "#B8B26B",
          600: "#ABA45F",
        },
        red: {
          100: "#FAD1D1",
          200: "#EEC1C1",
          300: "#E3B2B2",
          400: "#D7A3A3",
          500: "#CC9595",
          600: "#C08888",
        },
        green: {
          100: "#D3F9B5",
          200: "#C4EDA5",
          300: "#B6E095",
          400: "#A8D487",
          500: "#9AC779",
          600: "#8DBA6B",
        },
        neutral: {
          100: "#C6C6C6",
          200: "#ACACAC",
          300: "#929292",
          400: "#787878",
          500: "#5D5D5D",
          600: "#434343",
          700: "#292929",
        },
      },
    },
  },
  plugins: [],
};
export default config;

