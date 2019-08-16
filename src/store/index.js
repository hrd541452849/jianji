import { createStore, combineReducers, compose, applyMiddleware } from 'redux';

//redux的中间件，中间件就是增强dispatch功能的。
// 使用该中间件，可以dispath一个异步函数
// dispath接收一个函数，该函数执行，并且函数中重新接收到dispath方法
import thunk from 'redux-thunk';

// 引入各个reducer模块
import user from './modules/user';

// 合并多个reducer
const reducer = combineReducers({
    user
});






// 使用redux开发者工具
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//创建store仓库
const store = createStore(reducer, composeEnhancers(
    applyMiddleware(thunk)
));

// 输出store
export default store;
