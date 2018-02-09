import React from 'react'
import ReactDOM from 'react-dom'
import LoginPage from '../app-login-page/LoginPage.react'
import ErrorPage from '../../react/components/errors/ErrorPage.react'

export function showLoginPage() {
    return ReactDOM.render(<LoginPage />, document.getElementById('root'))
}

export function showNotFoundPage() {
    return ReactDOM.render(<ErrorPage />, document.getElementById('root'))
}
