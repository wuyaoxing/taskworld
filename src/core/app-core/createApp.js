import { combineReducers, createStore } from 'redux'

const todos = (state = [], action) => {
    switch(action.type) {
        case 'ADD_TODO':
            return state.concat([action.text])
        default:
            return state
    }
}

const counter = (state = 0, action) => {
    switch(action.type) {
        case 'INCREMENT':
            return state + 1
        case 'DECREMENT':
            return state - 1
        default:
            return state
    }
}

export function createApp() {
    const reducer = combineReducers({
        todos,
        counter
    })
    return {
        run() {
            const store = createStore(reducer)
            return {
                store
            }
        }
    }
}

export default createApp
