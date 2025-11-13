import { Config } from 'tailwindcss';

const config: Config = {
  content: ['./public/**/*.html', './src/**/*.{js,ts,jsx,tsx}'],

  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },

    extend: {
      colors: {
        // 🔵 Brand Colors
        customBlue: '#00838F',
        darkBlue: '#060b2d',
        TealBlue: '#004D60',
        Blue: '#2E3192',
        Red: '#C00000',

        // ⚪ Neutrals
        white: '#ffffff',
        whitesmoke: '#f5f5f5',
        black: '#000000',
        gray: '#808080',
        gray2: '#ccc4c4ad',

        // 💎 Accent Colors
        pink: '#cc3e8c',
        purple: '#ca1ccae3',
        green1: '#00ab41',
        darkgreen: '#008631',

        // 🎨 Shades (structured for gradients, bars, hover effects)
        blue: {
          100: '#DBEAFE',
          600: '#2563EB',
        },
        green: {
          100: '#D1FAE5',
          600: '#059669',
        },
        yellow: {
          100: '#FEF9C3',
          600: '#CA8A04',
        },
        purpleShades: {
          100: '#F3E8FF',
          600: '#7C3AED',
        },
        orange: {
          100: '#FFEDD5',
          600: '#EA580C',
        },
        pinkShades: {
          100: '#FCE7F3',
          600: '#DB2777',
        },
        teal: {
          100: '#CCFBF1',
          600: '#0D9488',
        },

        // 🖤 UI Gradients
        gradientStart: '#2E3192',
        gradientEnd: '#00ab41',
      },

      spacing: {
        72: '18rem',
        84: '21rem',
        96: '24rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
    },
  },

  plugins: [],
};

export default config;
