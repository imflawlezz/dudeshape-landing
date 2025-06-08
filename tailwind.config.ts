import type { Config } from 'tailwindcss';

export default {
    content: [
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}'
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['var(--font-dm-sans)', 'sans-serif'],
                montserrat: ['var(--font-montserrat)', 'sans-serif'],
            },
        },
    },
    plugins: [],
} satisfies Config;