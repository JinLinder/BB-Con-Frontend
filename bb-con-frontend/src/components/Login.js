import React from 'react'
import { useState } from 'react'
import HomeAfterLogin from './HomeAfterLogin'
const axios = require('axios')

export default function Login() {

  const [login, setLogin] = useState({username:"", password:""})
  
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
        console.log("if works")
        
        // return (
        //   <>
        //   <HomeAfterLogin/>
        //   </>
        // )
      }
    })
    .catch((err)=>{
      console.log('err', err)
    })
  };

  return (
    <div>
        <p>Log in here</p>
        <label htmlFor="username">User Name </label> 
        <input type="text" 
          value={login.username}
          onChange={(e)=>setLogin({...login, username: e.target.value})}
        /><br />
        <label htmlFor="password">Password</label>
        <input type="text" 
          value={login.password}
          onChange={(e)=>setLogin({...login, password: e.target.value})}
        /> <br />
        <button onClick={handleLogin}>Log in</button>
    </div>
  )
}
