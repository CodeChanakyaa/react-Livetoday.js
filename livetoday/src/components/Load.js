import React, { Component } from 'react';
import loading from '../images/loading.gif';

export default class Load extends Component {
    render() {
        return (
            <div className='position-relative'>
                <img className='position-absolute top-50 start-50 translate-middle' src={loading} alt="..."></img>
            </div>
        )
    }
}
