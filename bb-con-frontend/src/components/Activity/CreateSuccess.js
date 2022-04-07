import React from 'react';
import { useNavigate } from 'react-router-dom';

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
    <div>
      <h3>Great! You have create an activity!</h3>
      <button onClick={backToAct}>Join activities</button>
      <button onClick={createMore}>Create more</button>
    </div>
  )
}

