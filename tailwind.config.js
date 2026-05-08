/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#00FFFF", // Cyan for commands and highlights
        secondary: "#8B949E", // Muted gray for secondary text
        accent: "#58A6FF", // Blue accent
        background: "#0D1117", // Very dark background
        text: "#C9D1D9", // Light gray/white primary text
        success: "#3FB950", // Green for success
        warning: "#D29922", // Yellow for warning
        error: "#F85149", // Red for error
        border: "#30363D", // Dark border color
        muted: "#6E7681", // Muted text color
      },
    },
  },
  plugins: [],
};
