// 我的主页面
import React, { Component } from 'react';

import { NavLink } from "react-router-dom";

import CategoryList from './children/CategoryList'


import './style.scss'
class Mine extends Component {
    constructor(props){
        super(props)
        this.state = {
        }
    }
    render() {
        return (
            <div className="page" id="mine">
                <div className="header">
                    <div className="pic_wo">
                        <div className="text">
                            <p>我的</p>
                        </div>
                        <div className="icon_xf">
                            <NavLink to="/mine/message">
                                <i className="iconfont icon-buoumaotubiao12"></i>
                            </NavLink>
                        </div>
                    </div>
                    <div className="header_zt">
                        <div className="pic_img">
                            <img src="" alt=""/>
                        </div>
                        <p className="xm">张三</p>
                        <NavLink className="iconfont icon-bi" to="/mine/editdata"></NavLink>
                        <NavLink className="fx_App" to="/mine/Share">
                            <p>分享App</p>
                        </NavLink>
                    </div>
                </div>
                <CategoryList/>
            </div>
        );
    }
}

export default Mine;