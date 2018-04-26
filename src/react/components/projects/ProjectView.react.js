import PropTypes from 'prop-types'
import React from 'react'

import ProjectBoxContent from './ProjectBoxContent.react'
import ProjectListContent from './ProjectListContent.react'

import { Icon, Star, Collapse } from 'ui'

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

    renderHeader = (title, count, icon) => {
        return (
            <div>
                {icon &&
                    (icon === 'full-star' ? (
                        <Star active />
                    ) : (
                        <Icon name={icon} />
                    ))}
                &nbsp;
                <span>{title}</span>
                <span>（{count}）</span>
            </div>
        )
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

        const starProjects = projectCategories.starProjects.length ? (
            <Collapse
                header={this.renderHeader(
                    '收藏项目',
                    projectCategories.starProjects.length,
                    'full-star'
                )}
                bold
                expandedByDefault
            >
                <Component
                    projects={projectCategories.starProjects}
                    onGoToProject={this.onGoToProject}
                />
            </Collapse>
        ) : null

        const myProjects = projectCategories.myProjects.length ? (
            <Collapse
                header={this.renderHeader(
                    '我的项目',
                    projectCategories.myProjects.length
                )}
                bold
                expandedByDefault
            >
                <Component
                    projects={projectCategories.myProjects}
                    onGoToProject={this.onGoToProject}
                />
            </Collapse>
        ) : null

        const archivedProjects = projectCategories.archivedProjects.length ? (
            <Collapse
                header={this.renderHeader(
                    '归档项目',
                    projectCategories.archivedProjects.length
                )}
                bold
                expandedByDefault
            >
                <Component
                    projects={projectCategories.archivedProjects}
                    onGoToProject={this.onGoToProject}
                />
            </Collapse>
        ) : null

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
