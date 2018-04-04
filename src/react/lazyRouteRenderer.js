import React from 'react'

import Rx from 'rxjs'

import LoadingScreen from './components/misc/LoadingScreen.react'

export const asyncComponent = loadComponent =>
    class AsyncComponent extends React.Component {
        state = {
            Component: null
        }

        componentWillMount() {
            if (this.hasLoadedComponent()) return

            loadComponent()
                .then(module => module.default)
                .then(Component => {
                    this.setState({ Component })
                })
                .catch(err => {
                    console.error(`Cannot load component in <AsyncComponent />`)
                    throw err
                })
        }

        hasLoadedComponent() {
            return this.state.Component !== null
        }

        render() {
            const { Component } = this.state
            return Component ? <Component {...this.props} /> : null
        }
    }

export default function createRenderer(loadModule) {
    const finish = new Rx.Subject()
    let requested = false
    let component

    function request() {
        if (requested) return
        requested = true
        loadModule().then(loadedModule => {
            setTimeout(() => {
                component = loadedModule.default || loadedModule
                finish.next(true)
            }, 500)
        }).catch(err => {
            console.error(`Cannot load Module in lazyRouteRenderer`)
            throw err
        })
    }

    return class LazyRouteRenderer extends React.Component {
        constructor(props) {
            super(props)
            request()
            if (!component) {
                this.subscription = finish.subscribe(() => {
                    this.forceUpdate()
                })
            }
        }
        componentWillUnmount() {
            if (this.subscription) this.subscription.unsubscribe()
        }
        render() {
            const Component = component || LoadingScreen
            return <Component {...this.props} />
        }
    }
}
