module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#f79cdf",
        // secondary: "#f79cdf",
        secondary: "#ff00aa",
        bubbleGum: "#ff77e9",
        SS: "#ed217c",
      },
    },
  },
  plugins: ["./node_modules/@themesberg/flowbite/**/*.js"],
};
