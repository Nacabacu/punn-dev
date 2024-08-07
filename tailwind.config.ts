import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./components/**/*.{js,ts,jsx,tsx,mdx}', './app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      typography: () => ({
        stone: {
          css: {
            '--tw-prose-bullets': '#0070f3',
            '--tw-prose-invert-bullets': '#ff7113',
            '--tw-prose-counters': '#0070f3',
            '--tw-prose-invert-counters': '#ff7113',
            '--tw-prose-links': '#0070f3',
            '--tw-prose-invert-links': '#ff7113',
          },
        },
      }),
      colors: {
        background: '#c9d1d1',
        backgroundDark: '#1a202c',
        primary: '#0070f3',
        primaryDark: '#ff7113',
        secondary: '#003675',
        secondaryDark: '#fa9450',
        gray: '#9ca3af',
        grayDark: '#374151',
        grayCode: '#282C34',
        grayProse: '#d6d3d1',
      },
      screens: {
        xs: '420px',
      },
      transitionProperty: {
        'background-color': 'background-color',
      },
    },
  },
  darkMode: 'class',
  plugins: [require('@tailwindcss/typography')],
};
export default config;
