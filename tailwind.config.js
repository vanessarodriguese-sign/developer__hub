/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './app/**/*.{jsx,tsx}',
    './components/**/*.{jsx,tsx}'
  ],
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
        'light-gray': '#F8F8F8'
      },
      fontFamily: {
        sans: ['var(--font-nunito)', 'sans-serif']
      },
      fontSize: {
        13: '13px',
        15: '15px',
        22: '22px',
        28: '28px',
        32: '32px',
        33: '33px',
        34: '34px'
      },
      spacing: {
        123: '123px',
        127: '127px'
      },
      screens: {
        sm: { max: '375px' },
        md: { min: '376px', max: '820px' },
        lg: { min: '821px' }
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
        49: '49px'
      },
      height: {
        652: '652px'
      },
      width: {
        1366: '1366px',
        1120: '1120px',
        820: '820px',
        740: '740px',
        375: '375px',
        360: '360px',
        318: '318px',
        302: '302px',
        265: '265px',
        262: '262px',
        170: '170px'
      }
    }
  },
  variants: {
    extend: {
      backgroundColor: ['hover'],
      fontWeight: ['hover']
    }
  },
  plugins: []
}
