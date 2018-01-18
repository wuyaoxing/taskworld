import React from 'react'
import AppLayout from '../../core/fe-app-layout/AppLayout.react'
import MainLayoutContainer from '../containers/layout/MainLayoutContainer.react'
import LoadingScreen from './misc/LoadingScreen.react'

class App extends React.PureComponent {
    renderHeader = () => {
        return <h1>header</h1>
    }

    renderAppLayout = () => {
        return (
            <AppLayout north={this.renderHeader()}>
                <MainLayoutContainer>
                    {this.renderContent()}
                </MainLayoutContainer>
            </AppLayout>
        )
    }

    renderContent = () => {
        return <LoadingScreen />
    }

    render() {
        return <section className="app">{this.renderAppLayout()}</section>
    }
}

export default App
