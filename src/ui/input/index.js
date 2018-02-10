import './input.less'

import classNames from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

export default class Input extends React.PureComponent {
    static propTypes = {
        inputRef: PropTypes.func,
        type: PropTypes.string.isRequired,
        name: PropTypes.string,
        disabled: PropTypes.bool,
        autoFocus: PropTypes.bool,
        placeholder: PropTypes.string,
        defaultValue: PropTypes.string,
        value: PropTypes.string,
        style: PropTypes.object,
        className: PropTypes.string,
        transparent: PropTypes.bool,
        borderless: PropTypes.bool,
        onChange: PropTypes.func,
        onFocus: PropTypes.func,
        onBlur: PropTypes.func,
        onKeyPress: PropTypes.func,
        onMouseUp: PropTypes.func
    }

    static defaultProps = {
        type: 'text',
    }

    render() {
        const classes = classNames(
            'ui-input',
            this.props.className,
            {
                '--transparent': this.props.transparent,
                '--no-border': this.props.borderless
            }
        )
        return (
            <input
                ref={this.props.inputRef}
                type={this.props.type}
                name={this.props.name}
                className={classes}
                style={this.props.style}
                placeholder={this.props.placeholder}
                defaultValue={this.props.defaultValue}
                value={this.props.value}
                disabled={this.props.disabled}
                autoFocus={this.props.autoFocus}
                onChange={this.props.onChange}
                onFocus={this.props.onFocus}
                onBlur={this.props.onBlur}
                onKeyPress={this.props.onKeyPress}
                onMouseUp={this.props.onMouseUp}
            />
        )
    }
}
