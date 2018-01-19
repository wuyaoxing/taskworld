import React from 'react'
import MainLayout from '../../../core/fe-main-layout/MainLayout.react'

export default class MainLayoutContainer extends React.Component {
    render() {
        return (
            <MainLayout>
                {this.props.children}
            </MainLayout>
        )
    }
}
