// 左侧向右滑动，侧边栏
import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import './style.scss';
class Aside extends Component {
    render() {
        return (
            <div id='aside' className='ccPage' >
                <div className='asideLeft'>
                    <div><h1>23</h1><span>Aug.2019</span></div>
                    <nav>
                        <NavLink to='/book'><li><span className='iconfont icon-star01'></span>&nbsp;&nbsp;作书</li></NavLink>
                        <NavLink to='/private'><li><span className='iconfont icon-star01'></span>&nbsp;&nbsp;私密写</li></NavLink>
                        <NavLink to='/together'><li><span className='iconfont icon-star01'></span>&nbsp;&nbsp;一起写</li></NavLink>
                        <NavLink to='/mine'><li><span className='iconfont icon-star01'></span>&nbsp;&nbsp;我的</li></NavLink>
                    </nav>   
                </div>
                <div className='asideRight'></div>
                
            </div>
        );
    }
}

export default Aside;