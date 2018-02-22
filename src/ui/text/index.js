import _ from 'lodash'
import PropTypes from 'prop-types'
import React from 'react'

import * as ColorSets from '../../app-design/Colors'

const SIZES = {
    XXL: '36px',
    XL: '24px',
    L: '18px',
    M: '16px',
    S: '14px',
    XS: '12px',
    XXS: '10px'
}

const WEIGHTS = {
    BOLD: '700',
    SEMI_BOLD: '600',
    NORMAL: '400',
    LIGHT: '300'
}

const COLORS = {
    TEAL: ColorSets.TEAL_400,
    BLUE: ColorSets.BLUE_500,
    GREEN: ColorSets.GREEN_500,
    AMBER: ColorSets.AMBER_500,
    RED: ColorSets.RED_500,
    LIGHT_GRAY: ColorSets.GRAY_400,
    GRAY: ColorSets.GRAY_500,
    DARK_GRAY: ColorSets.GRAY_600,
    TRANSPARENT: ColorSets.TRANSPARENT
}

const keyMap = spec => _.mapValues(spec, (value, key) => key)

export default class Text extends React.Component {
    static propTypes = {
        children: PropTypes.node,
        weight: PropTypes.oneOf(Object.keys(WEIGHTS)),
        size: PropTypes.oneOf(Object.keys(SIZES)),
        color: PropTypes.oneOf(Object.keys(COLORS)),
        italic: PropTypes.bool,
        decoration: PropTypes.string
    }

    static SIZES = keyMap(SIZES)
    static WEIGHTS = keyMap(WEIGHTS)
    static COLORS = keyMap(COLORS)
    static Decorate = {
        UNDERLINE: 'underline'
    }

    render() {
        const style = {
            fontSize: SIZES[this.props.size],
            fontWeight: WEIGHTS[this.props.weight],
            textDecoration: this.props.decoration,
            color: COLORS[this.props.color],
            fontStyle: this.props.italic ? 'italic' : 'normal'
        }

        return <span style={style}>{this.props.children}</span>
    }
}
