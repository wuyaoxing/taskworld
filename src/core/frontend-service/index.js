import createRestClient from './createRestClient'

import createCookieTokenService from './tokenService/createCookieTokenService'
import createLocalStorageTokenService from './tokenService/createLocalStorageTokenService'

export const tokenService = (() => {
    try {
        return createLocalStorageTokenService()
    } catch(e) {
        return createCookieTokenService()
    }
})()

export const unauthenticatedRestClient = createRestClient()

export const authenticatedRestClient = createRestClient(() => {
    const token = tokenService.getToken()
    if(!token) throw new Error('Token does not exist')
    return token
})

export const authenticationService = {
    async login ({ email, password }) {
        const apiUrl = ''
        return unauthenticatedRestClient.post(
            `${apiUrl}/api/auth`,
            {
                email,
                password
            }
        ).then(response => {
            console.log('api/auth:success', response)
            tokenService.saveToken(response.token)
            return { result: response }
        }).catch(error => {
            console.log('api/auth:fial', error)
            return { failure: error }
        })
    }
}
