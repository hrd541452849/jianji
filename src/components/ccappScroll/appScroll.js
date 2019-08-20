// 侯信聪引入的better-scroll插件
import React,{Component} from 'react';
import BScroll from 'better-scroll';
import './style.scss';
export default class AppScroll extends Component{
    scrollDOM = React.createRef();
    render(){
        let {className,children} = this.props;
        return (
            // react给组件添加className的方式
            <div className={`scroll-wrap ${className}`} ref={this.scrollDOM}>
                <div className='scroll-content'>
                    {children}
                </div>
            </div>
        )
    }
    componentDidMount(){
        this.scroll = new BScroll(this.scrollDOM.current,{
            tab:true,
            click:true,
            scrollX:false,
            scrollY:true
        });
        // 监听滚动开始前的事件
        this.scroll.on("beforeScrollStart",()=>{
            this.scroll.refresh();//滚动开始前重新计算高度,因为数据是异步请求得到的，在数据更新前容器的高度为0
        })
    }
} 