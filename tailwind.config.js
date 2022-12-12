/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'Strong-Cyan': 'hsl(172, 67%, 45%)',
        'Light-Cyan': 'hsl(185, 41%, 84%)',
        'Verydarkcyan': ' hsl(183, 100%, 15%)',
        'Darkgrayishcyan': 'hsl(186, 14%, 43%)',
        'Grayishcyan': 'hsl(184, 14%, 56%)',
        'Verylightgrayishcyan': 'hsl(189, 41%, 97%)',
        'White': 'hsl(0, 0%, 100%)',
      }
    },
  },
  plugins: [],
}
