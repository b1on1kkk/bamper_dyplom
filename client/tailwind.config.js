const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary_text: "#EEEEEE",
        primary_bg: "#393E46",
        primary_border: "#222831"
      },
      keyframes: {
        "slide-up": {
          "0%": { transform: "translateY(5%)", opacity: "0%" },
          "100%": { transform: "translateY(0)", opacity: "100%" }
        }
      },
      animation: {
        "slide-up": "slide-up 0.3s"
      }
    }
  },
  darkMode: "class",
  plugins: [
    nextui({
      themes: {
        light: {
          // ...
          colors: {
            primary: "#EEEEEE"
          }
        },
        dark: {
          // ...
          colors: {}
        }
        // ... custom themes
      }
    })
  ]
};
