import './switch.less'

import classNames from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

import { Loading } from '../'

export default class Switch extends React.Component {
    static propTypes = {
        state: PropTypes.bool,
        onStateChange: PropTypes.func,
        inverse: PropTypes.bool,
        disabled: PropTypes.bool,
        loading: PropTypes.bool
    }

    static defaultProps = {
        state: true,
        inverse: false,
        disabled: false
    }

    toggle = e => {
        if(typeof this.props.onStateChange !== 'undefined' && !this.props.disabled) {
            this.props.onStateChange(!this.props.state, e)
        }
    }

    renderLoadingState = () => {
        return (
            <div className="ui-switch --off --disabled">
                <div className="ui-switch__loading-placeholder">
                    <Loading size="smaller" />
                </div>
            </div>
        )
    }

    render() {
        if(this.props.loading) return this.renderLoadingState()

        const state = this.props.inverse ? !this.props.state : this.props.state

        const classes = classNames(
            'ui-switch',
            {
                '--on': state,
                '--off': !state,
                '--disabled': this.props.disabled
            }
        )

        return (
            <div className={classes} onClick={this.toggle}>
                <div className="--on-label">ON</div>
                <div className="--off-label">OFF</div>
                <div className="--handler" />
            </div>
        )
    }
}
