import './SubHeader.less'

import classNames from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

export default class SubHeader extends React.Component {
    static propTypes = {
        left: PropTypes.node,
        center: PropTypes.node,
        right: PropTypes.node,
        archived: PropTypes.bool
    }

    render() {
        const classes = classNames(
            'app-sub-header',
            this.props.archived && '--archived'
        )
        return (
            <section className={classes}>
                {this.props.left}
                {this.props.center}
                {this.props.right}
            </section>
        )
    }
}
