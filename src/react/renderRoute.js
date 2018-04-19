import _ from 'lodash'
import React from 'react'

import { routes } from '../core/app-routes/routes'

import lazyRouteRenderer from './lazyRouteRenderer'

import { TABS as PROJECT_TABS } from './components/project/ProjectHeader.react'

export const renderers = {
    root: asyncComponent(() =>
        import(/* webpackChunkName: "root-page" */ '../core/app-routes/RootRouteRedirector.react')
    ),
    notifications: asyncComponent(() =>
        import(/* webpackChunkName: "notifications-page" */ './components/notifications/NotificationsPage.react')
    ),
    projects: asyncComponent(() =>
        import(/* webpackChunkName: "projects-page" */ './components/projects/ProjectsPage.react')
    ),
    project: asyncComponent(
        () =>
            import(/* webpackChunkName: "project-page" */ './components/project/ProjectPage.react'),
        {
            activeTab: PROJECT_TABS.TASKS,
            contentComponent: asyncComponent(() =>
                import(/* webpackChunkName: "project-task-page" */ './components/project/ProjectTaskPage.react')
            )
        }
    ),
    timelineForProject: asyncComponent(
        () =>
            import(/* webpackChunkName: "project-page" */ './components/project/ProjectPage.react'),
        {
            activeTab: PROJECT_TABS.TIMELINE,
            contentComponent: asyncComponent(() =>
                import(/* webpackChunkName: "project-tiemline-page" */ './components/project/ProjectTimelinePage.react')
            )
        }
    ),
    analyticsForProject: asyncComponent(
        () =>
            import(/* webpackChunkName: "project-page" */ './components/project/ProjectPage.react'),
        {
            activeTab: PROJECT_TABS.ANALYTICS,
            contentComponent: asyncComponent(() =>
                import(/* webpackChunkName: "project-analytics-page" */ './components/project/ProjectAnalyticsPage.react')
            )
        }
    ),
    calendarForProject: asyncComponent(
        () =>
            import(/* webpackChunkName: "project-page" */ './components/project/ProjectPage.react'),
        {
            activeTab: PROJECT_TABS.CALENDAR,
            contentComponent: asyncComponent(() =>
                import(/* webpackChunkName: "project-calendar-page" */ './components/project/ProjectCalendarPage.react')
            )
        }
    ),
    filesForProject: asyncComponent(
        () =>
            import(/* webpackChunkName: "project-page" */ './components/project/ProjectPage.react'),
        {
            activeTab: PROJECT_TABS.FILES,
            contentComponent: asyncComponent(() =>
                import(/* webpackChunkName: "project-files-page" */ './components/project/ProjectFilesPage.react')
            )
        }
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
