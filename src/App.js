//引入工具
import React, {lazy, Suspense} from 'react';
import { Route, Switch, Redirect } from "react-router-dom";

//引入组件
// import TabBar from './components/TabBar';
// import Home from './pages/private/home/Home';
// import Together from './pages/together/together/Together';
// import Book from './pages/book/book/Book';
// import Mine from './pages/mine/mine/Mine';

//不能或者是不需要懒加载的组件
import Loding from './pages/common/loding/Loding'

//懒加载引入组件
const TabBar = lazy (() => import ('./components/tab-bar/TabBar')) 
const Home = lazy (() => import ('./pages/private/home/Home')) 
const Together = lazy (() => import ('./pages/together/together/Together')) 
const Book = lazy (() => import ('./pages/book/book/Book')) 
const Mine = lazy (() => import ('./pages/mine/mine/Mine'))



function App() {
  return (
    <Suspense fallback={<Loding/>}>
      <div className="App">
        {/* 根页面，Switch提高性能，Redirect重定向路由 */}
        <Switch>
          <Route path = '/' exact render = {() => (<Redirect to = '/private' />)} />
          <Route path = '/private' component = {Home} />
          <Route path = '/together' component = {Together} />
          <Route path = '/book' component = {Book} />
          <Route path = '/mine' component = {Mine} />
        </Switch>


        {/* 底部导航栏 */}
        <TabBar />
      </div>
    </Suspense>
  );
}

export default App;
