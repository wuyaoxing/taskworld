import React from 'react'

import { Divider, Tooltip } from '../ui'

export default class TestPage extends React.Component {
    render() {
        return (
            <div>
                <h2>TestPage</h2>
                <Divider style={{ background: '#333' }} />
                <h4>Divider</h4>
                <Divider size="S" style={{ background: '#333' }} />
                <Divider size="M" style={{ background: '#333' }} />
                <Divider size="L" style={{ background: '#333' }} />
                <Divider size="XL" style={{ background: '#333' }} />
                <Divider size="XXL" style={{ background: '#333' }} />
                <h4>Tooltip</h4>
                <div>
                    Tooltip
                    <Tooltip position="top">dcvdvdvdvdvd</Tooltip>
                </div>
            </div>
        )
    }
}
