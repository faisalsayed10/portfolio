module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    variants: {},
    backgroundColor: (theme) => ({
      ...theme("colors"),
      p_dp: "#575fcf",
      p_dark: "#22292F",
      p_yy: "#ffdd59",
      secondary: "#ffed4a",
      danger: "#e3342f",
    }),
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
