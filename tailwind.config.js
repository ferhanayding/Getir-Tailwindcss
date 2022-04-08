module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      backgroundImage: (theme) => ({
        "mobile-app":
          "url(https://getir.com/_next/static/images/doodle-d659f9f1fd505c811c2331fe3ffddd5f.png)",
      }),
      colors: (theme) => ({
        "brand-color": "#4c3398",
        "primary-brand-color": "#5d3ebc",
        "secondary-brand-color": "#7849f7",
        "sari-color": "#FFD300",
      }),
    },
  },
  plugins: [],
};
