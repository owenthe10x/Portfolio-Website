/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js}'],
	plugins: {
		tailwindcss: {},
		autoprefixer: {},
	},
	theme: {
		extend: {
			colors: {
				first: '#1E2022',
				second: '#52616B',
				third: '#C9D6DF',
				forth: '#F0F5F9',
				fifth: '#00ADB5',
			},
			fontFamily: {
				guminert: ['Guminert-Regular', 'sans-serif'],
				kollektif: ['Kollektif', 'sans-serif'],
				kollektifBold: ['Kollektif-Bold', 'sans-serif'],
				kollektifItalic: ['Kollektif-Italic', 'sans-serif'],
				kollektifBoldItalic: ['Kollektif-BoldItalic', 'sans-serif'],
				larkenBlack: ['Larken-Black', 'serif'],
				larkenBold: ['Larken-Black', 'serif'],
				larkenXBold: ['Larken-Black', 'serif'],
				larkenReg: ['Larken-Black', 'serif'],
				larkenMed: ['Larken-Black', 'serif'],
				larkenBlackIta: ['Larken-Black', 'serif'],
				larkenBoldIta: ['Larken-Black', 'serif'],
				larkenXBoldIta: ['Larken-Black', 'serif'],
			},
		},
	},
	plugins: [],
}
