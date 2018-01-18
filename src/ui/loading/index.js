import './loading.css'
import _ from 'lodash'
import PropTypes from 'prop-types'
import React from 'react'

export const SIZE = {
    SMALLEST: 'smallest',
    SMALLER: 'smaller',
    SMALL: 'small',
    MEDIUM: 'medium',
    LARGE: 'large'
}

export default class Loading extends React.PureComponent{
    static propTypes = {
        size: PropTypes.oneOf(_.values(SIZE))
    }
    static defaultProps = {
        size: SIZE.MEDIUM
    }
    static SIZE = SIZE

    render() {
        return (
            <span className={`ui-loading --${this.props.size}`}>
                <div className="ui-loading__child ui-loading-bounce1"></div>
                <div className="ui-loading__child ui-loading-bounce2"></div>
                <div className="ui-loading__child ui-loading-bounce3"></div>
            </span>
        )
    }
}
