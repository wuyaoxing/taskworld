import './FormInput.less'

import classNames from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

import _ from 'lodash'

import { Icon, Loading } from '../'

const acceptableSize = [
    'smallest',
    'extra-small',
    'small',
    'regular',
    'medium',
    'extra-medium',
    'large',
    'extra-large'
]

export default class FormInput extends React.Component {
    static propTypes = {
        type: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        onChange: PropTypes.func.isRequired,
        onFocus: PropTypes.func,
        onBlur: PropTypes.func,
        onKeyDown: PropTypes.func,
        onKeyUp: PropTypes.func,
        onMouseUp: PropTypes.func,
        value: PropTypes.string,
        defaultValue: PropTypes.string,
        placeholder: PropTypes.string,
        autoFocus: PropTypes.bool,
        autoSelect: PropTypes.bool,
        className: PropTypes.string,
        style: PropTypes.object,
        icon: PropTypes.string,
        error: PropTypes.any,
        disabled: PropTypes.bool,
        textSize: PropTypes.oneOf(acceptableSize),
        size: PropTypes.oneOf(acceptableSize),
        revealable: PropTypes.bool,
        popoverError: PropTypes.bool,
        extra: PropTypes.node,
        inputExtra: PropTypes.node,
        inputStyle: PropTypes.object,
        inputClassName: PropTypes.string,
        loading: PropTypes.bool,
        disableEnter: PropTypes.bool,
        transparent: PropTypes.bool
    }

    static defaultProps = {
        popoverError: true,
        textSize: undefined,
        size: 'large',
        disableEnter: false
    }

    state = {
        isCapsLockEnable: false,
        revealPassword: false
    }

    componentDidMount() {
        if (this.props.autoFocus) {
            this.focus()
        } else if (this.props.autoSelect) {
            this.select()
        }
    }

    focus = () => {
        this.refs.input.focus()
    }

    select = () => {
        this.refs.input.select()
    }

    getInputValue = () => {
        return this.refs.input.value
    }

    onPasswordRevealClick = e => {
        this.setState({ revealPassword: !this.state.revealPassword })
    }

    onInputKeyPress = e => {
        if (this.props.disableEnter && e.width === 13) {
            e.preventDefault()
        }
    }

    onKeyPress = e => {
        if (this.props.type !== 'password') return
        if (!e.key.match(/[a-z]/i)) return

        const key = e.key
        const isShiftKey = e.getModifierState('Shift')
        const isCapsLockEnable = key === key.toUpperCase() && !isShiftKey
        if (isCapsLockEnable !== this.state.isCapsLockEnable) {
            this.setState({ isCapsLockEnable })
        }
    }

    onKeyUp = e => {
        if (e.key === 'CapsLock' && this.state.isCapsLockEnable) {
            this.setState({ isCapsLockEnable: false })
        } else if (this.props.onKeyUp) {
            this.props.onKeyUp(e)
        }
    }

    onKeyDown = e => {
        if (e.key === 'CapsLock' && !this.state.isCapsLockEnable) {
            this.setState({ isCapsLockEnable: true })
        }

        if (this._composingEastAsian && e.keyCode === 229) {
            e.preventDefault()
            e.stopPropagation()
            return false
        }

        if (this.props.onKeyDown) {
            this.props.onKeyDown(e)
        }
    }

    onCompositionStart = e => {
        this._composingEastAsian = true
    }

    onCompositionEnd = e => {
        this._composingEastAsian = false
    }

    renderError = () => {
        if (!this.props.error) return null
        return this.rendreHelpTextError()
    }

    rendreHelpTextError = () => {
        return (
            <div
                className={classNames('ui-form-input__error-message', {
                    '--center': this.props.transparent
                })}
            >
                <div className="ui-form-input__error-marker-container">
                    <Icon
                        className="ui-form-input__error-marker"
                        name="close"
                    />
                </div>
                {this.props.error}
            </div>
        )
    }

    renderInput = () => {
        const type =
            this.props.type === 'password' && this.state.revealPassword
                ? 'text'
                : this.props.type

        const allowedInputProps = [
            'name',
            'disabled',
            'onChange',
            'onFocus',
            'onBlur',
            'onMouseUp',
            'autoFocus',
            'placeholder',
            'value',
            'defaultValue'
        ]

        const input = !this.props.loading ? (
            <input
                ref="input"
                style={this.props.inputStyle}
                className={classNames(
                    'ui-form-input__input-element',
                    this.props.inputClassName,
                    {
                        '--transparent': this.props.transparent
                    }
                )}
                type={type}
                {..._.pick(this.props, allowedInputProps)}
                onKeyPress={this.onInputKeyPress}
                onCompositionStart={this.onCompositionStart}
                onCompositionEnd={this.onCompositionEnd}
            />
        ) : (
            <Loading size="smallest" />
        )

        return (
            <div className="ui-form-input__input">
                {this.renderIcon()}
                {input}
                {this.renderPasswordRevealLink()}
                {this.props.inputExtra}
            </div>
        )
    }

    renderIcon = () => {
        if (!this.props.icon) return null
        return <Icon name={this.props.icon} />
    }

    renderPasswordRevealLink = () => {
        if (this.props.type === 'password' && this.props.revealable) {
            return (
                <span
                    className="ui-form-input__password-reveal"
                    onClick={this.onPasswordRevealClick}
                >
                    {this.state.revealPassword ? 'hide' : 'show'}
                </span>
            )
        }
        return null
    }

    renderCapsLock = () => {
        if (this.state.isCapsLockEnable) {
            const capsLockIconPath = require('../../assets/images/caps-lock-icon.png')
            return (
                <div className="ui-form-input__caps-lock-message">
                    <img src={capsLockIconPath} alt="CapsLock" />
                    Caps Lock is ON!
                </div>
            )
        }
    }

    render() {
        const classes = classNames(
            'ui-form-input',
            this.props.className,
            `--text-size_${this.props.textSize || this.props.size}`,
            `--size_${this.props.size}`,
            {
                '--loading': this.props.loading,
                '--error': this.props.error,
                '--width-password-reveal': this.props.revealable,
                '--with-icon': this.props.icon
            }
        )

        const controlClasses = classNames('ui-form-input__control', {
            '--loading': this.props.loading
        })

        return (
            <div className={classes} style={this.props.style}>
                <div className="ui-form-input__control-wrapper">
                    <div
                        className={controlClasses}
                        onKeyUp={this.onKeyUp}
                        onKeyDown={this.props.onKeyDown}
                        onKeyPress={this.props.onKeyPress}
                    >
                        {this.renderInput()}
                    </div>
                    {this.renderError()}
                    {this.renderCapsLock()}
                </div>
            </div>
        )
    }
}
