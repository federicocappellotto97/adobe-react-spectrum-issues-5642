import defaultTheme from "tailwindcss/defaultTheme"
import plugin from "tailwindcss/plugin"
import { Config } from "tailwindcss/types/config"

const config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/lib/**/*.{js,ts,jsx,tsx}",
    "./src/core/**/*.{js,ts,jsx,tsx}",
    "./src/styles/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontWeight: {
        regular: "400",
      },
      minHeight: {
        screen: "calc(var(--vh, 1vh) * 100)",
      },
      height: {
        screen: "calc(var(--vh, 1vh) * 100)",
      },
      keyframes: {
        slide: {
          from: {
            transform: "var(--origin)",
            opacity: "0",
          },
          to: {
            transform: "translateY(0)",
            opacity: "1",
          },
        },
        heartbeat: {
          "0%": {
            transform: "scale( .75 )",
          },
          "20%": {
            transform: "scale( 1 )",
          },
          "40%": {
            transform: "scale( .75 )",
          },
          "60%": {
            transform: "scale( 1 )",
          },
          "80%": {
            transform: "scale( .75 )",
          },
          "100%": {
            transform: "scale( .75 )",
          },
        },
        "progress-bar-indeterminate": {
          from: {
            left: "0",
            transform: "translateX(-100%)",
          },
          to: {
            left: "100%",
            transform: "translateX(0)",
          },
        },
        "progress-bar-circular-indeterminate": {
          from: {
            rotate: "0",
          },
          to: {
            rotate: "360deg",
          },
        },
        shimmer: {
          "100%": {
            transform: "translateX(100%)",
          },
        },
      },
    },
    fontFamily: {
      sans: ["var(--font-roboto)", ...defaultTheme.fontFamily.sans],
      serif: [...defaultTheme.fontFamily.serif],
    },
  },
  plugins: [require("tailwindcss-react-aria-components")],
} satisfies Config

export default config
