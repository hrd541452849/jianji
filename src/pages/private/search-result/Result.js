// 搜索结果页
import React, { Component } from 'react';
import './style.scss';
class Result extends Component {
    render() {
        return (
            <div id='searchResult' className='ccPage'>
                <div className='resultHeader'>
                    <input type='text'/>
                    <button>取消</button>
                </div>
                <div className='resultShow'>
                    
                </div>
            </div>
        );
    }
}

export default Result;