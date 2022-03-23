import React from 'react'; 
import { useNavigate } from 'react-router-dom';


export default function Home() {
const navigate = useNavigate()


const handleActivity =()=>{
  console.log("this works");
  navigate("/activity");
}

const handleCommunity =()=>{
  console.log("this works");
  navigate("/community");

}

  return (
    <div>
        <p>logo here</p>
        <p>Title here</p>
        <p>lite text?</p>
        <button onClick={handleActivity}>Activity</button>
        <button onClick={handleCommunity}>Community</button>
    </div>
  )
}
