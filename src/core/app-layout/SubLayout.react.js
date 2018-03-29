import './SubLayout.less'

import PropTypes from 'prop-types'
import React from 'react'

export default class SubLayout extends React.PureComponent {
    static propTypes = {
        children: PropTypes.node,
        header: PropTypes.node
    }

    render() {
        return (
            <div className="app-sub-layout">
                <div className="app-sub-layout__header">
                    {this.props.header}
                </div>
                <div className="app-sub-layout__content">
                    {this.props.children}
                </div>
            </div>
        )
    }
}
