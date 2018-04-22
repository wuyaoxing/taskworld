import React from 'react'
import ReactDOM from 'react-dom'

import lazyRouteRenderer from 'react/lazyRouteRenderer'

function asyncComponent(asyncComponent, props = {}) {
    const Component = lazyRouteRenderer(asyncComponent)
    return <Component {...props} />
}

export function showLoginPage() {
    return ReactDOM.render(
        asyncComponent(() =>
            import(/* webpackChunkName: "app-login-page" */ 'core/app-login-page/LoginPage.react')
        ),
        document.getElementById('root')
    )
}

export function showNotFoundPage() {
    return ReactDOM.render(
        asyncComponent(() =>
            import(/* webpackChunkName: "app-error-page" */ 'react/components/errors/ErrorPage.react')
        ),
        document.getElementById('root')
    )
}
