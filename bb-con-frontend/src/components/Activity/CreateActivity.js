import React from 'react'
import {useState} from 'react'

export default function CreateActivity() {
  const [activity, setActivity] = useState({
    title:"",
    community:"",
    adress:"",
    time:"", 
    info:""
  })

  //handle create
  const handleCreate = (evt)=>{
    evt.preventDefault();
    console.log(activity);

    fetch("http://localhost:5000/activity/add", {
      method:"POST",
      headers: {
        "Content-Type":"application/json",
      },
      body: JSON.stringify(activity)
    })
    .then(res=>res.json())
    .then(data=>{
      console.log("data",data);
    })
    .catch((err)=>{
      console.log('err', err)
    })
  }

  return (
    <div>
      <h1>Create Activity</h1>
      <label htmlFor="">Title:</label>
      <input type="text" placeholder='Title of the activity' 
        onChange={(e)=>setActivity({...activity, title:e.target.value})}/><br />
      <label htmlFor="">community</label>

      <select name="community" id=""
        onChange={(e)=>setActivity({...activity, community:e.target.value})}>
            <option value="DEFAULT" disabled>Select a community</option>
            <option value="">Täby</option>
            <option value="">Sollentuna</option>
            <option value="">Solna</option>
        </select>

        <input type="text" placeholder='adress' 
        onChange={(e)=>setActivity({...activity, adress:e.target.value})}/><br />
        <input type="date" 
          onChange={(e)=>setActivity({...activity, time:e.target.value})}/><br />
        <label htmlFor="">Activity info</label>
      <textarea name="info" id="" cols="30" rows="10" placeholder='Write activity info here'
        onChange={(e)=>setActivity({...activity, info:e.target.value})}></textarea> <br />
      <button onClick={handleCreate}>Create</button>

    </div>
  )
}
