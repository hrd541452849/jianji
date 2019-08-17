//引入工具
import React, {lazy, Suspense} from 'react';
import { Route, Switch, Redirect } from "react-router-dom";

//不能或者是不需要懒加载的组件
import Loding from './pages/common/loding/Loding';
import TabBar from './components/tab-bar/TabBar';

//懒加载引入根组件
const Private = lazy (() => import ('./pages/private/private/Private'));
const Together = lazy (() => import ('./pages/together/together/Together'));
const Book = lazy (() => import ('./pages/book/book/Book'));
const Mine = lazy (() => import ('./pages/mine/mine/Mine'));

// 子组件
// 私密写子组件
const Aside = lazy (() => import ('./pages/private/aside/Aside'));
const Record = lazy (() => import ('./pages/private/record/Record'));
const Search = lazy (() => import ('./pages/private/search/Search'));
const Result = lazy (() => import ('./pages/private/search-result/Result'));

// 一起写子组件
const AddContent = lazy (() => import ('./pages/together/addContent/AddContent'));
const Complete = lazy (() => import ('./pages/together/complete/Complete'));
const Invite = lazy (() => import ('./pages/together/invite/Invite'));
const NewTopic = lazy (() => import ('./pages/together/newTopic/NewTopic'));

// 做书子组件
const AddBook = lazy (() => import ('./pages/book/add-book/AddBook'));
const BookList = lazy (() => import ('./pages/book/book-list/BookList'));
const BookStyle = lazy (() => import ('./pages/book/book-style/BookStyle'));
const DeleteBook = lazy (() => import ('./pages/book/delete-book/DeleteBook'));


// 我的子组件
const EditData = lazy (() => import ('./pages/mine/edit-data/EditData'));
const Message = lazy (() => import ('./pages/mine/message/Message'));
const MyOrder = lazy (() => import ('./pages/mine/my-order/MyOrder'));
const Opinion = lazy (() => import ('./pages/mine/opinion/Opinion'));
const RecycleBin = lazy (() => import ('./pages/mine/recycle-bin/RecycleBin'));
const SetUp = lazy (() => import ('./pages/mine/set-up/SetUp'));
const Mywork = lazy (() => import ('./pages/mine/Mywork/Mywork'));
const Share = lazy (() => import ('./pages/mine/share/share'));

//我的信息子组件
const Comment =lazy(()=> import ('./pages/mine/message/children/comment'))
const Fabulous = lazy(()=>import ('./pages/mine/message/children/Fabulous'))
const News = lazy(()=>import ('./pages/mine/message/children/news'))




function App() {
  return (
    <Suspense fallback={<Loding/>}>
      <div className="App">
        {/* 根页面，Switch提高性能，Redirect重定向路由 */}
        <Switch>
          <Route path = '/' exact render = {() => (<Redirect to = '/private' />)} />
          <Route path = '/private' component = {Private} />
          <Route path = '/together' component = {Together} />
          <Route path = '/book' component = {Book} />
          <Route path = '/mine' component = {Mine} />
        </Switch>


        {/* 子页面 */}
          {/* 私密写 */}
          <Route path = '/private/aside' component = {Aside} />
          <Route path = '/private/record' component = {Record} />
          <Route path = '/private/search' component = {Search} />
          <Route path = '/private/result' component = {Result} />

          {/* 一起写 */}
          <Route path = '/together/addcontent' component = {AddContent} />
          <Route path = '/together/complete' component = {Complete} />
          <Route path = '/together/invite' component = {Invite} />
          <Route path = '/together/newtopic' component = {NewTopic} />

          {/* 做书 */}
          <Route path = '/book/addbook' component = {AddBook} />
          <Route path = '/book/booklist' component = {BookList} />
          <Route path = '/book/bookstyle' component = {BookStyle} />
          <Route path = '/book/deletebook' component = {DeleteBook} />

          {/* 我的 */}
          <Route path = '/mine/editdata' component = {EditData} />

          <Route path = '/mine/message' component = {Message} />
          <Route path = '/mine/message/Comment'  component={Comment}/>
          <Route path = '/mine/message/Fabulous'  component={Fabulous}/>
          <Route path = '/mine/message/News'  component={News}/>

          <Route path = '/mine/myorder' component = {MyOrder} />
          <Route path = '/mine/opinion' component = {Opinion} />
          <Route path = '/mine/recyclebin' component = {RecycleBin} />
          <Route path = '/mine/setup' component = {SetUp} />
          <Route path = '/mine/Mywork' component = {Mywork} />
          <Route path = '/mine/Share' component = {Share} />
        {/* 底部导航栏 */}
        <TabBar />
      </div>
    </Suspense>
  );
}

export default App;
