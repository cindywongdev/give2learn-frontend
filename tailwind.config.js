/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'g2l-blue': '#4B9EFF',
        'g2l-bright-yellow': '#FEBE2D',
        'g2l-mid-yellow': '#FFF8D2',
        'g2l-pale-yellow': 'FFFDF3',
        'g2l-dark-gray': '#2C2C2C',
        'g2l-light-gray': '#C2C2C2',
      },
      fontSize: {
        'header1': '40px',
        'header2': '34px',
        'header3': '27px',
        'paragraph1': '21px',
        'paragraph2': '16px',
        'paragraph3': '14px',
      },
    },
  },
  plugins: [],
}
