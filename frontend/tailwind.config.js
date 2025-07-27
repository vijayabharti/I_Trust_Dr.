/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Include all frontend source files
  ],
  theme: {
    extend: {
      colors:{
        'primary':"#5f6FFF"
      }
    },
  },
  plugins: [],
};


