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
            _id: '5ad976bd18cd923b6d6dfae8',
            title: '开发规划',
            completed_count: 2,
            task_count: 10,
            created: '2018-04-20T05:12:29.050Z',
            is_archived: false,
            is_private: true,
            is_star: true,
            description: ''
        },
        {
            _id: '1',
            title: '项目1',
            completed_count: 12,
            task_count: 100,
            created: '2018-04-20T05:12:29.050Z',
            is_archived: false,
            is_private: false,
            is_star: false,
            description: ''
        },
        {
            _id: '2',
            title: '项目2',
            completed_count: 21,
            task_count: 50,
            created: '2018-04-20T05:12:29.050Z',
            is_archived: true,
            is_private: true,
            is_star: false,
            description: ''
        },
        {
            _id: '3',
            title: '项目3',
            completed_count: 5,
            task_count: 15,
            created: '2018-04-20T05:12:29.050Z',
            is_archived: false,
            is_private: true,
            is_star: false,
            description: ''
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
