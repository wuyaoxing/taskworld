import './LeftNav.css'

import React from 'react'

import LeftNavLink from './LeftNavLink.react'
import LeftNavItem from './LeftNavItem.react'

export function getNavigationItems () {
    return [
        {
            route: 'projects',
            icon: 'project',
            title: 'project'
        },
        {
            route: 'members',
            icon: 'member',
            title: 'meber'
        },
    ]
}

export default class LeftNav extends React.Component {
    renderMenuItems = items => items.map((item, index) => {
        const Component = item.component || LeftNavItem
        return(
            <LeftNavLink
                key={item.route}
                route={item.route}
                onClick={this.onClick}
                resolvedRoute={this.props.resolvedRoute}
                linkOrder={index + 1}
            >
                <Component
                    iconName={item.icon}
                    active={true}
                />
                {item.title}
            </LeftNavLink>
        )
    })
    render() {
        const items = getNavigationItems()
        return (
            <section>
                <h2>LeftNav</h2>
                {this.renderMenuItems(items)}
            </section>
        )
    }
}
