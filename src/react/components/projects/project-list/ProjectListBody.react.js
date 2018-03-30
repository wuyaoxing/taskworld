import PropTypes from 'prop-types'
import React from 'react'

import ProjectListItem from './ProjectListItem.react'

class ProjectListBody extends React.PureComponent {
    static propsTypes = {
        projects: PropTypes.array.isRequired
    }

    render() {
        return (
            <section className="project-list-body">
                <h2>ProjectListBody</h2>
                <div>
                    {this.props.projects.map(project => (
                        <ProjectListItem key={project._id} project={project} />
                    ))}
                </div>
            </section>
        )
    }
}

export default ProjectListBody
