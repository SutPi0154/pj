/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    colors: {
      firstColor: "hsl(250, 69%, 61%)",
      firsColorSecond: "hsl(250, 69%, 61%)",
      firstColorAlt: "hsl(250, 57%, 53%)",
      firstColorLighter: "hsl(250, 92%, 85%)",
      titleColor: "hsl(250, 8%, 15%)",
      textColor: "hsl(250, 8%, 45%)",
      textColorLight: "hsl(250, 8%, 65%)",
      inputColor: "hsl(250, 70%, 96%)",
      bodyColor: "hsl(250, 60%, 99%)",
      containerColor: "#fff",
      scrollBarColor: "hsl(250, 12%, 90%)",
      scrollThumbColor: "hsl(250, 12%, 80%)",
    },
    fontFamily: {
      sans: ["Poppins", " sans-serif"],
      serif: ["Merriweather", "serif"],
    },

    extend: {},
  },
};
