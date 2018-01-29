import PropTypes from 'prop-types'
import React from 'react'
import MainLayout from '../../../core/fe-main-layout/MainLayout.react'

export default class MainLayoutContainer extends React.Component {
    static propTypes = {
        currentSection: PropTypes.string.isRequired
    }
    render() {
        return (
            <MainLayout currentSection={this.props.currentSection}>
                {this.props.children}
            </MainLayout>
        )
    }
}
