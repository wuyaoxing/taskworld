import classNames from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

export default class FromRow extends React.PureComponent {
    static propTypes = {
        style: PropTypes.string,
        children: PropTypes.node,
        className: PropTypes.string
    }

    render() {
        const style = this.props.style
            ? `--${this.props.style}`.replace(/\s+/, '--')
            : ''
        const classes = classNames('ui-from-row', this.props.className, style)

        return <div className={classes}>{this.props.children}</div>
    }
}
