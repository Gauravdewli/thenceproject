/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "background-img": "url(Assets/image.png)",
      },
    },
  },
  plugins: [],
};
