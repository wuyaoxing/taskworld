import './AppLayout.css'

import PropTypes from 'prop-types'
import React from 'react'

export default class AppLayout extends React.PureComponent {
    static propTypes = {
        children: PropTypes.node,
        north: PropTypes.node,
        south: PropTypes.node
    }

    render() {
        return (
            <div className="app-layout">
                <div className="app-layout__north">{this.props.north}</div>
                <div className="app-layout__center">
                    <div className="app-layout__center-contents">
                        {this.props.children}
                    </div>
                </div>
                <div className="app-layout__south">{this.props.south}</div>
            </div>
        )
    }
}
