import _ from 'lodash'
import React from 'react'

import { routes } from '../core/app-routes/routes'

import lazyRouteRenderer from './lazyRouteRenderer'

export const renderers = {
    root: asyncComponent(() =>
        import(/* webpackChunkName: "root-page" */ '../core/app-routes/RootRouteRedirector.react')
    ),
    notifications: asyncComponent(() =>
        import(/* webpackChunkName: "notifications-page" */ './components/notifications/notificationsPage.react')
    ),
    projects: asyncComponent(() =>
        import(/* webpackChunkName: "projects-page" */ './components/projects/project-list/ProjectListPage.react')
    ),
    project: asyncComponent(() =>
        import(/* webpackChunkName: "project-page" */ './components/projects/ProjectPage.react')
    ),
    members: asyncComponent(() =>
        import(/* webpackChunkName: "member-page" */ './components/people/MemberPage.react')
    ),
    error404: asyncComponent(
        () =>
            import(/* webpackChunkName: "error-404-page" */ './components/misc/OhNoScreen.react'),
        { message: 'Page Not Found' }
    ),
    // test: component(TestPage),
    // test: component(lazyRouteRenderer(() => import(/* webpackChunkName: "test-page" */ '../ui/TestPage')))
    test: asyncComponent(() =>
        import(/* webpackChunkName: "test-page" */ '../ui/TestPage')
    )
}

function asyncComponent(asyncComponent, props = {}) {
    const Component = lazyRouteRenderer(asyncComponent)
    return component(Component, props)
}

function component(Component, props = {}) {
    return options => <Component {...options} {...props} />
}

{
    const nonRedirectingRoutes = _.sortBy(
        routes.filter(route => !route.redirect).map(route => route.name)
    )
    const renderingRouteNames = _.sortBy(Object.keys(renderers))
    if (!_.isEqual(nonRedirectingRoutes, renderingRouteNames)) {
        const message = [
            'Routing integrity error!',
            'These routes are missing renderers in `renderRoute`:' +
                JSON.stringify(
                    _.difference(nonRedirectingRoutes, renderingRouteNames)
                ),
            'These route renderers in `renderRoute` are unneeded:' +
                JSON.stringify(
                    _.difference(renderingRouteNames, nonRedirectingRoutes)
                )
        ].join('\n')
        throw new Error(message)
    }
}

export function renderRoute({ name, options }) {
    const renderer = renderers[name]
    if (!renderer)
        throw new Error('Unable to find a route renderer for: ' + name)
    return renderer(options)
}

export default renderRoute
