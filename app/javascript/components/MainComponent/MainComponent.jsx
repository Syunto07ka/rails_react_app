import React from 'react';
import PropTypes from 'prop-types';
import HelloMessage from '../HelloMessage/HelloMessage';
import axios from 'axios';
import './style.css';

class MainComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            info: {}
        }
    }

    componentDidMount() {
        axios.get('http://localhost:3000/main_api/index')
        .then((results) => {
            console.log(results.data)
            this.setState({info: results.data})
        })
        .catch((data) => {
            console.log(data)
        })
    }

    render () {
        return (
            <div className="main_container">
              <HelloMessage info = { this.state.info } />
            </div>
        );
    }
}

export default MainComponent
