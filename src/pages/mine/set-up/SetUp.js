
import React, { Component } from 'react';
import './style.scss'
import {Switch,List} from 'antd-mobile';

import 'antd-mobile/lib/switch/style/css';

class SetUp extends Component {
    constructor(props){
        super(props)
        this.state={
            checked: false,
            checked1: true,
            isShow:false
        }
    }
    render() {
        return (
            <div className="page subpage" id="SetUp">
               <header className="header_top">
                    <i className="iconfont icon-iconfontjiantou1"  onClick={this.Upper.bind(this)}></i>
                    <span>设置</span>
                </header>
                <div className="Set_warp">
                    <ul className="up_list">
                        <li className="Set_item">
                            <span>账号安全与设置</span>
                            <i  className="iconfont  icon-youjiantou"></i>
                        </li>
                        <li className="Wifi_upload">
                            
                            <List.Item
                                extra={<Switch
                                    checked={this.state.checked}
                                        onChange={() => {
                                            this.setState({
                                                checked: !this.state.checked,
                                        });
                                    }}
                                />}
                            >仅在WIFI下上传</List.Item>
                        </li>
                        <li className="Password">
                            <i className="iconfont icon-lock"></i>
                            <List.Item
                                extra={<Switch
                                    checked={this.state.isShow}
                                        onChange={() => {
                                            this.setState({
                                                isShow: !this.state.isShow,
                                        });
                                    }}
                                />}
                            >记录密码锁</List.Item>
                        </li>
                        <li className="version_number">
                            <span>版本号</span>
                            <span>4.6.0</span>
                        </li>
                    </ul>
                   
                </div>
                <div className="Log_out">
                        <span>退出登录</span>
                    </div>
            </div>
        );
    }
    Upper(){
        this.props.history.goBack()
    }
}


export default SetUp;