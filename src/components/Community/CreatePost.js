import React, { useState } from 'react';
import {v4 as uuidv4} from 'uuid';
import { useNavigate } from 'react-router-dom';

import {Form, Modal} from 'react-bootstrap';
import { CloseIcon, HeadingL, ButtonGen, ButtonUnable } from '../../Styles/Global';


export default function CreatePost(props) {
    const [post, setPost] = useState({
        postId: uuidv4(),
        author:localStorage.getItem("user"),
        title:"",
        text:"",
        comments:[]
    })

    const [infoElement, setInfoElement] = useState([])
    const [errTitle, setErrTitle] = useState("");
    const [createSucc, setCreateSucc] = useState(false);

    const navigate = useNavigate();
    const handleCancle=()=>{
      navigate("/community")
    }
    //handle share post
    const sharePost=(evt)=>{
        evt.preventDefault();

        if(post.title !== "") {
          fetch("http://localhost:5000/community/add", {
            method:"POST",
            headers: {
              "Content-Type":"application/json",
            },
            body: JSON.stringify(post)
          })
        .then(res=>res.json())
        .catch(err=>console.log('err', err))
        setCreateSucc(true);
        props.closeCreateModal();
        props.showNewPost(post);
        } 
  
    }

    const validation = (e) =>{
      let name = e.target.name;
      if(e.target.value === "") {
        if(name === "title") {
          setErrTitle("Title required")
        } 
      } else {
        setErrTitle("")
      } 
    }

  return (
    <>
      <Modal show={props.showCreate}>
        <Modal.Header className ="border-0">
          <HeadingL>Create a new post</HeadingL> 
          <CloseIcon onClick={()=>{props.closeCreateModal(); setCreateSucc(false)}}/>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" onChange={(e)=>{validation(e)}}>
            <Form.Label>Title</Form.Label><span style={{color: "red"}}>*</span>
                <Form.Control required isInvalid={errTitle !==""} type="text" placeholder="Enter title" value={post.title} name="title"
                  onChange={(e)=>setPost({...post, title:e.target.value})}/>
                {errTitle ? <span style={{color:"red",textAlign:"right",float: "right"}}>{errTitle}</span> : <span></span>}
                <Form.Label className="mt-3">Text</Form.Label>
                <Form.Control as="textarea"  placeholder="What do you want to share?" value={post.text} name="info"
                  onChange={(e)=>setPost({...post, text:e.target.value})}/>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer className ="border-0">
          {post.title !=="" ?
          <ButtonGen variant="primary" type="submit" onClick={sharePost}> Save  </ButtonGen> :
          <ButtonUnable variant="primary" type="submit" >Save</ButtonUnable>           
          }      
          </Modal.Footer> 
      </Modal>

      <Modal show={createSucc}>
        <Modal.Header className ="border-0"> 
            You have now successfully create a post <CloseIcon onClick={()=>{setCreateSucc(false)}}/>
        </Modal.Header> 
      </Modal>
    </>    
  )
}
