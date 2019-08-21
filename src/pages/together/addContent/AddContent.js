// 添加内容页面
import React, { Component } from 'react';
import AppHeader from '../../../components/app-header/AppHeader';

import './addContent.scss'

class AddContent extends Component {
    render() {
        return (
            <div id = "addContent">
                <AppHeader title = "" left = {<img src="/images/go_back.png" alt = "返回" />} leftAction = {this.backAction.bind(this)} right = '保存' />
            </div>
        );
    }
    backAction() {
        this.props.history.goBack()
    }
}

export default AddContent;