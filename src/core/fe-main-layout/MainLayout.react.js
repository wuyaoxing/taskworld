import './MainLayout.less'

import PropTypes from 'prop-types'
import React from 'react'
import TopNav from './TopNav.react'
import LeftNav from './LeftNav.react'

class MainLayout extends React.Component {
    static propTypes = {
        currentSection: PropTypes.string.isRequired
    }
    renderTopNav = () => <TopNav className="main-layout__top-nav" />
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
                {this.renderTopNav()}
                {this.renderLeftNav()}
                {this.renderContent()}
            </div>
        )
    }
}

export default MainLayout
