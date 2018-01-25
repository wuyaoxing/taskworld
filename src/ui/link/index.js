import './link.css'

import classNames from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

export default class Link extends React.PureComponent {
    static propTypes = {
        className: PropTypes.string,
        children: PropTypes.any,
        href: PropTypes.string,
        target: PropTypes.string,
        onClick: PropTypes.func,
        onMouseOver: PropTypes.func,
        onMouseDown: PropTypes.func,
        onMouseUp: PropTypes.func,
        onMouseLeave: PropTypes.func,
        unstyled: PropTypes.bool,
        download: PropTypes.bool
    }

    onClick = e => {
        e.stopPropagation()
        if(this.props.onClick) {
            this.props.onClick(e)
        }
    }

    render() {
        const className = classNames('ui-link', this.props.className, {
            '--unstyled': this.props.unstyled
        })

        const href = this.props.href

        const extraProps = {}
        if(/^\w+:\/\//.test(href)) {
            extraProps.target = this.props.target ? this.props.target : '_blank'
        }

        return (
            <a href={href}
               className={className}
               onClick={this.onClick}
               onMouseOver={this.props.onMouseOver}
               onMouseDown={this.props.onMouseDown}
               onMouseUp={this.props.onMouseUp}
               onMouseLeave={this.props.onMouseLeave}
               download={this.props.download}
               {...extraProps}
            >
            {this.props.children}
            </a>
        )
    }
}
