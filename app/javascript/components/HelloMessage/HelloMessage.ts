import * as React from 'react'
import PropTypes from 'prop-types'
interface Props {
    info: object;
}

const HelloMessage: React.SFC<Props> = (props) => {
    render () {
        console.log(props.info);
        return (
            <div>
                <div>Hello {props.info.name}!</div>
                <div>Your email address is {props.info.email} </div>
            </div>
        );
    }
}

export default HelloMessage
