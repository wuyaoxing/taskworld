const app = require('express')()
const http = require('http').Server(app)
const io = require('socket.io')(http)
const port = process.env.PORT || 3000

app.use((req, res, next) => {
    console.log(new Date(), '[REST API]', req.method, req.path, req.body)
    next()
})

app.get('/api/user', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

io.on('connection', socket => {
    console.log('connected')
    socket.on('receiveMessage', message => {
        io.emit('updateMessage', message)
    })
})

console.log('Starting server ..')
http.listen(port, () => {
    console.log(`Server running on port ${port}`)
})
