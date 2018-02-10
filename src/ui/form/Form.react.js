import classNames from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

export default class Form extends React.PureComponent {
    static propTypes = {
        className: PropTypes.string,
        children: PropTypes.node,
        onSubmit: PropTypes.func
    }

    render() {
        const classes = classNames(
            'ui-form',
            this.props.className
        )
        return (
            <form
                className={classes}
                onSubmit={this.props.onSubmit}
            >
                {this.props.chidren}
            </form>
        )
    }
}
