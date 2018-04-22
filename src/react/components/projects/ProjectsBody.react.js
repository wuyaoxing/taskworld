import PropTypes from 'prop-types'
import React from 'react'

import ProjectBoxContentContainer from './ProjectBoxContentContainer.react'
import ProjectView from './ProjectView.react'

import { VIEW_TYPE } from './ProjectsHeader.react'

class ProjectsBody extends React.PureComponent {
    static propsTypes = {
        projects: PropTypes.array.isRequired,
        view: PropTypes.oneOf(Object.values(VIEW_TYPE)).isRequired,
    }

    render() {
        return (
            <ProjectBoxContentContainer>
                <ProjectView
                    {...this.props}
                />
            </ProjectBoxContentContainer>
        )
    }
}

export default ProjectsBody
