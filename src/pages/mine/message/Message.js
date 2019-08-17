// 消息页
import React, { Component } from 'react';
<<<<<<< HEAD
import './style.scss'
import{NavLink} from 'react-router-dom'
class Message extends Component {

    render() {
        let ListData =[                                                        
            {id:1,name:'信息',icon:'icon-xiaoxi',icon_y:'icon-youjiantou',path:'/mine/message/News'},
            {id:1,name:'评论',icon:'icon-pinglun',icon_y:'icon-youjiantou',path:'/mine/message/Fabulous'},
            {id:1,name:'点赞',icon:'icon-dianzan',icon_y:'icon-youjiantou',path:'/mine/message/Comment'}

        ]
        return (
            <div className="page subpage" id="Message">
                <header className="header_top">
                    <i className="iconfont icon-iconfontjiantou1" onClick= {this.Previous.bind(this)}></i>
                    <span>消息中心</span>
                </header>
                <div> 
                    <ul className="ListData">
                    {
                        ListData.map((item,index)=>(
                            <NavLink className="ListData_item" to={item.path}key ={index+item}>
                                <span>
                                    <span className={`iconfont  ${item.icon}`}></span> 
                                    <span className="text">{item.name}</span>
                                </span>
                                <span className={`iconfont  ${item.icon_y}`}></span> 
                            </NavLink>
                        ))
                    }
                    </ul>
                </div>
            </div>
        );
    }
    Previous(){
        this.props.history.goBack()
    }

=======

class Message extends Component {
    render() {
        return (
            <div>
                消息
            </div>
        );
    }
>>>>>>> 5c3b711f0f5a0c888b22b75a3b790f2dce52b968
}

export default Message;