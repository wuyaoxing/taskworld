import './TopNav.less'

import classNames from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

import ExpiryInfo from './ExpiryInfo.react'
import TopNavItem from './TopNavItem.react'

const BASE_CLASS_NAME = 'app-top-nav'

export default class TopNav extends React.Component {
    static propTypes = {
        className: PropTypes.string.isRequired,
        hideHelpCenter: PropTypes.bool,
        renderHelpCenter: PropTypes.func,
        renderWorkspaceAndUserPanel: PropTypes.func.isRequired
    }

    renderHelpCenter = () => (
        <TopNavItem
            className="app-top-nav__menu-item"
            content={this.props.renderHelpCenter(BASE_CLASS_NAME)}
        />
    )

    renderLeftPanel = () => (
        <div className="app-top-nav__left">
            <ExpiryInfo />
        </div>
    )

    renderRightPanel = () => (
        <div className="app-top-nav__right">
            {!this.props.hideHelpCenter && this.renderHelpCenter()}
            {this.props.renderWorkspaceAndUserPanel(BASE_CLASS_NAME)}
        </div>
    )

    render() {
        return (
            <section
                className={classNames(this.props.className, 'app-top-nav')}
            >
                {this.renderLeftPanel()}
                {this.renderRightPanel()}
            </section>
        )
    }
}
