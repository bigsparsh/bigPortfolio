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
        primary: {
          100: "#FF4200",
          200: "#C23706",
          300: "#A63200",
          400: "#8A2400",
          500: "#2E0800",
        },
      },
    },
  },
  plugins: [],
};
export default config;
