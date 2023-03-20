import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { StyledJoinAct } from "../../Styles/activity/JoinAct.style";
import { ButtonGen } from "../../Styles/Global";

export default function JoinAct(props) {

  const [participants, setParticipants] = useState(props.item.participants);
  const [organizer, setOrganizer] = useState(props.item.username);

  //get logined user
  const loginUser = localStorage.getItem("user");
  const navigate = useNavigate();

  // check if loginUser already in the participants array
  const findParticipant = participants.find((participant) => {
    return participant === loginUser & participant !== organizer;
  });

//handle join activity function
  const join = () => {  
      setParticipants([...participants, loginUser]); 
  };

//handle resign activity function
  const resign = () => {
    let newParticipants = participants.filter(participant=>{return participant !==loginUser})
    setParticipants(newParticipants)
  }

//handle cancle activity function
  const cancleAct= () => {
    fetch(`http://localhost:5000/activity/item/delete/${props.item.actId}`, 
      {method:"DELETE",})
      .then((res)=>{res.json()})
    navigate("/")
  }

  //uppdate participant in backend
  useEffect(()=>{
    const body = {participants:participants}
    fetch(`http://localhost:5000/activity/item/update/${props.item.actId}`, {
        method:"PUT",
        headers: {
            "Content-Type":"application/json",
        },
        body: JSON.stringify(body)
        })
        .then(res=>res.json())
        .catch((err)=>{console.log("err", err)})
    },[participants]
  )

  //depends on who is the user have different button
  if(loginUser===organizer) {
    return <StyledJoinAct> <div>
              <div className="joiner"><strong>Participants:</strong>{participants.map((participant, index)=>(<p key={index} className="part">{participant}</p>))} </div>
              <ButtonGen style={{margin:"20px 0px", width:"150px"}} onClick={cancleAct}>Cancle event</ButtonGen>
            </div></StyledJoinAct>
  } else if (findParticipant) {
    return <StyledJoinAct><div>
              <div className="joiner"><strong>Participants:</strong>{participants.map((participant, index)=>(<p key={index} className="part">{participant}</p>))} </div>
              <ButtonGen  style={{margin:"20px 0px"}} onClick={resign}>Resign</ButtonGen>
            </div></StyledJoinAct>
  } else {
    return <StyledJoinAct><div>
              <div className="joiner"><strong>Participants:</strong>{participants.map((participant, index)=>(<p key={index} className="part">{participant}</p>))} </div>
              <ButtonGen  style={{margin:"20px 0px"}} onClick={join}>Join</ButtonGen>
            </div></StyledJoinAct>
  }
}


