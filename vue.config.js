var path = require('path')
function resolve (dir) {
    //console.log(__dirname)
    return path.join(__dirname, dir)
}
module.exports = {
    chainWebpack: config => {
        config.resolve.alias
            .set('@', resolve('src')) // key,value自行定义，比如.set('@@', resolve('src/components'))
            .set('assets', resolve('src/assets'))
            .set('components', resolve('src/components'))
            .set('views', resolve('src/views'))
    },
    devServer: {
        open: true,
        // host: 'localhost', // 允许外部ip访问
        host:'192.168.3.244',
        port: 8080, // 端口
        https: false, // 启用https
        proxy:{
            '/api': {
                target: 'http://192.168.3.250:8360',
                changeOrigin: true,
            }
        }
    }
}
