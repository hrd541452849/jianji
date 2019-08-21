// 新建主题页面
import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { toggleIsPrivate } from '../../../store/modules/user';
import AppHeader from '../../../components/app-header/AppHeader';

import './new-topic.scss'

class NewTopic extends Component {
    render() {
        let {isPrivate, toggleAction} = this.props;
        return (
            <div id = "newTopic">
                <AppHeader title = "新建主题" left = {<img src="/images/go_back.png" alt = "返回" />} leftAction = {this.backAction.bind(this)}  className = "new-topic-head"/>
                <div className = "main" >
                    <div className = "imgContent"><img src = "/images/new_topic.png" alt = "主题" /></div>
                    <div className = "name"><input type = "text" placeholder = "书名：一起写（点击修改）" /></div>
                    <div className = "set">
                        <span>私密</span>
                        <span onClick = {toggleAction.bind(this, !isPrivate)} className = {isPrivate ? 'public' : '' }><i></i></span>
                        <span>公开</span>
                        <span>（仅邀请内成员可见）</span>
                    </div>
                    <div className = "btn">
                        <Link to = '/together/addcontent'>添加内容</Link>
                        <Link to = '/together/invite'>邀请好友</Link>
                    </div>
                </div>
            </div>
        );
    }
    backAction() {
        this.props.history.goBack()
    }
}

const mapStateToProps = (state) => ({
    isPrivate: state.user.isPrivate
});

const mapDispatchToProps = (dispatch) => ({
    toggleAction(flag){
        let action = toggleIsPrivate(flag);
        dispatch(action);
    }
})


export default connect(mapStateToProps, mapDispatchToProps)(NewTopic);