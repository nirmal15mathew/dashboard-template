/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      gridTemplateColumns: {
        'layout': 'minmax(200px, 0.5fr) 2fr',
      },
      gridTemplateRows: {
        'main': '0.5fr 4fr'
      }
    },
  },
  plugins: [],
}

