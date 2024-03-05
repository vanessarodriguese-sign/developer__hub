import { nextui } from '@nextui-org/react'

/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './app/**/*.{jsx,tsx}',
    './components/**/*.{jsx,tsx}',
    './node_modules/@nextui-org/theme/dist/**/*.{jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        'dark-blue': '#23244B',
        blue: '#68C6DF',
        'light-blue': '#F2F7FD',
        'dark-gray': '#464B50',
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
        33: '33px',
        34: '34px'
      },
      spacing: {
        123: '123px',
        127: '127px'
      },
      screens: {
        sm: '375px',
        md: '820px',
        lg: '1366px'
      },
      lineHeight: {
        19: '19px',
        20: '20px',
        24: '24px',
        26: '26px',
        30: '30px',
        32: '32px',
        40: '40px',
        43: '43px',
        49: '49px'
      }
    }
  },
  darkMode: 'class',
  plugins: [nextui()]
}
