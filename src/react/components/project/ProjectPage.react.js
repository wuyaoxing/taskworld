import PropTypes from 'prop-types'
import React from 'react'

import SubLayout from '../../../core/app-layout/SubLayout.react'
import ProjectHeader from './ProjectHeader.react'

class ProjectPage extends React.PureComponent {
    static propTypes = {
        contentComponent: PropTypes.func.isRequired,
        activeTab: PropTypes.string
    }

    render() {
        const Component = this.props.contentComponent

        return (
            <section className="app-project-page">
                <SubLayout
                    header={<ProjectHeader activeTab={this.props.activeTab} />}
                >
                    <Component {...this.props} />
                </SubLayout>
            </section>
        )
    }
}

export default ProjectPage
