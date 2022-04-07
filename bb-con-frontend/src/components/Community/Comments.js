import React from 'react'

import { useState } from 'react'

export default function Comments(props) {
    const user = localStorage.getItem("user")
    const [comment, setComment] = useState({user: user, text:""});

    //handle sendComments
    const sendComments = () =>{
        console.log("comments sent:", comment)
        props.getComment(comment)
    }
  return (
    <div>
        <p>Comments:</p>
            <input type="text" 
                onChange={(e)=>setComment({...comment, text: e.target.value})}/>           
            <button onClick={sendComments}>send</button>
    </div>
  )
}
