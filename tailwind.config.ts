import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        vintage: {
          50: '#f9f7f4',
          100: '#f0ebe3',
          200: '#e3d7c3',
          300: '#d1bc9e',
          400: '#bc9d77',
          500: '#a8825c',
          600: '#8f6d4d',
          700: '#765841',
          800: '#5f4736',
          900: '#4d3a2d',
        }
      }
    },
  },
  plugins: [],
};
export default config;
