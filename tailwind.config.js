/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        cursive: ["Lovers Quarrel", "cursive"],
        caps: ["Cormorant Garamond", "serif"],
      },
    },
  },
  plugins: [],
};
