import invariant from 'invariant'
import _ from 'lodash'
import uniloc from 'uniloc'
import createUrlMapper from 'url-mapper/mapper'

function createRouteMapper(routes) {
    const routePathMap = {}
    const routeObjectMap = {}
    const mapper = createUrlMapper(createRouteCompiler)
    const followRedirects = protectFromInfiniteRecursion(_followRedirects)
    const formatRoute = protectFromInfiniteRecursion(_formatRoute)
    for (const route of routes) {
        routePathMap[route.route] = route
        routeObjectMap[route.name] = route
        for (const alias of route.aliases || []) {
            routePathMap[alias] = route
        }
    }
    return {
        resolve(path) {
            const result = mapper.map(path, routePathMap)
            if (!result) return null
            return validateAndCoerceRoute({
                name: result.match.name,
                options: result.values
            })
        },

        route(routeObject) {
            return validateAndCoerceRoute(routeObject)
        },

        generate(unvalidatedRouteObject) {
            const validatedRoute = validateAndCoerceRoute(
                unvalidatedRouteObject
            )
            const formattedRoute = formatRoute(validatedRoute)

            const template = routeObjectMap[formattedRoute.name].route
            return mapper
                .stringify(template, formattedRoute.options)
                .replace(/\?.+/, a => a.replace(/%2f/gi, '/'))
        },

        getRouteByName(name) {
            return routeObjectMap[name]
        }
    }

    function validateAndCoerceRoute(route) {
        invariant(typeof route.name === 'string', 'route.name must be a string')
        invariant(route.options, 'route.options must be present')
        invariant(
            typeof route.options === 'object',
            'route.options must be an object'
        )
        return followRedirects(route)
    }

    function _followRedirects(route) {
        const routeDefinition = routeObjectMap[route.name]
        invariant(routeDefinition, 'Unrecognized route: ' + route.name)
        if (typeof routeDefinition.redirect === 'function') {
            return followRedirects(routeDefinition.redirect(route.options))
        }
        return route
    }

    function _formatRoute(route) {
        const routeDefinition = routeObjectMap[route.name]
        invariant(routeDefinition, 'Unrecognized route: ' + route.name)
        if (typeof routeDefinition.format === 'function') {
            const formattedRoute = routeDefinition.format(route.options)
            if (!formattedRoute) return route
            if (!_.isEqual(route, formattedRoute))
                return formatRoute(formattedRoute)
        }
        return route
    }
}

const protectFromInfiniteRecursion = (() => {
    const _stack = []
    return f =>
        function() {
            try {
                if (_stack.length > 10) {
                    throw new Error(
                        'Recursive limit reached! Here’s the most recent stack: ' +
                            _stack
                    )
                }
                _stack.push(arguments[0])
                return f.apply(this, arguments)
            } finally {
                _stack.pop()
            }
        }
})()

function createRouteCompiler(path) {
    const router = uniloc({ route: 'GET ' + path })
    return {
        parse(url) {
            const result = router.lookup(url)
            if (!result || !result.name) return null
            return result.options || {}
        },
        stringify(values) {
            return router.generate('route', values)
        }
    }
}

export default createRouteMapper
