/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/app/**/*.{js,ts,jsx,tsx}", "./src/components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        void: "#0A0B11",
        indigo: "#161B2E",
        cyan: "#6EF6FF",
        violet: "#BC7CFF",
        whitesoft: "#EAEFF8",
      },
      boxShadow: {
        glow: "0 0 30px rgba(188, 124, 255, 0.2)",
      },
    },
  },
  plugins: [],
};
