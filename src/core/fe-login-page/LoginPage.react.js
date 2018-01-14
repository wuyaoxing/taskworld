import PropTypes from 'prop-types'
import React from 'react'

import withClientInfo from '../fe-client-info/withClientInfo'

const enhance = withClientInfo(client => ({
    mobile: client.isMobile(),
    cordova: client.isCordova()
}))

class LoginPage extends React.PureComponent {
    static propTypes = {
        mobile: PropTypes.bool.isRequired,
        cordova: PropTypes.bool
    }
    render() {
        return (
            <h1>
                Login
            </h1>
        )
    }
}

export default enhance(LoginPage)