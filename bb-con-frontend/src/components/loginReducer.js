const loginReducer = (state={loginTaken:false}, action) =>{
    console.log(action);
    if(action.type === 'user login') {
        return state = {loginTaken:true};
    } 
    else if (action.type === 'user logout') {
        return state = {loginTaken:false};
    }
    return state
}

export default loginReducer