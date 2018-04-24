import './progress.less'

import PropTypes from 'prop-types'
import React from 'react'

export default class Progress extends React.PureComponent {
    static propTypes = {
        fraction: PropTypes.number,
        size: PropTypes.number,
        color: PropTypes.string,
        backgroundColor: PropTypes.string
    }

    static defaultProps = {
        fraction: 0,
        size: 6,
        color: '#27b6ba',
        backgroundColor: 'white'
    }

    render() {
        const percentage = `${(this.props.fraction * 100).toFixed(2)}%`

        const style = {
            width: percentage,
            height: `${this.props.size}px`,
            background: this.props.color
        }

        return (
            <div className="ui-progress" style={{
                background: this.props.backgroundColor
            }}>
                <div style={style} />
            </div>
        )
    }
}
