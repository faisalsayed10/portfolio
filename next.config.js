module.exports = {
	async redirects() {
		return [
			{
				source: "/firefiles-selfhost",
				destination: "https://firefiles.vercel.app/docs",
				permanent: true
			}
		];
	},
	webpack(config) {
		config.module.rules.push({
			test: /\.svg$/,
			use: ["@svgr/webpack"]
		});

		return config;
	}
};
