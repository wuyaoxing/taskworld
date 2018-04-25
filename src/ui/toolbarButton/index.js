import './toolbarButton.less'

import classNames from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

import { Icon, Tooltip } from 'ui'

export default class ToolbarButton extends React.PureComponent {
    static propTypes = {
        iconName: PropTypes.string,
        size: PropTypes.oneOf(['small', 'regular', 'large']),
        children: PropTypes.node,
        tip: PropTypes.string,
        active: PropTypes.bool,
        disabled: PropTypes.bool,
        onClick: PropTypes.func
    }

    static defaultProps = {
        size: 'regular'
    }

    render() {
        const classes = classNames(
            'ui-toolbar-button',
            `--size-${this.props.size}`,
            {
                '--active': this.props.active,
                '--disabled': this.props.disabled
            }
        )
        return (
            <button
                className={classes}
                {...(this.props.disabled
                    ? {}
                    : {
                        onClick: this.props.onClick
                    })}
            >
                {this.props.iconName && <Icon name={this.props.iconName} />}
                {this.props.children}
                {this.props.tip && (
                    <Tooltip position="left">{this.props.tip}</Tooltip>
                )}
            </button>
        )
    }
}
