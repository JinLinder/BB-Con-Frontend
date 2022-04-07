import React from 'react'

import { useState,useEffect } from 'react'

export default function Comments(props) {
    const user = localStorage.getItem("user")
    const [inputValue, setInputValue] = useState("")
    const [comments, setComment] = useState(props.item.comments);

    //handle sendComments
    const sendComment = () =>{
        console.log("comments sent")
        setComment([...comments, {user: user, text:inputValue}])
    }
    //uppdate comments in backend
    useEffect(()=>{
      console.log("comments:", comments);
      const body = {comments:comments};

      console.log("body:", body);
      fetch(`http://localhost:5000/community/item/update/${props.item.postId}`, {
        method:"PUT",
        headers: {
            "Content-Type":"application/json",
        },
        body: JSON.stringify(body)
        })      
        .then(res=>res.json())
        .then(data=>{console.log("data", data)})
        .catch((err)=>{console.log("err", err)})
      }, [comments]
    )


  return (
    <div>
        <p>Comments:</p>
            <input type="text" 
                onChange={(e)=>setInputValue( e.target.value)}

            />           
            <button onClick={sendComment} >send</button>
    </div>
  )
}
