/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/*.html"],
  theme: {
    extend: {
      backgroundImage: {
        "full-pattern": "url('./images/bg-curve-desktop.svg')",
      },
      colors: {
        emerald: {
          "a-400": '#34d399',
        },
      },
    },
  },
  plugins: [],
};
