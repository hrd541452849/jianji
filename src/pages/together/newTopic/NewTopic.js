// 新建主题页面
import React, { Component } from 'react';
<<<<<<< HEAD
=======
import AppHeader from '../../../components/app-header/AppHeader';

import './new-topic.scss'
>>>>>>> 5c3b711f0f5a0c888b22b75a3b790f2dce52b968

class NewTopic extends Component {
    render() {
        return (
<<<<<<< HEAD
            <div>
                新建主题
            </div>
        );
    }
=======
            <div id = "newTopic">
                <AppHeader title = "新建主题" left = {<img src="/images/go_back.png" alt = "返回" />} leftAction = {this.backAction.bind(this)}  className = "new-topic-head"/>
            </div>
        );
    }
    backAction() {
        this.props.history.goBack()
    }
>>>>>>> 5c3b711f0f5a0c888b22b75a3b790f2dce52b968
}

export default NewTopic;