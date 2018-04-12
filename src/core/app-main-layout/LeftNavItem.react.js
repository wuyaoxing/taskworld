import './LeftNavItem.less'

import classNames from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

import { Icon } from '../../ui'

export default class LeftNavItem extends React.Component {
    static propTypes = {
        iconName: PropTypes.string.isRequired,
        tooltip: PropTypes.node,
        active: PropTypes.bool
    }

    renderIcon = () => {
        return (
            <Icon
                name={this.props.iconName}
                className="app-left-nav-item__icon"
            />
        )
    }

    render() {
        const className = classNames('app-left-nav-item', {
            '--active': this.props.active
        })
        return (
            <div className={className}>
                {this.renderIcon()}
                {this.props.tooltip}
            </div>
        )
    }
}
