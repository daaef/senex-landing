module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      container: (theme) => ({
        center: true,
        padding: {
          DEFAULT: theme('spacing.4'),
          sm: theme('spacing.6'),
          md: theme('spacing.8'),
          lg: theme('spacing.8'),
          xl: theme('spacing.8')
        }
      })
    },
  },
  variants: {
    extend: {},
  },
  plugins: []
}

// module.exports = {
//   theme: {
//     container: (theme) => ({
//       center: true,
//       padding: {
//         default: theme('spacing.4'),
//         lg: theme('spacing.6')
//       }
//     })
//   }
// }
