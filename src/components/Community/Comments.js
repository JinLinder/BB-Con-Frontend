import React from 'react';
import { useState,useEffect } from 'react';
import { FaThumbsUp, FaComment } from 'react-icons/fa'
import { Container, Row, Col, Form } from "react-bootstrap";
import { ButtonGen } from '../../Styles/Global';
import styled from "styled-components";

export default function Comments(props) {

    const RowComments = styled(Col)`
    border-radius:25px;
    background: ${({theme})=>theme.light.primColors.lightGray};
    display: inline-block;
    padding: 5px;
    `;

    const user = localStorage.getItem("user");
    const [inputValue, setInputValue] = useState("");
    const [comments, setComment] = useState(props.item.comments);
    const [likes, setLikes] = useState(props.item.likes)
    const [likeElement, setLikeElement] = useState([])
    const result = likes.find(like=>{return like===user});

    const likesNummber = likes.length
    
    //check if loged in user already like the post. Blue color if already like else grey
    useEffect(()=>{
      if(result){
        setLikeElement([<FaThumbsUp onClick={unLike} style = {{cursor: 'pointer',color:"#F26868", fontSize:"20px"}}/>]);
        
      } else if (!result) {
        setLikeElement([ <FaThumbsUp onClick={like} style = {{cursor: 'pointer',color:"grey", fontSize:"20px"}}/>]);
        
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
        setComment([...comments, {user: user, text:inputValue}]);
    }

    //uppdate likes in backend
    useEffect(()=>{
      const body = {likes: likes};
      fetch(`http://localhost:5000/community/item/update/${props.item.postId}`, {
        method:"PUT",
        headers: {
            "Content-Type":"application/json",
        },
        body: JSON.stringify(body)
        })      
        .then(res=>res.json())
        .catch((err)=>{console.log("err", err)})
      }, [likes]
    )
    
    //uppdate comments in backend
    useEffect(()=>{
      const body = {comments:comments};
      fetch(`http://localhost:5000/community/item/update/${props.item.postId}`, {
        method:"PUT",
        headers: {
            "Content-Type":"application/json",
        },
        body: JSON.stringify(body)
        })      
        .then(res=>res.json())
        .catch(err=>console.log("err", err))
      }, [comments]
    )
    

  return (
    <Container >
      <div style={{display:"flex", justifyContent:"center"}}>
        <Row style={{width:"85%", borderBottom:"1px solid rgb(212, 212, 212)", borderTop:"1px solid rgb(212, 212, 212)",
          justifyContent:"center"}}>
          <Col lg={4} md={4} sm={4}>
          <p>{likeElement} {likesNummber} </p>
          </Col>
          <Col lg={4} sm={4}>
          <a href="#comment" style={{color:"#5B3442", textDecoration:"none"}}>comment</a> <FaComment style={{color:'grey', fontSize: "20px"}}/>
        </Col>   
        </Row>
      </div>
      <Row style={{padding:"20px 62px"}}>
        <Col lg={6} md={8} sm={12} >
        <Form.Control type="text" placeholder='Write a comment' onChange={(e)=>setInputValue( e.target.value)}></Form.Control>
        </Col>
        <Col lg={6} md={4} sm={12} style={{textAlign:"left"}}>
        <ButtonGen onClick={sendComment}>Send</ButtonGen>
        </Col> 
      </Row>
        {comments.map((com, index)=>(

              <Row key={index} style={{padding:"5px 80px"}}>         
                <RowComments lg={2} md={2} sm={2}>{com.user}: </RowComments>
                <RowComments lg={10} md={10} sm={10} style={{ textAlign:"left"}}> {com.text}</RowComments>
              </Row>
              ))
            }
    </Container>
  )
}