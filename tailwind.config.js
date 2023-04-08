/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "shop-bg-texture": "url('/clean-gray-paper.png')",
      },
      colors: {
        hero: {
          text: "hsl(100, 100%, 98%)",
          primary: "hsla(8, 100%, 24%, 1)",
        },
        shop: {
          text: "hsl(0, 0%, 0%)",
          bg: "hsla(190, 0%, 90%, 1)",
        },
      },
    },
  },
  plugins: [],
};
