import PropTypes from 'prop-types'
import React from 'react'

import SubHeader from 'core/app-layout/SubHeader.react'

import { Icon, Tooltip } from 'ui'

const VIEW_TYPE = { GRID: 'grid', LIST: 'list' }

export default class ProjectsHeader extends React.Component {
    static propTypes = {
        // currentViewType: PropTypes.oneOf(Object.values(VIEW_TYPE))
    }

    state = {
        currentViewType: 'grid'
    }

    onViewTypeChange = viewType => {
        this.setState({
            currentViewType: viewType
        })
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

        const { iconName, tip } = VIEW_TYPES[this.state.currentViewType]
        const viewTypeToChange =
            this.state.currentViewType === VIEW_TYPE.LIST
                ? VIEW_TYPE.GRID
                : VIEW_TYPE.LIST

        return (
            <Icon
                key="view-type-switcher"
                name={iconName}
                onClick={() => {
                    this.onViewTypeChange(viewTypeToChange)
                }}
            >
                <Tooltip position="left">{tip}</Tooltip>
            </Icon>
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