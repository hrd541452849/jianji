//引入工具
import React from 'react';
import { Route } from "react-router-dom";

//引入组件
import TabBar from './components/TabBar';
import Home from './pages/private/home/Home';
import Together from './pages/together/together/Together';
import Book from './pages/book/book/Book';
import Mine from './pages/mine/mine/Mine';


function App() {
  return (
      <div className="App">
        <Route path = '/private' component = {Home} />
        <Route path = '/together' component = {Together} />
        <Route path = '/book' component = {Book} />
        <Route path = '/mine' component = {Mine} />
        <TabBar />
      </div>
  );
}

export default App;
