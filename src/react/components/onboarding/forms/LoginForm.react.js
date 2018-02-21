import classNames from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'
import { withProps } from 'recompose'

import { Form, FormInput, FormRow } from '../../../../ui/form'
import { Button } from '../../../../ui'

const enhance = withProps({
    googleLoginEnabled: false
})

export class LoginForm extends React.PureComponent {
    static propTypes = {
        onEmailChange: PropTypes.func,
        onSwitchPage: PropTypes.func,
        header: PropTypes.node.isRequired,
        allowedEmailDomains: PropTypes.array,
        preFilledFormValues: PropTypes.object,
        focusedFieldOnLoad: PropTypes.string,
        onSubmit: PropTypes.func.isRequired,
        mobile: PropTypes.bool,
        googleLoginEnabled: PropTypes.bool,
        links: PropTypes.node,
        privateServer: PropTypes.bool
    }

    static defaultProps = {
        preFilledFormValues: {}
    }

    constructor(props) {
        super(props)
        const { preFilledFormValues, allowedEmailDomains } = this.props
        this.state = {
            email: preFilledFormValues.email || '',
            domain: (allowedEmailDomains && allowedEmailDomains[0]) || null,
            password: preFilledFormValues.password || '',
            submitting: false,
            error: {
                email: null,
                password: null
            }
        }
    }

    getFullEmail = () => {
        const email = this.state.email
        const domain = this.state.domain
        return domain ? `${email}@${domain}` : email
    }

    onSubmit = async e => {
        e.preventDefault()

        this.setState({
            submitting: true,
            error: {
                email: null,
                password: null
            }
        })

        const data = {
            email: this.getFullEmail(),
            password: this.state.password
        }

        try {
            const { error } = await this.props.onSubmit(data)
            if (error) {
                this.setState({
                    error,
                    submitting: false
                })
                if (!this.props.privateServer) {
                    console.warn('Login Error...')
                }
            }
        } catch (error) {
            console.log(error)
            this.setState({ submitting: false })
        }
    }

    onFieldChange = (field, value) => {
        this.setState({
            [field]: value,
            error: { email: null, password: null }
        })
        if (field === 'email' && this.props.onEmailChange) {
            this.props.onEmailChange(value)
        }
    }

    renderEmailInputs = () => {
        const domains = this.props.allowedEmailDomains
        const classes = classNames(
            'app-login-form__email-field',
            domains && '--width-dropdown'
        )

        const input = (
            <FormInput
                type="email"
                name="email"
                value={this.state.email}
                className={classes}
                inputClassName="ax-login-email-field"
                placeholder="email"
                onChange={e => {
                    this.onFieldChange('email', e.target.value)
                }}
                error={this.state.error.email}
                popoverError={false}
                disabled={this.state.submitting}
                transparent={this.props.mobile}
            />
        )
        return <FormRow style="center">{input}</FormRow>
    }

    renderPasswordInput = () => {
        return (
            <FormRow>
                <FormInput
                    type="password"
                    name="password"
                    value={this.state.password}
                    className="app-login-form__password-field"
                    inputClassName="ax-login-password-field"
                    placeholder="password"
                    onChange={e => {
                        this.onFieldChange('password', e.target.value)
                    }}
                    error={this.state.error.password}
                    disabled={this.state.submitting}
                    transparent={this.props.mobile}
                />
            </FormRow>
        )
    }

    renderButton = () => {
        return (
            <FormRow>
                <Button
                    fill
                    className="ax-login-button"
                    onClick={this.onSubmit}
                    style={this.state.submitting ? 'loading' : 'primary'}
                    size="large"
                >
                    Log In
                </Button>
            </FormRow>
        )
    }

    render() {
        return (
            <Form
                className="app-login-form ax-login-form"
                onSubmit={this.onSubmit}
            >
                {this.props.header}
                {this.renderEmailInputs()}
                {this.renderPasswordInput()}
                {this.renderButton()}
            </Form>
        )
    }
}

export default enhance(LoginForm)
