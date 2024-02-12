import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        circular: ['var(--font-circular)'],
      },
      fontWeight: {
        book: '350',
        medium: '500',
        bold: '700',
      },
      fontSize: {
        display: [
          '5.5rem',
          {
            lineHeight: '5.5rem',
            letterSpacing: '-0.2rem',
            fontWeight: '700',
          },
        ],
        'heading-1': [
          '4rem',
          {
            lineHeight: '4.5rem',
            letterSpacing: '-0.2rem',
            fontWeight: '700',
          },
        ],
        'heading-2': [
          '2.4rem',
          {
            lineHeight: '3rem',
            letterSpacing: '-0.1rem',
            fontWeight: '700',
          },
        ],
        'heading-3': [
          '2.2rem',
          {
            lineHeight: '2.8rem',
            letterSpacing: '0',
            fontWeight: '500',
          },
        ],
        'paragraph-1': [
          '2rem',
          {
            lineHeight: '2.6rem',
            letterSpacing: '0',
            fontWeight: '350',
          },
        ],
        'paragraph-2': [
          '1.6rem',
          {
            lineHeight: '2.2rem',
            letterSpacing: '0',
            fontWeight: '350',
          },
        ],
        'paragraph-2/2': [
          '1.6rem',
          {
            lineHeight: '2.2rem',
            letterSpacing: '0',
            fontWeight: '700',
          },
        ],
        'paragraph-3': [
          '1.4rem',
          {
            lineHeight: '1.8rem',
            letterSpacing: '0',
            fontWeight: '350',
          },
        ],
        'paragraph-4': [
          '1.2rem',
          {
            lineHeight: '1.6rem',
            letterSpacing: '0',
            fontWeight: '350',
          },
        ],
      },
    },
  },
  plugins: [require('tailwindcss-base-font-size')],
}

export default config
