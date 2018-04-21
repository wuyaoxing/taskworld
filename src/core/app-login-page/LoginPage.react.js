import './LoginPage.less'

import PropTypes from 'prop-types'
import React from 'react'

import eventLog from 'core/frontend-globals/eventLog'

import withClientInfo from 'core/app-client-info/withClientInfo'
import { ResponsiveFrontPage } from 'react/containers/layout/ResponsiveFrontPage.react'
import LoginForm from 'react/components/onboarding/forms/LoginForm.react'

import { FormHeader } from 'ui/form'

import { authenticationService } from 'core/frontend-service'

const enhance = withClientInfo(client => ({
    mobile: client.isMobile(),
    cordova: client.isCordova()
}))

class LoginPage extends React.PureComponent {
    static propTypes = {
        mobile: PropTypes.bool.isRequired,
        cordova: PropTypes.bool
    }

    state = {
        email: '',
        isForgotPassword: false
    }

    onSubmit = async data => {
        const { failure, result } = await authenticationService.login({
            email: data.email,
            password: data.password
        })

        if(failure) {
            eventLog(
                'page:login',
                'login:fail',
                failure
            )
            return
        }

        eventLog(
            'page:login',
            'login:success',
            result
        )

        window.location.href = '/' + window.location.hash

        return {
            success: true
        }
    }

    onEmailChange = email => {
        this.setState({ email })
    }

    renderLoginForm = () => {
        const header = (
            <FormHeader>
                Log In
            </FormHeader>
        )
        return (
            <LoginForm
                preFilledFormValues={{ email: this.state.email }}
                header={header}
                onEmailChange={this.onEmailChange}
                onSubmit={this.onSubmit}
            />
        )
    }

    renderForm = () => {
        return this.renderLoginForm()
    }

    renderFooter = () => {
        return <div>footer</div>
    }

    render() {
        return (
            <ResponsiveFrontPage
                className="ax-login-page"
                footer={this.renderFooter()}
            >
                {this.renderForm()}
            </ResponsiveFrontPage>
        )
    }
}

export default enhance(LoginPage)
