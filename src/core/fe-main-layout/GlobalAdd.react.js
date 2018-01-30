import './GlobalAdd.less'

import classNames from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

import withClientInfo from '../fe-client-info/withClientInfo'
import { Icon } from '../../ui'

const enhance = withClientInfo(client => ({
    mobile: client.isMobile()
}))

class GlobalAdd extends React.Component {
    static propTypes = {
        active: PropTypes.bool.isRequired,
        onClick: PropTypes.func.isRequired,
        mobile: PropTypes.bool.isRequired
    }

    render() {
        const classes = classNames(
            'app-global-add__button',
            'ax-global-add__button',
            this.props.active && '--active',
            this.props.mobile && '--mobile'
        )
        return (
            <div className="app-global-add">
                <div className={classes}>
                    <Icon className="app-global-add__icon" name="add" />
                </div>
            </div>
        )
    }
}

export default enhance(GlobalAdd)
