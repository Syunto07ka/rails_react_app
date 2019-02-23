import React from 'react'
import PropTypes from 'prop-types'

class HelloMessage extends React.Component {
    static propTypes = {
        info: PropTypes.object
    }
    render () {
        console.log(this.props.info);
        return (
            <div>
                <div>Hello {this.props.info.name}!</div>
                <div>Your email address is {this.props.info.email} </div>
            </div>
        );
    }
}

export default HelloMessage
