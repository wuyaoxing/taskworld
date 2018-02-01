import './divider.less'

import classNames from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

const SIZES = ['S', 'M', 'L', 'XL', 'XXL']

export default class Divider extends React.Component {
    static propTypes = {
        size: PropTypes.oneOf(SIZES),
        noMargin: PropTypes.bool,
        style: PropTypes.object
    }

    render() {
        const sizeClass = this.props.size
            ? `--size-${this.props.size.toLowerCase()}`
            : '--size-s'
        const classes = classNames('ui-divider', sizeClass, {
            '--no-margin': this.props.noMargin
        })
        return <div className={classes} style={this.props.style} />
    }
}
