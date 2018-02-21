const createLocalStorageTokenService = (storage = localStorage) => {
    try {
        storage.FE_TEST_TOKEN = 'test_value'
        if (storage.FE_TEST_TOKEN !== 'test_value') {
            throw new Error('cannot save test token to storage')
        }
    } catch (e) {
        throw new Error('localStorage not available: ' + e)
    }
    return {
        saveToken(token) {
            storage.FE_ACCESS_TOKEN = token
        },
        getToken() {
            return storage.FE_ACCESS_TOKEN || null
        }
    }
}

export default createLocalStorageTokenService
