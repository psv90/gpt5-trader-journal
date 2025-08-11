module.exports = {
  content: ['./app/**/*.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        bg: '#0b0f14',
        panel: '#0f1720',
        accent: '#00e5ff',
        neon: '#ff00c8'
      },
      spacing: {
        '1.5': '0.375rem'
      }
    }
  },
  plugins: []
}
