import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#FBF7F0",
        sand: "#F3E9DD",
        parchment: "#EAD9C5",
        caramel: "#C8965A",
        wood: {
          300: "#CBA074",
          400: "#B07D4E",
          500: "#8A5A36",
          600: "#6E4427",
          700: "#5A3620",
          800: "#4A2E1C",
          900: "#362113",
        },
        ink: "#2A1C12",
        muted: "#6B5847",
        brass: {
          DEFAULT: "#C2A24C",
          dark: "#A8842F",
          light: "#D9BE74",
        },
      },
      fontFamily: {
        display: ['"Playfair Display"', "Georgia", "serif"],
        body: ['"Outfit"', "system-ui", "sans-serif"],
      },
      maxWidth: {
        "8xl": "88rem",
      },
      boxShadow: {
        lux: "0 20px 45px -20px rgba(74, 46, 28, 0.35)",
        "lux-sm": "0 12px 28px -16px rgba(74, 46, 28, 0.3)",
        "lux-lg": "0 30px 70px -25px rgba(74, 46, 28, 0.45)",
      },
      backgroundImage: {
        "wood-gradient":
          "linear-gradient(135deg, rgba(54,33,19,0.92) 0%, rgba(110,68,39,0.82) 55%, rgba(200,150,90,0.55) 100%)",
        "brass-gradient":
          "linear-gradient(135deg, #C2A24C 0%, #A8842F 100%)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s ease-out both",
      },
    },
  },
  plugins: [],
} satisfies Config;
