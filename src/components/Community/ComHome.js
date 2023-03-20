import React, { useEffect, useState } from 'react'
import PostList from './PostList';
import {FaArrowRight} from 'react-icons/fa';
import { StyledContainer } from '../../Styles/Home.style';
import { Container, Row, Col, Form } from 'react-bootstrap';
import { IconButton } from '../../Styles/Global';
import { PlusLg} from "react-bootstrap-icons";
import CreatePost from "./CreatePost";

export default function ComHome() {
  const [allPosts, setAllPosts] = useState([]);
  const [search, setSearch] = useState({});
  const [outPut, setOutput]= useState([]);
  const [showCreate, setShowCreate] = useState(false);

  const userName = localStorage.getItem("user")


  //fetch all the posts
  useEffect(()=>{
    fetch('http://localhost:5000/community/')
      .then(res=>res.json())
      .then(data=>{ setOutput(data);setAllPosts(data) })
    }, 
  []);

  // handle search
  useEffect(()=>{
    if(search.searchWords!=null){
      const result = allPosts.filter(post=>{
        return post.title.toLowerCase().includes(search.searchWords.toLowerCase()) ||  
        post.text.toLowerCase().includes(search.searchWords.toLowerCase())})
        setOutput(result)
    }
    }, [search]
  )


  const createPost=()=>{
    setShowCreate(true);
  }
  const closeCreateModal = ()=>{
    setShowCreate(false)
  }

  //show my posts
  const myPost = () => {
    const result= allPosts.filter(allPost=>allPost.author===userName);
    setOutput(result)
}
  //show all posts
  const handleAllP = () => {
    setOutput(allPosts)
}
  //show new created post
  const showNewPost = (newPos) =>{
    outPut.push(newPos)
  };

  return (
    <StyledContainer>
        <Container>
          <Row>
            <h3>Welcome to the community!</h3> 
          </Row>
          <Row>
            <Col lg={4} md={8} sm= {12} style={{paddingTop:"20px", textAlign:"right"}} >
              <Form.Group>
                <Form.Control type="text" placeholder='Search' onChange={(e)=>{setSearch({...search, searchWords: e.target.value})}}/>
              </Form.Group>
            </Col>
            <Col lg={8} md={12} sm= {12} style={{paddingTop:"20px", textAlign:"right"}}>
              <IconButton onClick={myPost}>My posts</IconButton>
              <IconButton onClick={createPost}>Share<PlusLg/></IconButton>
            </Col>
          </Row>
          <Row>
            <div className='articleCards'>
              {
                outPut.map((post)=>(
                  <PostList
                    key={post.postId}
                    post={post}/>
                ))
              }
              <IconButton onClick={handleAllP}>All posts <FaArrowRight/></IconButton>      
            </div> 
          </Row>
      </Container>
      <CreatePost showCreate={showCreate} closeCreateModal={closeCreateModal} showNewPost={showNewPost} createPost={createPost}/>
    </StyledContainer>
  )
}
