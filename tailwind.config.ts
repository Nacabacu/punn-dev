import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        //b8bcbc
        background: '#c9d1d1',
        backgroundDark: '#1a202c',
        primary: '#0070f3',
        primaryDark: '#ff7113',
        secondary: '#003675',
        secondaryDark: '#fa9450'
      }
    },
  },
  darkMode: 'class',
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
export default config;
