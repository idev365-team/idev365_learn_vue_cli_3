const path = require('path')

module.exports = {
  chainWebpack: config => {
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
    types.forEach(type => addStyleResource(
            config.module.rule('less').oneOf(type),
            path.resolve(__dirname, './src/less/*.less')
            ))

    types.forEach(type => addStyleResource(
        config.module.rule('scss').oneOf(type),
        path.resolve(__dirname, './src/scss/*.scss')
        ))
  },
}

function addStyleResource (rule,patterns) {
    console.log("addStyleResource--->",patterns)
  rule.use('style-resource')
    .loader('style-resources-loader')
    .options({
      patterns:patterns,
    })
}