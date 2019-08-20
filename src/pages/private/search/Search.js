// 搜索页
import React, { Component } from 'react';
// import {NavLink} from 'react-router-dom';
import './style.scss';
class Search extends Component {
    render() {
        let recentTags = [
            {name:'天空',id:1},
            {name:'草原',id:2},
            {name:'田野',id:3},
        ];
        let alwaysTags = [
            {name:'杂技',id:1},
            {name:'块技',id:11},
            {name:'物质',id:13},
            {name:'新生',id:14},
            {name:'是否',id:16},
            {name:'梵蒂冈',id:17},
        ]
        return (
            <div id='search' className='ccPage'>
                <div className='searchHeader'>
                    <input type='text' placeholder='标签/标题/关键字'/>
                    <i className= 'iconfont icon-bigger'></i>
                    <button onClick={this.backAction.bind(this)}>取消</button>
                </div>
                <div className='searchTip'>
                    <div className='recent'>
                        <h3>最近标签:</h3>
                        {
                            recentTags.map(item=>(
                                <span key={item.id}>{item.name}</span>
                            ))
                        }
                    </div>
                    <div className='always'>
                        <h3>常用标签:</h3>
                        {
                            alwaysTags.map(item=>(
                                // <NavLink to='/private/result'><span key={item.id}>{item.name}</span></NavLink> 
                                <span key={item.id}>{item.name}</span>   
                            ))
                        }
                    </div>
                </div>
            </div>
        );
    }
    backAction=function(){
        this.props.history.goBack();
    }
}

export default Search;