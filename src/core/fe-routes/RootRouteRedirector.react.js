import PropTypes from 'prop-types'
import React from 'react'

import LoadingScreen from '../../react/components/misc/LoadingScreen.react'

export default class RootRouteRedirector extends React.Component {
    static propTypes = {
        activeShowRoute: PropTypes.string,
        redirectPage: PropTypes.string
    }

    componentDidMount() {
        console.log(this)
        const redirectPage = 'projects'
        this.redirectToPage(redirectPage)
    }

    redirectToPage = redirectPage => {
        const showRoute = this.props.activeShowRoute ? `?show=${this.props.activeShowRoute}` : ''
        window.location.href = `#/${redirectPage}${showRoute}`
    }

    render() {
        return <LoadingScreen />
    }
}
