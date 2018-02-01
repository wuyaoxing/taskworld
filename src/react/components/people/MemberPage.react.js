import React from 'react'

import { Divider } from '../../../ui'

class MemberPage extends React.PureComponent {
    render() {
        return (
            <section className="member-page">
                <Divider style={{ background: '#333' }} />
                <h1>MemberPage</h1>
                <Divider size="S" style={{ background: '#333' }} />
                <Divider size="M" style={{ background: '#333' }} />
                <Divider size="L" style={{ background: '#333' }} />
                <Divider size="XL" style={{ background: '#333' }} />
                <Divider size="XXL" style={{ background: '#333' }} />
            </section>
        )
    }
}

export default MemberPage
