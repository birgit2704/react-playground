import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      textColor: {
        pp: {
          base: "rgb(var(--color-text-base) / <alpha-value>)",
          muted: "rgb(var(--color-text-muted) / <alpha-value>)",
        },
      },
      backgroundColor: {
        pp: {
          fill: "rgb(var(--color-fill) / <alpha-value>)",
          "button-accent": "rgb(var(--color-button-accent) / <alpha-value>)",
          "button-hover": "rgb(var(--color-button-hover) / <alpha-value>)",
        },
      },
      gradientColorStops: {
        pp: {
          hue: "rgb(var(--color-fill) / <alpha-value>)",
        },
      },
    },
  },

  plugins: [require("daisyui")],
};

export default config;
