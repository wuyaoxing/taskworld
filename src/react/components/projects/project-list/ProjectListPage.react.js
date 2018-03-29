import React from 'react'
import SubHeader from '../../../../core/app-layout/SubHeader.react'
import SubLayout from '../../../../core/app-layout/SubLayout.react'

class ProjectListPage extends React.PureComponent {
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
            <section className="project-list-page">
                <SubLayout header={this.renderTopBar()}>
                    <h2>ProjectListBody</h2>
                </SubLayout>
            </section>
        )
    }
}

export default ProjectListPage
