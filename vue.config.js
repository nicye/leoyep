module.exports = {
  chainWebpack: config => {
    config.plugin("html").tap(args => {
      args[0].title = "Jurna's portfolio";
      return args;
    });
  }
};
