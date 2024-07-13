/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['index.html'],
    theme: {
        colors: {
            nutmeg: 'hsl(14, 45%, 36%)',
            'dark-raspberry': 'hsl(332, 51%, 32%)',
            white: 'hsl(0, 0%, 100%)',
            'rose-white': 'hsl(330, 100%, 98%)',
            eggshell: 'hsl(30, 54%, 90%)',
            'light-grey': 'hsl(30, 18%, 87%)',
            'wenge-brown': 'hsl(30, 10%, 34%)',
            'dark-charcoal': 'hsl(24, 5%, 18%)',
        },
        fontSize: {
            'base': ['1rem', '1.5rem'],
            'h3': ['1.3rem', '1'],
            'h2': ['1.7rem', '1'],
            'h1': ['2.2rem', '1'],
        },
        fontFamily: {
            serif: '"Young Serif"',
            sans: 'Outfit',
        },
        extend: {},
    },
    plugins: [],
};
