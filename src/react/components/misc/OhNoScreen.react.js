import PropTypes from 'prop-types'
import React from 'react'

export default class OhNoScreen extends React.PureComponent {
    static propTypes = {
        message: PropTypes.string
    }

    render() {
        return (
            <section className="oh-no-screen">
                <div className="oh-no-screen__contents">
                    <div className="oh-no-screen__text">
                        {this.props.message}
                    </div>
                </div>
            </section>
        )
    }
}
