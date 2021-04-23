module.exports = {
	async rewrites() {
		return [
			{
				source: '*',
				destination: 'http://api.ricosotomayor.com/*',
			},
		];
	},
};
