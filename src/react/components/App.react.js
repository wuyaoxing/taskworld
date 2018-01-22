import PropTypes from 'prop-types'
import React from 'react'

import AppLayout from '../../core/fe-app-layout/AppLayout.react'
import MainLayoutContainer from '../containers/layout/MainLayoutContainer.react'
import renderRoute from '../renderRoute'
import LoadingScreen from './misc/LoadingScreen.react'

class App extends React.PureComponent {

    static propTypes = {
        route: PropTypes.object
    }

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
        return !this.props.route ? renderRoute({ name: 'projects' }) : <LoadingScreen />
    }

    render() {
        return <section className="app">{this.renderAppLayout()}</section>
    }
}

export default App
