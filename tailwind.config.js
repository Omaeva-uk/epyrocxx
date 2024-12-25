const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");


/** @type {import('tailwindcss').Config} */


export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        Estoria: ["Erstoria", "sans-serif"],
        Luxenta: ["Luxenta", "cursive"],
        Lato: ["Lato", "serif"],
      },
      colors: {
        h1: "#F3FEB8",
        h2: "#821131",
        action: "#C7253E",
        section: "#FFA500",
      },
      fontWeight: {
  			thin: '100',
  			extraLight: '200',
  			light: '300',
  			normal: '400',
  			medium: '500',
  			semiBold: '600',
  			bold: '700',
  			extraBold: '800',
  			black: '900'
  		},
    },
  },
  plugins: [addVariablesForColors],
}


// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
function addVariablesForColors({
  addBase,
  theme
}) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(Object.entries(allColors).map(([key, val]) => [`--${key}`, val]));

  addBase({
    ":root": newVars,
  });
}

