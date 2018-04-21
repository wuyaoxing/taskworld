const path = require('path')

const rewireEslint = require('react-app-rewire-eslint')
const rewireLess = require('react-app-rewire-less')

const resolve = dir => path.join(__dirname, '', dir)

module.exports = function override(config, env) {
    const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

    config = rewireEslint(config, env)
    config = rewireLess(config, env)

    config.resolve.modules.unshift(resolve('src'))

    env === 'production' && config.plugins.push(new BundleAnalyzerPlugin())

    console.log(config, __dirname, env)
    return config
}
