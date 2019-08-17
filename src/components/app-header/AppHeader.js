// 公用头部，包括返回按钮，头部标题
import React, { Component } from 'react';

import './app-header.scss';


class AppHeader extends Component {
    render() {
        console.log(this.props)
        const {title = '头部', left, leftAction, right, rightAction, className} = this.props;
        return (
            <div className={`app-header border-bottom ${className}`} >
                {left && <div className = 'left' onClick = {leftAction}>{left}</div> }
                <h1>{title}</h1>
                {right && <div className = 'right' onClick = {rightAction}>{right}</div> }
            </div>
        );
    }
}

export default AppHeader;