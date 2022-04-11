import React, {useState, } from 'react';
import { useNavigate } from 'react-router-dom'
import {v4 as uuidv4} from 'uuid';
import { StyledCreateAct } from '../../Styles/activity/CreateAct.style';


export default function CreateAct() {
  const [act, setAct] = useState({
    username:localStorage.getItem("user"),
    actId:uuidv4(),
    title:"",
    community:"",
    adress:"",
    time:"", 
    info:"",
    participants:[localStorage.getItem("user")]
  })

  const [infoElement, setInfoElement] = useState([])

  const navigate=useNavigate()

  //handle create
  const handleCreate = (evt)=>{
    evt.preventDefault();
    console.log(act);
    if(act.title !== "" & act.community !=="" & act.time!=="" & act.adress!==""){
      fetch("http://localhost:5000/activity/add", {
      method:"POST",
      headers: {
        "Content-Type":"application/json",
      },
      body: JSON.stringify(act)
    })
    .then(res=>res.json())
    .then(data=>{console.log("data",data);})
    .catch((err)=>{console.log('err', err)});
    navigate("/activity/createSuccess")
    } else if (act.title === "" || act.community ==="" || act.time==="" || act.adress==="") {
      setInfoElement([<p>Please complete the form.</p>])
    }
  }

  return (
    <StyledCreateAct>
      <div className='container'>
        <h1>Create Activity</h1>
      
        <label htmlFor="">Title: </label>
        <input type="text" placeholder='Title' 
          onChange={(e)=>setAct({...act, title:e.target.value})}/>

        <label htmlFor="">Community: </label>
        <select name="community" id=""
          onChange={(e)=>setAct({...act, community :e.target.value})}>
            <option value="" disabled selected>choose your community</option>
            <option value="Täby">Täby</option>
            <option value="Sollentuna">Sollentuna</option>
            <option value="Solna">Solna</option>
        </select>
        <input type="text" placeholder='Adress' 
          onChange={(e)=>setAct({...act, adress:e.target.value})}/>

        <label htmlFor="">Time: </label>
        <input type="datetime-local" 
            onChange={(e)=>setAct({...act, time:e.target.value})}/>

        <label htmlFor="">Activity info</label>
        <textarea name="info" id="" cols="30" rows="10" placeholder='Describe your activity'
          onChange={(e)=>setAct({...act, info:e.target.value})}>
        </textarea>
        <button onClick={handleCreate}>Create</button>
        {infoElement}
      </div>
    </StyledCreateAct>
  )
}
