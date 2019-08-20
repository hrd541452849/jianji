import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import './TabBar.scss'

class TabBar extends Component {
    state = {
        tabData: [
            {id: 1, text: '私密写', path: '/private', imgUrl: '/images/tab_bar_pic.png'},
            {id: 2, text: '一起写', path: '/together', imgUrl: '/images/tab_bar_pic.png'},
            {id: 3, text: '做书', path: '/book', imgUrl: '/images/tab_bar_pic.png'},
            {id: 4, text: '我的', path: '/mine', imgUrl: '/images/tab_bar_pic.png'},
        ]
    }
    render() {
        let {tabData} = this.state;
        return (
            <div className = "tab-bar border-top" id = "tab-bar">
                {
                    tabData.map(item => (
                        <NavLink to = {item.path} key = {item.id}>
                            <div className = 'imgContent'></div>
                            <p>{item.text}</p>
                        </NavLink>
                    ))
                }
            </div>
        );
    }
}

export default TabBar;
