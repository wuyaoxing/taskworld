import React from 'react'
import SubHeader from '../../../../core/app-layout/SubHeader.react'
import SubLayout from '../../../../core/app-layout/SubLayout.react'
import ProjectListBody from './ProjectListBody.react'

class ProjectListPage extends React.PureComponent {
    state = {
        projects: [
            {
                _id: 1,
                title: '1'
            },
            {
                _id: 2,
                title: '2'
            },
            {
                _id: 3,
                title: '3'
            }
        ]
    }

    renderTopBar = () => {
        return (
            <SubHeader
                left={<div>Left</div>}
                center={<div>ProjectListPage</div>}
                right={<div>Right</div>}
            />
        )
    }

    render() {
        return (
            <section className="app-project-list-page">
                <SubLayout header={this.renderTopBar()}>
                    <ProjectListBody projects={this.state.projects} />
                </SubLayout>
            </section>
        )
    }
}

export default ProjectListPage
