import './LoginPage.less'

import PropTypes from 'prop-types'
import React from 'react'

import withClientInfo from '../fe-client-info/withClientInfo'
import { ResponsiveFrontPage } from '../../react/containers/layout/ResponsiveFrontPage.react'

const enhance = withClientInfo(client => ({
    mobile: client.isMobile(),
    cordova: client.isCordova()
}))

class LoginPage extends React.PureComponent {
    static propTypes = {
        mobile: PropTypes.bool.isRequired,
        cordova: PropTypes.bool
    }

    renderLoginForm = () => {
        const header = (
            <div>
                Login
            </div>
        )
        return (
            <div>
                {header}
                <input type="text"/>
                <input type="password"/>
            </div>
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
