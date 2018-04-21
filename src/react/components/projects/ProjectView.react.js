import PropTypes from 'prop-types'
import React from 'react'

import ProjectBoxContent from './ProjectBoxContent.react'

import { Collapse } from 'ui'

class ProjectView extends React.PureComponent {
    static propTypes = {
        projects: PropTypes.array.isRequired
    }
    render() {
        const Component = ProjectBoxContent

        const projectCategories = this.props.projects.reduce(
            (acc, val) => {
                if (val.is_archived) {
                    acc.archivedProjects.push(val)
                } else if (val.is_star) {
                    acc.starProjects.push(val)
                } else {
                    acc.myProjects.push(val)
                }

                return acc
            },
            {
                starProjects: [],
                myProjects: [],
                archivedProjects: []
            }
        )

        const starProjects = (
            <Collapse header="收藏项目" expandedByDefault>
                <ProjectBoxContent projects={projectCategories.starProjects} />
            </Collapse>
        )

        const myProjects = (
            <Collapse header="我的项目" expandedByDefault>
                <ProjectBoxContent projects={projectCategories.myProjects} />
            </Collapse>
        )

        const archivedProjects = (
            <Collapse header="归档项目" expandedByDefault>
                <ProjectBoxContent
                    projects={projectCategories.archivedProjects}
                />
            </Collapse>
        )

        return (
            <section className="app-project-view">
                {starProjects}
                {myProjects}
                {archivedProjects}
            </section>
        )
    }
}

export default ProjectView
