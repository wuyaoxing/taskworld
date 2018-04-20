const rewireEslint = require('react-app-rewire-eslint')
const rewireLess = require('react-app-rewire-less')

module.exports = function override(config, env) {
    const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
    config = rewireEslint(config, env)
    config = rewireLess(config, env)
    config.plugins.push(new BundleAnalyzerPlugin())
    return config
}
