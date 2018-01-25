import './icon.css'

import classNames from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

import _ from 'lodash'

export default class Icon extends React.PureComponent {
    static propTypes = {
        name: PropTypes.string.isRequired,
        className: PropTypes.string,
        onClick: PropTypes.func
    }

    onClick = e => {
        if(this.props.onClick) {
            this.props.onClick(e)
        }
    }

    render() {
        const classes = classNames(
            'ui-icon',
            `ui-icon-${this.props.name}`,
            this.props.className
        )

        return (
            <i
                className={classes}
                onClick={this.onClick}
                {..._.omit(this.props, ['name', 'className', 'onClick'])}
            />
        )
    }
}
