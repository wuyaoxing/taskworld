const rewireEslint = require('react-app-rewire-eslint')
const rewireLess = require('react-app-rewire-less')

module.exports = function override(config, env) {
    config = rewireEslint(config, env)
    config = rewireLess(config, env)
    return config
}
