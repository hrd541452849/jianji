import React, { Component } from 'react';
import { Link } from "react-router-dom";

class TabBar extends Component {
    render() {
        return (
            <div className = "tab-bar">
                <Link to = '/private'>私密写</Link>
                <Link to = '/together'>一起写</Link>
                <Link to = '/book'>做书</Link>
                <Link to = '/mine'>我的</Link>
            </div>
        );
    }
}

export default TabBar;