import { parse } from 'url'

import history from 'core/frontend-globals/history'
import { generate } from 'core/app-routes/routes'

export function pushRoute(route) {
    const path = generate(route)
    const { pathname, search } = parse(path)

    history.push({ pathname, search })
}

export function replaceRoute(route) {
    const path = generate(route)
    const { pathname, search } = parse(path)

    history.replace({ pathname, search })
}
