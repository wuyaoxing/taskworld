import React from 'react'
import ReactDOM from 'react-dom'

import App from '../../react/components/App.react'

export async function launchApp({ userId, workspaceName, accessToken }) {
    ReactDOM.render(<App />, document.getElementById('root'))
}
