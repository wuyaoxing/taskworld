import './ExpiryInfo.less'

import React from 'react'

export default class ExpiryInfo extends React.Component {
    renderInfo = () => `您的试用期将在 2 天内到期。代码，有时候写着写着就很开心很开心很开心！！！`

    render() {
        return (
            <div className="app-expiry-info">
                <span className="app-expiry-info__text">
                    {this.renderInfo()}
                </span>
            </div>
        )
    }
}
