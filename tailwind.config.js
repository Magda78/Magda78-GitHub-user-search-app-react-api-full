/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [ './src/**/*.{js,jsx,ts,tsx}' ],
	theme: {
		extend: {
			colors: {
				'bg-color': '#F6F8FF',
				'bg-color-center': '#FEFEFE',
				'bg-color-true': '#141D2F',
				'bg-color-center-true': '#1E2A47',
				'text-color-logo': '#222731',
				'bg-button': '#0079FF',
				'bg-button-hover': '#60ABFF',
				'text-date-color': '#697C9A',
				'text-color-card-numbers': '#2B3442',
				'main-text-color': '#4B6A9B'
			},
			fontFamily: {
				SpaceMono: [ 'Space Mono' ]
			},
			boxShadow: {
				'button-hover': '0px 0px 40px rgba(83, 255, 170, 1)'
			}
		}
	},
	plugins: []
};
