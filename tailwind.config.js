/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}", "./src/**/*.css"],

  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        red: "var(--red)",
      },
      fontFamily: {
        heading: ["var(--headingfont)"],
        body: ["var(--bodyfont)"],
      },
    },
  },
  plugins: [],
};
