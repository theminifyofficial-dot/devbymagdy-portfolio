import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Gallery framing: the chassis stays neutral so client storefronts
        // supply the colour. Accent is reserved for interactive elements.
        paper: "#F7F6F2",
        ink: "#000000",
        graphite: "#4A4A45",
        // Deep green reads commerce without borrowing Shopify's own mint.
        // 9.1:1 on paper and 8.9:1 under white, so it is AA at any size.
        moss: "#0E4F32",
        "moss-deep": "#0A3B25",
        rule: "#DCDAD2",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "Georgia", "serif"],
      },
      maxWidth: {
        prose: "68ch",
      },
      transitionTimingFunction: {
        "out-strong": "cubic-bezier(0.23, 1, 0.32, 1)",
      },
      keyframes: {
        riseIn: {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "rise-in": "riseIn 600ms cubic-bezier(0.23, 1, 0.32, 1) both",
      },
    },
  },
  plugins: [],
};

export default config;
