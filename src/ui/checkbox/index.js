import './checkbox.less'

import classNames from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

import { Icon } from '../'

export default class Checkbox extends React.PureComponent {
    static propTypes = {
        className: PropTypes.string,
        size: PropTypes.oneOf([15, 18]),
        children: PropTypes.node,
        checked: PropTypes.bool.isRequired,
        disabled: PropTypes.bool,
        onChange: PropTypes.func
    }

    static defaultProps = {
        size: 15
    }

    onClick = e => {
        if(this.props.disabled) return

        if(this.props.onChange) {
            e.preventDefault()
            e.stopPropagation()
            this.props.onChange(e)
        }
    }

    render() {
        const classes = classNames(
            'ui-checkbox',
            this.props.className,
            this.props.checked && '--checked',
            this.props.disabled && '--disabled'
        )
        return (
            <div
                className={classes}
                onMouseDown={this.onClick}
            >
                <div className="ui-checkbox__checkbox" style={{ width: this.props.size, height: this.props.size }}>
                    {this.props.checked && <Icon className="ui-checkbox__check"
                        name="check-mark-bold"
                        style={{ fontSize: this.props.size - 3 }}
                     />}
                </div>
                <div className="ui-checkbox__label" style={{ marginLeft: this.props.size < 18 ? 5 : 10 }}>
                    {this.props.children}
                </div>
            </div>
        )
    }
}
