import Cookies from 'js-cookies'
const createCookieTokenService = (cookiekey = 'FE_ACCESS_TOKEN') => {
    return {
        saveToken(token) {
            Cookie.set(cookieKey, token, { expires: 365, path: '/' })
        },
        getToken() {
            return Cookies.get(cookieKey) || null
        }
    }
}

export default createCookieTokenService
