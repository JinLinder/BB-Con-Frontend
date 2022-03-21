import React from 'react'
import { useState} from 'react'

export default function Signup() {
  const [signup, setSignup]=useState({
    username:"",
    password:"",
    babyAge:"",
    location:""
  })

const handleSignup = (evt)=>{
  evt.preventDefault();
  console.log(signup);

  fetch("http://localhost:5000/signup", {
    method:"POST",
    headers: {
      "Content-Type":"application/json",
    },
    body: JSON.stringify(signup)
  })
  .then(res=>res.json())
    .then(data=>{
      console.log("data",data);
    })
    .catch((err)=>{
      console.log('err', err)
    })
}
  return (
    <div>
      <h3>Sign up</h3>
      <label htmlFor="username">Username </label> 
        <input type="text" 
          onChange={(e)=>setSignup({...signup, username: e.target.value})}
        /><br />
        <label htmlFor="password">Password </label>
        <input type="text" 
          onChange={(e)=>setSignup({...signup, password: e.target.value})}
        /> <br />
        <label htmlFor="babyAge">Baby's age </label>
        <select name="babyAge" id=""
          onChange={(e)=>setSignup({...signup, babyAge: e.target.value})}
        >
          <option value="choose your baby's age"></option>
          <option value="lessThan1">0-1</option>
          <option value="1-2">1-2</option>
          <option value="More than 2">More than 2</option>
        </select><br />
        <label htmlFor="location">Location </label>
        <select name="location" id=""
          onChange={(e)=>setSignup({...signup, location: e.target.value})}
        >
          <option value="Choose a location"></option>
          <option value="Täby">Täby</option>
          <option value="Sollentuna">Sollentuna</option>
          <option value="Solna">Solna</option>
        </select>
        <br />
        <button onClick={handleSignup}>Sign up</button>

    </div>
  )
}
