
import React, { Component } from 'react';
import './Order.scss'

class MyOrder extends Component {
    render() {
        return (
            <div className="page subpage" id="MyOrder">
                <header className="header_top">
                    <i className="iconfont icon-iconfontjiantou1"  onClick={this.Upper.bind(this)}></i>
                    <span>我的作品</span>
                </header>
                <div className="contentx">
                    <ul className="book_list">
                        <li>
                            <span>自己的书</span>
                        </li>
                        <li>
                            <span>和朋友的书</span>
                        </li>
                    </ul>
                    <div className="warp_text">
                        <ul className="book_text">
                            <li>
                                <div className="text_img">
                                    <img src="" alt=""/>
                                </div>
                                <div className="text_name">
                                    <span>做书攻略注意事项</span>
                                </div>
                            </li>
                            <li>
                                <div className="text_img">
                                    <img src="" alt=""/>
                                </div>
                                <div className="text_name">
                                    <span>做书攻略注意事项</span>
                                </div>
                            </li>
                            <li>
                                <div className="text_img">
                                    <img src="" alt=""/>
                                </div>
                                <div className="text_name">
                                    <span>做书攻略注意事项</span>
                                </div>
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

export default MyOrder;