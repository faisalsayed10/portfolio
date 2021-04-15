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
      p_b: "#2378f9",
      danger: "#e3342f",
    }),
    extend: {
      backgroundImage: (theme) => ({
        main: "url('/bg-main.jpg')",
        wave: "url('/wave-haikei.svg')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
