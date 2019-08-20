// 进入app时的引导页，感觉可以在进入登录页面时把这个组件删除
import React, { Component } from 'react';
import './style.scss';

class Banner extends Component {
    render() {
        // let bannerList =[
        //     {}
        // ];
        return (
            <div id='bannerPage' className='ccPage'>
                <div className='bannerNav banner01'>
                    <div className='bannerTitle'>
                        <h1>私人订制</h1>
                        <p>用纸和笔</p>
                        <p>美好生活从此开始</p>
                        <p>留存温度  让生活更有仪式感,见字如你</p>
                    </div>
                    <div className='bannerImg'>
                        <div className='img'>
                            <img src='/images/1.png' alt='bannerImg'/>
                            {/* <img src='http://pic25.nipic.com/20121117/9252150_165726249000_2.jpg'alt='banner'/> */}
                        </div>
                        <p>记录生活 记录故事</p>
                    </div>
                </div>
                <div className='bannerNav banner02'>
                    <div className='bannerTitle'>
                        <h1>一键成书</h1>
                        <p>用纸和笔</p>
                        <p>留存温度  让生活更有仪式感,见字如你</p>
                    </div>
                    <div className='bannerImg'>
                        <div className='img'>
                            <img src='/images/2.png' alt='bannerImg'/>                     
                            {/* <img src='https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=173870741,3719454629&fm=26&gp=0.jpg' alt='banner'/> */}
                        </div>
                        {/* <p>记录生活 记录故事</p> */}
                    </div>
                </div>
                <div className='bannerNav banner03'>
                    <div className='bannerTitle'>
                        <h1>自由写</h1>
                        <p>用纸和笔</p>
                        <p>留存温度  让生活更有仪式感,见字如你</p>
                    </div>
                    <div className='bannerImg'>
                        <div className='img'>
                            <img src='/images/2.png' alt='bannerImg'/>
                            {/* <img src='https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=173870741,3719454629&fm=26&gp=0.jpg' alt='banner'/> */}
                        </div>
                        {/* <p>记录生活 记录故事</p> */}
                    </div>
                </div>
                <div className='bannerNav banner04'>
                    <div className='bannerTitle'>
                        <h1>一起写</h1>
                        <p>用纸和笔</p>
                        <p>留存温度  让生活更有仪式感,见字如你</p>
                    </div>
                    <div className='bannerImg'>
                        <div className='img'>
                            <img src='/images/2.png' alt='bannerImg'/>
                            {/* <img src='https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=173870741,3719454629&fm=26&gp=0.jpg' alt='banner'/> */}
                        </div>
                        {/* <p>记录生活 记录故事</p> */}
                    </div>
                </div>
                <div className='bannerNav banner05'>
                    <div className='bannerTitle'>
                        <h1>记录生活</h1>
                        <p>用纸和笔</p>
                        <p>留存温度  让生活更有仪式感,见字如你</p>
                    </div>
                    <div className='bannerImg'>
                        <div className='img'>
                            <img src='/images/2.png' alt='bannerImg'/>
                            {/* <img src='https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=173870741,3719454629&fm=26&gp=0.jpg' alt='banner'/> */}
                        </div>
                        <p>开始新生活</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Banner;