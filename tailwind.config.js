/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      dark: "#202022",
      gray: "#979797",
      blue: "#7678ed",
      lightBlue: "#dcdcff",
      orange: "#ff7a55",
      white: "#f9fafc",
    },
    extend: {},
    screens: {
      xxs: "400px",
      xs: "480px",
      xsSm: "580px",
      sm: "640px",
      md: "768px",
      mdLg: "900px",
      lg: "1024px",
      lgXl: "1110px",
      xl: "1280px",
    },
  },
  plugins: [],
};

