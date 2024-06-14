import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {

    fontFamily: {
      'bebas': ['"Bebas Neue"', 'sans-serif'], },

    screens: {

      'ckl': {'max': '1110px'},
      'cnct': {'max': '620px'},
      
      'navblock' : {'min' : '500px'},
      'terraLogo' : {'max' : '500px'},
      'navblockR' : {'min' : '500px' , 'max': '1088px'},
      'formMid' : {'min' : '768px' , 'max': '970px'},
      'mdm':{'max': '768px'},
      'lgm':{'max': '1088px'},
      'sm': {'max': '500px'},
      'md': {'min': '501px', 'max': '768px'},
      'lg': {'min': '769px', 'max': '1088px'},
      '2lg': {'min': '1089px'},
      //'xl': {'min': '1368px', 'max': '1840px'},
    }
    ,
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'contact-gradient-1': 'linear-gradient(90deg, rgba(255,0,0,1) 7%, rgba(255,117,0,1) 52%, rgba(129,81,0,1) 100%)',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
          'terrianImg' : "url('/public/projects.png')",
      },
      spacing: {
        'xxl':'4rem',
      }
    },
    colors: {
      'orngclr': '#E87A15',
      'blkclr': '#111016',
      'ashclr': '#4E4C4C',
      'redclr': '#FF0000',
    
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}




export default config
