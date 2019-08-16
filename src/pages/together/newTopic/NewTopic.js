// 新建主题页面
import React, { Component } from 'react';
import AppHeader from '../../../components/app-header/AppHeader';

import './new-topic.scss'

class NewTopic extends Component {
    render() {
        return (
            <div id = "newTopic">
                <AppHeader title = "新建主题" left = {<img src="/images/go_back.png" alt = "返回" />} leftAction = {this.backAction.bind(this)}  className = "new-topic-head"/>
            </div>
        );
    }
    backAction() {
        this.props.history.goBack()
    }
}

export default NewTopic;