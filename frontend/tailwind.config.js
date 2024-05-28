/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        castanho: "#F2DFBF"
      },
      rotate: {
        "30": "17deg"
      },
      boxShadow: {
        'custom': '0px 16px 3.37px 0px rgba(0, 0, 0, 0.25)',
      },
      dropShadow: {
        'custom': '0px 22px 6.37px rgba(0, 0, 0, 0.55)',
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)"},
          "50%": { transform: "translateY(-20px)"},
        },
      },
      animation: {
        float: "float 3s ease-in-out infinite",
      },
      width: {
        image: "242px"
      },
      borderWidth: {
        borderWidth: "thin"
      }
    },
  },
  plugins: [],
}

