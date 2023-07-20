/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    colors: {
      primary: "rgb(20, 184, 166)",
      muted: "rgb(107 114 128)",
      hover: "rgb(20 184 166 )",
      white: "#fff",
      
      //   blue: "#1fb6ff",
      //   purple: "#7e5bef",
      //   pink: "#ff49db",
      //   orange: "#ff7849",
      //   green: "#13ce66",
      //   yellow: "#ffc82c",
      "gray-dark": "#273444",
      gray: "#8492a6",
      //   "gray-light": "#d3dce6",
    },
    fontFamily: {
      sans: ["Roboto", "sans-serif"],
      serif: ["Poltawski Nowy", "serif"],
    },
    extend: {},
  },
  plugins: [],
};
