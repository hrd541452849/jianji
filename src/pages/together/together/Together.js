// 一起做首页
import React, { Component } from 'react';
import AppHeader from '../../../components/app-header/AppHeader';
import { Link } from "react-router-dom";


import './together.scss'

class Together extends Component {
    render() {
        return (
            <div id = "together">
                <AppHeader title = "一起写" className = "together-head" right = {<Link to = "/together/newtopic">+</Link>} />
                <div className = "main">
                    <img src = "/images/together.png" alt = "一起写" />
                    <Link to = "/together/newtopic" className = "together-add" >+&nbsp;新建主题</Link>
                </div>
            </div>
        );
    }
}

export default Together;