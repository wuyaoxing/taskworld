import PropTypes from 'prop-types'
import React from 'react'

import { connect } from 'react-redux'

import SubLayout from 'core/app-layout/SubLayout.react'

import ProjectsHeader from './ProjectsHeader.react'
import ProjectsBody from './ProjectsBody.react'

const mapProjects = state => ({
    projects: state.projects
})

const enhance = connect(mapProjects)

class ProjectsPage extends React.PureComponent {
    static propTypes = {
        projects: PropTypes.array.isRequired
    }

    renderTopBar = () => {
        return (
            <ProjectsHeader />
        )
    }

    render() {
        return (
            <section className="app-projects-page">
                <SubLayout header={this.renderTopBar()}>
                    <ProjectsBody {...this.props} />
                </SubLayout>
            </section>
        )
    }
}

export default enhance(ProjectsPage)
