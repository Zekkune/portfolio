/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        'gradient-x': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center',
          },
        },
        'gradient-y': {
            '0%, 100%': {
              'background-size': '200% 200%',
              'background-position': 'center top',
            },
            '50%': {
              'background-size': '200% 200%',
              'background-position': 'center bottom',
            },
          },
        'gradient-xy': {
            '0%, 100%': {
              'background-size': '200% 200%',
              'background-position': 'left top',
            },
            '50%': {
              'background-size': '200% 200%',
              'background-position': 'right bottom',
            },
          },
        wiggle: {
          '0%, 100%': { transform: 'rotate(0deg)' },   // Start and end in the original position
          '25%': { transform: 'rotate(2deg)' },       // Rotate slightly clockwise
          '50%': { transform: 'rotate(-2deg)' },      // Rotate slightly counterclockwise
          '75%': { transform: 'rotate(2deg)' },       // Rotate slightly clockwise
        
        },
        slidedown: {
          '0%': { transform: 'translateY(-100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideup: {
          '0%': { transform: 'translateY(0)', opacity: '1' },
          '100%': { transform: 'translateY(10%)', opacity: '1' },
        },
      },
      animation: {
        'gradient-x': 'gradient-x 4s ease infinite',
        'gradient-y': 'gradient-y 4.5s ease infinite',
        'gradient-xy': 'gradient-xy 4s ease infinite',
        'wiggle': 'wiggle 1.5s ease-in-out',
        'shine': 'shine 2s infinite',
        'slidedown': 'slide-down 0.5s ease-in-out',
        'slideup': 'slide-up 0.5s ease-in-out',
      },
      strokeWidth: {
        '01': '1px',
      },
      gridTemplateRows: {
        custom: '50px 70px 70px'
      },
      fontSize: {
        '8.5xl': '7rem',
      },
      colors: {
        cherryblossom: '#F6B8CD',
        ponypink: '#F399BA',
        driedblossom: '#ee6b9b',
        darkdrippink: '#853657',
        grey: '#6B6B6B',
        bluey: '#6FBFFC',
        charcoal: '#333333',
      },
      fontFamily: {
        Comfort: ['"Comfortaa"'],
        Righteous: ['"Righteous"'],
        Poppins: ['"Poppins"'],
        Nunito: ['"Nunito"']
      },
      boxShadow: {
        'solid-pony': '-8px 8px 0px 2px #ee6b9b', // Solid pink shadow
        'solid-bluey':'-8px 8px 0px 2px rgba(111, 191, 252, 1)',
        'test': '0px 0px 50px 10px rgba(255, 105, 180, 0.5)',
        'light-below': '0px 10px 20px #ee6b9b, 0px 5px 10px rgba(255, 105, 180, 0.5)',
      
      },
      backgroundImage: {
        'gradient-to-r': 'linear-gradient(to right, var(--tw-gradient-stops))',
        'gradient-to-l': 'linear-gradient(to left, var(--tw-gradient-stops))',
        'gradient-to-b': 'linear-gradient(to bottom, var(--tw-gradient-stops))',
        'gradient-to-bottom': 'linear-gradient(to bottom, #F399BA 45%, #6FBFFC 45%)',
        'sakura': "url('src/assets/sakara .avif')",
        'bcb': "url('src/assets/bcb-removebg-preview.png')",
        'custom-gradient': 'radial-gradient(farthest-corner at 50% 100%, rgba(255, 105, 180, 0.5) 0%, rgba(255, 105, 180, 0) 100%)',
        // Add other gradient directions if needed
      },
      borderColor: {
        'semi-transparent-black': 'rgba(0, 0, 0, 0.2)',
        'semi-transparent-white': 'rgba(255, 255, 255, 0.5)',
        // Add more colors as needed
      },
    },
  },


  
  plugins: [
    function ({ addUtilities, theme }) {
      addUtilities({
        '.text-gradient': {
          'background-image': 'linear-gradient(to right, #F399BA, #6FBFFC)',
          '-webkit-background-clip': 'text',
          '-webkit-text-fill-color': 'transparent',
        },
        '.text-gradient2': {
          'background-image': 'linear-gradient(to right, #ee6b9b 0%, #F399BA 65%, #F6B8CD 85%)',
          '-webkit-background-clip': 'text',
          '-webkit-text-fill-color': 'transparent',
        },
        '.text-gradient-lightsoff': {
          'background-image': 'linear-gradient(to bottom, #ee6b9b 10%, black 80%)',
          '-webkit-background-clip': 'text',
          '-webkit-text-fill-color': 'transparent',
        },
        '.radial-text-gradient': {
          'background-image': 'radial-gradient(circle, #F399BA, #6FBFFC)',
          '-webkit-background-clip': 'text',
          '-webkit-text-fill-color': 'transparent',
        },
        '.radial-text-gradient2': {
          'background-image': 'radial-gradient(circle, #FFFFFF 20%, #6FBFFC 60%)',
          '-webkit-background-clip': 'text',
          '-webkit-text-fill-color': 'transparent',
        },
        '.pony-text': {
          'background-image': 'linear-gradient(to right, #F399BA, #F399BA)',
          '-webkit-background-clip': 'text',
          '-webkit-text-fill-color': 'transparent',
        },
        '.dark-text': {
          'background-image': 'linear-gradient(to right, #FFFFFF, #FFFFFF)',
          '-webkit-background-clip': 'text',
          '-webkit-text-fill-color': 'transparent',
        },
      });
      
    },
    
  ],

}



