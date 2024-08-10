import svgToDataUri from 'mini-svg-data-uri';
import type { Config } from 'tailwindcss';
const {
  default: flattenColorPalette,
} = require('tailwindcss/lib/util/flattenColorPalette');

const base = {
  background: '#0F0F0F',
  foreground: '#E0E0E0',
  white: '#ffffff',
  black: '#000000',
  purple: {
    100: '#e0ccf4',
    200: '#d4bfeb',
    300: '#c9b2e2',
    400: '#bea6d9',
    500: '#b29bd1',
    600: '#a78fc8',
    700: '#9f88bf',
    800: '#9781b4',
    900: '#8e79aa',
  },
  blue: {
    100: '#c9d2f8',
    200: '#b9c4f0',
    300: '#abb7e7',
    400: '#9caadf',
    500: '#8f9fd6',
    600: '#8293ce',
  },
  brown: {
    100: '#eef0a1',
    200: '#e2e293',
    300: '#d4d285',
    400: '#c6c277',
    500: '#b8b26b',
    600: '#aba45f',
  },
  red: {
    100: '#fad1d1',
    200: '#eec1c1',
    300: '#e3b2b2',
    400: '#d7a3a3',
    500: '#cc9595',
    600: '#c08888',
  },
  green: {
    100: '#d3f9b5',
    200: '#c4eda5',
    300: '#b6e095',
    400: '#a8d487',
    500: '#9ac779',
    600: '#8dba6b',
  },
  neutral: {
    100: '#c6c6c6',
    200: '#acacac',
    300: '#929292',
    400: '#787878',
    500: '#5d5d5d',
    600: '#434343',
    700: '#292929',
    800: '#222222',
    900: '#1b1b1b',
  },
};

const config = {
  darkMode: ['class'],
  content: ['./src/**/*.{ts,tsx}'],
  prefix: '',
  theme: {
    colors: () => ({
      ...base,
      muted: base.neutral[600],
      'muted-foreground': base.neutral[200],
      destructive: base.red[600],
      'destructive-foreground': base.red[200],
      accent: base.purple[600],
      'accent-foreground': base.purple[200],
      border: base.neutral[800],
    }),
    extend: {
      padding: {
        smPage: '2rem',
        page: '6rem',
      },
    },
  },
  plugins: [
    require('tailwindcss-animate'),
    addVariablesForColors,
    function ({ matchUtilities, theme }: any) {
      matchUtilities(
        {
          'bg-grid': (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
            )}")`,
          }),
          'bg-grid-small': (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="8" height="8" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
            )}")`,
          }),
          'bg-dot': (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="${value}" id="pattern-circle" cx="10" cy="10" r="1.6257413380501518"></circle></svg>`
            )}")`,
          }),
        },
        {
          values: flattenColorPalette(theme('backgroundColor')),
          type: 'color',
        }
      );
    },
  ],
} satisfies Config;

function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme('colors'));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ':root': newVars,
  });
}

export default config;
