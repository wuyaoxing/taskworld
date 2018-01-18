import React from 'react'

import { Loading } from '../../../ui'

export default class LoadingScreen extends React.Component {
    render() {
        return (
            <section className="loading-screen">
                <div className="loading-screen__box">
                    <Loading size="large" />
                </div>
            </section>
        )
    }
}
