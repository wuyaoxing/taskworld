import './SubHeader.less'

import classNames from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

import RouterLink from '../app-routes/RouteLink.react'

export default class SubHeader extends React.Component {
    static propTypes = {
        left: PropTypes.node,
        center: PropTypes.node,
        right: PropTypes.node,
        archived: PropTypes.bool
    }

    render() {
        const classes = classNames(
            'app-sub-header',
            this.props.archived && '--archived'
        )
        return (
            <section className={classes}>
                {this.props.left}
                {this.props.center}
                {this.props.right}
            </section>
        )
    }
}

SubHeader.Section = ({ children }) => (
    <div className="app-sub-header__section">
        {children}
    </div>
)

SubHeader.Section.displayName = 'SubHeader.Section'

SubHeader.Section.propTypes = {
    children: PropTypes.node
}

SubHeader.Tab = ({ name, options, text, active, ax }) => (
    <RouterLink name={name} options={options}>
        <div className={classNames('app-sub-header__tab', { '--active': active }, ax)} data-tab-name={name}>
            {text}
        </div>
    </RouterLink>
)

SubHeader.Tab.displayName = 'SubHeader.Tab'

SubHeader.Tab.propTypes = {
    name: PropTypes.string.isRequired,
    options: PropTypes.object,
    text: PropTypes.node.isRequired,
    active: PropTypes.bool,
    ax: PropTypes.string
}
