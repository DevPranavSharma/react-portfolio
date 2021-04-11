module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      animation:{
        float: 'float 3s infinite',
        refloat: 'refloat 3s infinite'
      },
      keyframes:{
        float:{
          '0%':{
            transform:'translateY(0px)',
            animationTimingFunction: 'ease-in-out'
          },
          '50%':{
            transform:'translateY(-20px)',
            animationTimingFunction: 'ease-in-out'
          },
          '100%':{
            transform:'translateY(0px)',
            animationTimingFunction: 'ease-in-out'
          }
        },
        refloat:{
          '0%':{
            transform:'translateY(-20px)',
            animationTimingFunction: 'ease-in-out'
          },
          '50%':{
            transform:'translateY(0px)',
            animationTimingFunction: 'ease-in-out'
          },
          '100%':{
            transform:'translateY(-20px)',
            animationTimingFunction: 'ease-in-out'
          }
        },
        },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
