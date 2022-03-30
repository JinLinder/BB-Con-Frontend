import React, { useEffect, useState } from "react";

export default function JoinAct(props) {
  console.log(props.item.username);
  const [participants, setParticipants] = useState([props.item.username]);
  const user = localStorage.getItem("user");

  // check if user already in the participants array
  const findUser = participants.find((participant) => {
    return participant === user;
  });
  console.log(findUser);

  //handle join activity function

  const joinAct = () => {
    
    if (findUser) {
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

  if (props.item.username === user) {
    return <></>;
  } else {
    return (
      <div>
        <button onClick={joinAct}>Join</button>
      </div>
    );
  }
}


