import React from 'react'
import ReactDOM from 'react-dom'
import LoginPage from '../fe-login-page/LoginPage.react'

export function showLoginPage() {
    return ReactDOM.render(<LoginPage />, document.getElementById('root'))
}
