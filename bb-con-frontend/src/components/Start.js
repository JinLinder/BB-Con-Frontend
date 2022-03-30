import React from 'react';

import Home from './Home';

export default function Start() {

  const user = localStorage.getItem("user")
  console.log(user);
  if(user){ 
    return(
    <>
    <Home/>
    </>
      
      )
    
  } else {
    return (
      <>
     <p>Put logo here</p>
     <p>Intro for the app</p>
     <p>Pictures</p>
     <a href="/login">Login</a> <br />
     <a href="/signup">signup</a>
      </>
    )
  }
}
