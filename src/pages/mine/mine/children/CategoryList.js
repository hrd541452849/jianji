import React, { Component } from 'react';
import{NavLink} from 'react-router-dom'
import './list.scss'

class componentName extends Component {
    render() {
        const listNav =[
            {id:1,name:'我的作品',path:'/mine/MyOrder',icon:'icon-_zuopinzhuzuoquan'},
            {id:2,name:'回收站',path:'/mine/RecycleBin',icon:'icon-huishouzhan'},
            {id:3,name:'意见反馈',path:'/mine/Opinion',icon:'icon-xiaoxi'},
            {id:4,name:'分享App',path:'/mine/Share',icon:'icon-fenxiang'},
            {id:5,name:'我的设置',path:'/mine/setup',icon:'icon-shezhi'}
        ]
        return (
            <ul className="list_ ">
                {
                    listNav.map(item=>(
                        <NavLink className="list_item" to={item.path}key ={item.id}>
                            <span>{item.name}</span>
                            <span className={`iconfont  ${item.icon}`}></span> 
                        </NavLink>
                    ))
                }
            </ul>
        );
    }
}

export default componentName;