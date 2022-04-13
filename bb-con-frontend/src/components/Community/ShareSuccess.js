import React from 'react'
import { useNavigate } from 'react-router-dom';
import { StyledShareSuccess } from '../../Styles/community/ShareSuccess.style';

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
    <StyledShareSuccess>
      <div>
          <h1>Thank you for sharing!</h1>
          <button onClick={backToCom}>Back to community</button>
          <button onClick={shareMore}>Share more</button>
      </div>
    </StyledShareSuccess>
  )
}
