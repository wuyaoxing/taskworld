import PropTypes from 'prop-types'
import React from 'react'

import ProjectBox from './ProjectBox.react'

export default class ProjectBoxContent extends React.Component {
    static propTypes = {
        projects: PropTypes.array
    }

    render() {
        const content = this.props.projects.map(item => (
            <div className="app-project-box-content__project" key={item._id}>
                <ProjectBox project={item} />
            </div>
        ))
        return (
            <div className="app-project-box-content">
                <div className="app-project-box-content__projects">
                    {content}
                </div>
            </div>
        )
    }
}
