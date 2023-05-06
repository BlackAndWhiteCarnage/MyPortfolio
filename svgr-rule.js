const svgoConfig = require('./svgo.config');

module.exports = {
	test: /\.svg$/i,
	issuer: /\.[jt]sx?$/,
	use: [
		'@svgr/webpack',
		{
			loader: 'url-loader',
			options: {
				svgoConfig,
			},
		},
	],
};
