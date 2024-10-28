import type { Config } from "tailwindcss";

const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        purpleBg: "#854CFF",
        heroColor: "#FFAE00",
        purpleGrad: "#504CFF",
        blackBg: "#1A1A1A",
        portfolioText: "#FFE4AA",
        arrowBorder: "#FFE17D",
        portfolioBorder: "#FFEDC7",
        reviewCard: "#151515",
        contactFormBg: "#0A0D17",
      },
      backgroundImage: {
        "dual-radial":
          "radial-gradient(circle at top left, var(--tw-gradient-stops)), radial-gradient(circle at bottom right, var(--tw-gradient-stops))",
        "blur-gradient": "radial-gradient(circle, #504CFF60 0%, #504CFF00 70%)",
        "blur-gradient-purple":
          "radial-gradient(circle, #854CFF60 0%, #854CFF00 70%)",
        "gradient-border": "linear-gradient(90deg, #5B3CCC, #020105)",
      },
      animation: {
        spotlight: "spotlight 2s ease .75s 1 forwards",
        "gradient-move": "gradient-move 4s linear infinite",
        // "spin-slow": "spin 20s linear infinite",
        // circle: "circle 20s linear infinite",
        // "move-gradient": "moveGradient 3s linear infinite",
        // "move-gradient-vertical": "moveGradientVertical 3s linear infinite",
        circle: "circle 20s linear infinite",
        "dash-move": "dashMove 3s linear infinite",
        "dash-move-vertical": "dashMoveVertical 20s linear infinite",
        scroll:
          "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
      },
      keyframes: {
        spotlight: {
          "0%": {
            opacity: "0",
            transform: "translate(-72%, -62%) scale(0.5)",
          },
          "100%": {
            opacity: "1",
            transform: "translate(-50%,-40%) scale(1)",
          },
        },
        "gradient-move": {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "100% 50%" },
        },
        // circle: {
        //   "0%": { strokeDashoffset: "0" },
        //   "100%": { strokeDashoffset: "283" }, // Approximately 2 * PI * 45 (circle radius)
        // },
        // moveGradient: {
        //   "0%": { backgroundPosition: "200% 0" },
        //   "100%": { backgroundPosition: "-200% 0" },
        // },
        // moveGradientVertical: {
        //   "0%": { backgroundPosition: "0 200%" },
        //   "100%": { backgroundPosition: "0 -200%" },
        // },
        circle: {
          "0%": { strokeDashoffset: "0" },
          "100%": { strokeDashoffset: "283" },
        },
        dashMove: {
          "0%": { backgroundPosition: "0 0" },
          "100%": { backgroundPosition: "40px 0" },
        },
        dashMoveVertical: {
          "0%": { backgroundPosition: "0 0" },
          "100%": { backgroundPosition: "0 40px" },
        },
        scroll: {
          to: {
            transform: "translate(calc(-50% - 0.5rem))",
          },
        },
      },
    },
  },
  plugins: [addVariablesForColors],
};

// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}

export default config;
