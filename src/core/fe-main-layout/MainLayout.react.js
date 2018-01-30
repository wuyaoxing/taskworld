import './MainLayout.less'

import PropTypes from 'prop-types'
import React from 'react'
import TopNav from './TopNav.react'
import LeftNav from './LeftNav.react'
import GlobalAdd from './GlobalAdd.react'

class MainLayout extends React.Component {
    static propTypes = {
        currentSection: PropTypes.string.isRequired
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

    renderGlobalAddSection = () => (
        <div className="main-layout__global-add">{this.renderGlobalAdd()}</div>
    )

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
                {this.renderGlobalAddSection()}
                {this.renderTopNav()}
                {this.renderLeftNav()}
                {this.renderContent()}
            </div>
        )
    }
}

export default MainLayout
