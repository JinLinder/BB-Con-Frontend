import React from 'react';
import Home from './Home';
import { StyledStart } from '../Styles/Start.style';

export default function Start() {

  // const user = localStorage.getItem("user")
  // console.log(user);
  // if(user!=null){ 
  //   return(
  //    <>
  //    <Home/>
  //    </>  
  //   )} else {
    return (  
    <StyledStart>
      <div>

        <a href="/login">Login</a> <br />
        <a href="/signup">signup</a>
        <h3>BB-Con</h3>
        <h1>Baby connection</h1>
        <p> Use BB-Con to meet other parents and make friends.<br/> Here we share feelings, experiences, knowledge and support each other.</p>
        <h2>Join us!</h2>
      </div>
      </StyledStart>
      
    )
  // }
}
