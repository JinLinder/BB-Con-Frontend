import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

export default function ComHome() {
  //create new post
  const navigate=useNavigate()
  const createPost=()=>{
    navigate("/community/add")
  }
  return (
    <div>
      <h1>Community Home</h1>
      <input type="text" placeholder='search'/> <br /><br />

      <button onClick={createPost} >Share something</button>

    </div>
  )
}
