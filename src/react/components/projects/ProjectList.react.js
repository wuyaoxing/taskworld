import './ProjectList.less'

import classNames from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

import ProjectBoxTitle from './ProjectBoxTitle.react'
import ProjectProgress from './ProjectProgress.react'

class ProjectList extends React.PureComponent {
    static propsTypes = {
        project: PropTypes.object.isRequired,
        onGoToProject: PropTypes.func
    }

    renderHeader = () => {
        return (
            <header className="app-project-list__header">
                <div className="app-project-list__title">
                    <ProjectBoxTitle project={this.props.project} />
                </div>
            </header>
        )
    }

    renderFooter = () => {
        return (
            <footer className="app-project-list__footer">
                <ProjectProgress
                    tasks={this.props.project.task_count}
                    completedTasks={this.props.project.completed_count}
                />
            </footer>
        )
    }

    render() {
        const classes = classNames(
            'app-project-list__content',
            this.props.project.is_archived && '--archived'
        )
        return (
            <div className="app-project-list">
                <div
                    className={classes}
                    onClick={() => this.props.onGoToProject(this.props.project)}
                >
                    {this.renderHeader()}
                    {this.renderFooter()}
                </div>
            </div>
        )
    }
}

export default ProjectList
