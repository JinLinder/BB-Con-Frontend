import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {StyledLogin} from './Styles/Login.style'

export default function Login() {

  const [login, setLogin] = useState({username:"", password:""})
  const navigate = useNavigate()

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
        navigate("/home")
      }
    })
    .catch((err)=>{
      console.log('err', err)
    })
  };
//handle cancle button
  const handleCancle=()=>{
    navigate("/")
  }

  return (
    <StyledLogin>
    {/* <div class="container"> */}
      <div>
        <h2>Log in </h2>
        <label htmlFor="username"> <strong>User Name</strong>  </label>
        <input type="text" 
          value={login.username}
          onChange={(e)=>setLogin({...login, username: e.target.value})}
        />
        <label htmlFor="password"> <strong>Password</strong> </label>
        <input type="text" 
          value={login.password}
          onChange={(e)=>setLogin({...login, password: e.target.value})}
        />
        
        <button class="login" onClick={handleLogin}>Log in</button><button class="cancle" onClick={handleCancle}>Cancle</button>
        </div>
    {/* </div> */}
    </StyledLogin>
  )
}
