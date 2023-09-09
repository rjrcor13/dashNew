/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/**/*.{js,jsx,ts,tsx}',
		'node_modules/daisyui/dist/**/*.js',
		'node_modules/react-daisyui/dist/**/*.js',
	],

	plugins: [require('@tailwindcss/typography'), require('daisyui')],
	daisyui: {
		//themes: ['dark', 'synthwave'],
		themes: ['dark', 'cupcake'],
	},
};
