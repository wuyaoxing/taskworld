
const loadStartApp = () => new Promise(resolve => {
    require.ensure([], () => {
        resolve(options => {
            const { startApp } = require('./startApp')
            startApp(options)
        })
    }, 'fe-start-app')
})

export async function main() {
    try {
        const stratAppPromise = loadStartApp()
        const startApp = await stratAppPromise
        startApp()
    } catch (e) {
        console.log('main: ', e)
    }
}
