import PropTypes from 'prop-types'
import React from 'react'

import { connect } from 'react-redux'

import SubHeader from 'core/app-layout/SubHeader.react'
import SubLayout from 'core/app-layout/SubLayout.react'
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
            <SubHeader
                left={<div>Left</div>}
                center={<div>ProjectsPage</div>}
                right={<div>Right</div>}
            />
        )
    }

    render() {
        return (
            <section className="app-projects-page">
                <SubLayout header={this.renderTopBar()}>
                    <ProjectsBody projects={this.props.projects} />
                </SubLayout>
            </section>
        )
    }
}

export default enhance(ProjectsPage)
