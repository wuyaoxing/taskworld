import PropTypes from 'prop-types'
import React from 'react'

import ProjectsItem from './ProjectsItem.react'

import { Collapse } from '../../../ui'

class ProjectsBody extends React.PureComponent {
    static propsTypes = {
        projects: PropTypes.array.isRequired
    }

    render() {
        return (
            <section className="projects-body">
                <Collapse
                    header="我的项目"
                    expandedByDefault
                >
                    {this.props.projects.map(project => (
                        <ProjectsItem key={project._id} project={project} />
                    ))}
                </Collapse>
            </section>
        )
    }
}

export default ProjectsBody
