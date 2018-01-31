import './MainLayout.less'

import classNames from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

import TopNav from './TopNav.react'
import LeftNav from './LeftNav.react'
import GlobalAdd from './GlobalAdd.react'

import { Icon } from '../../ui'
import { DEFAULT_AVATAR_URL } from '../app-users/user'

import withClientInfo from '../fe-client-info/withClientInfo'

const enhance = withClientInfo(client => ({
    mobileView: client.isMobile(),
    hideHelpCenter: client.isMobile()
}))

class MainLayout extends React.Component {
    static propTypes = {
        currentSection: PropTypes.string.isRequired,
        userAvatarSource: PropTypes.string,

        mobileView: PropTypes.bool.isRequired,
        hideHelpCenter: PropTypes.bool.isRequired,
        renderHelpCenter: PropTypes.func.isRequired
    }

    constructor(props) {
        super(props)
        this.state = {
            showGlobalAddMenu: false
        }
    }

    toggleGlobalAdd = () => {
        this.setState({ showGlobalAddMenu: !this.state.showGlobalAddMenu })
    }

    renderGlobalAdd = () => (
        <GlobalAdd
            active={this.state.showGlobalAddMenu}
            onClick={this.toggleGlobalAdd}
        />
    )

    renderWorkspace = className => {
        const classes = classNames(
            `${className}__workspace-selector`,
            'ax-workspace-menu-button'
        )
        return (
            <div className={classes}>
                <span>me</span>
                <Icon
                    name={this.props.mobileView ? 'arrow-right' : 'arrow-down'}
                />
            </div>
        )
    }

    renderUserAvatar = className => {
        const src = this.props.userAvatarSource
        return (
            <img
                src={src || DEFAULT_AVATAR_URL}
                className={`${className}__user-avatar ax-user-menu`}
            />
        )
    }

    renderWorkspaceAndUserPanel = className => (
        <div className={`${className}__wrapper`}>
            {this.renderWorkspace(className)}
            {this.renderUserAvatar(className)}
        </div>
    )

    renderGlobalAddSection = () => (
        <div className="main-layout__global-add">{this.renderGlobalAdd()}</div>
    )

    renderTopNav = () => (
        <TopNav
            className="main-layout__top-nav"
            renderWorkspaceAndUserPanel={this.renderWorkspaceAndUserPanel}
            mobileView={this.props.mobileView}
            hideHelpCenter={this.props.hideHelpCenter}
            renderHelpCenter={this.props.renderHelpCenter}
        />
    )

    renderLeftNav = () => (
        <LeftNav
            className="main-layout__left-nav"
            currentSection={this.props.currentSection}
        />
    )
    renderContent = () => (
        <section className="main-layout__content">
            {this.props.children}
        </section>
    )

    render() {
        return (
            <div className="main-layout">
                {this.renderGlobalAddSection()}
                {this.renderTopNav()}
                {this.renderLeftNav()}
                {this.renderContent()}
            </div>
        )
    }
}

export default enhance(MainLayout)
