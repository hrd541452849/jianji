import React, { Component } from 'react';

import './back.scss';

class Back extends Component {
    render() {
        return (
            <div id = "log_reg_back" className = {this.props.className}>
                <div onClick = {this.props.goBack}>
                    <img src = "/images/go_back.png" alt="" />
                    <span>返回</span>
                </div>
            </div>
        );
    }
}

export default Back;