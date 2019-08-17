//登录注册选择页面
import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import './log-reg.scss'

class LogReg extends Component {
    render() {
        return (
            <div id = "logReg">
                <div className = "logo"><img src = "/images/logo.png" alt = "logo" /></div>
                <p>记录，整理，遇见更好的自己</p>
                <p>更清楚的了解自己</p>
                <div className = "imgContent"><img src = "/images/log_reg.png" alt = "特别" /></div>
                <div className = "btnContent">
                    <Link to = '/login'>登录</Link>
                    <Link to = '/register'>注册</Link>
                </div>
            </div>
        );
    }
}

export default LogReg;