import React, { useState } from 'react';
import {v4 as uuidv4} from 'uuid';
import { useNavigate } from 'react-router-dom';

export default function CreatePost() {
    const [post, setPost] = useState({
        postId: uuidv4(),
        author:localStorage.getItem("user"),
        title:"",
        text:"",
        comments:[]
    })

    const [infoElement, setInfoElement] = useState([])

    const navigate = useNavigate();

    //handle share post
    const sharePost=(evt)=>{
        evt.preventDefault();
        console.log(post);

        if(post.title !== "" & post.text !=="") {
          fetch("http://localhost:5000/community/add", {
            method:"POST",
            headers: {
              "Content-Type":"application/json",
            },
            body: JSON.stringify(post)
          })
        .then(res=>res.json())
        .then(data=>{console.log("data", data)})
        .catch((err)=>{console.log('err', err)})

        navigate("/community/shareSuccess")
        } 
        else if (post.title === "" || post.text ==="") 
        {
          setInfoElement([<p>Please fyll in title and info.</p>])
        }    
    }
  return (
    <div><p>Create a new post</p>
        <input onChange={(e)=>{setPost({...post, title:e.target.value})}} type="text" placeholder='title' /><br />
        <textarea onChange={(e)=>{setPost({...post, text:e.target.value})}} name="" id="" cols="30" rows="10" placeholder='What do you want to share?'></textarea><br />   
        <button onClick={sharePost}>Share</button>
        {infoElement}
    </div>
  )
}
