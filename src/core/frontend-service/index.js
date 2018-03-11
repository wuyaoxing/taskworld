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
            tokenService.saveToken(response.data.token)
            return { result: response }
        }).catch(error => {
            console.log('api/auth:fial', error)
            return { failure: error }
        })
    },

    async authenticateWithToken() {
        const apiUrl = ''
        const response = await authenticatedRestClient.get(`${apiUrl}/users/me`)
        return converRestAPIUserToLegacyUser(response.data.data)

        function converRestAPIUserToLegacyUser(item) {
            return {
                _id: item.id,
                display_name: item.attributes.display_name,
                email: item.attributes.email,
                created_at: Date.parse(item.attributes.created_at)
            }
        }
    }
}
