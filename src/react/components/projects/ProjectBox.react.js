import './ProjectBox.less'

import classNames from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

import ProjectBoxTitle from './ProjectBoxTitle.react'

import * as RouteActions from 'react/action-creators/RouteActions'

class ProjectBox extends React.PureComponent {
    static propsTypes = {
        project: PropTypes.object.isRequired
    }

    onGoToProject = () => {
        const project = this.props.project

        RouteActions.pushRoute({
            name: 'project',
            options: { projectId: project._id }
        })
    }

    renderHeader = () => {
        return (
            <header className="app-project-box__header">
                <div className="app-project-box__title">
                    <ProjectBoxTitle project={this.props.project} />
                </div>
            </header>
        )
    }

    renderFooter = () => {
        return (
            <footer className="app-project-box__footer">
                <span>任务总数：{this.props.project.task_count}</span>
                <span>已完成：{this.props.project.completed_count}</span>
            </footer>
        )
    }

    render() {
        const classes = classNames(
            'app-project-box__content',
            this.props.project.is_archived && '--archived'
        )
        return (
            <div className="app-project-box">
                <div className={classes} onClick={this.onGoToProject}>
                    {this.renderHeader()}
                    {this.renderFooter()}
                </div>
            </div>
        )
    }
}

export default ProjectBox
