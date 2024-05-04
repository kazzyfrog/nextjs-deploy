import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    keyframes: {
      horizontal: {
        from: {
          transform: "translateX(0)",
        },
        to: {
          transform: "translateX(100vw)",
        },
      },

      vertical: {
        from: {
          transform: "translateY(0)",
        },
        to: {
          transform: "translateY(100vh)",
        },
      },

      spin: {
        from: {
          transform: "rotate(0deg)",
        },
        to: {
          transform: "rotate(360deg)",
        },
      },

      ping: {
        "0%": {
          transform: "scale(1)",
          opacity: "1",
        },
        "100%": {
          transform: "scale(2)",
          opacity: "0",
        },
      },

      pulse: {
        "0%, 100%": {
          opacity: "1",
        },
        "50%": {
          opacity: ".5",
        },
      },

      bounce: {
        "0%, 100%": {
          transform: "translateY(-10%)",
        },
        "50%": {
          transform: "translateY(0)",
        },
      },
      squeeze: {
        "0%, 100%": {
          transform: "scale(1, 1)",
        },
        "50%": {
          transform: "scale(1.1, 0.9)",
        },
      },
    },
  },
  plugins: [],
};
export default config;
