import React, { Component } from 'react';
import './share.scss'
class componentName extends Component {
    render() {
        return (
            <div className="page subpage" id="share">
                <header className="share_header">
                    <i className="iconfont icon-iconfontjiantou1" onClick={this.Upper.bind(this)}></i>
                    <h3>分享App</h3>
                    <span>保存到本地</span>
                </header>
                <div className="share_mine">
                    <div className="banner_share">
                        <img src="/images/Share_pic.png" alt=""/>
                    </div>
                    <div className="share_list">
                        <ul>
                            <li>
                               
                                    <img src="/images/shore_vx.png" alt=""/>
                                    <span>微信</span>
                              
                            </li>
                            <li>
                               
                                    <img src="/images/shore_friends.png" alt=""/>
                                    <span>朋有圈</span>
                               
                            </li>
                            <li>
                              
                                    <img src="/images/share_blog.png" alt=""/>
                                    <span>微博</span>
                               
                            </li>
                            <li>
                                
                                    <img src="/images/share_space.png" alt=""/>
                                    <span>QQ空间</span>
                               
                            </li>
                            <li>

                                <img src="/images/ShareQQ.png" alt=""/>
                                <span>QQ</span>
                               
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
    Upper(){
        this.props.history.goBack()
    }
}

export default componentName;