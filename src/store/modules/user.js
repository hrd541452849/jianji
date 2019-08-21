
import api from '../../utils/api'
import {post} from '../../utils/request'

// types
const SET_LOGIN_STATUS = 'user/set_login_status';
const TOGGLE_ISPRIVATE = 'user/toggle_isPrivate';

// state
const initialState = {
    isPrivate: true,
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
        case TOGGLE_ISPRIVATE:
            return {
                ...state,
                isPrivate: action.value
            };
        default:
            return state;
    }
};


// 同步action

// 设置登录状态
export const setLoginStatusAction = (value)=>({
    type: SET_LOGIN_STATUS,
    value
});

// 反转
export const toggleIsPrivate = (value)=>({
    type: TOGGLE_ISPRIVATE,
    value
})



// 异步actions 
// 发送验证码
export const requestSendCodeAction = (emails) => async (dispatch) => {
    try {
        // 异步操作,发送请求
        console.log('开始请求')
        await post(api.SEND_CODE_API, {
            emails
        });
        console.log('发送成功')
        // // 设置显示的信息
        // let time = 60;
        // //倒计时
        // dispatch(getChangeTipAction((time--)+'s'));
        // let timer = setInterval(() => {
            
        //     dispatch(getChangeTipAction((time--)+'s'));

        //     if(time < 0){
        //         //倒计时完成，重新发送
        //         clearInterval(timer);
        //         dispatch(getChangeTipAction('重新发送'));
        //     }
            
        // }, 1000);
    } catch (error) {
        // dispatch(getChangeTipAction('重新发送'));
        console.log('发送失败')
    }    
}