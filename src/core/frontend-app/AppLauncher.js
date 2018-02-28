import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import configureApp from './configureApp'

import App from '../../react/components/App.react'

const app = configureApp().run()

const reduxStore = app.store
console.log(1, reduxStore.getState())
reduxStore.dispatch({
    type: 'ADD_TODO',
    text: 'Use Redux'
})
console.log(2, reduxStore.getState())
reduxStore.dispatch({
    type: 'INCREMENT'
})
console.log(3, reduxStore.getState())

export async function launchApp({ userId, workspaceName, accessToken }) {
    const connectElement = element => (
        <Provider store={reduxStore}>{element}</Provider>
    )
    ReactDOM.render(connectElement(<App />), document.getElementById('root'))
}
