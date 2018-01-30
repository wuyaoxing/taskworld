import './TopNav.less'

import classNames from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

import ExpiryInfo from './ExpiryInfo.react'

export default class TopNav extends React.Component {
    static propTypes = {
        className: PropTypes.string.isRequired
    }
    render() {
        return (
            <section
                className={classNames(this.props.className, 'app-top-nav')}
            >
                <ExpiryInfo />
            </section>
        )
    }
}
