import PropTypes from 'prop-types'
import React from 'react'

import _ from 'lodash'

import SubHeader from '../../../core/app-layout/SubHeader.react'

export const TABS = {
    TASKS: 'tasks',
    TIMELINE: 'timeline',
    ANALYTICS: 'analytics',
    CALENDAR: 'calendar',
    FILES: 'files'
}

function getTabs() {
    return [
        { tab: TABS.TASKS, text: '任务' },
        { tab: TABS.TIMELINE, text: '时间线' },
        { tab: TABS.ANALYTICS, text: '统计' },
        { tab: TABS.CALENDAR, text: '日历' },
        { tab: TABS.FILES, text: '文件' },
    ]
}

class ProjectHeader extends React.PureComponent {
    static = {
        activeTab: PropTypes.oneOf(_.values(TABS)).isRequired
    }

    renderTabs = () => {
        const tabs = getTabs()
        return tabs.map(({ tab, text }) => {
            return (
                <span>
                    {text}
                    &nbsp;
                    &nbsp;
                </span>
            )
        })
    }

    render() {
        return (
            <SubHeader
                left={<div>Left</div>}
                center={<div>{this.renderTabs()}</div>}
                right={<div>Right</div>}
            />
        )
    }
}

export default ProjectHeader
