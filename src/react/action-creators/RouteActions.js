import { parse } from 'url'

import history from 'core/frontend-globals/history'
import { generate } from 'core/app-routes/routes'

export function pushRoute({ name, options = {} }) {
    const path = generate({ name, options })
    const { pathname, search } = parse(path)
    history.push({ pathname, search })
}

export function replaceRoute({ name, options }) {
    const path = generate({ name, options })
    const { pathname, search } = parse(path)

    history.replace({ pathname, search })
}
