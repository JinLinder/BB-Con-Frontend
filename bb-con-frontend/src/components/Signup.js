import React from 'react';
import { useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { StyledSignUp } from '../Styles/SignUp.style';
import {FaTimes} from 'react-icons/fa';

export default function Signup() {
  const [signup, setSignup]=useState({
    username:"",
    password:"",
    babyAge:"",
    location:""
  })

  const navigate = useNavigate()
//handle signup
  const handleSignup = (evt)=>{
    evt.preventDefault();
    console.log(signup);
    localStorage.setItem("user", signup.username)
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
      navigate("/home")
  }
//handle cancle
  const handleCancle= ()=>{
      navigate("/")
  }

  return (
    <StyledSignUp>
      <div>
      <FaTimes 
          style={{cursor: 'pointer', 
                  position:'absolute', 
                  right:'20px', 
                  top:'20px', 
                  color:'#F04141'
                }}
                onClick={handleCancle}/>
        <h2>Sign up</h2> 
        <label htmlFor="username">  Username </label> 
          <input type="text" 
            onChange={(e)=>setSignup({...signup, username: e.target.value})}
          />
          <label htmlFor="password">Password </label>
          <input type="text" 
            onChange={(e)=>setSignup({...signup, password: e.target.value})}
          /> 
          <label htmlFor="babyAge">Baby's age </label>
          
          <select name="babyAge" id=""
            onChange={(e)=>setSignup({...signup, babyAge: e.target.value})}
          >
            <option value="" disabled selected>choose your baby's age</option>
            <option value="less than 1">0-1 year</option>
            <option value="1-2">1-2 years</option>
            <option value="more than 2">More than 2 years</option>
          </select>
          
          <label htmlFor="location">Location </label>
          <select name="location" id=""
            onChange={(e)=>setSignup({...signup, location: e.target.value})}
          >
            <option value="" disabled selected>Choose a location</option>
            <option value="Täby">Täby</option>
            <option value="Sollentuna">Sollentuna</option>
            <option value="Solna">Solna</option>
          </select>
          
          <button onClick={handleSignup}>Sign up</button>
          <p>Already a member? <a href="/login">Log in</a></p> 
      </div>
    </StyledSignUp>
  )
}
