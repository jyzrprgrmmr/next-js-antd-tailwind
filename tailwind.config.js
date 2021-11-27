module.exports = {
  important: true,
  mode: 'jit',
  purge: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        xs: '320px',
      },
      colors: {
        secondary: '#01263f',
        primary: '#0893A6',
        danger: '#E55239',
        success: '#33C175',
        warning: '#f1b24A',
        defaultBG: '#F5F6F8',
      },
      fontFamily: {
        pop: ['Poppins'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
