import PropTypes from 'prop-types'
import React from 'react'

export default class AppLayout extends React.PureComponent{
    static propTypes = {
        children: PropTypes.node
    }

    render() {
        return (
            <div className="app-layout">
                {this.props.children}
            </div>
        )
    }
}