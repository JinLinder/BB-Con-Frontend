import React from 'react'; 
import { useNavigate } from 'react-router-dom';
import { StyledHome } from '../Styles/Home.style';

export default function Home() {
  //navigate to different part of the app
const navigate = useNavigate()

const handleActivity =()=>{
  navigate("/activity");
}

const handleCommunity =()=>{
  console.log("this works");
  navigate("/community");
}

  return (
    <StyledHome>
      <div>
          <h1>Welcome to BB-Con!</h1>
          <div>
            <button onClick={handleActivity}>Activity</button>
            <button onClick={handleCommunity}>Community</button>
          </div>
          
      </div>
    </StyledHome>
  )
}
