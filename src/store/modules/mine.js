// state
const initialState = {
    data:null
};

// reducer
export default (state = initialState, action)=>{
    console.log(state,action)
    if(action.type ==='set_data'){
        return {
            ...state,
            data:action.value
        }
    }
    return state;
}; 
//console.log(state,action)