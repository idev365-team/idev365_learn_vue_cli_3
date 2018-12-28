module.exports = {
    pages:{
        index:{
            entry:'src/pages/home/index.js',
            template:'src/pages/home/index.html',
        },

        products:{
            entry:'src/pages/products/index.js',
            template:'src/pages/products/index.html',
        }
    },
    chainWebpack:config=>{
        config.module
            .rule('images')
                .use('url-loader')
                .loader('url-loader')
                .tap(options => Object.assign(options, { limit: 10240 }))
    }
}