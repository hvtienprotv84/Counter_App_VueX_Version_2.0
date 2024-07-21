module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/assets/sass-style/variables.scss";`,
      },
    },
  },
};
