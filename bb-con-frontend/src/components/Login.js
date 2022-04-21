import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'
import {StyledLogin} from '../Styles/Login.style'
import {FaTimes} from 'react-icons/fa';
import {useSelector, useDispatch} from 'react-redux'

export default function Login() {

  //get loginTaken state from redux
  const loginTaken = useSelector(state => state.loginTaken);
  console.log(loginTaken);

  const [login, setLogin] = useState({username:"", password:""})
  const dispatch = useDispatch()
  const navigate = useNavigate()

//restrict user from visiting login routes once user is loged in. 
  useEffect( () => {
    if(loginTaken===true) {
      navigate("/home")
    }
  }, [])

//handle login
  const handleLogin = (evt)=>{
    evt.preventDefault();
    console.log(login)
  
    fetch("http://localhost:5000/login/", {
      method:"POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(login)
    })
    .then(res=>res.json())
    .then(data=>{
      console.log("data",data);
      if(data.message===`User: ${login.username} loged in.`) {
        console.log("if works");
        localStorage.setItem("user", login.username)         
        dispatch({type: 'user login'})
        navigate("/home")
      }
    })
    .catch((err)=>{console.log('err', err)})
  };
//handle cancle button
  const handleCancle=()=>{
    navigate("/")
  }

  return (
    <StyledLogin>
      <div>
        <FaTimes 
          style={{cursor: 'pointer', 
                  position:'relative', 
                  left:'120px',
                  top:'20px', 
                  color:'#F04141',
                  background:'grey',
                }}
          onClick={handleCancle}/>
        <h2>Log in </h2>
        <label htmlFor="username"> Username  </label>
        <input type="text" 
          value={login.username}
          onChange={(e)=>setLogin({...login, username: e.target.value})}
        />
        <label htmlFor="password"> Password </label>
        <input type="password" 
          value={login.password}
          onChange={(e)=>setLogin({...login, password: e.target.value})}
        />
        <button onClick={handleLogin}>Log in</button>
        <p>Not a member yet? <a href="/signup">Sign up</a></p> 
        </div>
    </StyledLogin>
  )
}
