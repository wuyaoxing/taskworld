import { EventEmitter } from 'events'

const events = new EventEmitter()

export function eventLog (category, action, dat) {
    events.emit('emit-tracking', category, action, data)
}

export function onDidEmit(callback) {
    events.on('emit-tracking', callback)
    return {
        dispose() {
            events.removeListener('emit-tracking', callback)
        }
    }
}

export default eventLog
