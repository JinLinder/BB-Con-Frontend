import React from 'react';
import { useState,useEffect } from 'react';


import { FaThumbsUp, FaComment } from 'react-icons/fa'
export default function Comments(props) {
    const user = localStorage.getItem("user");
    const [inputValue, setInputValue] = useState("");
    const [comments, setComment] = useState(props.item.comments);
    const [likes, setLikes] = useState(props.item.likes)
    // const [clicked, setClicked] = useState(false)
    const [likeElement, setLikeElement] = useState([])
    const result = likes.find(like=>{return like===user});
    const likesNummber = likes.length
    console.log(result)
    
    useEffect(()=>{
      if(result){
        setLikeElement([<FaThumbsUp onClick={unLike} style = {{color:"blue"}}/>]);
        
      } else if (!result) {
        setLikeElement([ <FaThumbsUp onClick={like} style = {{color:"grey"}}/>]);
        
      }
    }, [likes])

    //handle unlike
    const unLike = ()=>{
      const filterResult = likes.filter(like=>{return like!==user});
      setLikes(filterResult);
    }
    //handle like
    const like = ()=>{
      setLikes([...likes, user]);
    }

    //handle sendComments
    const sendComment = () =>{
        console.log("comments sent");
        setComment([...comments, {user: user, text:inputValue}]);
    }

    //uppdate likes in backend
    useEffect(()=>{
      console.log("comments:", likes);
      const body = {likes: likes};

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
      }, [likes]
    )
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
            <div>{likeElement} {likesNummber}   <a href="#comment">comment</a> <FaComment/></div> 
           
            <p>Comments:{comments.map((com)=>(<div><p>user: {com.user}</p>
            <p>text: {com.text}</p></div>))}</p>
            <input type="text" 
                onChange={(e)=>setInputValue( e.target.value)}
            />           
            <button id="comment" onClick={sendComment} >send</button>
    </div>
  )
}