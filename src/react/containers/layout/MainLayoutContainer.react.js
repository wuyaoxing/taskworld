import PropTypes from 'prop-types'
import React from 'react'

import MainLayout from 'core/app-main-layout/MainLayout.react'
import HelpCenter from 'react/components/misc/HelpCenter.react'

export default class MainLayoutContainer extends React.Component {
    static propTypes = {
        currentSection: PropTypes.string.isRequired
    }

    renderHelpCenter = className => (
        <HelpCenter className={`${className}__help-center`} />
    )

    render() {
        return (
            <MainLayout
                currentSection={this.props.currentSection}
                renderHelpCenter={this.renderHelpCenter}
            >
                {this.props.children}
            </MainLayout>
        )
    }
}
