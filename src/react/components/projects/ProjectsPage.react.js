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

    state = {
        view: 'grid'
    }

    onChangeProjectView = view => {
        this.setState({
            view
        })
    }

    renderTopBar = () => {
        return (
            <ProjectsHeader
                view={this.state.view}
                onChangeProjectView={this.onChangeProjectView}
            />
        )
    }

    render() {
        return (
            <section className="app-projects-page">
                <SubLayout header={this.renderTopBar()}>
                    <ProjectsBody {...this.props} view={this.state.view} />
                </SubLayout>
            </section>
        )
    }
}

export default enhance(ProjectsPage)
