/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      gridTemplateColumns: {
        'layout': 'minmax(200px, 0.5fr) 2fr',
        'sidebar_item': '0.4fr 4fr'
      },
      gridTemplateRows: {
        'main': '0.5fr 4fr',
        'sidebar': 'minmax(50px, 0.2fr) 2fr minmax(100px, 0.5fr)'
      }
    },
  },
  plugins: [],
}

