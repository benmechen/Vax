const resolveConfig = require('tailwindcss/resolveConfig');
const tailwindConfig = require('./tailwind.config.js');

const { theme } = resolveConfig(tailwindConfig);

module.exports = {
	siteMetadata: {
		title: 'UK Vaccination Tracker',
		author: 'Ben Mechen',
		description: "Visualisation of the UK's Covid 19 vaccination progress",
		url: 'https://vax.mechen.co',
		twitterUsername: '@b_mechen',
	},
	plugins: [
		'gatsby-plugin-react-helmet',
		{
			resolve: 'gatsby-plugin-manifest',
			options: {
				name: 'UK Vaccination Tracker',
				short_name: 'UK Vaccination Tracker',
				start_url: '/',
				background_color: theme.colors.white,
				theme_color: theme.colors.teal[500],
				icon: 'static/icon.svg',
			},
		},
		{
			resolve: 'gatsby-plugin-postcss',
			options: {
				postCssPlugins: [
					require('tailwindcss'),
					require('autoprefixer'),
				],
			},
		},
		{
			resolve: `gatsby-plugin-google-gtag`,
			options: {
				trackingIds: [
					'G-BVR44MZJJG', // Google Analytics / GA
				],
			},
		},
	],
};
