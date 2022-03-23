import React, { useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom'
import ActItem from './ActItem'



export default function ActHome() {

  const [allActs, setAllActs] = useState([])
  

  //fetch all the activities
  useEffect(()=>{
    fetch('http://localhost:5000/activity/')
    .then(res=>res.json())
    .then(data=>console.log(data))
  })

  const navigate=useNavigate()

  const handleCreateA =()=>{
    navigate("/activity/add")
  }

  return (
    

    <div>
        <select name="location" id="">
            <option value="" disabled selected>Select a community</option>
            <option value="">Täby</option>
            <option value="">Sollentuna</option>
            <option value="">Solna</option>
        </select>
        <input type="date" />
        <button>Search</button> <br />
        <ActItem/>
        <button onClick={handleCreateA}>Create activity</button>
        {/* <ActivityItem/> */}
        {/* <CreateActivity/> */}
    </div>
  )
}

