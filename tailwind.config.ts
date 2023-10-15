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
          base: "var(--color-text-base)",
          muted: "var(--color-text-muted)",
        },
      },
      backgroundColor: {
        pp: {
          fill: "var(--color-fill)",
          "button-accent": "var(--color-button-accent)",
          "button-hover": "var(--color-button-hover)",
        },
      },
      gradientColorStops: {
        pp: {
          hue: "var(--color-fill)",
        },
      },
    },
  },

  plugins: [require("daisyui")],
};

export default config;
