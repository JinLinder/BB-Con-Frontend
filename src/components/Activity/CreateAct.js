import React, {useState, } from 'react';
import {v4 as uuidv4} from 'uuid';
import {Form, Modal} from 'react-bootstrap';
import { CloseIcon, HeadingL, ButtonGen, ButtonUnable } from '../../Styles/Global';


export default function CreateAct(props) {
  const [act, setAct] = useState({
    username:localStorage.getItem("user"),
    actId:uuidv4(),
    title:"",
    community:"",
    adress:"",
    time:"", 
    info:"",
    participants:[localStorage.getItem("user")]
  });


  const [errTitle, setErrTitle] = useState("");
  const [errCom, setErrCom] = useState("");
  const [errAdress, setErrAdress] = useState("");
  const [errTime, setErrTime] = useState("");
  const [createSucc, setCreateSucc] = useState(false);

  //handle create activity
  const handleCreate = (evt)=>{
    evt.preventDefault();
    if(act.title !== "" & act.community !=="" & act.time!=="" & act.adress!==""){
      fetch("http://localhost:5000/activity/add", {
      method:"POST",
      headers: {
        "Content-Type":"application/json",
      },
      body: JSON.stringify(act)
    })
    .then(res=>res.json())
    .catch((err)=>{console.log('err', err)});
    setAct({
      username:localStorage.getItem("user"),
      actId:uuidv4(),
      title:"",
      community:"",
      adress:"",
      time:"", 
      info:"",
      participants:[localStorage.getItem("user")]
    })
    setCreateSucc(true);
    props.closeCreateModal();
    props.showNewAct(act);
    } 
  }


// validation
  const validation = (e) =>{
    let name = e.target.name;
    if(e.target.value === "") {
      if(name === "title") {
        setErrTitle("Title required")
      } else if (name === "community") {
        setErrCom("Community required")
      }  else if (name === "adress") {
        setErrAdress("Adress required")
      } else if (name === "time") {
        setErrTime("Time required")
      } 
    }  else {
      setErrTitle("")
      setErrCom("")
      setErrAdress("")
      setErrTime("")
    }
  }
  return (  
    <>
      <Modal show={props.showCreate} >
        <Modal.Header className ="border-0">
        <HeadingL>Create an activity</HeadingL> <CloseIcon onClick={()=>{props.closeCreateModal();setCreateSucc(false)}}/>
      </Modal.Header>
      <Modal.Body>           
          <Form>
            <Form.Group className="mb-3" onChange={(e)=>{validation(e)}} >
              <Form.Label>Title</Form.Label><span style={{color: "red"}}>*</span>
              <Form.Control required isInvalid={errTitle !==""} type="username" placeholder="Enter title" value={act.title} name="title"
                onChange={(e)=>setAct({...act, title:e.target.value})}/>
              {errTitle ? <span style={{color:"red",textAlign:"right",float: "right"}}>{errTitle}</span> : <span></span>}
              <Form.Label className="mt-3">Community </Form.Label><span style={{color: "red"}}>*</span>
              <Form.Select required isInvalid={errCom !==""} type="location"  placeholder="Choose community" value={act.community} name="community"
                onChange={(e)=>setAct({...act, community :e.target.value})}>
                <option value=""  >Choose a location</option>
                <option value="Stockholm">Stockholm</option>
                <option value="Uppsala">Uppsala</option>
                <option value="Göteborg">Göteborg</option>
                <option value="Malmö">Malmö</option>
              </Form.Select>
              {errCom ? <span style={{color:"red",textAlign:"right",float: "right"}}>{errCom}</span> : <span></span>}

              <Form.Label className="mt-3">Adress</Form.Label><span style={{color: "red"}}>*</span>
              <Form.Control required isInvalid={errAdress !==""} type="adress" placeholder="Enter adress" value={act.adress} name="adress"
                onChange={(e)=>setAct({...act, adress:e.target.value})}/>
              {errAdress ? <span style={{color:"red",textAlign:"right",float: "right"}}>{errAdress}</span> : <span></span>}
              
              <Form.Label className="mt-3">Time</Form.Label><span style={{color: "red"}}>*</span>
              <Form.Control required isInvalid={errTime !==""} type="date" placeholder="Enter time" value={act.time} name="time"
                onChange={(e)=>setAct({...act, time:e.target.value})}/>
              {errTime ? <span style={{color:"red",textAlign:"right",float: "right"}}>{errTime}</span> : <span></span>}
              
              <Form.Label className="mt-3">Activity Info</Form.Label>
              <Form.Control as="textarea"  placeholder="Describe your activity" value={act.info} name="info"
                onChange={(e)=>setAct({...act, info:e.target.value})}/>
            </Form.Group>      
          </Form>
        </Modal.Body>
        
        <Modal.Footer className ="border-0">
        {act.title !=="" && act.community !=="" && act.adress !=="" && act.time !==""?
        <ButtonGen variant="primary" type="submit" onClick={handleCreate}> Create  </ButtonGen> :
        <ButtonUnable variant="primary" type="submit" >Create</ButtonUnable>           
        }      
        </Modal.Footer> 
      </Modal>

      <Modal show={createSucc}>
        <Modal.Header className ="border-0"> 
            You have now successfully create an activity <CloseIcon onClick={()=>{setCreateSucc(false)}}/>
        </Modal.Header> 
      </Modal>
    </> 
    
  )
}


