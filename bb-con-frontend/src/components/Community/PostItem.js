import React, { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';
import { StyledPostItem } from '../../Styles/community/PostItem.style';
import Comments from './Comments';

export default function PostItem() {
    const [item, setItem] = useState([]);
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
    <StyledPostItem>
      <div>
          {item.map((i)=>( <div key={i.postId}>
              <h3>{i.title}</h3>
              <p className='author'>Author:{i.author}</p>
              <p className='text'>{i.text}</p>
              <Comments item={i}/>
          </div>
          ))}   
      </div>
    </StyledPostItem>
  )
}
