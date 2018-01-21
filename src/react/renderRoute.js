import _ from 'lodash'
import React from 'react'

import ProjectListPage from './components/projects/project-list/ProjectListPage.react'

import { routes } from '../core/fe-routes/routes'

export const renderers = {
    projects: component(ProjectListPage)
}

function component(Component, props = {}) {
    return options => <Component {...options} {...props} />
}

{
    const nonRedirectingRoutes = _.sortBy(routes.filter(route => !route.redirect).map(route => route.name))
    const renderingRouteNames = _.sortBy(Object.keys(renderers))
    if(!_.isEqual(nonRedirectingRoutes, renderingRouteNames)) {
        const message = [
            'Routing integrity error!',
            'These routes are missing renderers in `renderRoute`:' + JSON.stringify(_.difference(nonRedirectingRoutes, renderingRouteNames)),
            'These route renderers in `renderRoute` are unneeded:' + JSON.stringify(_.difference(renderingRouteNames, nonRedirectingRoutes))
        ].join('\n')
        throw new Error(message)
    }
}

export function renderRoute({ name, options }) {
    const renderer = renderers[name]
    if(!renderer) throw new Error('Unable to find a route renderer for: ' + name)
    return renderer(options)
}

export default renderRoute
