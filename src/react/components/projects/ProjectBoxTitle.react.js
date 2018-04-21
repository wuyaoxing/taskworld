import PropTypes from 'prop-types'
import React from 'react'

import { Icon } from 'ui'

export default class ProjectBoxTitle extends React.Component {
    static propTypes = {
        project: PropTypes.object.isRequired
    }

    render() {
        return (
            <div className="app-project-box-title">
                <div className="app-project-box-title__badge">
                    <Icon name={this.props.project.is_private ? 'lock' : 'public'} />
                </div>
                <div className="app-project-box-title__text">
                    {this.props.project.title}
                </div>
            </div>
        )
    }
}
