import PropTypes from 'prop-types'
import React from 'react'

import ProjectList from './ProjectList.react'

export default class ProjectListContent extends React.Component {
    static propTypes = {
        projects: PropTypes.array,
        onGoToProject: PropTypes.func
    }

    render() {
        const content = this.props.projects.map(item => (
            <div key={item._id}>
                <ProjectList project={item} onGoToProject={this.props.onGoToProject} />
            </div>
        ))
        return <div>{content}</div>
    }
}
