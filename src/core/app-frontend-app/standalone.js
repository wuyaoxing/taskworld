import '../../assets/less/index.less'

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
        require.ensure([], () => {
            resolve(options => {
                const { startApp } = require('./startApp')
                startApp(options)
            })
        }, 'app-start-app')
    }, 2000)
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
