import React from 'react'
import AppLayout from '../../core/fe-app-layout/AppLayout.react'

class App extends React.PureComponent {
    render() {
        return (
            <h1>
                App
                <AppLayout>
                    AppLayout
                </AppLayout>
            </h1>
        )
    }
}

export default App