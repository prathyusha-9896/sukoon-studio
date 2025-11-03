// tailwind.config.js

module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
    "./public/index.html", // if using custom HTML files
  ],
  theme: {
    extend: {
      fontFamily: {
        giphurs: ['Giphurs', 'sans-serif'], // Add custom font
        fraunces: ['Fraunces', 'serif'],
      },
    },
  },
  plugins: [],
}
