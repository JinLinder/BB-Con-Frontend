import React from 'react'
import {useState} from 'react'


export default function CreateAct() {
  const [act, setAct] = useState({
    title:"",
    community:"",
    adress:"",
    time:"", 
    info:""
  })

  //handle create
  const handleCreate = (evt)=>{
    evt.preventDefault();
    console.log(act);

    fetch("http://localhost:5000/activity/add", {
      method:"POST",
      headers: {
        "Content-Type":"application/json",
      },
      body: JSON.stringify(act)
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
        onChange={(e)=>setAct({...act, title:e.target.value})}/><br />
      <label htmlFor="">community</label>

      <select name="community" id=""
        onChange={(e)=>setAct({...act, community :e.target.value})}>
            <option value="" disabled selected>choose your community</option>
            <option value="Täby">Täby</option>
            <option value="Sollentuna">Sollentuna</option>
            <option value="Solna">Solna</option>
        </select>

        <input type="text" placeholder='adress' 
        onChange={(e)=>setAct({...act, adress:e.target.value})}/><br />
        <input type="date" 
          onChange={(e)=>setAct({...act, time:e.target.value})}/><br />
        <label htmlFor="">Activity info</label>
      <textarea name="info" id="" cols="30" rows="10" placeholder='Write activity info here'
        onChange={(e)=>setAct({...act, info:e.target.value})}></textarea> <br />
      <button onClick={handleCreate}>Create</button>

    </div>
  )
}
