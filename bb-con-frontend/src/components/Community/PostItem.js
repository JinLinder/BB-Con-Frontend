import React, { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';
import Comments from './Comments';

export default function PostItem() {
    const [item, setItem] = useState([]);
    const [comments, setcomments] = useState(item.comments)
    
    const params = useParams();
    console.log("postId:", params.postId);
    const url = `http://localhost:5000/community/item/${params.postId}`;

     //get the post with post Id
    useEffect(()=>{
      fetch(url)
        .then(res=>res.json())
        .then(data=>{setItem(data); console.log(data)}  )
    },
    [url])
    // handle comment button callback to get comment from child component
    const pubComment = (comment) => {
      setcomments( [...comments, comment]);
    }

    //uppdate comments in backend
    useEffect(()=>{
      console.log("comments:", comments);
      const body = {comments:comments};

      console.log("body:", body);
      fetch(`http://localhost:5000/community/item/update/${params.postId}`, {
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
        <h3>Ariticle</h3>
        {item.map((i)=>( <div key={i.postId}>
            <p>Author:{i.author}</p>
            <p>Title:{i.title}</p>
            <p>Text:{i.text}</p>
            <Comments getComment = {pubComment}/>
        </div>
        ))
        }
    </div>
  )
}
