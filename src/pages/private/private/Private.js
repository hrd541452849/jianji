import React, {lazy,Component } from 'react';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
import './style.scss';
import AppScroll from '../../../components/ccappScroll/appScroll';

// import Search from '../search/Search';
// import Record from '../record/Record';
// import Aside from '../aside/Aside';

// 改了style.css,添加了App，#root的样式,引入了自命名的iconfont

// 使用懒加载
const Search = lazy(()=>import('../search/Search'));
const Record = lazy(()=>import('../record/Record'));
const Aside = lazy(()=>import('../aside/Aside'));
const Banner = lazy(()=>import('../../banner/Banner'));

class Private extends Component {
    render() {
       let time = new Date();
    //    let {number} = 10;
        let imgList1 = [
            {key:1,src:'/images/p1.png'},
            {key:2,src:'/images/p11.png'},
        ];
        let imgList2 = [
            {key:1,src:'/images/p2.png'},
            {key:2,src:'/images/p22.png'},
        ];
        let imgList3 = [
            {key:1,src:'/images/p3.png'},
            {key:2,src:'/images/p33.png'},
        ]
        return (
            
            <Router>
                <div id='private'  className='ccPage'>
                    <div className='privateHeader'>
                        <span className='today'>{time.getFullYear()+'年'+(time.getMonth()+1)+'月'+time.getDate()+'日'}</span>
                        <Link to='/private/search' className='bigger' ><span className='iconfont icon-bigger'></span></Link>
                    </div>
                    <div className= 'privateContent'>
                        <AppScroll className='content'>
                            <div className='privateContentLeft'>
                                <p> <b>{time.getDate()}</b><span>{time.getFullYear()+'年'+(time.getMonth()+1)+'月'}</span></p>
                                <p> <b>{time.getDate()-1}</b><span>{time.getFullYear()+'年'+(time.getMonth()+1)+'月'}</span></p>
                                <p> <b>{time.getDate()-2}</b><span>{time.getFullYear()+'年'+(time.getMonth()+1)+'月'}</span></p>
                                <p> <b>Ago</b><span>过往</span></p>
                            </div>
                        </AppScroll>
                        <AppScroll className='content'>
                            <div className='privateContentRight'>
                                <div className='showSecret'>
                                    <h2>如何快速制作一本书？</h2>
                                    <p>发表内容展示区发表说说，写文章，心情各种嗮,哈哈哈哈哈...</p>
                                    {
                                        imgList1.map(item=>(
                                            <img src={item.src} key={item.key} alt={item.id}/>
                                        ))
                                    }
                                </div>
                                <div className='showSecret'>
                                    <h2>什么是“一起写”？</h2>
                                    <p>和家人一起记录孩子的成长；和朋友一起记录旅程的时光；还有志同道合的朋友们，一起记录属于你...</p>
                                    {
                                        imgList2.map(item=>(
                                            <img src={item.src} key={item.key}  alt={item.id}/>
                                        ))
                                    }
                                </div>
                                <div className='showSecret'>
                                    <h2>什么是“一起写”？</h2>
                                    <p>和家人一起记录孩子的成长；和朋友一起记录旅程的时光；还有志同道合的朋友们，一起记录属于你...</p>
                                    {
                                        imgList3.map(item=>(
                                            <img src={item.src} key={item.key}  alt={item.id}/>
                                        ))
                                    }
                                </div>
                                
                                <h3>更多趣事，等你来发现</h3>
                                <span>简计生活，循序渐进</span>
                            </div>
                        </AppScroll>
                        <Link to='/private/record' className='recordLink'><span>记录</span></Link>
                        <Link to='/private/aside' className='asideLink'><span>侧滑</span></Link>
                        <Link to='/private/banner' className='bannerLink'><span>导航页</span></Link>
                    </div>

                    <Route path='/private/search' component={Search}/>
                    <Route path='/private/record' component={Record}/>
                    <Route path='/private/aside' component={Aside}/>
                    <Route path='/private/banner' component={Banner}/>              
                </div>
            </Router>
        );
    }
}

export default Private;