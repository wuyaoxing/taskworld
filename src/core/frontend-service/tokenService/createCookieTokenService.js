import Cookies from 'js-cookie'

const createCookieTokenService = (cookieKey = 'APP_ACCESS_TOKEN') => {
    return {
        saveToken(token) {
            Cookies.set(cookieKey, token, { expires: 365, path: '/' })
        },
        getToken() {
            return Cookies.get(cookieKey) || null
        }
    }
}

export default createCookieTokenService
