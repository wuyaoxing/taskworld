import PropTypes from 'prop-types'
import React from 'react'

const appLoadingPath = require('assets/images/app-loading.png')

export default class AppLoadingScreen extends React.PureComponent {
    static propTypes = {
        status: PropTypes.node
    }

    renderSprite = () => (
        <div
            style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, 50%) scale(0.5)'
            }}
        >
            <div
                style={{
                    position: 'relative',
                    width: '275px',
                    height: '140px',
                    overflow: 'hidden'
                }}
            >
                <img
                    src={appLoadingPath}
                    style={{
                        display: 'block',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '2200px',
                        height: '1400px',
                        maxWidth: 'none',
                        animation: 'loadingAnimation 2.5s linear infinite'
                    }}
                />
            </div>
        </div>
    )

    renderInformation = () => (
        <div
            style={{
                position: 'absolute',
                bottom: '25px',
                left: '50%',
                transform: 'translate(-50%)',
                color: '#d8dade',
                whiteSpace: 'nowrap'
            }}
        >
            <span>
                Build {process.env.APP_BUILD_NUM} ({
                    process.env.APP_FRONTEND_VERSION
                }) | {this.props.status}
            </span>
        </div>
    )

    render() {
        return (
            <div
                className="app-loading-screen"
                style={{
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0,
                    backgroundColor: '#fff'
                }}
            >
                {this.renderSprite()}
                {this.renderInformation()}
            </div>
        )
    }
}
