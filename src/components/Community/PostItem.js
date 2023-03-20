import React, { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';
import Comments from './Comments';
import { useNavigate } from 'react-router-dom';
import { Container, Row} from "react-bootstrap";
import { CloseIcon, HeadingL } from '../../Styles/Global';

export default function PostItem() {
    const [item, setItem] = useState([]);
    const params = useParams();
    const url = `http://localhost:5000/community/item/${params.postId}`;

    //get the post with post Id
    useEffect(()=>{
      fetch(url)
        .then(res=>res.json())
        .then(data=>{setItem(data);}  )
    },
    [url])

    //handle cancle
    const navigate = useNavigate()
    const handleCancle=()=>{
      navigate("/home/community")
    }

    
  return (
    <div style={{backgroundColor:"#F5F4F4", margin: "0px",padding: "30px",display: "flex",justifyContent:"center"}}>
          {item.map((i)=>( 
          <Container key={i.postId} style={{ backgroundColor:"white"}}>
            <Row  style={{padding:"40px 0 10px 0"}}> 
            <div><CloseIcon  onClick={handleCancle} style={{position:"relative", left:"40%", bottom:"15%"}}/></div>                                  
              <HeadingL>{i.title}</HeadingL>
              <p className='author'>Author: {i.author}</p>
            </Row>
            <Row style={{padding:"20px 80px", textAlign:"left"}}>
              <p className='text'>{i.text}</p>
            </Row>                       
              <Comments item={i}/>
          </Container>
          ))}   

    </div>
  )
}
