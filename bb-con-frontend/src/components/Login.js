import React from 'react';
import { FaTimes } from "@react-icons/all-files/fa/FaTimes";

export default function Login() {
  //cancle
  const cancle =()=>{
    
  }
  return (
    <div>
        <p>logo here</p>
        <h3>Log in <FaTimes onClick={cancle}/></h3>
      
        <label htmlFor="userName">User Name </label> 
        <input type="text" /><br />
        <label htmlFor="passWord">Password </label>
        <input type="text" /> <br />
        <button>Log in</button>
    </div>
  )
}
