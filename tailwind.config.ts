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
        aka: {
          50: "#fef2f2",
          100: "#fee2e2",
          200: "#fecaca",
          300: "#f87171",
          400: "#dc2626",
          500: "#B91C1C",
          600: "#991B1B",
          700: "#7F1D1D",
          800: "#681919",
          900: "#501414",
        },
        kuro: {
          50: "#f5f5f4",
          100: "#e5e5e4",
          200: "#ccccca",
          300: "#a3a3a0",
          400: "#737370",
          500: "#525250",
          600: "#3a3a38",
          700: "#2a2a28",
          800: "#1a1a18",
          900: "#111111",
          950: "#0a0a0a",
        },
        washi: {
          50: "#FDFCFA",
          100: "#FAF7F2",
          200: "#F5F0E8",
          300: "#EDE5D5",
          400: "#DDD0B8",
          500: "#C9B799",
          600: "#B09A78",
          700: "#917A5C",
          800: "#76634D",
          900: "#615242",
        },
        gold: {
          50: "#FBF8F0",
          100: "#F5EDD6",
          200: "#EBDAAD",
          300: "#D4BC7B",
          400: "#C9A96E",
          500: "#B08D4A",
          600: "#96733A",
          700: "#7A5B30",
          800: "#64492A",
          900: "#523C25",
        },
        sumi: {
          50: "#f6f6f5",
          100: "#e7e7e5",
          200: "#d1d0cd",
          300: "#b1b0ab",
          400: "#8a8882",
          500: "#6f6d67",
          600: "#5c5a55",
          700: "#4d4b47",
          800: "#42413d",
          900: "#2d2c2a",
        },
      },
      fontFamily: {
        sans: ['"Noto Sans JP"', "Inter", "system-ui", "sans-serif"],
        display: ['"Noto Sans JP"', "Inter", "system-ui", "sans-serif"],
      },
      spacing: {
        18: "4.5rem",
        88: "22rem",
        128: "32rem",
      },
      animation: {
        "fade-in": "fadeIn 0.8s ease-out forwards",
        "slide-up": "slideUp 0.6s ease-out forwards",
        "pulse-soft": "pulseSoft 3s ease-in-out infinite",
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        pulseSoft: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.8" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
