import React from 'react'

import eventLog from '../core/frontend-globals/eventLog'

import { Divider, Tooltip, Button, Input, Text, Checkbox, Radio, Switch, Star } from '../ui'

export default class TestPage extends React.Component {
    state = {
        checked: true
    }

    componentWillMount() {
        eventLog('page:testPage', 'test:eventLog', {
            time: new Date(),
            state: 'componentWillMount'
        })
    }

    componentWillUnmount() {
        eventLog('page:testPage', 'test:eventLog', {
            time: new Date(),
            state: 'componentWillUnMount'
        })
    }

    checkboxChange = e => {
        this.setState({ checked: !this.state.checked })
    }

    radioChange = e => {
        this.setState({ checked: !this.state.checked })
    }

    onSwitchChange = (state, e) => {
        this.setState({
            checked: state
        })
    }

    render() {
        return (
            <div>
                <Text color="TEAL" size="XL">TestPage</Text>
                <Divider style={{ background: '#666' }} />

                <h4>Star</h4>
                <Star active={this.state.checked} />
                <h4>Switch</h4>
                <Switch
                    state={this.state.checked}
                    onStateChange={this.onSwitchChange}
                />

                <h4>Radio</h4>
                <Radio
                    checked={this.state.checked}
                    onSelect={this.radioChange}
                >Radio1</Radio>
                <Radio
                    checked={!this.state.checked}
                    onSelect={this.radioChange}
                >Radio2</Radio>

                <h4>Checkbox</h4>
                <Checkbox
                    size={18}
                    checked={this.state.checked}
                    onChange={this.checkboxChange}
                >
                    Checkbox
                </Checkbox>
                <h4>Text</h4>
                <p>
                    <Text color="TEAL" size="XXL">
                        知
                    </Text>
                    <Text color="BLUE" size="XL">其</Text>
                    <Text color="GREEN" size="L">不</Text>
                    <Text color="AMBER" size="M">可</Text>
                    <Text color="RED" size="S">奈</Text>
                    <Text color="LIGHT_GRAY" size="XS">何</Text>
                    <Text color="GRAY" size="XXS">而</Text>
                    <Text color="DARK_GRAY">安</Text>
                    <Text color="TRANSPARENT">之</Text>
                </p>

                <h4>Input</h4>
                <p>
                    <Input type="number" />
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
