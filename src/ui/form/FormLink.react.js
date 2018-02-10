import classNames from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

import { Link } from '../'

export default class FromLink extends React.PureComponent {
    static propTypes = {
        className: PropTypes.string
    }

    render() {
        const classes = classNames('ui-form-link', this.props.className)
        return <Link className={classes} />
    }
}
