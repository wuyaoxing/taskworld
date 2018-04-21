import PropTypes from 'prop-types'
import React from 'react'
import { connect } from 'react-redux'

import SubLayout from 'core/app-layout/SubLayout.react'
import ProjectHeader from './ProjectHeader.react'

const mapProject = (state, ownProps) => ({
    project: state.projects.find(item => item._id === ownProps.projectId)
})

const enhance = connect(mapProject)

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
                    header={
                        <ProjectHeader
                            activeTab={this.props.activeTab}
                            project={this.props.project}
                        />
                    }
                >
                    <Component {...this.props} />
                </SubLayout>
            </section>
        )
    }
}

export default enhance(ProjectPage)
