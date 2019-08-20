// 记录页面
import React, { Component } from 'react';
import './style.scss';

class Record extends Component {
    render() {
        return (
            <div id='record' className='ccPage'>
               <div className='recordHeader'> 
                    <span className= 'iconfont icon-leftArrow' onClick={this.backAction}></span>
                    <span>保存</span>
               </div>
               <div className='recordContent'>
                   <div className='title'>
                       <input type='text' placeholder='标题(选填)'></input>
                       <textarea type='text' placeholder='输入想说的话'></textarea>
                   </div>
                   <div className='addImg'>
                       <span className='iconfont icon-plus'></span>
                       <i>点击添加图片</i>
                   </div>
               </div>
            </div>
        );
    }
    backAction =()=>{
        this.props.history.goBack();
    }
}

export default Record;