import PropTypes from 'prop-types'
import React from 'react'
import { compose, lifecycle } from 'recompose'

import AppLayout from '../../core/fe-app-layout/AppLayout.react'
import MainLayoutContainer from '../containers/layout/MainLayoutContainer.react'

import history from '../../core/fe-frontend-globals/history'
import { router } from '../../core/fe-routes/routes'
import renderRoute from '../renderRoute'
import LoadingScreen from './misc/LoadingScreen.react'

import { getRouteSectionName } from '../../core/fe-routes/routes'

import { generateId, generator } from '../../core/object-id'

console.log(generateId(), generator.generate(1516982287525))

export const enhance = compose(
    lifecycle({
        componentWillMount() {
            history.listen(location => {
                this.setState({
                    route: router.resolve(location.pathname)
                })
            })
            this.init()
        },
        init() {
            this.setState({
                route: router.resolve(history.location.pathname)
            })
        }
    })
)

class App extends React.PureComponent {
    static propTypes = {
        route: PropTypes.object
    }

    renderHeader = () => {
        return <h1>header</h1>
    }

    renderFooter = () => {
        return <h1>footer</h1>
    }

    renderAppLayout = () => {
        return (
            <AppLayout north={this.renderHeader()} south={this.renderFooter()}>
                <MainLayoutContainer currentSection={getRouteSectionName(this.props.route)}>
                    {this.renderContent()}
                </MainLayoutContainer>
            </AppLayout>
        )
    }

    renderContent = () => {
        return this.props.route ? (
            renderRoute(this.props.route)
        ) : (
            <LoadingScreen />
        )
    }

    render() {
        return <section className="app">{this.renderAppLayout()}</section>
    }
}

export default enhance(App)
