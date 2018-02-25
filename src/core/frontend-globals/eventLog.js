import { EventEmitter } from 'events'

const events = new EventEmitter()

export function eventLog (category, action, data) {
    amplitude().track(category, action, data)
    events.emit('emit-tracking', category, action, data)
}

const amplitude = () => ({
    track: (category, action, label) => {
        const eventType = category
        const eventProperties = {
            category,
            action,
            ...label
        }

        console.log(`AMP event: [${eventType}]`, eventProperties)
    }
})

export function onDidEmit(callback) {
    events.on('emit-tracking', callback)
    return {
        dispose() {
            events.removeListener('emit-tracking', callback)
        }
    }
}

export default eventLog
