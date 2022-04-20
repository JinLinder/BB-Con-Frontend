import React, { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';
import { StyledPostItem } from '../../Styles/community/PostItem.style';
import Comments from './Comments';
import {FaTimes} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

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

    //handle cancle
    const navigate = useNavigate()
    const handleCancle=()=>{
      navigate("/community")
    }

    //handle delete
    // const handleDelete = () => {
    //   fetch(`http://localhost:5000/community/item/delete/${params.postId}`,
    //   {method:"DELETE"})
    //   .then((res)=>{res.json()})
    //   .then(data=>console.log(data))
    //   .catch(err => console.log(err));
    //   console.log("event deleted")
    //   navigate("/community")
    // }
    
  return (
    <StyledPostItem>
      <div>
          {item.map((i)=>( <div key={i.postId}>
            
            <FaTimes 
              style={{cursor: 'pointer', 
                  position:'relative', 
                  left:'120px',
                  top:'45px', 
                  color:'#F04141',
                  background:'grey',
                }}
              onClick={handleCancle}/>
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
