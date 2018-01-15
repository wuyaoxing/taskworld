import React from 'react'
import ReactDOM from 'react-dom'

import * as Pages from './Pages'
import { getPathname, hrefForPathname } from '../fe-frontend-globals/PathnameRouting'

export async function startApp() {
    try {
        const route = resolveRoute(getPathname())
        return await route({
            render
        })
    } catch (e) {
        console.log(e)
        return Pages.showLoginPage()
    }
}

function resolveRoute(pathname) {
    const pathnameMatchs = url => pathname === url || pathname === `${url}/`
    if (pathnameMatchs('/login')) {
        return Pages.showLoginPage
    }
    if (pathnameMatchs('/')) {
        return handleFrontPage
    }
    return Pages.showNotFoundPage
}

function handleFrontPage() {
    const workspaceName = 'me'
    return redirectToWorkspace(workspaceName)
}

function redirectToWorkspace(workspaceName) {
    window.location.replace(hrefForPathname(`/${workspaceName}/`))
}

function render(component, props) {
    ReactDOM.render(React.createElement(component, props), document.getElementById('root'))
}