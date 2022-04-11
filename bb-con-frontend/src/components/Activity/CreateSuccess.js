import React from 'react';
import { useNavigate } from 'react-router-dom';
import { StyledCreateSuccess } from '../../Styles/activity/CreateSuccess.style';

export default function CreateSuccess() {
  const navigate = useNavigate();

  // handle backToAct function
  const  backToAct = () => {
    navigate("/activity")
  }

  // handle createMore function
  const  createMore = () => {
    navigate("/activity/add")
  }

  return (
    <StyledCreateSuccess>
      <div>
        <h1>Great! You have created an activity!</h1>
        <button onClick={backToAct}>Join activities</button>
        <button onClick={createMore}>Create more</button>
      </div>
    </StyledCreateSuccess>
  )
}

