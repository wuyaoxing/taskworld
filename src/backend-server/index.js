const app = require('express')()
const http = require('http').Server(app)

const port = process.env.PORT || 4000

const RestApi = require('./endpoints/rest')

const bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use((req, res, next) => {
    console.log(new Date(), '[REST API]', req.method, req.path, req.body)
    next()
})

app.get('/', (req, res) => {
    res.send({ welcome: new Date() })
})

RestApi.setupRestEndpoints(app)

console.log('Starting server ..')
http.listen(port, () => {
    console.log(`Server running on port ${port}`)
})
