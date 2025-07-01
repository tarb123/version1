import { Config } from 'tailwindcss';

const config: Config = {
content: ['./public/**/*.html', "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    colors: {
      customBlue: '#00838F',
      darkBlue: '#060b2d',
      TealBlue: '#004D60',
      Red: '#C00000',
      Blue: '#2E3192',
      white: '#ffffff',
      pink:'#cc3e8c',
      black:'#000000',
      purple:"#ca1ccae3",
      green:'#00ff00',
      gray:"#808080",
      gray2:'#ccc4c4ad',
    },
    extend: {
      spacing: {
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
    },
  },
  plugins: [],
}

export default config;