/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      aspectRatio: {
        'w-16': 16,
        'h-9': 9,
      },
      keyframes: {
        'modal-appear': {
          '0%': { 
            opacity: '0',
            transform: 'translateY(100px)'
          },
          '100%': { 
            opacity: '1',
            transform: 'translateY(0)'
          },
        }
      },
      animation: {
        'modal-appear': 'modal-appear 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      }
    }
  },
  plugins: [require('@tailwindcss/forms')],
}

