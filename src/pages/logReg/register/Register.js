// 注册
import React, { Component } from 'react';
import {connect} from 'react-redux';

import api from '../../../utils/api'
import {get, post} from '../../../utils/request'
import {requestSendCodeAction} from '../../../store/modules/user';
import Back from '../common/Back';
import Input from '../common/Input';

import './register.scss';

class Register extends Component {
    state = {
        canRegister: false,
        regEmail: "",
        code: "",
        password: "",
        pwdRepeat: "",
        panName: ""
    }
    render() {
        return (
            <div id = "register">
                <Back goBack = {this.goBackAction} />
                <h1>欢迎加入简记</h1>
                <form>
                    <Input placeHolder = "请输入邮箱" val = {this.state.regEmail} onChangeAction = {this.regEmailChangeAction} />
                    <Input placeHolder = "请输入验证码" val = {this.state.code} onChangeAction = {this.codeChangeAction} children = {<div className = "getCode" onClick = {this.getCodeAction} >获取验证码</div>} />
                    <Input placeHolder = "请输入密码（6-20位字母和数字）" val = {this.state.password} onChangeAction = {this.passwordChangeAction} type = "password" />
                    <Input placeHolder = "重复密码" val = {this.state.pwdRepeat} onChangeAction = {this.pwdRepeatChangeAction} type = "password" />
                    <Input placeHolder = "笔名（选填）" val = {this.state.panName} onChangeAction = {this.panNameChangeAction} />
                    <div className = "registerBtn" onClick = {this.registerAction}>注册</div>
                    <p>注册代表你已经同意并接受《用户与隐私协议》</p>
                </form>
            </div>
        );
    }

    // 返回
    goBackAction = () => {
        this.props.history.goBack()
    }

    // 输入邮箱
    regEmailChangeAction = (val) => {
        this.setState({
            regEmail: val
        })
    }

    // 获取验证码
    getCodeAction = async () => {
        if (!/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(this.state.regEmail)) {
            alert("请输入正确的邮箱")
            return false;
        }
        let result = await get(api.SEND_CODE_API, {
            emails: this.state.regEmail
        })
        alert(result.message);
    }

    // 输入验证码
    codeChangeAction = (val) => {
        this.setState({
            code: val
        })
    }

    // 输入密码
    passwordChangeAction = (val) => {
        this.setState({
            password: val
        })
    }

    // 重复密码
    pwdRepeatChangeAction = (val) => {
        this.setState({
            pwdRepeat: val
        })
    }

    // 笔名
    panNameChangeAction = (val) => {
        this.setState({
            panName: val
        })
    }

    // 注册
    registerAction = async () => {
        try {
            if (!/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(this.state.regEmail)) {
                alert("请输入正确的邮箱")
                return false;
            }else if(!/[a-zA-z0-9]{6}/.test(this.state.code)) {
                alert("验证码应由六位字母或数字组成")
                return false;
            }else if(!/[a-zA-z0-9]{6,20}/.test(this.state.password)) {
                alert("密码应由6-20位字母或数字组成")
                return false;
            }else if(this.state.password !== this.state.pwdRepeat) {
                alert("两次密码输入不一致")
                return false;
            }
            let result = await post(api.REGISTER, {
                userEmail: this.state.regEmail,
                userPassword: this.state.password,
                userNickname: this.state.panName,
                authCode: this.state.code
            })
            console.log(result)
        }
        catch {
            console.log(this.props);
            this.props.history.push({pathname: '/login'})

        }
    }
}

const mapStateToProps = () => ({

})

const mapDispatchToProps = (dispatch) => ({

})


export default connect(mapStateToProps, mapDispatchToProps)(Register);