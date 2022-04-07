import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function ShareSuccess() {
 const navigate = useNavigate();

    // handle backToAct function
  const  backToCom = () => {
    navigate("/community")
  }

  // handle createMore function
  const  shareMore = () => {
    navigate("/community/add")
  }

  return (
    <div>
        <h3>Thank you for sharing!</h3>
        <button onClick={backToCom}>Back to community</button>
        <button onClick={shareMore}>Share more</button>
    </div>
  )
}
