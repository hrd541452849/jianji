
import React, { Component } from 'react';
import './style.scss'

class Comment extends Component {
    render() {
        return (
            <div className="page subpage" id="Comment">
                 <header className="header_top">
                    <i className="iconfont icon-iconfontjiantou1"  onClick={this.Upper.bind(this)}></i>
                    <span>消息中心</span>
                </header> 
                <div className="contents">
                    <div>
                        <span>您还没有评论哦~</span>
                        <i className="iconfont icon-youjiantou"></i>
                        <i className="iconfont icon-youjiantou"></i>
                    </div>
                </div> 
            </div>
        );
    }
    Upper(){
        this.props.history.goBack()
    }
}

export default Comment;