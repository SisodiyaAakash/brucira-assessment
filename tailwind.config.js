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
        heading: ["TWK Everett"],
        body: ["Open Sans"],
      },
      container: {
        center: true,
        padding: "1rem",
      },
      fontSize: {
        "9xl": ["104px", { lineHeight: "112px", letterSpacing: "-0.03em" }],
        "8xl": ["86px", { lineHeight: "88px", letterSpacing: "-0.03em" }],
        "7xl": ["68px", { lineHeight: "74px", letterSpacing: "-0.01em" }],
        "6xl": ["64px", { lineHeight: "68px", letterSpacing: "-0.04em" }],
        "5xl": ["52px", { lineHeight: "56px", letterSpacing: "-0.02em" }],
        "4xl": ["32px", { lineHeight: "38px", letterSpacing: "-0.04em" }],
        "3xl": ["24px", { lineHeight: "28px", letterSpacing: "-0.04em" }],
        "2xl": ["20px", { lineHeight: "28px", letterSpacing: "-0.04em" }],
        xl: ["18px", { lineHeight: "26px", letterSpacing: "-0.01em" }],
        lg: ["16px", { lineHeight: "20px", letterSpacing: "-0.04em" }],
        base: ["14px", { lineHeight: "19px", letterSpacing: "-0.04em" }],
        sm: ["13px", { lineHeight: "19px", letterSpacing: "-0.004em" }],
      },
    },
  },
  plugins: [],
};
