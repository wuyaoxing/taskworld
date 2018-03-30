import React from 'react'
import SubHeader from '../../../core/app-layout/SubHeader.react'
import SubLayout from '../../../core/app-layout/SubLayout.react'

class ProjectPage extends React.PureComponent {
    renderTopBar = () => {
        return (
            <SubHeader
                left={<div>Left</div>}
                center={<div>ProjectPage</div>}
                right={<div>Right</div>}
            />
        )
    }

    render() {
        return (
            <section className="app-project-page">
                <SubLayout header={this.renderTopBar()}><h2>ProjectPage</h2></SubLayout>
            </section>
        )
    }
}

export default ProjectPage
