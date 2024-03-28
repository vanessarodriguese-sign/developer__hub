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
				'dark-gray': '#7C8896',
				'medium-gray': '#CBCBCB',
				gray: '#E2E2E2',
				'light-gray': '#F8F8F8'
			},
			fontFamily: {
				sans: ['var(--font-nunito)', 'sans-serif'],
			},
			fontSize: {
				8: '8px',
				9: '9px',
				10: '10px',
				13: '13px',
				15: '15px',
				22: '22px',
				28: '28px',
				33: '33px',
				34: '34px',
			},
			screens: {
				sm: { max: '430px' },
				md: { min: '431px', max: '1024px' },
				lg: { min: '1025px' },
			},
			lineHeight: {
				13: '13px',
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
				548: '548px',
				450: '450px',
				350: '350px',
				298: '298px',
				216: '216px',
				189: '189px'
			},
			width: {
				1366: '1366px',
				944:'944px',
				886: '886px',
				740: '740px',
				645: '645px',
				560: '560px',
				550: '550px',
				475: '475px',
				416: '416px',
				368: '368px',
				360: '360px',
				318: '318px',
				302: '302px',
				262: '262px',
				216: '216px'
			},
		},
	},
	plugins: [],
}
