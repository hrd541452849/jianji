// 登录
import React, { Component } from 'react';
import {connect} from 'react-redux';
import Back from '../common/Back';
import Input from '../common/Input';
import {setLoginStatusAction} from '../../../store/modules/user'

import './login.scss';

const otherWay = [
    {title: "微信", picUrl: '/images/login_wechat.png'},
    {title: "微博", picUrl: '/images/login_weibo.png'},
    {title: "QQ", picUrl: '/images/login_qq.png'}
]
class Login extends Component {
    state = {
        userName: '',
        password: ''
    }
    render() {
        return (
            <div id = "login">
                <Back goBack = {this.goBackAction} className = "loginGoBack" />
                <Input placeHolder = "请输入邮箱" val = {this.state.userName} onChangeAction = {this.userChangeAction} />
                <Input placeHolder = "请输入密码" type = "password" val = {this.state.password} onChangeAction = {this.passwordChangeAction} />
                <div className = "forget"><span>忘记密码?</span></div>
                <div className = "loginBtn" onClick = {this.loginAction}>登录</div>
                <ul className = "other_way">
                    {otherWay.map ((item) => (
                        <li key = {item.title}>
                            <img src = {item.picUrl} alt = {item.title} />
                            <p>{item.title}</p>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }

    // 返回
    goBackAction = () => {
        this.props.history.goBack()
    }

    // 输入账号
    userChangeAction = (val) => {
        this.setState({
            userName: val
        })
    }

    // 输入密码
    passwordChangeAction = (val) => {
        this.setState({
            password: val
        })
    }

    // 登录
    loginAction = () => {
        if (!/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(this.state.userName)) {
            alert("请输入正确的邮箱账号")
            return false;
        }else if(!/[a-zA-z0-9]{6,20}/.test(this.state.password)) {
            alert("密码应由6-20位字母或数字组成")
            return false;
        }
        console.log('登录');
        this.props.loginAciton(true);
    }
}

const mapStateToProps = (state)=>({
    isLogin: state.user.isLogin
  })
const mapDispatchToProps = (dispatch)=>({
    loginAciton: (flag) => {
        let action = setLoginStatusAction(flag);
        dispatch(action)
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Login);