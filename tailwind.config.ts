import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        "pulse-slow": "pulse 5s cubic-bezier(0.4, 0, 0.6, 1) 5s infinite",
      },
      fontFamily: {
        "kode-mono": ["var(--kode-mono)"],
        montserrat: ["var(--montserrat)"],
      },
    },
  },
  plugins: [],
};
export default config;
