import React, { useEffect, useState } from 'react';
import { CloseIcon } from '../Styles/Global';
import { StyledHome } from '../Styles/Home.style';
import styled from "styled-components";
import { useNavigate } from 'react-router-dom';
import {StyledUserProfile} from '../Styles/UserProfile.style'

export default function UserProfile() {
  const infoDiv = styled.div`
    padding: 20px 0px;
  `;
   
  const userName = localStorage.getItem("user")

  const [user, setUser] = useState([]);
  const navigate = useNavigate();
  const handleCancle= ()=>{
    navigate("/")
}

  //get user information
  useEffect(()=>{
    fetch(`http://localhost:5000/user/${userName}`)
    .then(res=>res.json())
    .then(data=>{setUser(data)})
    }, []  
  );

  return (
    <StyledHome>
      <StyledUserProfile>  
        <CloseIcon style={{position:"relative", left:"40%"}} onClick={handleCancle}/>
        <h3>My profile</h3> 
        {user.map((user)=>(
          <div key={user._id} style={{ padding:"20px 0px 0px"}}>
            <h5 style={{padding:"10px 0px"}}>Username: {user.username}</h5>
            <h5 style={{padding:"10px 0px"}}>Baby's age: {user.babyAge}</h5>       
            <h5 style={{padding:"10px 0px"}}>Location: {user.location}</h5>
          </div>
        ))}
      </StyledUserProfile>
    </StyledHome>
  )
}
