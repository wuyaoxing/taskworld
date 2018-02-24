import './radio.less'

import classNames from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

export default class Radio extends React.PureComponent {
    static propTypes = {
        className: PropTypes.string,
        children: PropTypes.node,
        checked: PropTypes.bool.isRequired,
        onSelect: PropTypes.func
    }

    onClick = e => {
        e.stopPropagation()
    }

    render() {
        return (
            <label className={classNames('ui-radio', this.props.className)}>
                <input
                    type="radio"
                    checked={this.props.checked}
                    onClick={this.onClick}
                    onChange={this.props.onSelect}
                    readOnly={!this.props.onSelect}
                />
                <div
                    className={classNames(
                        'ui-radio__radio',
                        this.props.checked && '--checked'
                    )}
                >
                    <div
                        className={classNames(
                            'ui-radio__radio-inside',
                            this.props.checked && '--checked'
                        )}
                    />
                </div>
                <div className="ui-radio__label">{this.props.children}</div>
            </label>
        )
    }
}
