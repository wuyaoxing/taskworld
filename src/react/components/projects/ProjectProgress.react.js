import './ProjectProgress.less'

import PropTypes from 'prop-types'
import React from 'react'

import { Progress } from 'ui'

export default class ProjectProgress extends React.Component {
    static propTypes = {
        tasks: PropTypes.number.isRequired,
        completedTasks: PropTypes.number.isRequired
    }

    render() {
        const fraction = this.props.completedTasks / this.props.tasks || 0

        return (
            <div className="app-project-progress">
                <div className="app-project-progress__info">
                    <span>{Math.floor(fraction * 100)}% 已完成</span>
                    <span>
                        {this.props.completedTasks}/{this.props.tasks} 任务
                    </span>
                </div>
                <Progress fraction={fraction} backgroundColor="#d4d6db" />
            </div>
        )
    }
}
