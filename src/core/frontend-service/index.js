import createCookieTokenService from './tokenService/createCookieTokenService'
import createLocalStorageTokenService from './tokenService/createLocalStorageTokenService'

export const tokenService = (() => {
    try {
        return createLocalStorageTokenService()
    } catch(e) {
        return createCookieTokenService()
    }
})()
