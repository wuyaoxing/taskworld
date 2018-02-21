import PropTypes from 'prop-types'
import React from 'react'

import RouteLink from '../app-routes/RouteLink.react'

export default class LeftNavLink extends React.Component {
    static propTypes = {
        route: PropTypes.string.isRequired,
        onClick: PropTypes.func,
        children: PropTypes.node.isRequired,
        resolvedRoute: PropTypes.object,
        linkOrder: PropTypes.number
    }

    onClick = e => {
        console.log(e)
    }

    render() {
        return (
            <div>
                <RouteLink
                    className="app-left-nav-link"
                    name={this.props.route}
                    onClick={this.onClick}
                >
                    {this.props.children}
                </RouteLink>
            </div>
        )
    }
}
