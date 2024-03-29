import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'purple-primary': '#800BF2',
        'purple-secondary': '#1E0350',
        'purple-dark': '#0e0711',
        'gray-primary': '#1C1C1C',
      },
      fontSize: {
        '5xl': ['3rem', '4rem'],
      },
    },
    container: {
      padding: {
        DEFAULT: '1.5rem',
        sm: '1.5rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    fontFamily: {
      'barlow-condensed': 'var(--font-barlow-condensed)',
      'plus-jakarta-sans': 'var(--font-plus-jakarta-sans)',
    },
    objectPosition: {
      'top-27': '50% 27%'
    }
  },
  darkMode: 'class',
  plugins: [],
}
export default config
