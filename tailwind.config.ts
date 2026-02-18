import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['var(--font-instrument-serif)', 'Georgia', 'serif'],
      },
    },
  },
}

export default config