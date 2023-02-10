module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  mode: "jit",
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      serif: ["Inter", "serif"]
    },
    container: {
      center: true
    },
    extend: {
      boxShadow: {
        focus: "0 0 0 2px #060e4f9e"
      },
      colors: {
        brand: {
          primary: "#FF6206",
          danger: "#FC2D2D",
          green: "#009521",
          primaryGradient:
            "linear-gradient(110.57deg, #FDB404 -9.79%, #FF6206 -9.78%, #FDB404 115.89%)",
          dark: "#04082f",
          100: "#FFF",
          200: "#CDCED5",
          300: "#CDCED5",
          700: "#2a69ac",
          800: "#153e75"
        },
        dark: {
          100: "#F1F3F4",
          200: "#B9B9B9",
          300: "#9B9CAC",
          400: "#060E4F",
          500: "#B9BAC5",
          900: "#04082F"
        },
        green: {
          100: "#009521",
          600: "#21963A"
        }
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
