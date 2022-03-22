import React from 'react'
import { useNavigate } from 'react-router-dom'
import ActivityItem from './ActivityItem'
import CreateActivity from './CreateActivity'


export default function ActivityHome() {
  const navigate=useNavigate()

  const handleCreateA =()=>{
    navigate("/createActivity")
  }
  return (
    

    <div>
        <select name="location" id="">
            <option value="DEFAULT" disabled>Select a community</option>
            <option value="">Täby</option>
            <option value="">Sollentuna</option>
            <option value="">Solna</option>
        </select>
        <input type="date" />
        
        <button onClick={handleCreateA}>Create activity</button>
        {/* <ActivityItem/> */}
        {/* <CreateActivity/> */}
    </div>
  )
}

