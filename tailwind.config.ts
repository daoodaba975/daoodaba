import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/preline/preline.js",
  ],
  theme: {
    colors: {
      snow: "#EBF2FA",
      silver: "#D2D7DF",
      celtic: "#0953BC",
      pacific: "#85C4FE",
      emerald: "#49D49D",
      mint: "#9CE8C9",
      eigengrau: "#16161D",
      night: "#101113",
      red: "#E54B4B",
    },
    extend: {
      keyframes: {
        starScale: {
          "from, to": {
            transform: "rotate(0) scale(0)",
            opacity: "0",
          },

          "50%": {
            transform: "rotate(180deg) scale(1)",
            opacity: "1",
          },
        },
        scrollX: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
        scrollY: {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(-100%)" },
        },
      },
      animation: {
        starScale: "starScale 800ms ease infinite",
        slowspin: "spin 3s linear infinite",
        scrollX: "scrollX var(--duration) linear infinite",
        scrollY: "scrollY var(--duration) linear infinite",
      },
    },
  },
  plugins: [require("preline/plugin")],
};
export default config;
