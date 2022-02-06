module.exports = {
	async redirects() {
		return [
			{
				source: "/firefiles-selfhost",
				destination: "https://firefiles.vercel.app/docs/self-hosted/02-deploy",
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
