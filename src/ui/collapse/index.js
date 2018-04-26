import PropTypes from 'prop-types'
import React from 'react'

import CollapseSection from './CollapseSection.react'

export default class Collapse extends React.PureComponent {
    static propTypes = {
        header: PropTypes.oneOfType([ PropTypes.string, PropTypes.node ]).isRequired,
        className: PropTypes.string,
        children: PropTypes.node.isRequired,
        expandedByDefault: PropTypes.bool,
        expanded: PropTypes.bool,
        collapseSetIcons: PropTypes.object,
        bold: PropTypes.bool
    }

    static defaultProps = {
        expandedByDefault: false
    }

    state = {
        expanded: this.props.expandedByDefault
    }

    onToggle = e => {
        e.preventDefault()
        this.setState({
            expanded: !this.state.expanded
        })
    }

    render() {
        return (
            <CollapseSection
                header={this.props.header}
                className={this.props.classname}
                expanded={this.state.expanded}
                bold={this.props.bold}
                onToggle={this.onToggle}
                collapseSetIcons={this.props.collapseSetIcons}
            >
                {this.props.children}
            </CollapseSection>
        )
    }
}
