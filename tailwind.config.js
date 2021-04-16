module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    variants: {},
    backgroundColor: (theme) => ({
      ...theme("colors"),
      p_dark: "#22292F",
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
