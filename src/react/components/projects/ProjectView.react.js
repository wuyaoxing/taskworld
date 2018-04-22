import PropTypes from 'prop-types'
import React from 'react'

import ProjectBoxContent from './ProjectBoxContent.react'
import ProjectListContent from './ProjectListContent.react'

import { Collapse } from 'ui'

import { VIEW_TYPE } from './ProjectsHeader.react'

import * as RouteActions from 'react/action-creators/RouteActions'

class ProjectView extends React.PureComponent {
    static propTypes = {
        projects: PropTypes.array.isRequired,
        view: PropTypes.oneOf(Object.values(VIEW_TYPE)).isRequired
    }

    onGoToProject = project => {
        RouteActions.pushRoute({
            name: 'project',
            options: { projectId: project._id }
        })
    }

    render() {
        const Component =
            this.props.view === 'grid' ? ProjectBoxContent : ProjectListContent

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
                <Component
                    projects={projectCategories.starProjects}
                    onGoToProject={this.onGoToProject}
                />
            </Collapse>
        )

        const myProjects = (
            <Collapse header="我的项目" expandedByDefault>
                <Component
                    projects={projectCategories.myProjects}
                    onGoToProject={this.onGoToProject}
                />
            </Collapse>
        )

        const archivedProjects = (
            <Collapse header="归档项目" expandedByDefault>
                <Component
                    projects={projectCategories.archivedProjects}
                    onGoToProject={this.onGoToProject}
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
