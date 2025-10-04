module.exports = {
  content: [
    './src/**/*.{html,js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'nyuki-gold': '#E6C200',      // Muted gold
        'nyuki-honey': '#D99A2B',     // Softer honey
        'nyuki-black': '#262626',     // Slightly lighter charcoal
        'nyuki-stripe': '#E0C78F',    // Softer stripe accent
        'nyuki-wax': '#F9F1DE',       // Gentle wax tone
      },
      fontFamily: {
        'nyuki': ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
