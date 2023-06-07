/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      boxShadow: {
        'top-xl': '0 -5px 40px rgba(0, 0, 0, 0.2)',
        'top-md': '0 -2px 5px rgba(0, 0, 0, 0.2)',
        'bottom-md': '0 0px 5px rgba(0, 0, 0, 0.2)',
        'y-md': '0 0px 5px rgba(0, 0, 0, 0.2)',
      },
    },
  },
  plugins: [],
};
