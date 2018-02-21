import './FormHeader.less'

import classNames from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

export default class FormHeader extends React.PureComponent {
    static propTypes = {
        children: PropTypes.node,
        style: PropTypes.string,
        className: PropTypes.string
    }

    render() {
        const style = this.props.style ? `--${this.props.style}`.replace(/\s+/, ' --') : ''
        const classes = classNames(
            'ui-form-header',
            this.props.className,
            style
        )

        return (
            <div className={classes}>
                {this.props.children}
            </div>
        )
    }
}
