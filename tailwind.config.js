/** @type {import('tailwindcss').Config} */

module.exports = {
	content: ['./app/**/*.{jsx,tsx}', './components/**/*.{jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				'dark-blue': '#23244B',
				navy: '#09164F',
				blue: '#68C6DF',
				'light-blue': '#F2F7FD',
				'dark-gray': '#464B50',
				'medium-gray': '#CBCBCB',
				gray: '#E2E2E2',
				'light-gray': '#F8F8F8',
			},
			fontFamily: {
				sans: ['var(--font-nunito)', 'sans-serif'],
			},
			fontSize: {
				13: '13px',
				15: '15px',
				22: '22px',
				28: '28px',
				33: '33px',
				34: '34px',
			},
			spacing: {
				123: '123px'
			},
			screens: {
				sm: { max: '375px' },
				md: { min: '376px', max: '820px' },
				lg: { min: '821px' },
			},
			lineHeight: {
				14: '14px',
				16: '16px',
				18: '18px',
				19: '19px',
				20: '20px',
				24: '24px',
				26: '26px',
				30: '30px',
				32: '32px',
				40: '40px',
				43: '43px',
				49: '49px',
			},
			height: {
				652: '652px',
			},
			width: {
				1366: '1366px',
				886: '886px',
				740: '740px',
				645: '645px',
				560: '560px',
				475: '475px',
				360: '360px',
				318: '318px',
				262: '262px',
				216: '216px'
			},
		},
	},
	plugins: [],
}
