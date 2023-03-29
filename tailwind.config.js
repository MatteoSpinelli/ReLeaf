/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#159C71",
        secondary: "#62DA96",
        contrast: "#F3713D",
        tertiary: "#90E3B0",
        cyan: "#CDE9ED",
        gray: "#F2F2F2",
        background: "#FFFFFF",
        backgroundDark: "#283442",
      },
    },
  },
  plugins: [],
};
