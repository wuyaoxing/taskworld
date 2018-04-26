import './CollapseSection.less'

import classNames from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

import { Icon } from '../'

export default class CollapseSection extends React.PureComponent {
    static propTypes = {
        header: PropTypes.oneOfType([PropTypes.string, PropTypes.node])
            .isRequired,
        children: PropTypes.node.isRequired,
        className: PropTypes.string,
        expanded: PropTypes.bool,
        onToggle: PropTypes.func,
        collapseSetIcons: PropTypes.object,
        bold: PropTypes.bool
    }

    getCollapseIcon = () => {
        const collapseIcons = this.props.collapseSetIcons || {
            collapse: 'arrow-right',
            expanded: 'arrow-down'
        }
        return this.props.expanded
            ? collapseIcons.expanded
            : collapseIcons.collapse
    }

    render() {
        const classes = classNames('ui-collapse-section', this.props.className)
        const headerClasses = classNames('ui-collapse-section__header', {
            '--collapse': !this.props.expanded,
            '--bold': this.props.bold
        })
        const contentClasses = classNames('ui-collapse-section__content', {
            '--hidden': !this.props.expanded
        })

        return (
            <div className={classes}>
                <div className={headerClasses} onClick={this.props.onToggle}>
                    <Icon
                        className="ui-collapse-section__icon"
                        name={this.getCollapseIcon()}
                    />
                    <div className="ui-collapse-section__title-header">
                        {this.props.header}
                    </div>
                </div>
                <div className={contentClasses}>{this.props.children}</div>
            </div>
        )
    }
}
