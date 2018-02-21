import axios from 'axios'

const createRestClient = obtainAccessToken => {
    let client = null
    function getClient() {
        if (!client) {
            const accessToken = obtainAccessToken ? obtainAccessToken() : null
            client = axios.create({
                timeout: 20000,
                headers: {
                    Authorization: `Bearer ${accessToken}`
                }
            })
        }
        return client
    }

    return {
        get(...args) {
            return getClient().get(...args)
        },
        post(...args) {
            return getClient().post(...args)
        },
        delete(...args) {
            return getClient().delete(...args)
        },
        head(...args) {
            return getClient().head(...args)
        },
        options(...args) {
            return getClient().options(...args)
        },
        put(...args) {
            return getClient().put(...args)
        },
        patch(...args) {
            return getClient().patch(...args)
        }
    }
}

export default createRestClient
