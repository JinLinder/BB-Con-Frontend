import React, { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';
import Comments from './Comments';

export default function PostItem() {
    const [item, setItem] = useState([]);
    // const [comments, setcomments] = useState(item.comments)
    
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
    // const pubComment = (comment) => {
    //   setcomments( [...comments, comment]);
    // }

    
  return (
    <div>
        <h3>Ariticle</h3>
        {item.map((i)=>( <div key={i.postId}>
            <p>Author:{i.author}</p>
            <p>Title:{i.title}</p>
            <p>Text:{i.text}</p>
            <Comments item={i}
            // getComment = {pubComment}
            />
        </div>
        ))
        }
    </div>
  )
}
