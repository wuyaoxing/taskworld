import './ProjectHeader.less'

import PropTypes from 'prop-types'
import React from 'react'

import _ from 'lodash'

import SubHeader from '../../../core/app-layout/SubHeader.react'
import { Icon } from '../../../ui'
import { resolveRoute } from './projectLinkUtil'

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
        { tab: TABS.FILES, text: '文件' }
    ]
}

class ProjectHeader extends React.PureComponent {
    static = {
        project: PropTypes.object,
        activeTab: PropTypes.oneOf(_.values(TABS)).isRequired
    }

    onBackButtonClick() {
        window.history.back()
    }

    renderBackButton = () => (
        <button
            className="app-project-header__back-button"
            onClick={this.onBackButtonClick}
        >
            <Icon
                className="app-project-header__back-arrow"
                name="arrow-left"
            />
        </button>
    )

    renderTabs = () => {
        const tabs = getTabs()
        return tabs.map(({ tab, text }) => {
            const { name, options } = resolveRoute(this.props.project, tab)
            return (
                <SubHeader.Tab
                    key={name}
                    name={name}
                    options={options}
                    text={text}
                    active={tab === this.props.activeTab}
                    ax="ax-project-header__tab"
                />
            )
        })
    }

    render() {
        return (
            <SubHeader
                left={
                    <div className="app-project-header__left-section">
                        {this.renderBackButton()}
                    </div>
                }
                center={<SubHeader.Section>{this.renderTabs()}</SubHeader.Section>}
                right={<div>Right</div>}
            />
        )
    }
}

export default ProjectHeader
