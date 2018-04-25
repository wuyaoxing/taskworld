import PropTypes from 'prop-types'
import React from 'react'

import SubHeader from 'core/app-layout/SubHeader.react'

import { ToolbarButton } from 'ui'

export const VIEW_TYPE = { GRID: 'grid', LIST: 'list' }

export default class ProjectsHeader extends React.Component {
    static propTypes = {
        view: PropTypes.oneOf(Object.values(VIEW_TYPE)).isRequired,
        onChangeProjectView: PropTypes.func.isRequired
    }

    renderViewTypeSwitcher = () => {
        const VIEW_TYPES = {
            [VIEW_TYPE.GRID]: {
                iconName: 'grid-view',
                tip: 'grid view'
            },
            [VIEW_TYPE.LIST]: {
                iconName: 'list-view',
                tip: 'list view'
            }
        }

        const { iconName, tip } = VIEW_TYPES[this.props.view]
        const viewTypeToChange =
            this.props.view === VIEW_TYPE.LIST ? VIEW_TYPE.GRID : VIEW_TYPE.LIST

        return (
            <ToolbarButton
                key="view-type-switcher"
                iconName={iconName}
                tip={tip}
                onClick={() => {
                    this.props.onChangeProjectView(viewTypeToChange)
                }}
            />
        )
    }

    render() {
        return (
            <SubHeader
                left={
                    <SubHeader.Section>
                        {this.renderViewTypeSwitcher()}
                    </SubHeader.Section>
                }
                center={<SubHeader.Section>ProjectsPage</SubHeader.Section>}
                right={
                    <SubHeader.Section>
                        {this.renderViewTypeSwitcher()}
                    </SubHeader.Section>
                }
            />
        )
    }
}
