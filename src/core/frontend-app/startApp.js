import React from 'react'
import ReactDOM from 'react-dom'

import { tokenService, authenticationService } from 'core/frontend-service'
import * as Pages from './Pages'
import { getPathname, hrefForPathname } from 'core/frontend-globals/PathnameRouting'

export async function startApp({ loadingScreen }) {
    try {
        const route = resolveRoute(getPathname())
        return await route({
            loadingScreen,
            render
        })
    } catch (e) {
        return Pages.showLoginPage()
    } finally {
        loadingScreen.remove()
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
    const workspaceName = getWorkspaceName(pathname)
    if(workspaceName) {
        return enterWorkspaceByName(workspaceName)
    }
    return Pages.showNotFoundPage
}

function handleFrontPage(env) {
    return authenticateAndInitServices(env, ({ userInfo }) => {
        const workspaceName = 'me'
        redirectToWorkspace(workspaceName)
    })
}

function redirectToWorkspace(workspaceName) {
    window.location.replace(hrefForPathname(`/${workspaceName}/`))
}

function getWorkspaceName(pathname) {
    const match = pathname.match(/^\/([^/]*?)(\/|$)/)
    return match ? match[1] : null
}

function enterWorkspaceByName(workspaceName) {
    const { accessToken, userId } = {
        accessToken: '20181016',
        userId: '20181016',
    }
    return env => {
        const { loadingScreen } = env
        return authenticateAndInitServices(env, async ({ accessToken, userInfo }) => {
            const result = await enterWorkspace({
                workspaceName,
                accessToken,
                userId: userInfo._id,
                onStatus: status => { loadingScreen.update({ status }) }
            })
            return result
        })
    }
}

function enterWorkspace({
    workspaceName,
    accessToken,
    userId,
    onStatus
}) {
    onStatus('Loading workspace data……')
    return import(/* webpackChunkName: "app" */ './AppLauncher').then(
        module => {
            const AppLauncher = module
            return AppLauncher.launchApp({
                accessToken,
                userId,
                workspaceName
            })
        }
    )
}

async function authenticateAndInitServices({ loadingScreen }, handler) {
    const accessToken = tokenService.getToken()
    if(!accessToken) {
        if(shouldRedirectAfterLogin()) return Pages.showLoginPage()
        const pathname = getPathname()
        const workspaceName = getWorkspaceName(pathname)
        const base = hrefForPathname('/login')
        const queryParam = workspaceName
            ? `${base.includes('?') ? '&' : '?'}workspace=${workspaceName}`
            : ''
        window.location.href = base + queryParam + window.location.hash
        return
    }

    loadingScreen.update({ status: 'Loading user info...' })
    const userInfo = await authenticationService.authenticateWithToken()

    return handler({ accessToken, userInfo })
}

function shouldRedirectAfterLogin() {
    return getPathname() === '/redirect'
}

function render(component, props) {
    ReactDOM.render(React.createElement(component, props), document.getElementById('root'))
}
