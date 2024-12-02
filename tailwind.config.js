/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        "2xs": "350px",
        xs: "450px", // Adding a new breakpoint for extra small screens
        "3xl": "1600px", // Adding a breakpoint for very large screens
      },
    },
  },
  plugins: [],
};
