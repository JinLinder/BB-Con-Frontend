import React, { useEffect, useState } from 'react';

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
    <div>
      <h3>UserProfile</h3>
      {user.map((user)=>(
        <div key={user._id}>
          <p>Username: {user.username}</p>
          <p>Baby's age: {user.babyAge}</p>
          <p>Location: {user.location}</p>
          <button onClick={getActivities}>My activities</button>
          <button>My posts</button>
        </div>
      ))}
      
    </div>
  )
}
