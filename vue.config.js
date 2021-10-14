module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/fitness-food/' : '/',
  configureWebpack: {
    optimization: {
      splitChunks: false
    }
  },
  css: {
    loaderOptions: {
      sass: {
        prependData: '@import "@/assets/scss/style.scss";'
      }
    }
  }
};