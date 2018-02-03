import './tooltip.less'

import PropTypes from 'prop-types'
import React from 'react'
import ReactDOM from 'react-dom'

const style = (el, styles) => {
    console.log(el, styles)
    if(el.length) {
        el.forEach(e => {
            Object.keys(styles).forEach(name => (e.style[name] = styles[name]))
        })
    }else {
        Object.keys(styles).forEach(name => (el.style[name] = styles[name]))
    }
}

export const addClass = (el, ...classArgs) => {
    if (!el || el.length === 0) return
    if (!el.length) {
        el.classList.add(...classArgs)
        return
    }
    el.forEach(e => e.classList.add(...classArgs))
}

const placement = ['top', 'bottom', 'left', 'right']
let _tooltipLayer
let currentTooltip

export const TooltipLayer = () => (
    <div
        className="ui-tooltip__layer"
        ref={c => {
            _tooltipLayer = c
        }}
    />
)

export default class Tooltip extends React.Component {
    static propTypes = {
        children: PropTypes.node,
        position: PropTypes.oneOf(placement),
        show: PropTypes.bool
    }

    static defaultProps = {
        position: 'bottom',
        show: true
    }

    componentDidMount() {
        this._$trigger = this._parentNode
        this._$trigger.addEventListener('mouseover', this.onMouseOver)
        this._$trigger.addEventListener('mouseleave', this.onMouseLeave)
    }

    eventListenerAdded = false

    onMouseOver = e => {
        if (this._timeout) {
            clearTimeout(this._timeout)
        }
        this._timeout = setTimeout(this.show, 500)
    }

    onMouseLeave = () => {
        if (this._timeout) {
            clearTimeout(this._timeout)
        }
        this.hide()
    }

    onMouseMove = e => {
        const parentRect = this._parentNode.getBoundingClientRect()
        const mouseX = e.clientX
        const mouseY = e.clientY
        const isInsideX =
            parentRect.left <= mouseX && mouseX <= parentRect.right
        const isInsideY =
            parentRect.top <= mouseY && mouseY <= parentRect.bottom
        if (!isInsideX || !isInsideY) {
            if (this._timeout) {
                clearTimeout(this._timeout)
            }
            this.hide()
        }
    }

    adjustContentPosition = (
        $content,
        contentRect,
        targetAnchorX,
        targetAnchorY
    ) => {
        const contentRight = targetAnchorX + contentRect.width / 2
        const contentLeft = targetAnchorX - contentRect.width / 2
        if (contentLeft < 0) {
            style($content, { left: 0 - contentLeft })
        } else if (contentRight > window.innerWidth) {
            style($content, { left: window.innerWidth - contentRight })
        }
    }

    calculateTargetAnchorX = triggerRect => {
        const position = this.props.position
        return position === 'right'
            ? triggerRect.right
            : triggerRect.left + triggerRect.width / 2
    }

    calculateTargetAnchorY = (triggerRect, enoughBelow) => {
        const position = this.props.position
        if (position === 'right') {
            return triggerRect.top + triggerRect.height / 2
        } else if (position === 'right' || !enoughBelow) {
            return triggerRect.top
        }
        return triggerRect.bottom
    }

    place = () => {
        if (!this.tooltipElement) {
            if (_tooltipLayer) {
                const element = (this.tooltipElement = document.createElement(
                    'div'
                ))
                element.className = 'ui-tooltip__item'
                _tooltipLayer.appendChild(element)
            }
        }
        if (this.tooltipElement) {
            ReactDOM.render(this.renderTooltip(), this.tooltipElement)
        }
        if (!this.anchor) return

        const $anchor = this.anchor
        const $trigger = this._$trigger

        const $tooltip = $anchor.querySelectorAll('.ui-tooltip')
        const $content = $anchor.querySelectorAll('.ui-tooltip__content')
        if (!$trigger || !$anchor || !$content[0]) return

        const triggerRect = $trigger.getBoundingClientRect()
        const anchorRect = $anchor.getBoundingClientRect()
        const contentRect = $content[0].getBoundingClientRect()

        const enoughBelow =
            triggerRect.bottom + contentRect.height + 20 < window.innerHeight
        const targetAnchorX = this.calculateTargetAnchorX(triggerRect)
        const targetAnchorY = this.calculateTargetAnchorY(
            triggerRect,
            enoughBelow
        )

        const Δx = targetAnchorX - anchorRect.left
        const Δy = targetAnchorY - anchorRect.top
        style($tooltip, { left: Δx, top: Δy })
        console.log($tooltip, this.props.position)
        switch (this.props.position) {
            case 'top':
                addClass($tooltip, '--top')
                this.adjustContentPosition(
                    $content,
                    contentRect,
                    targetAnchorX,
                    targetAnchorY
                )
                break
            case 'bottom':
                addClass($tooltip, '--top')
                this.adjustContentPosition(
                    $content,
                    contentRect,
                    targetAnchorX,
                    targetAnchorY
                )
                break
            case 'right':
                addClass($tooltip, '--right')
                break
        }
    }

    show = () => {
        if (!this.props.show) {
            return null
        }
        this.place()
        if (currentTooltip) {
            currentTooltip.hide()
            currentTooltip = null
        }
        if (this.tooltip) {
            this.tooltip.classList.add('--visiable')
            currentTooltip = this
        }
        if (!this.eventListenerAdded) {
            window.addEventListener('mousemove', this.onMouseMove)
            this.eventListenerAdded = true
        }
    }

    hide = () => {
        if (currentTooltip === this) {
            currentTooltip = null
        }
        if (this.tooltip) {
            this.tooltip.classList.remove('--visiable')
        }
        if (this.eventListenerAdded) {
            window.removeEventListener('mousemove', this.onMouseMove)
            this.eventListenerAdded = false
        }
    }

    handleTooltipDummyElement = element => {
        this._parentNode = element && element.parentNode
    }

    renderTooltip = () => {
        if (!this.props.children) {
            return <div className="ui-tooltip__empty" />
        }

        return (
            <div
                className="ui-tooltip__anchor"
                ref={c => {
                    this.anchor = c
                }}
            >
                <div
                    className="ui-tooltip"
                    ref={c => {
                        this.tooltip = c
                    }}
                >
                    {this.props.plain ? (
                        <div className="ui-tooltip__content --plain">
                            {this.props.children}
                        </div>
                    ) : (
                        <div>
                            <div className="ui-tooltip__content">
                                {this.props.children}
                            </div>
                            <div className="ui-tooltip__triangle" />
                        </div>
                    )}
                </div>
            </div>
        )
    }

    render() {
        return (
            <span
                className="ui-tooltip"
                style={{ display: 'none' }}
                ref={this.handleTooltipDummyElement}
            />
        )
    }
}
