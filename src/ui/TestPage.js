import React from 'react'

import { Divider, Tooltip, Button, Input } from '../ui'

export default class TestPage extends React.Component {
    render() {
        return (
            <div>
                <h2>TestPage</h2>
                <Divider style={{ background: '#333' }} />

                <h4>Input</h4>
                <p>
                    <Input type="number"></Input>
                </p>

                <h4>Button</h4>
                <p>
                    <Button size="smallest">smallest</Button>
                </p>
                <p>
                    <Button size="small">small</Button>
                </p>
                <p>
                    <Button size="regular">regular</Button>
                </p>
                <p>
                    <Button size="medium">medium</Button>
                </p>
                <p>
                    <Button size="large">large</Button>
                </p>
                <p>
                    <Button size="narrow-small">narrow-small</Button>
                </p>
                <p>
                    <Button style="loading">regular</Button>
                </p>
                <p>
                    <Button style="danger">regular</Button>
                </p>
                <p>
                    <Button size="wide-medium">wide-medium</Button>
                </p>
                <p>
                    <Button size="full-width">full-width</Button>
                </p>

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
