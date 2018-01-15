import QueryString from 'querystring'

export function shouldUsePathnameFromQueryString() {
    return process.env.CORDOVA
}

export function hrefForPathname(pathname) {
    if (shouldUsePathnameFromQueryString()) {
        return `?pathname=${encodeURIComponent(pathname)}`
    }
    return pathname
}

export function getPathname() {
    if (shouldUsePathnameFromQueryString()) {
        const queryParams = QueryString.parse(window.location.search.replace(/^\?/, ''))
        return queryParams.pathname || '/'
    }
    return window.location.pathname
}