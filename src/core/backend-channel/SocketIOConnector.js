import invariant from 'invariant'

import SocketIO from 'socket.io-client'

export class SocketIOConnector {
    constructor(url) {
        this.url = url
        this.debug = {}
    }
    connect(onConnect) {
        invariant(this.url, 'URL is not set!')
        const socket = SocketIO(this.url, {
            transports: ['websocket', 'polling'],
            reconnection: false,
            multiplex: false
        })
        this.debug.lastestSocket = socket

        socket.on('error', e => {
            console.error('SocketIO: error,', e)
        })

        socket.on('connect_error', e => {
            console.error('Socket.IO: connect_error', e)
            onConnect({
                send: () => {},
                close: () => {
                    socket.disconnect()
                }
            }).onClose()
        })

        socket.on('connect', () => {
            const delegate = onConnect({
                send: message => {
                    socket.emit('event', message)
                },
                close: () => {
                    socket.disconnect()
                }
            })
            invariant(delegate, 'onConnect is expected to return a delegate.')
            socket.on('event', data => {
                delegate.onMessage(data)
            })
            socket.on('disconnect', e => {
                delegate.onClose()
            })
        })
    }
}

export default SocketIOConnector
