// tailwind.config.js
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "100E0F": "#100E0F",
        "5A1E20": "#5A1E20",
        CDCBD6: "#CDCBD6",
        A6A0AA: "#A6A0AA",
        "211E29": "#211E29",
      },
    },
  },
  plugins: [],
};
