/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
	},
	daisyui: {
		themes: [
			{
				beautyTheme: {
					"primary": "#979d7e", // The main color of the logo text
					"secondary": "#c9b288", //  A slightly brighter, more golden version of the logo text
					"accent": "#7c6850", // A darker shade for contrast
					"neutral": "#C8BFC0", // The soft background color
					"base-100": "#f5f2e9" // An off-white similar to the background
				},
			}
		],
	  },
	plugins: [
		require('@tailwindcss/typography'),
		require('@tailwindcss/forms'),
		require('tailwindcss-animated'),
		require('tailwindcss-intersect'),
		require("twglow"),
		require('daisyui'),
	],
}
