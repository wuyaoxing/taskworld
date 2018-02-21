import React from 'react'
import { wrapDisplayName } from 'recompose'
import { getClientInfo, onClientInfoUpdate } from './ClientInfo'

// Usage:
//     withClientInfo(client => ({
//         mobileView: client.isMobile()
//     }))

function withClientInfo(mapToProps) {
    return (BaseComponent) => class ClientInfoContainer extends React.Component {
        static displayName = wrapDisplayName(BaseComponent, 'widthClientInfo')
        state = mapToProps(getClientInfo())

        componentDidMount() {
            this.unsubscribe = onClientInfoUpdate(this.onCLientInfoUpdate)
        }

        componentWillUnmount() {
            this.unsubscribe && this.unsubscribe()
        }

        static WrappedComponent = BaseComponent

        onClinetInfoUpdate = () => {
            this.setState(mapToProps(getClientInfo()))
        }

        render() {
            return (
                <BaseComponent
                    { ...this.state }
                    { ...this.props }
                />
            )
        }
    }
}

export default withClientInfo
