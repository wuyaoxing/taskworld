import './TopNavItem.less'

import classNames from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

import { Icon } from 'ui'

export default class TopNavItem extends React.Component {
    static propTypes = {
        iconName: PropTypes.string,
        content: PropTypes.node,
        onClick: PropTypes.func,
        active: PropTypes.bool
    }

    renderIcon = () => (
        <Icon name={this.props.iconName} className="app-top-nav-item__icon" />
    )

    render() {
        const className = classNames(
            'app-top-nav-item',
            'ax-top-nav-item',
            this.props.active && '--active'
        )
        return (
            <div
                className={className}
                onClick={this.props.onClick}
                onMouseOver={this.onMouseOver}
                onMouseLeave={this.onMouseLeave}
            >
                {this.props.content}
                {this.props.iconName && this.renderIcon()}
            </div>
        )
    }
}
