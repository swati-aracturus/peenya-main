

/** @type {import('tailwindcss').Config} */
export const content = [
  "./src/**/*.{js,jsx,ts,tsx}",
  "./node_modules/flowbite/**/*.js"
];
export const theme = {
  extend: {},
  screens: {
    'pxs': { 'max': '330px' },
    'ps': { 'max': '390px' },
    'pm': { 'max': '450px' },
    'sd': { 'max': '800px' },
    'lx': { 'max': '1050px' },
    // Tailwind's default breakpoints
    'sm': '640px',
    'md': '768px',
    'lg': '1024px',
    'xl': '1280px',
    '2xl': '1536px',
  }
};

export const plugins = [
  require('flowbite/plugin')
];