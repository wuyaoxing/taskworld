import './MainLayout.css'

import React from 'react'
import TopNav from './TopNav.react'
import LeftNav from './LeftNav.react'

class MainLayout extends React.Component {
    renderTopNav = () => <TopNav className="main-layout-top-nav" />
    renderLeftNav = () => <LeftNav className="main-layout-left-nav" />
    renderContent = () => (
        <section className="main-layout-content">{this.props.children}</section>
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
