module.exports = {
  publicPath: "./prod",
  chainWebpack: config => {
    config.plugin("html").tap(args => {
      args[0].title = "Jurna's portfolio";
      return args;
    });
  }
};
