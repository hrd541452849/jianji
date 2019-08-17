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
            </div>
        );
    }
}

export default Together;