const loginReducer = (state={loginTaken:false}, action) =>{
  
    if(action.type === 'user login') {
        return state = {loginTaken:true};
    } 
    else if (action.type === 'user logout') {
        return state = {loginTaken:false};
    } else if (action.type === 'user signup'){
        return state = {loginTaken:true};
    }
    return state
}

export default loginReducer