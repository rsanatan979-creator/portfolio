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
      colors: {
        background: {
          light: '#FAFAFA',
          dark: '#0F1115',
        },
        surface: {
          light: '#FFFFFF',
          dark: '#17191F',
        },
        secondarySurface: {
          light: '#F5F7FA',
          dark: '#1D2027',
        },
        primaryText: {
          light: '#18181B',
          dark: '#F4F4F5',
        },
        secondaryText: {
          light: '#64748B',
          dark: '#A1A1AA',
        },
        borderSubtle: {
          light: '#E5E7EB',
          dark: '#292C33',
        },
        brand: {
          DEFAULT: '#4F46E5',
          light: '#6366F1',
          soft: '#EEF2FF',
          dark: '#818CF8',
        },
        accentSky: '#0EA5E9',
        accentEmerald: '#10B981',
      },
      borderRadius: {
        btn: '10px',
        card: '16px',
        tag: '8px',
        panel: '20px',
      },
      boxShadow: {
        subtle: '0 4px 20px rgba(0, 0, 0, 0.04)',
        hover: '0 10px 25px rgba(0, 0, 0, 0.08)',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
