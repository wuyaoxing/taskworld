import 'assets/less/index.less'

import React from 'react'
import ReactDOM from 'react-dom'

import AppLoadingScreen from './AppLoadingScreen.react'

function createLoadingScreen() {
    const container = document.querySelector('#app-loading')
    const initialProps = JSON.parse(container.getAttribute('data-initial-props'))
    update(initialProps)

    function update(props) {
        ReactDOM.render(<AppLoadingScreen {...props} />, container)
    }

    return {
        remove() {
            ReactDOM.unmountComponentAtNode(container)
            container.parentNode.removeChild(container)
        },
        update
    }
}

const loadingScreen = createLoadingScreen()

const loadStartApp = () => new Promise(resolve => {
    setTimeout(() => {
        import(/* webpackChunkName: "app-start-app" */ './startApp').then(module => {
            resolve(options => {
                const { startApp } = module
                startApp(options)
            })
        })
    }, 500)
})

export async function main() {
    try {
        const stratAppPromise = loadStartApp()
        const startApp = await stratAppPromise
        startApp({ loadingScreen })
    } catch (e) {
        loadingScreen.update({ status: `Error: ${e}` })
        console.log('main: ', e)
    }
}
