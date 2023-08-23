/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	// theme: {
	// 	extend: {
	// 		backgroundImage: {
	// 			'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
	// 			'gradient-conic':
	// 				'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
	// 		},
	// 	},
	// },
	daisyui: {
		themes: [
			{
				mytheme: {
					primary: '#ef4444',

					secondary: '#fb923c',

					accent: '#1fb2a6',

					neutral: '#2a323c',

					'base-100': '#1d232a',

					info: '#3abff8',

					success: '#36d399',

					warning: '#fbbd23',

					error: '#dc2626',
				},
			},
			'light',
			'dark',
			'cupcake',
			'bumblebee',
			'emerald',
			'corporate',
			'synthwave',
			'retro',
			'cyberpunk',
			'valentine',
			'halloween',
			'garden',
			'forest',
			'aqua',
			'lofi',
			'pastel',
			'fantasy',
			'wireframe',
			'black',
			'luxury',
			'dracula',
			'cmyk',
			'autumn',
			'business',
			'acid',
			'lemonade',
			'night',
			'coffee',
			'winter',
		],
	},
	plugins: [require('@tailwindcss/typography'), require('daisyui')],
};
