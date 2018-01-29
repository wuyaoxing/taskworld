import Rx from 'rxjs'
import { generateId } from '../object-id'

function getApplicableStorage(prefix) {
    try{
        const tempId = generateId()
        localStorage[`${prefix}$test`] = tempId
        if(localStorage[`${prefix}$test`] === tempId) {
            return localStorage
        }
    } catch(e) {
        console.log('createLocalStorage: localStorage not available', e)
    }
    return {}
}

export function createLocalStorage(prefix) {
    const storage = getApplicableStorage(prefix)
    const snapshot = new Rx.BehaviorSubject(fetchAll())

    function getRealKey(_id) {
        return prefix + '_' + _id
    }

    function fetch (_id) {
        const realKey = getRealKey(_id)
        const json = storage[realKey]
        if(!json) return undefined
        try{
            const payload = JSON.parse(json)
            if(!payload || !payload.payload || !payload.payload.type) {
                delete storage[realKey]
                throw new Error('Cannot load data from localStorage')
            }
            return payload
        }catch(e) {
            console.log('createLocalStorage: fetch', e)
            return undefined
        }
    }

    function fetchAll () {
        const keys = Object.keys(storage).sort()
        const out = []
        for (const key of keys) {
            if(key.substr(0, prefix.length + 1) === prefix + '_') {
                const _id = key.substr(prefix.length + 1)
                const result = fetch(_id)
                if(result) {
                    out.push({ _id, data: result })
                }
            }
        }
        return out
    }

    window.addEventListener('storage', async () => {
        snapshot.next(fetchAll())
    })
    return {
        async get(x) {
            return fetch(x)
        },
        async set(x, y) {
            const realKey = getRealKey(x)
            if(!y || !y.payload || !y.payload.type) {
                const error = new Error('Trying to put invalid JSON into storage')
                console.log(error)
                return
            }
            storage[realKey] = JSON.stringify(y)
            snapshot.next(fetchAll())
        },
        async delete(x) {
            delete storage[getRealKey(x)]
            snapshot.next(fetchAll())
        },
        async getAll() {
            return fetchAll()
        },
        snapshot,
        isPersistent() {
            return storage === localStorage
        }
    }
}

const storage = createLocalStorage('frontEnd')

storage.set(5, { payload: { type: '5'}})
storage.set(6, { payload: { type: '6'}})

console.log(storage, storage.getAll(), storage.get(6))

export default createLocalStorage
