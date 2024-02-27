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
        'gray-light': '#A0A0A0',
        blue: '#68C6DF',
        'light-blue': '#F2F7FD',
        'light-gray': '#F8F8F8',
        black: '#000000',
        'dark-gray': '#464B50',
        navy: '#09164F'
      },
      fontFamily: {
        nunito: 'Nunito'
      },
      fontSize: {
        14: '14px',
        15: '15px',
        16: '16px',
        18: '18px',
        22: '22px',
        24: '24px',
        28: '28px',
        33: '33px',
        34: '34px',
        36: '36px',
        48: '48px'
      },
      fontWeight: {
        300: 300,
        600: 600
      },
      lineHeight: {
        20: '20px',
        24: '24px',
        26: '26px',
        30: '30px',
        32: '32px',
        40: '40px',
        43: '43px',
        49: '49px'
      },
      letterSpacing: {
        0: '0px'
      }
    }
  },
  plugins: []
}
