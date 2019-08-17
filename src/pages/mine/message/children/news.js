
import React, { Component } from 'react';
import './style.scss'

class News extends Component {
    render() {
        return (
            <div className="page subpage" id="News">
                <header className="header_top">
                    <i className="iconfont icon-iconfontjiantou1"  onClick={this.Upper.bind(this)}></i>
                    <span>消息中心</span>
                </header>   
                <ul className="content">
                    <li className="pic_text">
                        <div className="text_Record">
                            <div className="text_left">
                                <i className="iconfont  icon-xiaoxi"></i>
                                <span>登录提示</span>
                            </div>
                            <div className="text-right">
                                <span>2019-07-23</span>
                                <span>13:16:46</span>
                            </div>
                        </div>
                        <div className="main">
                            <div className="main_cotent">
                                <span>简记欢迎您的登录，记录下您的一点一滴，祝您天天开心愉 快.</span>
                                {/* asd */}
                                <div className="See">
                                    <b>查看详情</b>
                                    <i className="iconfont  icon-youjiantou"></i>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        );
    }
    Upper(){
        this.props.history.goBack()
    }
}

export default News;