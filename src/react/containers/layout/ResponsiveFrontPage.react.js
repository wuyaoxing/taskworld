import './ResponsiveFrontPage.less'

import classNames from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

import withClientInfo from 'core/app-client-info/withClientInfo'

const enhance = withClientInfo(client => ({
    mobile: client.isMobile()
}))

export class ResponsiveFrontPage extends React.Component {
    static propTypes = {
        className: PropTypes.string,
        chidren: PropTypes.node,
        footer: PropTypes.node,
        hideLogo: PropTypes.bool,

        mobile: PropTypes.bool
    }

    renderLogo = () => {
        if (this.props.hideLogo) return null
        const logoPath = this.props.mobile
            ? require('assets/images/dark-logo.svg')
            : require('assets/images/logo.svg')
        return (
            <img
                className="app-responsive-front-page__logo"
                src={logoPath}
                alt="LOGO"
            />
        )
    }

    render() {
        const classes = classNames(
            'app-responsive-front-page',
            this.props.mobile && '--mobile',
            this.props.className
        )

        return (
            <section className={classes}>
                <div className="app-responsive-front-page__background" />
                <div className="app-responsive-front-page__foreground">
                    {this.renderLogo()}
                    <div className="app-responsive-front-page__body">
                        {this.props.children}
                    </div>
                    {this.props.footer}
                </div>
            </section>
        )
    }
}

export default enhance(ResponsiveFrontPage)
