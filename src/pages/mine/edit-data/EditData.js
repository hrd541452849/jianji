// 消息页
import React, { Component } from 'react';
import './style.scss'
import store from '../../../store'

class EditData extends Component {
    constructor(props){
        super(props)
        //将数据转为内部数据
        this.state = {
            isShow:false,
            val:'',
            data:store.getState().data
        }
    }
    render() {
        let {isShow,val} = this.state
        return (
            <div className="page subpage" id="EditData">
                 <header className="header_top">
                    <i className="iconfont icon-iconfontjiantou1"  onClick={this.Upper.bind(this)}></i>
                    <span>编辑资料</span>
                </header> 
                <div className="Head_portrait">
                    <div className="url_img">
                    <img src="http://img.ivsky.com/img/tupian/pre/201402/17/jingjiedebifang-001.jpg" alt=""/>
                    </div>
                    <div className="information">
                        <div className="Account_number">
                            <b>账号</b>
                            <span>173****0700</span>
                        </div>
                        <div className="Pen_name">
                            <b>笔名</b>
                            <span className="text" onClick={this.modifyAction.bind(this)}>
                                {/* <p className="xm">{store.getState().mine.data}</p> */}
                                <span>{store.getState().mine.data}</span>
                                <i className="iconfont  icon-youjiantou"></i>
                            </span>
                        </div>
                    </div>
                </div>
                <div className="Mask" style={{display:isShow?'':'none'}}>
                    <div className="modify">
                        <div className="contents">
                            <p>修改笔名</p>
                            <input type="text" value={val} onChange={this.onChangeAction.bind(this)}/>
                            <div className="Button">
                                <div className="cancel" onClick={this.cancelAction.bind(this)}>取消</div>
                                <div className="confirm" onClick={this.bindConfirm.bind(this)}>确认</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    // 返回上一层
    Upper(){
        this.props.history.goBack()
    }
    // 点击显示修改名字
    modifyAction(){
        this.setState({
            isShow:true
        })
    }
    //点击取消修改名字
    cancelAction(){
        this.setState({
            isShow:false
        })
    }
    //获取修改名字的内容
    onChangeAction(ev){
        this.setState({
            val:ev.target.value
        })
    }
    //修改名字
    bindConfirm(){
        let value = this.state.val
        store.dispatch({ 
            type:'set_data',
            value
        })
        //清空输入框
        this.setState({val:'',isShow:false})
    }
   //监听数据变化 ，将新的数据转为组件内部
}

export default EditData;