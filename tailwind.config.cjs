/** @type {import('tailwindcss').Config} */
const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		screens: {
			sm: '320px',
			// => @media (min-width: 320px) { ... }

			md: '768px',
			// => @media (min-width: 768px) { ... }

			lg: '1024px',
			// => @media (min-width: 1024px) { ... }

			xl: '1280px',
			// => @media (min-width: 1280px) { ... }

			'2xl': '1536px'
			// => @media (min-width: 1536px) { ... }
		},
		extend: {
			fontFamily: {
				jakarta: ['Plus Jakarta Sans', 'sans-serif'],
				poppins: ['Poppins', 'sans-serif']
			},
			colors: {
				primary: '#1F2B6C',
				secondary: '#159EEC',
				accent: '#BFD2F8'
			}
		}
	},

	plugins: []
};

module.exports = config;
