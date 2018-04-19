import PropTypes from 'prop-types'
import React from 'react'

import * as RouteActions from '../../action-creators/RouteActions'

class ProjectsBody extends React.PureComponent {
    static propsTypes = {
        project: PropTypes.array.isRequired
    }

    onGoToProject = () => {
        const project = this.props.project

        RouteActions.pushRoute({
            name: 'project',
            options: { projectId: project._id }
        })
    }

    render() {
        return (
            <section className="projects-item">
                <div onClick={this.onGoToProject}>
                    <h2>ProjectsItem{this.props.project.title}</h2>
                </div>
            </section>
        )
    }
}

export default ProjectsBody
