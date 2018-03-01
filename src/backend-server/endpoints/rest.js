function setupRestEndpoints(app) {
    app.use((req, res, next) => {
        console.log('[REST API', req.method, req.path, req.body)
        next()
    })

    app.post('/api/auth', loginRestEndpoint)
}

const loginRestEndpoint = (req, res) => {
    const payload = {
        name: 'username',
        token: new Date().getTime()
    }
    res.send(payload)
}

module.exports = {
    setupRestEndpoints
}
