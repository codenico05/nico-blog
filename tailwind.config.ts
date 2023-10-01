import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundColor: {
        'primary-dark': '#090D1F',
        'primary-light': '#FFFFFF',
      },
      textColor: {
        'light-text': '#c0c5d0',
        'date-article': '#6941C6',
      },
      backgroundImage: {
        'image-one': "url('/image.jpg')",
        'image-two': "url('/image2.jpg')",
      },
    },
  },
  plugins: [],
};
export default config;
