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
        ink: {
          DEFAULT: "#121418",
          muted: "#3d4349",
          subtle: "#6b7280",
        },
        stone: {
          DEFAULT: "#f5f4f1",
          dark: "#e8e6e1",
          light: "#fafaf9",
        },
        accent: {
          DEFAULT: "#2d4a3e",
          hover: "#243d32",
          light: "#e8eeeb",
        },
        slate: {
          blue: "#3d5a73",
        },
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        content: "72rem",
      },
    },
  },
  plugins: [],
};

export default config;
