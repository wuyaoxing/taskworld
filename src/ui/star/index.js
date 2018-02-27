import './star.less'

import classNames from 'classnames'
import _ from 'lodash'
import PropTypes from 'prop-types'
import React from 'react'

import { Icon } from '../'

export default class Star extends React.Component {
    static propTypes = {
        active: PropTypes.bool,
        onClick: PropTypes.func,
        disabled: PropTypes.bool
    }

    static defaultProps = {
        onClick: _.noop
    }

    render() {
        const classes = classNames(
            'ui-star',
            {
                '--disabled': this.props.disabled,
                '--active': this.props.active
            }
        )

        return (
            <Icon
                className={classes}
                onClick={this.props.onClick}
                name={this.props.active ? 'full-star' : 'star'}
            />
        )
    }
}
