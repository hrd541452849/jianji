
// types
const SET_LOGIN_STATUS = 'user/set_login_status';

// state
const initialState = {
    isLogin: false,
    userInfo: {}
};

// reducer
export default (state = initialState, action)=>{
    switch (action.type) {
        case SET_LOGIN_STATUS:
            return {
                ...state,
                isLogin: action.value
            };
        default:
            return state;
    }
};


// 同步action

// 设置登录状态
const setLoginStatusAction = (value)=>({
    type: SET_LOGIN_STATUS,
    value
})