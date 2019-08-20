// 我的主页面
import React, { Component } from 'react';

import { NavLink } from "react-router-dom";

import CategoryList from './children/CategoryList'
import store from '../../../store'

import './style.scss'
class Mine extends Component {
    constructor(props){
        super(props)
        this.state = {
            data:store.getState().data
        }
    }
    render() {
        console.log(store.getState().mine.data)
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
                            <img src="http://img.ivsky.com/img/tupian/pre/201402/17/jingjiedebifang-001.jpg" alt=""/>
                        </div>
                        <p className="xm">{store.getState().mine.data}</p>
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
    // componentDidMount(){
    //     //监听数据的变化
    //     let unsubscribe = store.subscribe(()=>{
    //         console.log('变化了')
    //         this.setState({
    //             data:store.getState().data
    //         })
    //     })
    // }
}

export default Mine;