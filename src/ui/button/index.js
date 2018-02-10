import './button.less'

import classNames from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

import _ from 'lodash'

import { Icon, Loading, Tooltip } from '../'

const SIZE = [
    'smallest',
    'extra-small',
    'small',
    'regular',
    'medium',
    'large',
    'narrow-small',
    'wide-medium',
    'wide-large',
    'full-width'
]

export default class Button extends React.Component {
    static propTypes = {
        border: PropTypes.bool,
        children: PropTypes.any,
        className: PropTypes.string,
        disabled: PropTypes.bool,
        fill: PropTypes.bool,
        fontWeight: PropTypes.oneOf(['normal', 'bold']),
        icon: PropTypes.string,
        loadingSize: PropTypes.string,
        onClick: PropTypes.func,
        onMouseDown: PropTypes.func,
        raised: PropTypes.bool,
        size: PropTypes.oneOf(SIZE),
        style: PropTypes.string,
        customStyle: PropTypes.object,
        tabIndex: PropTypes.number,
        tip: PropTypes.string,
        type: PropTypes.string,
        buttonRef: PropTypes.func
    }

    static defaultProps = {
        type: 'button',
        className: '',
        size: 'regular',
        fontWeight: 'bold',
        loadingSize: 'small'
    }

    onClick = e => {
        if (this.props.onClick) {
            e.preventDefault()
            e.stopPropagation()
            this.props.onClick(e)
        }
    }

    renderLoading = () => (
        <Loading key="loading" size={this.props.loadingSize} />
    )

    render() {
        const { style, disabled, children } = this.props

        const classes = classNames(
            'ui-button',
            `--size_${this.props.size}`,
            `--font-weight_${this.props.fontWeight}`,
            {
                '--modal-positive': style === 'primary',
                '--modal-negative': style === 'secondary',
                amber: style === 'special',
                '--danger': style === 'danger',
                '--blend-dark': style === 'blend-drak',
                red: style === 'red',
                '--loading': style === 'loading',
                '--disabled': style === 'disabled' || disabled,
                '--primary-transparent': style === 'primary-transparent',
                '--secondary-transparent': style === 'secondary-transparent',
                '--ghost': style === 'ghost',
                '--raised': this.props.raised,
                '--fill': this.props.fill,
                '--with-border': this.props.border
            },
            this.props.className
        )

        const content =
            style === 'loading' ? (
                this.renderLoading()
            ) : (
                <div className="ui-button__main-container">
                    {this.props.icon && (
                        <Icon
                            name={this.props.icon}
                            className="ui-button__icon"
                        />
                    )}
                    {_.isString(children) ? (
                        <span className="ui-button__text">{children}</span>
                    ) : (
                        children
                    )}
                </div>
            )
        return (
            <button
                ref={this.props.buttonRef || (() => {})}
                type={this.props.type}
                tabIndex={this.props.tabIndex}
                className={classes}
                style={this.props.customStyle}
                onClick={!disabled && this.onClick}
                onMouseDown={!disabled && this.props.onMouseDown}
            >
                {content}
                {this.props.tip && <Tooltip>{this.props.tip}</Tooltip>}
            </button>
        )
    }
}
