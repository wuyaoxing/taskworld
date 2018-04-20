import { combineReducers, createStore } from 'redux'

const todos = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return state.concat([action.text])
        default:
            return state
    }
}

const counter = (state = 0, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1
        case 'DECREMENT':
            return state - 1
        default:
            return state
    }
}

const projects = (
    state = [
        {
            _id: '1',
            title: '项目1'
        },
        {
            _id: '2',
            title: '项目2'
        },
        {
            _id: '3',
            title: '项目3'
        }
    ],
    action
) => {
    switch (action.type) {
        case 'ADD_PROJECT':
            return state.concat([action.project])
        default:
            return state
    }
}

export function createApp() {
    const reducer = combineReducers({
        todos,
        counter,
        projects
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
