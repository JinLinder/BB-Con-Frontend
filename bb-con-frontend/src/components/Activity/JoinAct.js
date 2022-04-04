import React, { useEffect, useState } from "react";

export default function JoinAct(props) {
    console.log(props.item.participants)
  const [participants, setParticipants] = useState(props.item.participants);
  const user = localStorage.getItem("user");

  // check if user already in the participants array
  const findParticipant = participants.find((participant) => {
    return participant === user;
  });
  console.log("findParticipant: ",findParticipant);

  //handle join activity function

  const joinAct = () => {
    
    if (findParticipant) {
      console.log("user already participant");
    } else {
      setParticipants([...participants, user]); 
    }
  };
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

  if (user === findParticipant) {
    return <><p>participants:{participants} </p></>;
  } else {
    return (
      <div>
        <button onClick={joinAct}>Join</button>
      </div>
    );
  }
}


