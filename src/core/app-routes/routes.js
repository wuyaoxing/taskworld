import invariant from 'invariant'
import createRouteMapper from './createRouteMapper'

const ROUTE_DEFINITION = {
    projects: {
        projects: {
            route: '/projects'
        }
    },
    members: {
        members: {
            route: '/members'
        }
    },
    test: {
        test: {
            route: '/test'
        }
    },
    other: {
        root: {
            route: '/'
        },
        error404: {
            route: '/error/404'
        }
    }
}

export const routes = (() => {
    const routeArray = []
    const routeMap = {}
    for (const sectionName of Object.keys(ROUTE_DEFINITION)) {
        const sectionRoutes = ROUTE_DEFINITION[sectionName]
        for (const routeName of Object.keys(sectionRoutes)) {
            const route = sectionRoutes[routeName]
            invariant(
                !routeMap[routeName],
                `Route ${route} must not be duplicated in other sections`
            )
            routeArray.push(
                (routeMap[routeName] = {
                    ...route,
                    name: routeName,
                    sectionName: sectionName
                })
            )
        }
    }
    return routeArray
})()

export const router = createRouteMapper(routes)

export function generate(route) {
    return router.generate(route)
}

export function getRouteSectionName({ name }) {
    return router.getRouteByName(name).sectionName
}
