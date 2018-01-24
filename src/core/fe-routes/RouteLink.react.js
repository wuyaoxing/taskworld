import { mapProps } from 'recompose'

import { Link } from '../../ui'
import { generate } from './routes'

const RouteLink = mapProps(({ name, options = {}, ...props }) => ({
    href: `#${generate({ name, options })}`,
    ...props
}))(Link)

export default RouteLink
