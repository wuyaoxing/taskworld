import PropTypes from 'prop-types'
import React from 'react'

const addClass = (els, ...classArgs) => {
    if (!els || els.length === 0) return
    if (!els.length) {
        els.classList.add(...classArgs)
        return
    }
    els.forEach(e => e.classList.add(...classArgs))
}

const removeClass = (els, ...classArgs) => {
    if (!els || els.length === 0) return
    if (!els.length) {
        els.classList.remove(...classArgs)
        return
    }
    els.forEach((el) => el.classList.remove(...classArgs))
}

const body = document.querySelector('body')

export default class BodyClass extends React.Component {
    static propTypes = {
        className: PropTypes.string
    }

    componentDidMount() {
        addClass(body, this.props.className)
    }

    componentDidUpdate(prevProps) {
        if(prevProps.className !== this.props.className) {
            removeClass(body, prevProps.className)
            addClass(body, prevProps.className)
        }
    }

    componentWillUnmount() {
        removeClass(body, this.props.className)
    }

    render() {
        return null
    }
}
