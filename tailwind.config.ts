import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#7A5C2E",
          dark: "#5C4422",
          light: "#A68B5B",
        },
        accent: {
          DEFAULT: "#C4A35A",
          light: "#D4BB7E",
          dark: "#A8893E",
        },
        warm: {
          DEFAULT: "#FAF7F2",
          dark: "#F0EBE1",
          deeper: "#E8E0D0",
        },
        neutral: {
          950: "#0A0A0A",
          900: "#171717",
          850: "#1E1E1E",
          800: "#262626",
        },
      },
      fontFamily: {
        sans: ['"Noto Sans KR"', "system-ui", "sans-serif"],
        serif: ['"Gowun Batang"', "Georgia", "serif"],
        display: ['"Lora"', "Georgia", "serif"],
      },
      spacing: {
        "18": "4.5rem",
        "22": "5.5rem",
        "30": "7.5rem",
      },
      animation: {
        "fade-in": "fadeIn 0.8s ease-out forwards",
        "fade-in-up": "fadeInUp 0.8s ease-out forwards",
        "fade-in-left": "fadeInLeft 0.8s ease-out forwards",
        "slide-in": "slideIn 0.6s ease-out forwards",
        "scale-in": "scaleIn 0.5s ease-out forwards",
        "line-grow": "lineGrow 1s ease-out forwards",
      },
      keyframes: {
        heroZoom: {
          "0%": { transform: "scale(1)" },
          "100%": { transform: "scale(1.08)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeInLeft: {
          "0%": { opacity: "0", transform: "translateX(-30px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        slideIn: {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        scaleIn: {
          "0%": { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        lineGrow: {
          "0%": { width: "0" },
          "100%": { width: "100%" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
