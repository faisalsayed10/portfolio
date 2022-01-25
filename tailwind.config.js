module.exports = {
	mode: "jit",
	content: ["./src/**/*.{html,js,ts,tsx}"],
	purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		variants: {},
		backgroundColor: (theme) => ({
			...theme("colors"),
			p_dark: "#22292F"
		}),
		extend: {
			backgroundImage: (theme) => ({
				wave: "url('/wave.svg')",
			})
		}
	},
	variants: {
		extend: {}
	},
	plugins: []
};
