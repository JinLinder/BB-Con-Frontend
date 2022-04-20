import React, {useEffect} from 'react';
import { StyledStart } from '../Styles/Start.style';
import { useNavigate } from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux';

export default function Start() {

  const navigate = useNavigate()
  const loginTaken = useSelector(state => state.loginTaken);
  //restrict user from visiting start page once user is loged in. 
  useEffect( () => {
    if(loginTaken===true) {
      navigate("/home")
    }
  }, [])
    return (  
    <StyledStart>
      <div>
        <h1>Baby connection</h1>
        <p> Use BB-Con to meet other parents and make friends.<br/> 
        Here we share feelings, experiences, knowledge and support each other.</p>
        <h2>Join us!</h2>
      </div>
      </StyledStart> 
    )
}
