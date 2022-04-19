import React, { useEffect, useState } from 'react';
import { StyledUserProfile } from '../Styles/UserProfile.style';

export default function UserProfile() {

  const userName = localStorage.getItem("user")
  console.log(userName)

  const [user, setUser] = useState([]);
  const [activities, setActivities] = useState([]); 
  const [posts, setPosts] = useState([]);


  //get user information
  useEffect(()=>{
    fetch(`http://localhost:5000/user/${userName}`)
    .then(res=>res.json())
    .then(data=>{setUser(data);console.log(data)})
    }, []  
  );

  //get users activities
  const getActivities = ()=>{
      fetch(`http://localhost:5000/activity/${userName}`)
      .then(res=>res.json())
      .then(data=>{setActivities(data);console.log(data)})
  }
    

  //get users posts



  return (
    <StyledUserProfile>
      <>
      <div className='container'>
        <h3>UserProfile</h3>
        {user.map((user)=>(
          <div key={user._id}>
            <div className='profileInfo'><h4>Username:</h4>
            <p> {user.username}</p></div>
            <div className='profileInfo'><h4>Baby's age:</h4>
            <p> {user.babyAge}</p></div>
            <div className='profileInfo'><h4>Location:</h4>
            <p> {user.location}</p></div>
            
            <button onClick={getActivities}>My activities</button>
            <button>My posts</button>
          </div>
        ))}
      </div>
      {/* {
        activities.map((act)=>())
      } */}
    </>
    </StyledUserProfile>
  )
}
