import React, { useEffect, useState } from "react";

export default function JoinAct(props) {

  const [participants, setParticipants] = useState(props.item.participants);
  const [organizer, setOrganizer] = useState(props.item.username);
  //get logined user
  const loginUser = localStorage.getItem("user");
  console.log("participants:", participants, "organizer:", organizer, "loginUser", loginUser )
  
  // check if loginUser already in the participants array
  const findParticipant = participants.find((participant) => {
    return participant === loginUser & participant !== organizer;
  });
  console.log("findParticipant: ",findParticipant);

//handle join activity function
  const join = () => {  
      setParticipants([...participants, loginUser]); 
  };

//handle resign activity function
  const resign = () => {
    let newParticipants = participants.filter(participant=>{return participant !==loginUser})
    setParticipants([newParticipants])
  }

//handle cancle activity function
  const cancleAct= () => {
    
  }

  //fetch data
  useEffect(()=>{
    console.log(participants)
    const body = {participants:participants}
    console.log(body)
    fetch(`http://localhost:5000/activity/item/${props.item.actId}/update`, {
        method:"PUT",
        headers: {
            "Content-Type":"application/json",
        },
        body: JSON.stringify(body)
        })
        .then(res=>res.json())
        .then(data=>{console.log("data", data)})
        .catch((err)=>{console.log("err", err)})
    },[participants]
  )

  if(loginUser===organizer) {
    return <div>
              <p>participants:{participants} </p>
              <button onClick={cancleAct}>Cancle event</button>
            </div>
  } else if (findParticipant) {
    return <div>
              <p>participants:{participants} </p>
              <button onClick={resign}>Resign</button>
            </div>
  } else {
    return <div>
              <p>participants:{participants} </p>
              <button onClick={join}>Join</button>
            </div>
  }
}


