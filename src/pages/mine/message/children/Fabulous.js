
import React, { Component } from 'react';
import './style.scss'

class Fabulous extends Component {
    render() {
        return (
            <div className="page subpage" id="Fabulous">
                 <header className="header_top">
                    <i className="iconfont icon-iconfontjiantou1"  onClick={this.Upper.bind(this)}></i>
                    <span>我的评论</span>
                </header> 
                <div className="contents">
                    <div>
                        <span>您咱无评论，感觉去发布吧！</span>
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

export default Fabulous;