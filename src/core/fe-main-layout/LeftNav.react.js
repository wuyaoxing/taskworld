import './LeftNav.less'

import classNames from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

import LeftNavLink from './LeftNavLink.react'
import LeftNavItem from './LeftNavItem.react'

export function getNavigationItems() {
    return [
        {
            route: 'projects',
            icon: 'project',
            title: 'project'
        },
        {
            route: 'members',
            icon: 'colleague',
            title: 'meber'
        },
        {
            route: 'test',
            icon: 'reminder',
            title: 'test'
        },
    ]
}

export default class LeftNav extends React.Component {
    static propTypes = {
        className: PropTypes.string.isRequired,
        currentSection: PropTypes.string.isRequired
    }
    renderMenuItems = items =>
        items.map((item, index) => {
            const Component = item.component || LeftNavItem
            return (
                <LeftNavLink
                    key={item.route}
                    route={item.route}
                    onClick={this.onClick}
                    resolvedRoute={this.props.resolvedRoute}
                    linkOrder={index + 1}
                >
                    <Component
                        iconName={item.icon}
                        active={this.props.currentSection === item.route}
                    />
                </LeftNavLink>
            )
        })
    render() {
        const items = getNavigationItems()
        return (
            <section
                className={classNames(this.props.className, 'app-left-nav')}
            >
                {this.renderMenuItems(items)}
            </section>
        )
    }
}
