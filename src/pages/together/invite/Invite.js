// 邀请好友页面
import React, { Component } from 'react';
import AppHeader from '../../../components/app-header/AppHeader';

import './invite.scss'

class Invite extends Component {
    state = {
        inviteData: [
            {title: '通过微信邀请', picUrl: '/images/invite_wechat.png'},
            {title: '通过QQ邀请', picUrl: '/images/invite_qq.png'},
            {title: '通过短信邀请', picUrl: '/images/invite_xinxi.png'},
            {title: '通过参与主题好友', picUrl: '/images/invite_frends.png'},
        ]
    }
    render() {
        return (
            <div id = "invite">
                 <AppHeader title = "邀请" left = {<img src="/images/go_back.png" alt = "返回" />} leftAction = {this.backAction.bind(this)}/>
                 <div className = "main">
                    {this.state.inviteData.map(item => (

                        <div className = "border-bottom inviteItem">
                            <div className = "imgContent"><img src = {item.picUrl} /></div>
                            <p>{item.title}</p>
                            <span>&gt;</span>
                        </div>
                    ))}
                 </div>
            </div>
        );
    }
    backAction() {
        this.props.history.goBack()
    }
}

export default Invite;