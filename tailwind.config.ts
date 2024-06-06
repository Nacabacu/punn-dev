import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      typography: (theme: any) => ({
        stone: {
          css: {
            '--tw-prose-bullets': '#78716c',
            '--tw-prose-links': '#0070f3',
            '--tw-prose-invert-links': '#ff7113',
            '--tw-prose-quote-borders': '#0070f3',
            '--tw-prose-invert-quote-borders': '#ff7113',
          },
        },
      }),
      colors: {
        background: '#c9d1d1',
        backgroundDark: '#1a202c',
        primary: '#0070f3',
        primaryDark: '#ff7113',
        secondary: '#003675',
        secondaryDark: '#fa9450'
      },
      screens: {
        xs: '420px',
      },
      transitionProperty: {
        'background-color': 'background-color'
      }
    },
  },
  darkMode: 'class',
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
export default config;
