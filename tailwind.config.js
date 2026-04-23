/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'display': ['Playfair Display', 'serif'],
        'body': ['Libre Baskerville', 'serif'],
      },
      colors: {
        primary: '#D4AF37',
        secondary: '#0a1628',
      }
    },
  },
  plugins: [],
  // Otimizações para build mais rápido
  corePlugins: {
    // Desabilitar plugins não utilizados
    preflight: true,
  },
  // Purge CSS não utilizado
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: [
      './index.html',
      './src/**/*.{js,ts,jsx,tsx}',
    ],
    options: {
      safelist: [
        // Classes que podem ser geradas dinamicamente
        'bg-gradient-to-r',
        'from-primary',
        'to-secondary',
      ]
    }
  }
}