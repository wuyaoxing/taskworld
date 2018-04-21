import './ProjectBoxContentContainer.less'

import PropTypes from 'prop-types'
import React from 'react'

export default class PropjectBoxContentContainer extends React.PureComponent {
    static propTypes = {
        children: PropTypes.node
    }

    render() {
        return (
            <div className="app-project-box-content-container">{this.props.children}</div>
        )
    }
}
